export interface ISuccessResponse<T> {
  paylod: T;
  stauts: true;
  code: number;
}

export interface IErrorResponse<R> {
  errors: R[];
  stauts: false;
  message: string;
  code: number;
}

export type IApiResponse<T = unknown, R = unknown> =
  ISuccessResponse<T> | IErrorResponse<R>;
