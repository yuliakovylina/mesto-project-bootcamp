import { jobProfile, jobInput, nameProfile, nameInput, editPopup } from "./data.js";

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПОВ
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.querySelector('.edit-form__submit-button').classList.add('edit-form__submit-button_inactive')
}
//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПОВ
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
//ЗАКРЫТИЕ ПОПАПА КЛИКОМ НА ОВЕРЛЕЙ
export function clickCloseOverlay(evt) {
    closePopup(evt.target);
}


//ЗАКРЫТИЕ ПОПАПА НАЖАТИЕМ НА ESC
export function escapeListener (evt) {
    const popups = Array.from(document.querySelectorAll('.popup'));
    if (evt.key === 'Escape') {
        popups.forEach((popup) => {
            closePopup(popup);
        })
    }
}

//ОБРАБОТЧИК ФОРМЫ ПРОФИЛЯ
export function handleEditFormSubmit(evt) {
    evt.preventDefault();
    jobProfile.textContent = jobInput.value;
    nameProfile.textContent = nameInput.value;
    closePopup(editPopup);
}