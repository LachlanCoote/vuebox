import type { IKeyboardDTO } from './IKeyboardDTO'
import type { IKeyboardLayoutDTO } from './IKeyboardLayoutDTO'

export interface IGetKeyboardResponse {
  keyboard: IKeyboardDTO
  layouts: IKeyboardLayoutDTO
}
