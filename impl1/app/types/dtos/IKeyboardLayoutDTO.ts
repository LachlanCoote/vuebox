import type { ILayoutFreeKeyDTO } from './ILayoutFreeKeyDTO'

export interface IKeyboardLayoutDTO {
  id: number
  name: string
  width: number
  height: number
  salesGridSize: number
  mode: number
  image: string
  hideSalesGrid: number
  type: number
  freeKeys: ILayoutFreeKeyDTO[]
}
