import { useReducer } from 'react';
import {UPDATE_SELECTED_PROJECT_INDEX, UPDATE_SELECTED_PAGE_SECTION} from './actions';

export const reducer = (state = {value: 0}, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_PROJECT_INDEX:
        return {...state, value: state.value + 1};
    case UPDATE_SELECTED_PAGE_SECTION:
          return {...state, value: state.value + 1};
    default:
        return {...state};
}
};

export function usePageReducer(initialState) {
  return useReducer(reducer, initialState);
}
