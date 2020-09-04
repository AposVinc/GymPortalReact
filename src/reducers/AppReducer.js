import {
  LOADING,
  LOADING_END,
} from '../stores/ActionType';

const INITIAL_STATE = {
      loading: true,
      loadingSeconds: 0
};

const sApp = (state) => state.app;
export const sAppLoading = (state) => sApp(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loadingSeconds: state.loadingSeconds + 1
      };
    case LOADING_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
