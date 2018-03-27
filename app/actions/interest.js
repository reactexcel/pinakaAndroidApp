import { API } from '../constants';

function getInterests(){
    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'interest', {
            method: "GET",
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Getting Interests API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Getting Interests API Error", err);
            reject(err);
        });
    });
}

module.exports = {
    getInterests
}