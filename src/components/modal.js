import { jobProfile, jobInput, nameProfile, nameInput, editPopup } from "./data.js";

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПОВ
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    setEscapeClick(popup);
}
//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПОВ
export function closePopup(popup) {
    removeEscapeClick(popup);
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