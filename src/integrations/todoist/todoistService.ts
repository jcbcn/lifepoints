import type { Task } from './models/task'
import { get } from 'svelte/store'
import { authToken } from '../../authStore';

const url = 'https://api.todoist.com/rest/v1';

export const init = async() => {
    //check authToken

    //check setup

    //loading
        //load points
        //build labelCache
        //load tasks
        //load rewards
}

export const fetchTasks = async (): Promise<Task[]> => {

    let headers: HeadersInit = {
        Authorization: `Bearer ${get(authToken)}`
    };

    let opts: RequestInit = {
        headers: headers
    };

    const filter = '(today%20%7C%20overdue)%20%26%20(%401P%20%7C%20%402P%20%7C%20%403P%20%7C%20%405P)';
    const response = await fetch(`${url}/tasks?filter=${filter}`, opts);
    return await response.json();
};

export const completeTask = async() => {
    
}

export const clearLocalStorage = () => {
    localStorage.clear();
}