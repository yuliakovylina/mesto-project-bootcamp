const Popup = document.querySelector('.popup');
const EditPopup = document.querySelector('#edit-popup');
const CardPopup = document.querySelector('#card-popup');
const EditButton = document.querySelector('.profile__edit-button');
const CloseButton = document.querySelector('.popup__close-button');
const EditForm = document.querySelector('.edit-form');
const CardForm = document.querySelector('#card-form');
const NameProfile = document.querySelector('.profile__info-name');
const JobProfile = document.querySelector('.profile__info-job');
const NameInput = document.querySelector('.edit-form__input_name');
const JobInput = document.querySelector('.edit-form__input_job');
const AddButton = document.querySelector('.profile__add-button');
const CardClose = document.querySelector('#card-close');
const CardsContainer = document.querySelector('.cards');
const ImagePopup = document.querySelector('#image-popup');


const InitialCards = [
    {
        name: 'Мосты',
        src: '../images/bridge.jpg'
    },
    {
        name: 'Дворцовая площадь',
        src: '../images/dvortsovaia.jpg'
    },
    {
        name: 'Реки и каналы',
        src: '../images/kanaly.jpg'
    },
    {
        name: 'Казанский собор',
        src: '../images/kazansky.jpg'
    },
    {
        name: 'Петергоф',
        src: '../images/petergof.jpg'
    },
    {
        name: 'Дворы и крыши',
        src: '../images/roofs.jpg'
    },
]

//ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧКИ
function addCard (name, src) {
    const CardTemplate = document.querySelector('#card').content;
    const CardElement = CardTemplate.querySelector('.card').cloneNode(true);
    
    CardElement.querySelector('.card__text').textContent = name;
    CardElement.querySelector('.card__top').src = src;
    CardElement.querySelector('.card__like-button').addEventListener('click', toggleLike);
    CardElement.querySelector('.card__delete').addEventListener('click', removeCard); 
    CardElement.querySelector('.card__top').addEventListener('click', openImagePopup);
    return CardElement;
}
//ДОБАВИТЬ ИЗНАЧАЛЬНЫЙ МАССИВ С КАРТИНКАМИ НА СТРАНИЦУ
InitialCards.forEach (function (item) {
    CardsContainer.prepend(addCard(item.name, item.src));
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
    JobProfile.textContent = JobInput.value;
    NameProfile.textContent = NameInput.value;
    closePopup(EditPopup);
}
//ОТПРАВКА ФОРМЫ ПРОФИЛЯ
EditForm.addEventListener('submit', handleEditFormSubmit);

//РЕДАКТИРОВАНИЕ ПРОФИЛЯ
EditButton.addEventListener('click', function () {
   openPopup(EditPopup);
   NameInput.value = NameProfile.textContent;
   JobInput.value = JobProfile.textContent;
})
//ЗАКРЫТИЕ ПОПАПОВ
CloseButton.addEventListener('click', function () {
    closePopup(Popup);
})

//ДОБАВЛЕНИЕ КАРТОЧКИ
AddButton.addEventListener('click', function () {
    openPopup(CardPopup);
})
//ЗАКРЫТИЕ ФОРМЫ КАРТОЧКИ
CardClose.addEventListener('click', function () {
    closePopup(CardPopup);
})
//ОБРАБОТЧИК ФОРМЫ КАРТОЧКИ
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const CardName = document.querySelector('.edit-form__input_placeName');
    const CardLink = document.querySelector('.edit-form__input_placeSrc');
    closePopup(CardPopup);
    CardsContainer.prepend(addCard(CardName.value, CardLink.value));
}
//ОТПРАВКА ФОРМЫ КАРТОЧКИ
CardForm.addEventListener('submit', handleCardFormSubmit);

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАП_ИЗОБРАЖЕНИЯ
function openImagePopup(evt) {
    const card = evt.target;
    const Image = ImagePopup.querySelector('.popup__image-container');
    const ImageName = ImagePopup.querySelector('.popup__image-title');
    Image.src = card.src;
    ImageName.textContent = card.name;
    openPopup(ImagePopup);
}


//ОТКРЫТИЕ ПОПАП_ИЗОБРАЖЕНИЯ



