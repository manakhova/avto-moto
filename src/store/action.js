export const ActionType = {
    CHANGE_PHOTO: `changePhoto`,
    CHANGE_SECTION: `changeSection`,
    ADD_NEW_REVIEW: `addNewReview`
  };
  
  
export const ActionCreator = {
  setNewPhoto: (photo) => ({
    type: ActionType.CHANGE_PHOTO,
    payload: photo
  }),
  setNewSection: (section) => ({
    type: ActionType.CHANGE_SECTION,
    payload: section
  }),
  setNewReview: (review) => ({
    type: ActionType.ADD_NEW_REVIEW,
    payload: review
  })
};