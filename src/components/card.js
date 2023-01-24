import { closePopup, openPopup, renderLoading } from "./utils.js";
import { cardPopup, cardsContainer, cardName, cardLink, image, imageName, imageCloseButton, imagePopup, submitButtonCards, nameProfile, placeInput, linkInput } from "./data.js";
import { addCardServer, removeLike, addLike } from "./api.js";

export const addCard = (data) => { 
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.id = data._id;
    
    const cardImage = cardElement.querySelector('.card__top');
    const cardText = cardElement.querySelector('.card__text');
    cardText.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardImage.addEventListener('click', function () {
        image.src = cardImage.src;
        image.alt = cardText.textContent;
        imageName.textContent = cardText.textContent;
        openPopup(imagePopup);
    });

    const cardLike = cardElement.querySelector('.card__like-button');
    cardLike.addEventListener('click', like);
    cardElement.querySelector('.card__like-counter').textContent = data.likes.length;
    data.likes.forEach((like) => checkLike(like._id, cardLike))

    const cardRemove = cardElement.querySelector('.card__delete');
    cardRemove.addEventListener('click', removeCard); 
    disableRemoveCard(data, cardRemove);

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

export function handleCardFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(true, submitButtonCards, "Создать", "Создание...")
    addCardServer({
        name: `${placeInput.value}`,
        link: `${linkInput.value}`
    })
        .then((res) => {
            createCard(res)
            evt.target.reset();
            closePopup(cardPopup);
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
        .finally(() => {
            renderLoading(false, submitButtonCards, "Создать", "Создание...")
        })

}


export const createCard = (data) => {
    cardsContainer.prepend(addCard(data));
}

function like (evt){
    const card = evt.target.closest('.card');
    const likeCount = card.querySelector('.card__like-counter');
    if (evt.target.classList.contains('card__like-button_active')) {
        removeLike(card.id)
            .then((res) => {
                evt.target.classList.remove('card__like-button_active');
                checkLikesLength(res._id, res.likes.length, likeCount, card.id)
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
    } else {
        addLike(card.id)
            .then((res) => {
                checkLikesLength(res._id, res.likes.length, likeCount, card.id)
                evt.target.classList.add('card__like-button_active')
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
    }
}

const checkLikesLength = (id, length, counter, cardId) => {
    if (cardId === id) {
        counter.textContent = length
    }
}

const checkLike = (likeItem, likeButton) => {
    if (likeItem === nameProfile.id) {
        likeButton.classList.add('card__like-button_active')
    }
}

export const disableRemoveCard = (elem, cardRemove) => {
    if (elem.owner._id === nameProfile.id) {
        cardRemove.disabled = false;
        cardRemove.classList.remove('card__delete_inactive')
    } else {
        cardRemove.disabled = true;
        cardRemove.classList.add('card__delete_inactive')
    }
}