import type { Task } from './models/task'
import { get } from 'svelte/store'
import { authToken } from '../../authStore';
import type { Project } from './models/project';

const url = 'https://api.todoist.com/rest/v1';

const projectName = "_points";

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

    const filter = '(today%20%7C%20overdue)%20%26%20(%401P%20%7C%20%402P%20%7C%20%403P%20%7C%20%405P%20%7C%20%408P)';
    const response = await fetch(`${url}/tasks?filter=${filter}`, opts);
    return await response.json();
};

export const completeTask = async(task:Task) => {
    let headers: HeadersInit = {
        Authorization: `Bearer ${get(authToken)}`
    };

    let opts: RequestInit = {
        headers: headers
    };

    const response = await fetch(`${url}/tasks/${task.id}/close`, opts);
    return await response.json();
}

export const getLifepoints = async() => {
    let headers: HeadersInit = {
        Authorization: `Bearer ${get(authToken)}`
    };

    let opts: RequestInit = {
        headers: headers
    };

    const response = await fetch(`${url}/projects`, opts);
    var projects: Project[] = await response.json();

    var project = projects.filter(p => p.name == projectName)[0];

    const pointsReponse = await fetch(`${url}/tasks?project_id=${project.id}`, opts);
    let lifepoints: Task[] = await pointsReponse.json();

    return lifepoints[0].content;
}

export const clearLocalStorage = () => {
    localStorage.clear();
}