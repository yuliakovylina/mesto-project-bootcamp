import { formSelectors, enableValidation } from "./components/validate.js";
import { addCard, removeCard, handleCardFormSubmit, toggleLike, createCard } from "./components/card.js";
import { handleEditFormSubmit, clickCloseOverlay, escapeListener, removeEscapeClick, setEscapeClick, handleAvatarEdit } from "./components/modal.js";
import { editPopup, cardPopup, editButton, closeButton, editForm, cardForm, avatarForm, nameProfile, jobProfile, jobInput,
nameInput, placeInput, linkInput, addButton, cardClose, cardsContainer, imagePopup, avatarProfile, avatarEditPopupButton, avatarPopup, avatarCloseButton} from "./components/data.js";
import { openPopup, closePopup } from './components/utils.js';
import "./pages/index.css";
import { getUser, getCards } from "./components/api.js";

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
//initialCards.forEach (function (item) {
  //  cardsContainer.prepend(addCard(item.name, item.src));
//});
//initialCards.forEach(createCard);


editForm.addEventListener('submit', handleEditFormSubmit);

editButton.addEventListener('click', function () {
   nameInput.value = nameProfile.textContent;
   jobInput.value = jobProfile.textContent;
   openPopup(editPopup);
})

closeButton.addEventListener('click', function () {
    closePopup(editPopup);
})

addButton.addEventListener('click', function () {
    openPopup(cardPopup);
})

cardClose.addEventListener('click', function () {
    closePopup(cardPopup);
})

cardForm.addEventListener('submit', handleCardFormSubmit);

avatarForm.addEventListener('submit', handleAvatarEdit);

avatarEditPopupButton.addEventListener('click', function () {
    openPopup(avatarPopup);
})

avatarCloseButton.addEventListener('click', function () {
    closePopup(avatarPopup);
})

Promise.all([getUser(), getCards()])
    .then(([users, cards]) => {
        nameProfile.id = users._id;
        nameProfile.textContent = users.name;
        jobProfile.textContent = users.about;
        avatarProfile.src = users.avatar;
        nameInput.value = users.name;
        jobInput.value = users.about;
        cards.reverse().forEach(createCard);
        enableValidation(formSelectors);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`)
    });