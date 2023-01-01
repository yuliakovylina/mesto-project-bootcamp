//const Popup = document.querySelector('.popup');
const editPopup = document.querySelector('#edit-popup');
const cardPopup = document.querySelector('#card-popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const editForm = document.querySelector('.edit-form');
const cardForm = document.querySelector('#card-form');
const nameProfile = document.querySelector('.profile__info-name');
const jobProfile = document.querySelector('.profile__info-job');
const nameInput = document.querySelector('.edit-form__input_name');
const jobInput = document.querySelector('.edit-form__input_job');
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

//ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧКИ
function addCard (name, src) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    cardElement.querySelector('.card__text').textContent = name;
    cardElement.querySelector('.card__top').src = src;
    cardElement.querySelector('.card__like-button').addEventListener('click', toggleLike);
    cardElement.querySelector('.card__delete').addEventListener('click', removeCard); 
    cardElement.querySelector('.card__top').addEventListener('click', function () {
        const image = imagePopup.querySelector('.popup__image-container');
        const imageName = imagePopup.querySelector('.popup__image-title');
        const imageCloseButton = imagePopup.querySelector('.popup__close-button_enlarge');
        image.src = cardElement.querySelector('.card__top').src;
        imageName.textContent = cardElement.querySelector('.card__text').textContent;
        openPopup(imagePopup);
        imageCloseButton.addEventListener('click', function(){
            document.querySelector('.popup_opened').classList.remove('popup_opened');
        });

    });
    return cardElement;
}
//ДОБАВИТЬ ИЗНАЧАЛЬНЫЙ МАССИВ С КАРТИНКАМИ НА СТРАНИЦУ
initialCards.forEach (function (item) {
    cardsContainer.prepend(addCard(item.name, item.src));
});
//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПОВ
function openPopup(popup) {
    popup.classList.add('popup_opened');
}
//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПОВ
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//КНОПКА ЛАЙКА
function toggleLike(evt){
    evt.target.classList.toggle('card__like-button_active');
}

//ФУНКЦИЯ УДАЛЕНИЯ КАРТОЧКИ
function removeCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}

//ОБРАБОТЧИК ФОРМЫ ПРОФИЛЯ
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    jobProfile.textContent = jobInput.value;
    nameProfile.textContent = nameInput.value;
    closePopup(editPopup);
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
})
//ЗАКРЫТИЕ ФОРМЫ КАРТОЧКИ
cardClose.addEventListener('click', function () {
    closePopup(cardPopup);
})
//ОБРАБОТЧИК ФОРМЫ КАРТОЧКИ
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const cardName = document.querySelector('.edit-form__input_placeName');
    const cardLink = document.querySelector('.edit-form__input_placeSrc');
    closePopup(cardPopup);
    cardsContainer.prepend(addCard(cardName.value, cardLink.value));
}
//ОТПРАВКА ФОРМЫ КАРТОЧКИ
cardForm.addEventListener('submit', handleCardFormSubmit);

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАП_ИЗОБРАЖЕНИЯ
//function openImagePopup(evt) {
  //  const card = evt.target;
    //const Image = ImagePopup.querySelector('.popup__image-container');
    //const ImageName = ImagePopup.querySelector('.popup__image-title');
    //Image.src = card.src;
    //ImageName.textContent = card.name;
    //openPopup(ImagePopup);
//}


//ОТКРЫТИЕ ПОПАП_ИЗОБРАЖЕНИЯ

function togglePopup(evt) {
    evt.target.classList.toggle('popup_opened');
}



