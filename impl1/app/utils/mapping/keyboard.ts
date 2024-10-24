import type { IKeyboardDTO } from '~/types/dtos/IKeyboardDTO'
import type { IKeyboardFixedKeyDTO } from '~/types/dtos/IKeyboardFixedKeyDTO'
import type { IKeyboardLayoutDTO } from '~/types/dtos/IKeyboardLayoutDTO'
import { type IKeyboard, type IKeyboardButton, type IKeyboardElement, KBButtonType, KBElementType } from '~/types/interfaces/IKeyboard'

export function mapKeyboard(keyboardDTO: IKeyboardDTO | undefined, layoutDTO: IKeyboardLayoutDTO): IKeyboard {
  if (!keyboardDTO) {
    return {
      columns: 0,
      rows: 0,
      elements: [],
    }
  }
  return {
    columns: keyboardDTO?.buttonsAcross,
    rows: keyboardDTO?.buttonsDown,
    elements: mapKeyboardElements(keyboardDTO, layoutDTO),
  }
}

export function mapKeyboardElements(keyboardDTO: IKeyboardDTO, layoutDTO: IKeyboardLayoutDTO): IKeyboardElement[] {
  const columns = keyboardDTO.buttonsAcross
  const rows = keyboardDTO.buttonsDown
  const elements = [] as IKeyboardElement[]
  const checkFreeElements = [] as IKeyboardElement[]
  const checkFixedElements = [] as IKeyboardElement[]

  const salesBox = {
    key: 'salesBox',
    type: KBElementType.SalesBox,
    colStart: 1 + keyboardDTO.salesGridX,
    colSpan: keyboardDTO.salesGridW,
    rowStart: 1 + keyboardDTO.salesGridY,
    rowSpan: keyboardDTO.salesGridH,
  } as IKeyboardElement
  const numPad = {
    key: 'numPad',
    type: KBElementType.NumPad,
    colStart: 1 + keyboardDTO.numPadX,
    colSpan: keyboardDTO.numPadW,
    rowStart: 1 + keyboardDTO.numPadY,
    rowSpan: keyboardDTO.numPadH,
  } as IKeyboardElement
  const fixedKeyBlock = {
    key: 'fixedKeyBlock',
    type: KBElementType.Button,
    colStart: 1 + keyboardDTO.fixedKeysX,
    colSpan: keyboardDTO.fixedKeysW,
    rowStart: 1 + keyboardDTO.numPadY,
    rowSpan: keyboardDTO.numPadH,
  }

  if (!keyboardDTO.disableSalesGrid) {
    elements.push(salesBox)
  }
  if (keyboardDTO.numPadVisible) {
    elements.push(numPad)
  }

  let fixedKeyCount = 0
  let freeKeyCount = 0
  const fixedKeyPositions = transposeFixedKeyPositions(fixedKeyBlock, salesBox, numPad)

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const colStart = col + 1
      const rowStart = row + 1
      let element = undefined as IKeyboardElement | undefined

      // Check if the cell is within the bounds of the SalesBox
      if (!keyboardDTO.disableSalesGrid && isWithinBounds(colStart, rowStart, salesBox)) {
        continue
      }
      // Check if the cell is within the bounds of the NumPad
      if (keyboardDTO.numPadVisible && isWithinBounds(colStart, rowStart, numPad)) {
        continue
      }
      // Check if the cell is within the bounds of existing free elements
      if (checkFixedElements.some(ce => isWithinBounds(colStart, rowStart, ce))) {
        fixedKeyCount += 1
        continue
      }
      // Check if the cell is within the bounds of existing free elements
      if (checkFreeElements.some(ce => isWithinBounds(colStart, rowStart, ce))) {
        freeKeyCount += 1
        continue
      }

      // Check if the cell is within the bounds of FixedKey grid
      if (isWithinBounds(colStart, rowStart, fixedKeyBlock)) {
        fixedKeyCount += 1
        const fixedKey = keyboardDTO.fixedKeys.find(fk => fk.keyPos === fixedKeyPositions[fixedKeyCount])
        if (fixedKey) {
          element = {
            key: `fixedKey-${row}-${col}`,
            linkId: fixedKey.linkId,
            label: fixedKey.caption,
            hideCaption: fixedKey.hideCaption,
            type: KBElementType.Button,
            buttonType: KBButtonType.Fixed,
            colSpan: fixedKey.columnsSpanned,
            rowSpan: fixedKey.rowsSpanned,
            image: fixedKey.imageData,
          } as IKeyboardButton
          if (element.colSpan > 1 || element.rowSpan > 1)
            checkFixedElements.push({ ...element, colStart, rowStart })
        }
      }
      else {
        freeKeyCount += 1
        const freeKey = layoutDTO.freeKeys.find(fk => fk.keyPos === freeKeyCount)
        if (freeKey) {
          element = {
            key: `freeKey-${row}-${col}`,
            linkId: freeKey.linkId,
            label: freeKey.caption,
            type: KBElementType.Button,
            buttonType: KBButtonType.Free,
            colSpan: freeKey.columnsSpanned,
            rowSpan: freeKey.rowsSpanned,
            image: freeKey.imageData,
          } as IKeyboardButton
          if (element.colSpan > 1 || element.rowSpan > 1)
            checkFreeElements.push({ ...element, colStart, rowStart })
        }
      }
      // No matching
      if (!element) {
        element = {
          key: `empty-${row}-${col}`,
          type: KBElementType.Empty,
          colSpan: 1,
          rowSpan: 1,
        } as IKeyboardElement
      }
      elements.push(element)
    }
  }
  return elements
}

function isWithinBounds(colStart: number, rowStart: number, element: IKeyboardElement): boolean {
  return colStart >= element.colStart! && colStart < element.colStart! + element.colSpan
    && rowStart >= element.rowStart! && rowStart < element.rowStart! + element.rowSpan
}

function transposeFixedKeyPositions(fixedAreaBlock: IKeyboardElement, salesBox: IKeyboardElement, numPad: IKeyboardElement): number[] {
  const fixedKeyPositions = [] as number[]
  let keyPos = 1
  for (let col = 0; col < fixedAreaBlock.colSpan; col++) {
    for (let row = 0; row < fixedAreaBlock.rowSpan; row++) {
      const colStartCheck = col + fixedAreaBlock.colStart! + 1
      const rowStartCheck = row + fixedAreaBlock.rowStart! + 1
      // Check if the cell is within the bounds of the SalesBox or NumPad
      if (isWithinBounds(colStartCheck, rowStartCheck, salesBox) || isWithinBounds(colStartCheck, rowStartCheck, numPad)) {
        continue
      }
      fixedKeyPositions[(row * fixedAreaBlock.colSpan) + col + 1] = keyPos
      keyPos++
    }
  }
  return fixedKeyPositions
}
