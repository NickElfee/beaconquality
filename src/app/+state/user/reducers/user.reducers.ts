import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { UserDto } from "../../../Interfaces/user.dto";
import { AddUserList, UserActions, UserActionTypes } from "../actions/users.actions";

export const USER_FEATURE_KEY = 'user';

export const userAdapter = createEntityAdapter<UserDto>({
  selectId: ({ _id }: UserDto) => _id,
});

export interface UserState extends EntityState<UserDto> {}

export const userInitialState: UserState = userAdapter.getInitialState({});

const reducers: Record<UserActionTypes, ActionReducer<UserState>> = {
  [UserActionTypes.ADD_INTERN_LIST]: addUserList,
};

export function addUserList(state: UserState,  { payload }: AddUserList): UserState {
  return userAdapter.addMany(payload, state);
}

export function reducer(state: UserState = userInitialState, action: UserActions): UserState {
  return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const {
  selectAll,
  selectEntities,
} = userAdapter.getSelectors();
