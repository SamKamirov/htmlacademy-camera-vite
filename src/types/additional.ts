import { Nullable } from 'vitest';

export type TCoupon = {
  coupon: 'camera-333' | 'camera-444' | 'camera-555';
};

export type TOrder = {
  camerasIds: [number];
  coupon: Nullable<'camera-333' | 'camera-444' | 'camera-555'>;
  tel?: '+79998887766';
};
