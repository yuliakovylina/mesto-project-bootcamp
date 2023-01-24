import { setEscapeClick, removeEscapeClick } from "./modal.js";

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

export const renderLoading = (isLoading, button, buttonText="Сохранить", loadingText="Сохранение...") => {
    if (isLoading) {
        button.textContent = loadingText
    } else {
        button.textContent = buttonText
    }
}