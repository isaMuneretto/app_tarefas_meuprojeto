import axios from "axios";

const baseURL = "http://localhost:3001";

export function signup(data){

    const body = {
        ...data,
        username: generateUserName(data.username),
    }

    const response = axios.post(`${baseURL}/usuarios/`, body); 
    return response;
}

export function signin(data) {
    const response = axios.post(`${baseURL}/login/`, data); 
    return response;
}

function generateUserName(username){
    const nameLowerCaseWithoutSpaces = username.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}