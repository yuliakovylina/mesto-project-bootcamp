import { formSelectors, enableValidation } from "./components/validate.js";
import { addCard, removeCard, handleCardFormSubmit, toggleLike } from "./components/card.js";
import { openPopup, closePopup, handleEditFormSubmit, clickCloseOverlay, escapeListener, removeEscapeClick, setEscapeClick } from "./components/modal.js";
import { editPopup, cardPopup, editButton, closeButton, editForm, cardForm, nameProfile, jobProfile, jobInput,
nameInput, placeInput, linkInput, addButton, cardClose, cardsContainer, imagePopup} from "./components/data.js";
import "./pages/index.css";

const bridge = new URL("./images/bridge.jpg", import.meta.url);
const dvortsovaia = new URL("./images/dvortsovaia.jpg", import.meta.url);
const kanaly = new URL("./images/kanaly.jpg", import.meta.url);
const kazansky = new URL("./images/kazansky.jpg", import.meta.url);
const petergof = new URL("./images/petergof.jpg", import. meta.url);
const roofs = new URL("./images/roofs.jpg", import.meta.url);


const initialCards = [
    {
        name: 'Мосты',
        src: bridge
    },
    {
        name: 'Дворцовая площадь',
        src: dvortsovaia
    },
    {
        name: 'Реки и каналы',
        src: kanaly
    },
    {
        name: 'Казанский собор',
        src: kazansky
    },
    {
        name: 'Петергоф',
        src: petergof
    },
    {
        name: 'Дворы и крыши',
        src: roofs
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
   nameInput.value = nameProfile.textContent;
   jobInput.value = jobProfile.textContent;
  // if (document.querySelector('.input-name-error').classList.contains(formSelectors.errorClass) || 
  // document.querySelector('.input-job-error').classList.contains(formSelectors.errorClass)){
       // removeEscapeClick();
       // closePopup(editPopup);
  // }
   openPopup(editPopup);
})
//ЗАКРЫТИЕ ПОПАПОВ
closeButton.addEventListener('click', function () {
    closePopup(editPopup);
})

//ДОБАВЛЕНИЕ КАРТОЧКИ
addButton.addEventListener('click', function () {
    openPopup(cardPopup);
    cardForm.reset();
    
})
//ЗАКРЫТИЕ ФОРМЫ КАРТОЧКИ
cardClose.addEventListener('click', function () {
    closePopup(cardPopup);
})

//ОТПРАВКА ФОРМЫ КАРТОЧКИ
cardForm.addEventListener('submit', handleCardFormSubmit);

enableValidation(formSelectors);
