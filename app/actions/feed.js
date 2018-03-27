import { API } from '../constants';

function getFeedList(token, type, tag){
    console.log('getFeedList URL:---> ', API.SERVER_DEV_URL + 'feed/list?token='+token + '&type=' + type+'&page=0&perpage=50&tag='+tag)
    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'feed/list?token='+token + '&type=' + type+'&page=0&perpage=50&tag='+tag, {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Feed List API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Feed List API Error", err);
            reject(err);
        });
    });
}

module.exports = {
    getFeedList
}