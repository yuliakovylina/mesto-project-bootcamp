import { jobProfile, jobInput, nameProfile, nameInput, editPopup, popups , submitButtonProfile, avatarProfile, submitButtonAvatar, avatarPopup, avatarInput, deleteCardForm, deleteCardPopup, submitButtonDelete} from "./data.js";
import { closePopup, renderLoading } from "./utils.js";
import { deleteCardServer, editAvatar, editProfile } from "./api.js";

//ЗАКРЫТИЕ ПОПАПА КЛИКОМ НА ОВЕРЛЕЙ
export function clickCloseOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}


//ЗАКРЫТИЕ ПОПАПА НАЖАТИЕМ НА ESC
export function escapeListener (evt) {
    if (evt.key === 'Escape') {
        popups.forEach(closePopup);
        }
    }

//ОБРАБОТЧИК ФОРМЫ ПРОФИЛЯ
export function handleEditFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(true, submitButtonProfile)
    editProfile(nameInput.value, jobInput.value)
        .then(res => {
            nameProfile.id = res._id;
            jobProfile.textContent = res.about;
            nameProfile.textContent = res.name;
            evt.target.reset();
            closePopup(editPopup);
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
        .finally( () => {
            renderLoading(false, submitButtonProfile)
        })
}

export function handleAvatarEdit(evt) {
    evt.preventDefault();
   renderLoading(true, submitButtonAvatar)
   editAvatar(avatarInput.value)
    .then((res) => {
        avatarProfile.src = res.avatar;
        evt.target.reset();
        closePopup(avatarPopup);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
        renderLoading(false, submitButtonAvatar)
    })
}

export function handleDeleteCard(evt) {
    evt.preventDefault();
    renderLoading(true, submitButtonDelete, "Да", "Удаление...")
    const deleteCardId = deleteCardPopup.id
    deleteCardServer(deleteCardPopup.id)
        .then((res) => {
            deleteCardPopup.id = ''
            document.getElementById(`${deleteCardId}`).remove()
            closePopup(deleteCardPopup)
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
        .finally(() => {
            renderLoading(false, submitButtonDelete, "Да", "Удаление...")
        })
}

export function setEscapeClick (elem) {
    document.addEventListener('keydown', escapeListener);
    elem.addEventListener('mousedown', clickCloseOverlay);
}

export function removeEscapeClick (elem) {
    document.removeEventListener('keydown', escapeListener);
    elem.removeEventListener('mousedown', clickCloseOverlay);
}