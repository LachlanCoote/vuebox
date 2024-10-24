import type { IKeyboardFixedKeyDTO } from './IKeyboardFixedKeyDTO'

export interface IKeyboardDTO {
  id: number
  name: string
  width: number
  height: number
  salesGridSize: number
  mode: number
  lastChangedDate?: Date
  homeLayoutId: number
  salesGridRight: boolean
  clearCategories: string
  lockedBy: string
  locations: string
  numPadH: number
  hideTools: boolean
  buttonsAcross: number
  buttonsDown: number
  salesGridVisible: boolean
  fixedKeysVisible: boolean
  numPadVisible: boolean
  salesGridX: number
  salesGridY: number
  salesGridW: number
  salesGridH: number
  fixedKeysX: number
  fixedKeysY: number
  fixedKeysW: number
  fixedKeysH: number
  numPadX: number
  numPadY: number
  numPadW: number
  backColor: number
  disableButtonEffects: boolean
  defaultMessage: string
  theme: number
  disableSalesGrid: number
  useGradients: boolean
  buttonBorders: number
  otherBorders: number
  extendedSettings: string
  fixedKeys: IKeyboardFixedKeyDTO[]
}
