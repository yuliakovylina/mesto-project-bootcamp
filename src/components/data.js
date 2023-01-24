export const popups = Array.from(document.querySelectorAll('.popup'));
export const editPopup = document.querySelector('#edit-popup');
export const cardPopup = document.querySelector('#card-popup');
export const avatarPopup = document.querySelector('#avatar-popup');
export const editButton = document.querySelector('.profile__edit-button');
export const closeButton = document.querySelector('.popup__close-button');
export const editForm = document.forms["editForm"];
export const cardForm = document.forms["cardForm"];
export const avatarForm = document.forms["avatarForm"];
export const avatarEditPopupButton = document.querySelector(".profile__avatar-edit");
export const avatarCloseButton = avatarPopup.querySelector("#avatar-close");
export const nameProfile = document.querySelector('.profile__info-name');
export const jobProfile = document.querySelector('.profile__info-job');
export const avatarProfile = document.querySelector('.profile__avatar')
export const nameInput = editForm.querySelector('.edit-form__input_name');
export const jobInput = editForm.querySelector('.edit-form__input_job');
export const placeInput = cardForm.querySelector('.edit-form__input_placeName');
export const linkInput = cardForm.querySelector('.edit-form__input_placeSrc');
//export const cardName = document.querySelector('.edit-form__input_placeName');
//export const cardLink = document.querySelector('.edit-form__input_placeSrc');
export const avatarInput = avatarForm.querySelector('.edit-form__input_avatarName');
export const submitButton = cardPopup.querySelector('.edit-form__submit-button');
export const addButton = document.querySelector('.profile__add-button');
export const cardClose = document.querySelector('#card-close');
export const cardsContainer = document.querySelector('.cards');
export const imagePopup = document.querySelector('#image-popup');
export const image = imagePopup.querySelector('.popup__image-container');
export const imageName = imagePopup.querySelector('.popup__image-title');
export const imageCloseButton = imagePopup.querySelector('.popup__close-button_enlarge');
export const submitButtonProfile = editPopup.querySelector('.edit-form__submit-button');
export const submitButtonCards = cardPopup.querySelector('.edit-form__submit-button');
export const submitButtonAvatar = avatarPopup.querySelector('.edit-form__submit-button');

export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-4',
    headers: {
        authorization: 'bc836201-c50e-423f-a4e7-9b2b8103e92a',
        'Content-Type': 'application/json'
    }
}
