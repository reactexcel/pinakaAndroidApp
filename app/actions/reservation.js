import { API } from '../constants';

function getReservation(token, status){
    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'reservation?token=' + token + '&status='   , {
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

function getAllReservation(token, status){
    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'reservation/all?token=' + token , {
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

function createReservation(token, params,paymentId){
    var formData = new FormData();
    formData.append("token", token);
    formData.append("feed_id", params.feed_id);
    formData.append("actual_price", params.actual_price);
    formData.append('people_count', params.people_count);
    formData.append('lane_count', params.lane_count);
    formData.append('booking_time', params.booking_time);
    formData.append('purchase_amount', params.purchase_amount);
    formData.append('article', params.reservation_for);
    formData.append('number', params.number),
    formData.append('cvv', params.cvv);
    formData.append('expired_m', params.expired_m);
    formData.append('expired_y', params.expired_y);
    formData.append('paymentId', paymentId);
    formData.append('showTime', params.showTime);

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

function cancelReservation(token, id, heading){
    var formData = new FormData();
    formData.append('token', token);
    formData.append('reservation_id', id);
    formData.append('reservation_for', heading);

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
    cancelReservation,
    getAllReservation
};