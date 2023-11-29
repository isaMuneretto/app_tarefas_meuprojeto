import axios from "axios";

const baseURL = "http://localhost/3001";

export function getAllTarefas() {
    const response = axios.get(`${baseURL}/tarefa`); //é assincrono aqui, sai da front e vai p/ o back pegar os dados
    return response;
}