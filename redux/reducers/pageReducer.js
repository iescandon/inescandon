import {UPDATE_CURRENT_PROJECT_INDEX} from '../actions/pageActions';
import {UPDATE_CURRENT_PAGE} from '../actions/pageActions';

const pageReducer = (state = {value: 0}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PROJECT_INDEX:
        return {...state, value: state.value + 1};
    case UPDATE_CURRENT_PAGE:
          return {...state, value: state.value + 1};
    default:
        return {...state};
}
};

export default pageReducer;

