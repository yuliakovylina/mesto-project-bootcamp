//ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧКИ
function addCard (name, src) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    cardElement.querySelector('.card__text').textContent = name;
    cardElement.querySelector('.card__top').src = src;
    cardElement.querySelector('.card__top').alt = name;
    cardElement.querySelector('.card__like-button').addEventListener('click', toggleLike);
    cardElement.querySelector('.card__delete').addEventListener('click', removeCard); 
    cardElement.querySelector('.card__top').addEventListener('click', function () {
        const image = imagePopup.querySelector('.popup__image-container');
        const imageName = imagePopup.querySelector('.popup__image-title');
        const imageCloseButton = imagePopup.querySelector('.popup__close-button_enlarge');
        image.src = cardElement.querySelector('.card__top').src;
        image.alt = cardElement.querySelector('.card__text').textContent;
        imageName.textContent = cardElement.querySelector('.card__text').textContent;
        openPopup(imagePopup);
        imageCloseButton.addEventListener('click', function(){
           closePopup(imagePopup);
        });

    });
    return cardElement;
}

//ФУНКЦИЯ УДАЛЕНИЯ КАРТОЧКИ
function removeCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}

//ОБРАБОТЧИК ФОРМЫ КАРТОЧКИ
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const cardName = document.querySelector('.edit-form__input_placeName');
    const cardLink = document.querySelector('.edit-form__input_placeSrc');
    closePopup(cardPopup);
    cardsContainer.prepend(addCard(cardName.value, cardLink.value));
    evt.target.reset();

}

