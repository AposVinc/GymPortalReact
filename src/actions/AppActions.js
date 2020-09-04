import {LOADING, LOADING_END} from '../stores/ActionType';

export const appLoading = function() {
  return {
    type: LOADING
  }
}

export const appEndLoading = function() {
  return {
    type: LOADING_END,
  }
}
