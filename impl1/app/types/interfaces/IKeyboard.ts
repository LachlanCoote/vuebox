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
  buttonType: KBButtonType
  linkId: number
  label: string
  hideCaption: boolean
  image: Uint8Array
}

export enum KBElementType {
  Button = 'Button',
  SalesBox = 'SalesBox',
  NumPad = 'NumPad',
  Empty = 'Empty',
}

export enum KBButtonType {
  Fixed = 'Fixed',
  Free = 'Free',
}
