export const ActionType = {
    CHANGE_PHOTO: `changePhoto`,
    CHANGE_SECTION: `changeSection`
  };
  
  
export const ActionCreator = {
  setNewPhoto: (photo) => ({
    type: ActionType.CHANGE_PHOTO,
    payload: photo
  }),
  setNewSection: (section) => ({
    type: ActionType.CHANGE_SECTION,
    payload: section
  })
};