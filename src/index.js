

const editPopup = document.querySelector('#edit-popup');
const cardPopup = document.querySelector('#card-popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const editForm = document.forms["editForm"];
const cardForm = document.forms["cardForm"];
const nameProfile = document.querySelector('.profile__info-name');
const jobProfile = document.querySelector('.profile__info-job');
const nameInput = editForm.querySelector('.edit-form__input_name');
const jobInput = editForm.querySelector('.edit-form__input_job');
const placeInput = cardForm.querySelector('.edit-form__input_placeName');
const linkInput = cardForm.querySelector('.edit-form__input_placeSrc');
const addButton = document.querySelector('.profile__add-button');
const cardClose = document.querySelector('#card-close');
const cardsContainer = document.querySelector('.cards');
const imagePopup = document.querySelector('#image-popup');


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

//КНОПКА ЛАЙКА
function toggleLike(evt){
    evt.target.classList.toggle('card__like-button_active');
}

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

enableValidation();
