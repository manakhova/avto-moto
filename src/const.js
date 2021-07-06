export const FIRST_PHOTO_ID = 1;
export const LAST_PHOTO_ID = 3;
export const MAX_STAR_COUNT = 5; 

const cleanAllInputs = () => {
  document.querySelector(`#name`).value = null;
  document.querySelector(`#dignity`).value = null;
  document.querySelector(`#limitations`).value = null;
  document.querySelector(`#comment`).value = null;
  if (document.querySelector(`.modal__rating-input:checked`)) {
    document.querySelector(`.modal__rating-input:checked`).checked = false;
  }
}

export const closePopup = () => {
  const popup = document.querySelector('.modal');
  const nameInput = document.querySelector(`#name`);
  const commentTextarea = document.querySelector(`#comment`);
  const rating = document.querySelector(`.modal__rating-container`);

  popup.style.display = `none`;
  cleanAllInputs();
  document.removeEventListener('keydown', closeKeydownPopup);
  document.removeEventListener('click', closeLayoutPopup);

  rating.classList.remove(`modal__rating-container--required`);
  nameInput.classList.remove(`modal__input--required`);
  nameInput.parentElement.classList.remove(`modal__label--required`);
  commentTextarea.classList.remove(`modal__input--required`);
  commentTextarea.parentElement.classList.remove(`modal__label--required`);
};

export const closeKeydownPopup = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closePopup();
  }
}

export const closeLayoutPopup = (evt) => {
  const popup = document.querySelector('.modal');
  if (popup.style.display === `block` && evt.target.className === 'modal') {
    evt.preventDefault();
    closePopup();
  }
}

const getRequiredFieldStyle = (field) => {
  field.parentElement.classList.add(`modal__label--required`);
  field.classList.add(`modal__input--required`);
}

export const changeRequiredFieldStyle = (nameInput, commentTextarea, checkedStar, rating) => {
  if (nameInput.value === `` && commentTextarea.value === `` && checkedStar === null) {
    getRequiredFieldStyle(nameInput);
    getRequiredFieldStyle(commentTextarea);
    rating.classList.add(`modal__rating-container--required`);
  } else if (nameInput.value === `` && commentTextarea.value === ``) {
      getRequiredFieldStyle(commentTextarea);
      getRequiredFieldStyle(nameInput);
      rating.classList.remove(`modal__rating-container--required`);
  } else if (nameInput.value === `` && checkedStar === null) {
      getRequiredFieldStyle(nameInput);
      rating.classList.add(`modal__rating-container--required`);
      commentTextarea.classList.remove(`modal__input--required`);
      commentTextarea.parentElement.classList.remove(`modal__label--required`);
  } else if (commentTextarea.value === `` && checkedStar === null) {
    getRequiredFieldStyle(commentTextarea);
      rating.classList.add(`modal__rating-container--required`);
      nameInput.classList.remove(`modal__input--required`);
      nameInput.parentElement.classList.remove(`modal__label--required`);
  } else if (nameInput.value === ``) {
      getRequiredFieldStyle(nameInput);
      commentTextarea.classList.remove(`modal__input--required`);
      commentTextarea.parentElement.classList.remove(`modal__label--required`);
  } else if (checkedStar === null) {
      rating.classList.add(`modal__rating-container--required`);
      nameInput.classList.remove(`modal__input--required`);
      nameInput.parentElement.classList.remove(`modal__label--required`);
      commentTextarea.classList.remove(`modal__input--required`);
      commentTextarea.parentElement.classList.remove(`modal__label--required`);
  }
}
