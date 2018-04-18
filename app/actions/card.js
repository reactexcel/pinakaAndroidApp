import { API } from '../constants';

function deleteCard(token, id){
    var formData = new FormData();
    formData.append('token', token);
    formData.append('id', id);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'credit',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Deleting Card API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Deleting Card API Error", err);
            reject(err);
        });
    });
}

function saveCard(token, params){
    var formData = new FormData();
    formData.append('number', params.number);
    formData.append('token', token);
    formData.append('cvv', params.cvv);
    formData.append('expired_m', params.expired_m);
    formData.append('expired_y', params.expired_y);
    formData.append('id', params.id);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'credit', {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Saving Card API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Saving Card API Error", err);
            reject(err);
        });
    });
}

function createCardToken( params){
  params.currency = 'usd';
  if(params.amount === undefined){
    params.amount = 444;
  }
  console.log('createCardToken',params);
  var stripe_url = 'https://api.stripe.com/v1/';
  var secret_key = 'sk_test_43l781B2lemmqcwCbHvmj15D';
    let formBody = 'card[number]='+params.number+'&card[exp_month]='+params.expired_m+'&card[exp_year]='+params.expired_y+'&card[cvc]='+params.cvv+'&card[currency]='+params.currency;
    console.log(stripe_url + 'tokens?'+formBody);
    console.log('Bearer ' + secret_key);
  return new Promise((resolve, reject) => {
      fetch(stripe_url+'tokens?'+formBody , {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Authorization": "Bearer pk_live_LlPSvMMjuPTId8RS2sRhN8A7"
          },
      })
      .then((res) => res.json())
      .then(data => {
          console.log("Adding Card API Success", data);
          resolve(data);
      })
      .catch(err => {
          console.log("Adding Card API Error", err);
          reject(err);
      });
  });
}

function cardPay(data){
  const payload = {stripeToken:data.data.id,currency:data.currency,description:data.description,amount:data.amount};
  console.log(payload,'payload');
  return new Promise((resolve, reject) => {
      fetch(API.SERVER_DEV_URL +'payment/stripe_payment',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            // "Authorization": "Bearer sk_test_t33bUz9G1cD2X6UexENeMvpd"
          },
          body: JSON.stringify(payload)
      })
      .then((res) => res.json())
      .then(data => {
          console.log("pay Success", data);
          resolve(data);
      })
      .catch(err => {
          console.log("pay Error", err);
          reject(err);
      });
  });
}

function addCard(token, params){
    var formData = new FormData();
    formData.append("number", params.number);
    formData.append("cvv", params.cvv);
    formData.append("expired_m", params.expired_m);
    formData.append("expired_y", params.expired_y);
    formData.append("token", token);

    return new Promise((resolve, reject) => {
        fetch(API.SERVER_DEV_URL + 'credit', {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Adding Card API Success", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Adding Card API Error", err);
            reject(err);
        });
    });
}

module.exports = {
    deleteCard,
    saveCard,
    addCard,
    createCardToken,
    cardPay
}
