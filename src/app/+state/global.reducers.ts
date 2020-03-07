import { ActionReducerMap } from "@ngrx/store";
import * as fromUser from './user/reducers/user.reducers'

export interface GlobalState {
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  user: fromUser.reducer,
};
