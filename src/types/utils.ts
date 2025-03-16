export enum TNotifyMessageTypes {
  INFO = 'info',
  ERROR = 'error'
}
export type TNotify = {
  message: string;
  type: TNotifyMessageTypes;
}
