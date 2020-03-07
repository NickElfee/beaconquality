import { Action } from '@ngrx/store';
import { UserDto } from "../../../Interfaces/user.dto";

export enum UserActionTypes {
  ADD_USER_LIST = '[User] Add User List',
  ADD_USER = '[User] Add User',
}

export class AddUserList implements Action {
  readonly type = UserActionTypes.ADD_USER_LIST;

  constructor(public payload: UserDto[]) {}
}

export class AddUser implements Action {
  readonly type = UserActionTypes.ADD_USER;

  constructor(public payload: UserDto) {}
}

export type UserActions =
  | AddUserList
  | AddUser;
