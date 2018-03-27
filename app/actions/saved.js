import { API } from '../constants';

function savedFeed(token, feed_id){
    var formData = new FormData();
    formData.append('token', token);
    formData.append('feed_id', feed_id);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'saved', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Saved API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Saved API Error", err);
            reject(err);
        });
    });
}

function unSavedFeed(token, feed_id){
    var formData = new FormData();
    formData.append('token', token);
    formData.append('id', feed_id);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'saved', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("UnSaved API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("UnSaved API Error", err);
            reject(err);
        });
    });
}

function getSavedList(token){
    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'saved?token=' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => res.json())
        .then(data => {
            console.log("getSaveds API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("getSaved API Error", err);
            reject(err);
        });
    });
}

module.exports = {
    savedFeed,
    unSavedFeed,
    getSavedList
}