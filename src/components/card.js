import { closePopup, openPopup } from "./modal.js";
import { cardPopup, cardsContainer, imagePopup } from "./data.js";
import { formSelectors } from "./validate.js";

const image = imagePopup.querySelector('.popup__image-container');
const imageName = imagePopup.querySelector('.popup__image-title');
const imageCloseButton = imagePopup.querySelector('.popup__close-button_enlarge');
//ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧКИ
export function addCard (name, src) { 
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__top');
    const cardText = cardElement.querySelector('.card__text');
    cardText.textContent = name;
    cardImage.src = src;
    cardImage.alt = name;
    cardElement.querySelector('.card__like-button').addEventListener('click', toggleLike);
    cardElement.querySelector('.card__delete').addEventListener('click', removeCard); 
    cardImage.addEventListener('click', function () {
        image.src = cardImage.src;
        image.alt = cardText.textContent;
        imageName.textContent = cardText.textContent;
        openPopup(imagePopup);
    });
    imageCloseButton.addEventListener('click', function(){
        closePopup(imagePopup);
     });
    return cardElement;
}

//ФУНКЦИЯ УДАЛЕНИЯ КАРТОЧКИ
export function removeCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}

//КНОПКА ЛАЙКА
export function toggleLike(evt){
    evt.target.classList.toggle('card__like-button_active');
}

//ОБРАБОТЧИК ФОРМЫ КАРТОЧКИ
export function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const cardName = document.querySelector('.edit-form__input_placeName');
    const cardLink = document.querySelector('.edit-form__input_placeSrc');
    const submitButton = cardPopup.querySelector('.edit-form__submit-button');
    submitButton.classList.add('edit-form__submit-button_inactive');
    submitButton.setAttribute('disabled', 'true');
    closePopup(cardPopup);
    cardsContainer.prepend(addCard(cardName.value, cardLink.value));
    evt.target.reset();

}

