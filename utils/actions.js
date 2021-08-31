//Action Types
export const UPDATE_SELECTED_PROJECT_INDEX = "UPDATE_SELECTED_PROJECT_INDEX";
export const UPDATE_SELECTED_PAGE_SECTION = "UPDATE_SELECTED_PAGE_SECTION";

//Action Creator
export const updateSelectedProjectIndex = () => ({
   type: UPDATE_SELECTED_PROJECT_INDEX
});

export const updateSelectedPageSection = () => ({
  type: UPDATE_SELECTED_PAGE_SECTION
});