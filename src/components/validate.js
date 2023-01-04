const formSelectors = {
    formSelector: ".edit-form",
    inputSelector: ".edit-form__input",
    submitButtonSelector: "edit-form__submit-button",
    inactiveButtonClass: ".edit-form__submit-button_inactive",
    inputErrorClass: ".edit-button__input_type_error",
    errorClass: ".edit-form__input-error_active"
}

//ФУНКЦИЯ ДОБАВЛЯЩАЯ КЛАСС С ОШИБКОЙ
const showInputError = (formElement, inputElement, error) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('edit-form__input_type_error');
    errorElement.textContent = error;
    errorElement.classList.add('edit-form__input-error_active');
}

//ФУНКЦИЯ УДАЛЯЮЩАЯ КЛАСС С ОШИБКОЙ
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('edit-form__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('edit-form__input-error_active');
}

//ФУНКЦИЯ ВАЛИДНОСТЬ ПОЛЯ
const isValid = (formElement, inputElement) => {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

//ЕСТЬ ЛИ НЕВАЛИДНЫЕ ПОЛЯ : ДА/НЕТ
const hasInvalidInput = (formInputs) => {
    return formInputs.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

//ПЕРКЛЮЧАЕМ СОСТОЯНИЕ КНОПКИ ЕСЛИ ЕСТЬ НЕВАЛИДНОЕ ПОЛЕ
const toggleButtonState = (formInputs, buttonElement) => {
    if (hasInvalidInput(formInputs)) {
        buttonElement.classList.add('edit-form__submit-button_inactive');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('edit-form__submit-button_inactive');
        buttonElement.disabled = false;
    }
}

//СЛУШАЕМ ВСЕ ИНПУТЫ НА ВАЛИДНОСТЬ И ВЫЗЫВАЕМ СОСТОЯНИЕ КНОПКИ
const setEventListeners = (formElement) => {
    const formInputs = Array.from(formElement.querySelectorAll('.edit-form__input'));
    const buttonElement = formElement.querySelector('.edit-form__submit-button');
    toggleButtonState(formInputs, buttonElement);


    formInputs.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            toggleButtonState(formInputs, buttonElement);
        });
    });
};

//СБРОС ОШИБОК


//СЛУШАЕМ ВСЕ ФОРМЫ НА ВАЛИДНОСТЬ
const enableValidation = () => {
    const forms = Array.from(document.querySelectorAll('.edit-form'));

    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formElement);
    });
};

