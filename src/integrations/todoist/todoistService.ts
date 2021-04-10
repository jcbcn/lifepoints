import type { Task } from './models/task'
import { get } from 'svelte/store'
import { authToken } from '../../authStore';


export const fetchTasks = async (): Promise<Task[]> => {
    const url = 'https://api.todoist.com/rest/v1/';

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

export const clearLocalStorage = () => {
    localStorage.clear();
}