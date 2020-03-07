import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, selectEntities, selectAll, UserState } from '../reducers/user.reducers'
import { Dictionary } from "@ngrx/entity";
import { UserDto } from "../../../Interfaces/user.dto";

const selectState = createFeatureSelector<UserState>(USER_FEATURE_KEY);
const getEntities = createSelector(selectState, selectEntities);

export const getAllUsers = createSelector(selectState, selectAll);

export const getUserById = (id: number) =>
  createSelector(getEntities, (entities: Dictionary<UserDto>) => entities[id]);
