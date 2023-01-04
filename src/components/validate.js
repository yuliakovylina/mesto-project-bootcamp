export const formSelectors = {
    formSelector: ".edit-form",
    inputSelector: ".edit-form__input",
    submitButtonSelector: ".edit-form__submit-button",
    inactiveButtonClass: "edit-form__submit-button_inactive",
    inputErrorClass: "edit-form__input_type_error",
    errorClass: "edit-form__input-error_active"
}

console.log(formSelectors)
//ФУНКЦИЯ ДОБАВЛЯЩАЯ КЛАСС С ОШИБКОЙ
const showInputError = (formElement, inputElement, error, formSelectors) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(formSelectors.inputErrorClass);
    errorElement.textContent = error;
    errorElement.classList.add(formSelectors.errorClass);
}

//ФУНКЦИЯ УДАЛЯЮЩАЯ КЛАСС С ОШИБКОЙ
const hideInputError = (formElement, inputElement, formSelectors) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(formSelectors.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(formSelectors.errorClass);
}

//ФУНКЦИЯ ВАЛИДНОСТЬ ПОЛЯ
const isValid = (formElement, inputElement, formSelectors) => {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, formSelectors);
    } else {
        hideInputError(formElement, inputElement, formSelectors);
    }
}

//ЕСТЬ ЛИ НЕВАЛИДНЫЕ ПОЛЯ : ДА/НЕТ
const hasInvalidInput = (formInputs) => {
    return formInputs.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

//ПЕРКЛЮЧАЕМ СОСТОЯНИЕ КНОПКИ ЕСЛИ ЕСТЬ НЕВАЛИДНОЕ ПОЛЕ
const toggleButtonState = (formInputs, buttonElement, formSelectors) => {
    if (hasInvalidInput(formInputs)) {
        buttonElement.classList.add(formSelectors.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(formSelectors.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

//СЛУШАЕМ ВСЕ ИНПУТЫ НА ВАЛИДНОСТЬ И ВЫЗЫВАЕМ СОСТОЯНИЕ КНОПКИ
const setEventListeners = (formElement, formSelectors) => {
    const formInputs = Array.from(formElement.querySelectorAll(formSelectors.inputSelector));
    const buttonElement = formElement.querySelector(formSelectors.submitButtonSelector);
    toggleButtonState(formInputs, buttonElement, formSelectors);


    formInputs.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, formSelectors);
            toggleButtonState(formInputs, buttonElement, formSelectors);
        });
    });
};

//СБРОС ОШИБОК


//СЛУШАЕМ ВСЕ ФОРМЫ НА ВАЛИДНОСТЬ
export const enableValidation = (formSelectors) => {
    const forms = Array.from(document.querySelectorAll(formSelectors.formSelector));

    forms.forEach((formElement) => {
        setEventListeners(formElement, formSelectors);
    });
};


