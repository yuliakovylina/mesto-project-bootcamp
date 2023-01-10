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