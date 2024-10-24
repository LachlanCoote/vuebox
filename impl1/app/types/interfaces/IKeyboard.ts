export interface IKeyboard {
  columns: number
  rows: number
  elements: IKeyboardElement[]
}

export interface IKeyboardElement {
  key: string
  type: KBElementType
  colStart?: number
  rowStart?: number
  colSpan: number
  rowSpan: number
}

export interface IKeyboardButton extends IKeyboardElement {
  linkId: number
  label: string
}

export enum KBElementType {
  Button = 'Button',
  SalesBox = 'SalesBox',
  NumPad = 'NumPad',
  Empty = 'Empty',
}
