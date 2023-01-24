import { config } from './data.js';

const checkRes = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
    .then(res => checkRes(res))
}

export const getCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
    .then(res => checkRes(res))
}

export const editProfile = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
    .then(res => checkRes(res))
}

export const addCardServer = (data) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    })
    .then( res => checkRes(res))
}

export const deleteCardServer = () => {
    return fetch(`${config.baseUrl}/cards/` + id, {
        method: "DELETE",
        headers: config.headers
    })
    .then(res => checkRes(res))
}

export const addLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/` + id, {
        method: "PUT",
        headers: config.headers
    })
    .then (res => checkRes(res))
}

export const removeLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/` + id, {
        method: "DELETE",
        headers: config.headers
    })
    .then(res => checkRes(res))
}

export const editAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatar
        })
    })
    .then(res => checkRes(res))
}