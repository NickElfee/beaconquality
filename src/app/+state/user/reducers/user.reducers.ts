import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { UserDto } from '../../../Interfaces/user.dto';
import { AddUser, AddUserList, UserActions, UserActionTypes } from '../actions/user.actions';

export const USER_FEATURE_KEY = 'user';

export const userAdapter = createEntityAdapter<UserDto>({
  selectId: ({ id }: UserDto) => id,
});

export interface UserState extends EntityState<UserDto> {}

export const userInitialState: UserState = userAdapter.getInitialState({});

const reducers: Record<UserActionTypes, ActionReducer<UserState>> = {
  [UserActionTypes.ADD_USER_LIST]: addUserList,
  [UserActionTypes.ADD_USER]: addUser,
};

export function addUserList(state: UserState,  { payload }: AddUserList): UserState {
  return userAdapter.addMany(payload, state);
}

export function addUser( state: UserState, { payload }: AddUser,): UserState {
  return userAdapter.addOne(payload, state);
}

export function reducer(state: UserState = userInitialState, action: UserActions): UserState {
  return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const {
  selectAll,
  selectEntities,
} = userAdapter.getSelectors();
