import { SliceName } from '../../const';
import { State } from '../../types/state';


export const getCameras = (state: State) => state[SliceName.AppData].cameras;
