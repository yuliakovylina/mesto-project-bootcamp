import { jobProfile, jobInput, nameProfile, nameInput, editPopup, popups , submitButtonProfile, avatarProfile, submitButtonAvatar, avatarPopup, avatarInput} from "./data.js";
import { closePopup, renderLoading } from "./utils.js";
import { editAvatar, editProfile } from "./api.js";

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
            closePopup(editPopup);
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
        .finally( () => {
            renderLoading(false, submitButtonProfile)
        })
    evt.target.reset();
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

export function setEscapeClick (elem) {
    document.addEventListener('keydown', escapeListener);
    elem.addEventListener('click', clickCloseOverlay);
}

export function removeEscapeClick (elem) {
    document.removeEventListener('keydown', escapeListener);
    elem.removeEventListener('click', clickCloseOverlay);
}