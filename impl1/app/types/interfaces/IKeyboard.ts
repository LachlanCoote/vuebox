export interface IKeyboard {
  columns: number
  rows: number
  elements: IKeyboardElement[]
}

export interface IKeyboardElement {
  id: number
  type: KBType
  label?: string
  colStart?: number
  colEnd?: number
  rowStart?: number
  rowEnd?: number
  colSpan?: number
  rowSpan?: number
}

export interface IKeyboardButton extends IKeyboardElement {
  label: string
}

export enum KBType {
  Button = 'Button',
  SalesBox = 'SalesBox',
  NumPad = 'NumPad',
}
