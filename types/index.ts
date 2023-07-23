export interface Paging {
  total: number;
  per_page: number;
  page: number;
}

export interface IResponseMetaInfo {
  paging: Paging;
}
export interface IResponseResult {
  code?: string;
  message: string;
  status: boolean;
  meta?: IResponseMetaInfo;
}

export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginResponse extends IResponseResult {
  token: string;
}

export type API_STATUS = 'idle' | 'pending' | 'resolved' | 'rejected';

export enum API_STATE {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}

export type ApiStateType = Record<API_STATE, string>;
