import { formSelectors, enableValidation } from "./components/validate.js";
import { addCard, removeCard, handleCardFormSubmit, toggleLike } from "./components/card.js";
import { openPopup, closePopup, handleEditFormSubmit, clickCloseOverlay, escapeListener } from "./components/modal.js";
import { editPopup, cardPopup, editButton, closeButton, editForm, cardForm, nameProfile, jobProfile, jobInput,
nameInput, placeInput, linkInput, addButton, cardClose, cardsContainer, imagePopup} from "./components/data.js";

const initialCards = [
    {
        name: 'Мосты',
        src: './images/bridge.jpg'
    },
    {
        name: 'Дворцовая площадь',
        src: './images/dvortsovaia.jpg'
    },
    {
        name: 'Реки и каналы',
        src: './images/kanaly.jpg'
    },
    {
        name: 'Казанский собор',
        src: './images/kazansky.jpg'
    },
    {
        name: 'Петергоф',
        src: './images/petergof.jpg'
    },
    {
        name: 'Дворы и крыши',
        src: './images/roofs.jpg'
    },
]


//ДОБАВИТЬ ИЗНАЧАЛЬНЫЙ МАССИВ С КАРТИНКАМИ НА СТРАНИЦУ
initialCards.forEach (function (item) {
    cardsContainer.prepend(addCard(item.name, item.src));
});

//ОТПРАВКА ФОРМЫ ПРОФИЛЯ
editForm.addEventListener('submit', handleEditFormSubmit);

//РЕДАКТИРОВАНИЕ ПРОФИЛЯ
editButton.addEventListener('click', function () {
   openPopup(editPopup);
   nameInput.value = nameProfile.textContent;
   jobInput.value = jobProfile.textContent;
})
//ЗАКРЫТИЕ ПОПАПОВ
closeButton.addEventListener('click', function () {
    closePopup(editPopup);
})

//ДОБАВЛЕНИЕ КАРТОЧКИ
addButton.addEventListener('click', function () {
    openPopup(cardPopup);
    placeInput.value = "";
    linkInput.value = "";
    //cardPopup.querySelector('.edit-form__submit-button').classList.add('edit-form__submit-button_inactive')
})
//ЗАКРЫТИЕ ФОРМЫ КАРТОЧКИ
cardClose.addEventListener('click', function () {
    closePopup(cardPopup);
})

//ОТПРАВКА ФОРМЫ КАРТОЧКИ
cardForm.addEventListener('submit', handleCardFormSubmit);

document.addEventListener('keydown', escapeListener);
document.addEventListener('click', clickCloseOverlay);

enableValidation(formSelectors);
console.log(formSelectors)

