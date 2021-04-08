import config from './authConfig';
import { authToken, accessToken } from './authStore';
import { get } from 'svelte/store'
 
const url: string = "";

function login(){
    loginRedirect();
}

async function checkCallback(){
    var token = sessionStorage.getItem('authToken');
    var at = sessionStorage.getItem('accessToken');

    if(token) {
        authToken.set(token);
        await getAccessToken(); //Move to store
    }
}

export const getAccessToken = async() => {
    const opt: RequestInit = {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        body: new URLSearchParams({
            'client_id': config.clientId,
            'client_secret': config.clientSecret,
            'code': get(authToken),
            'redirect_uri': 'https://localhost:3000/callback'
          })
    };

    const response = await fetch(`https://${config.domain}/access_token`, opt);
    const json = await response.json();
    accessToken.set(json.access_token);
}

function logout(){
    //clear tokens
}

function loginRedirect(){
    window.location.href =
    `https://${config.domain}/authorize?client_id=${config.clientId}` +
    '&scope=data%3Aread_write' +
    '&state=TODO';
}

export {
    login,
    logout,
    checkCallback
}