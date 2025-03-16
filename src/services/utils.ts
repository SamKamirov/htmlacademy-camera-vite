import { toast } from 'react-toastify';
import { TNotify, TNotifyMessageTypes } from '../types/utils';

export const notify = ({ message, type }: TNotify) => {
  switch (type) {
    case TNotifyMessageTypes.INFO:
      toast.info(message);
      break;
    case TNotifyMessageTypes.ERROR:
      toast.error(message);
      break;
  }
};
