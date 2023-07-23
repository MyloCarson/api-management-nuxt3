import { IDashboard } from './dashboard';
import { IKey } from './keys';
import { ILink } from './links';
import { ITransaction } from './transaction';
import { IMerchant, IUser } from './user';

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

export interface ICreateAccountInput {
  confirm_password: string;
  country: string;
  email: string;
  full_name: string;
  password: string;
  terms_and_conditions: boolean;
}
export interface ILoginResponse extends IResponseResult {
  user: IUser;
  merchant: IMerchant;
  token: string;
}

export interface IAuthData {
  token: string;
  user: IUser;
}
export interface ICreateAccountResponse extends IResponseResult, IAuthData {}

export interface ITransactionResponse extends IResponseResult {
  transactions: ITransaction[];
}

export interface ILinkResponse extends IResponseResult {
  links: ILink[];
}

export interface ILinkDetailResponse extends IResponseResult {
  link: ILink;
}

export interface IKeysResponse extends IResponseResult {
  keys: IKey[];
}
export interface IToggleResponse extends IResponseResult {
  merchant: IMerchant;
}

export interface IDashboardResponse extends IResponseResult, IDashboard {}
export type API_STATUS = 'idle' | 'pending' | 'resolved' | 'rejected';

export enum API_STATE {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}

export type ApiStateType = Record<API_STATE, string>;
