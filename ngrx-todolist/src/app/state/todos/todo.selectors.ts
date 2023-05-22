import { createSelector } from "@ngrx/store";
import { appState } from "src/app/interfaces/appState";
import { todoState } from "src/app/interfaces/todoState";

export const selectFeature = (state: appState) => state.todos;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading)

export const todoSelector = createSelector(selectFeature, (state) => state.todos)

export const errorSelector = createSelector(selectFeature, (state) => state.error)