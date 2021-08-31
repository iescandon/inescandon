//Action Types
export const UPDATE_CURRENT_PROJECT_INDEX = "UPDATE_CURRENT_PROJECT_INDEX";
export const UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE";

//Action Creator
export const updateCurrentProjectIndex = () => ({
   type: UPDATE_CURRENT_PROJECT_INDEX
});

export const updateCurrentPage = () => ({
  type: UPDATE_CURRENT_PAGE
});