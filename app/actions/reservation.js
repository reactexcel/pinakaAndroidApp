import { API } from '../constants';

function getReservation(token, status){
    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'reservation?token=' + token + '&status=' + status, {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => res.json())
        .then(data => {
            console.log("getReservation API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("getReservation API Error", err);
            reject(err);
        });
    });
}

function createReservation(token, params){
    var formData = new FormData();
    formData.append("token", token);
    formData.append("feed_id", params.feed_id);
    formData.append('people_count', params.people_count);
    formData.append('lane_count', params.lane_count);
    formData.append('booking_time', params.booking_time);
    formData.append('purchase_amount', params.purchase_amount);
    formData.append('number', params.number),
    formData.append('cvv', params.cvv);
    formData.append('expired_m', params.expired_m);
    formData.append('expired_y', params.expired_y);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("create Reservation API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("create Reservation API Error", err);
            reject(err);
        });
    });
}

function cancelReservation(token, id){
    var formData = new FormData();
    formData.append('token', token);
    formData.append('reservation_id', id);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'reservation/cancel', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Cancel Reservation API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Cancel Reservation API Error", err);
            reject(err);
        });
    });
}

module.exports = {
    getReservation,
    createReservation,
    cancelReservation
};