import { API } from '../constants';

function emailLogin(email, password){
    var formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Email Login API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Email Login API Error", err);
            reject(err);
        });
    });
}

function emailSignup(params){
    console.log(params);
    if(params.interests == undefined){
      params.interests = '59b02c4a5ecd37001fe35074,1';
    }
    var formData = new FormData();
    formData.append('name', 'Tester');
    formData.append('email', params.email);
    formData.append('birthday', params.birthday);
    formData.append('zipcode', params.zipcode);
    formData.append('gender', params.gender?1:0);
    formData.append('marital', params.marital?1:0);
    formData.append('kids', params.kids?1:0);
    if(params.phone != undefined){
        formData.append('phone', '+1' + params.phone);
    }
    formData.append('interests', params.interests);
    formData.append('source', 0);
    formData.append('type', 0);
    formData.append('password', params.password);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Email Signup API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Email Signup API Error", err);
            reject(err);
        });
    });
}

function sendCode(phone){
    var formData = new FormData();
    formData.append('phone', '+1' + phone);
    console.log(formData)

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/sendcode', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Sendcode API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Sendcode API Error", err);
            reject(err);
        });
    });
}

function verifyCode(token, code){
    var formData = new FormData();
    formData.append('token', token);
    formData.append('code', code);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/verifycode', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("VerifyCode API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("VerifyCode API Error", err);
            reject(err);
        });
    });
}

function loginCode(token, code){
    var formData = new FormData();
    formData.append('token', token);
    formData.append('code', code);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/logincode', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("LoginCode API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("LoginCode API Error", err);
            reject(err);
        });
    });
}

function searchUser(data){
    console.log('search call');
    var formData = new FormData();
    formData.append('email', data.email);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/user_find', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log(" API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log(" API Error", err);
            reject(err);
        });
    });
}

function getProfile(token){
    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/profile?token=' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => res.json())
        .then(data => {
            console.log("getProfile API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("getProfile API Error", err);
            reject(err);
        });
    });
}

function updateProfile(token, params){
    var formData = new FormData();
    formData.append("token", token);
    formData.append("name", params.name);
    formData.append("zipcode", params.zipcode);
    formData.append("birthday", params.birthday);
    formData.append("gender", params.gender?1:0);
    formData.append("marital", params.marital?1:0);
    formData.append("kids", params.kids?1:0);
    formData.append("phone", params.phone != "" ? "+1" + params.phone: "");
    formData.append("interests", params.interests);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/update', {
            method: 'PUT',
            headers: {
                'Content-Type':'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Update Profile API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Update Profile API Error", err);
            reject(err);
        });
    });
}

function changePassword(token, password){
    var formData = new FormData();
    formData.append('password', password);
    formData.append('token', token);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/update', {
            method: 'PUT',
            headers: {
                'Content-Type':'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Update Profile API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Update Profile API Error", err);
            reject(err);
        });
    });
}

function forgot(email){
    var formData = new FormData();
    formData.append('email', email);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'user/forgot',{
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then(data => {
            console.log("Forgot API Sucess");
            resolve();
        })
        .catch(err => {
            console.log("Forgot API Error",err);
            reject(err);
        });
    });
}

module.exports = {
    emailLogin,
    emailSignup,
    sendCode,
    verifyCode,
    loginCode,
    getProfile,
    updateProfile,
    changePassword,
    forgot,
    searchUser
}
