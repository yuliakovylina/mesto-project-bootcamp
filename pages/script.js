const Popup = document.querySelector('.popup');
const EditPopup = document.querySelector('#edit-popup');
const CardPopup = document.querySelector('#card-popup');
const EditButton = document.querySelector('.profile__edit-button');
const CloseButton = document.querySelector('.popup__close-button');
const EditForm = document.querySelector('.edit-form');
const NameProfile = document.querySelector('.profile__info-name');
const JobProfile = document.querySelector('.profile__info-job');
const NameInput = document.querySelector('.edit-form__input_name');
const JobInput = document.querySelector('.edit-form__input_job');
const AddButton = document.querySelector('.profile__add-button');
const CardClose = document.querySelector('#card-close');
const CardsContainer = document.querySelector('.cards');


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

const CardTemplate = document.querySelector('#card').content;
const CardElement = CardTemplate.querySelector('.card').cloneNode(true);

InitialCards.forEach(item) {
    CardElement.querySelector('.card__top').src = item.src;
    CardElement.querySelector('.card__text').textContent = item.name;
    CardsContainer.append(CardElement);
}



function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    JobProfile.textContent = JobInput.value;
    NameProfile.textContent = NameInput.value;
    closePopup(EditPopup);
}

EditButton.addEventListener('click', function () {
   openPopup(EditPopup);
   NameInput.value = NameProfile.textContent;
   JobInput.value = JobProfile.textContent;
})

CloseButton.addEventListener('click', function () {
    closePopup(Popup);
})

EditForm.addEventListener('submit', handleEditFormSubmit);

AddButton.addEventListener('click', function () {
    openPopup(CardPopup);
})

CardClose.addEventListener('click', function () {
    closePopup(CardPopup);
})


