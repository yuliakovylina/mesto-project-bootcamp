import { jobProfile, jobInput, nameProfile, nameInput, editPopup, popups } from "./data.js";
import { openPopup, closePopup } from "./utils.js";

//ЗАКРЫТИЕ ПОПАПА КЛИКОМ НА ОВЕРЛЕЙ
export function clickCloseOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}


//ЗАКРЫТИЕ ПОПАПА НАЖАТИЕМ НА ESC
export function escapeListener (evt) {
    if (evt.key === 'Escape') {
        popups.forEach(closePopup);
        }
    }

//ОБРАБОТЧИК ФОРМЫ ПРОФИЛЯ
export function handleEditFormSubmit(evt) {
    evt.preventDefault();
    jobProfile.textContent = jobInput.value;
    nameProfile.textContent = nameInput.value;
    closePopup(editPopup);
    evt.target.reset();
}

export function setEscapeClick (elem) {
    document.addEventListener('keydown', escapeListener);
    elem.addEventListener('click', clickCloseOverlay);
}

export function removeEscapeClick (elem) {
    document.removeEventListener('keydown', escapeListener);
    elem.removeEventListener('click', clickCloseOverlay);
}