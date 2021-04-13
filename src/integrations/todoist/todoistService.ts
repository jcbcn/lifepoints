import type { Task } from './models/task'
import { get } from 'svelte/store'
import { authToken } from '../../authStore';
import type { Project } from './models/project';

const url = 'https://api.todoist.com/rest/v1';

const projectName = "_points";

export const labelCache = {
    2156538858: 1,
    2156538859: 2,
    2156538862: 3,
    2156538864: 5,
    2156538865: 8
};

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
        method: 'POST',
        headers: headers
    };

    const response = await fetch(`${url}/tasks/${task.id}/close`, opts);
    if(await response.ok){
        incrementLifepoints(getPointsForTask(task));
    }
}

export const incrementLifepoints = async(rewardedPoints: number) => {
    let currentLifepoints = await getLifepoints();
    currentLifepoints += rewardedPoints;

    var task = await getLifepointsTask();

    let headers: HeadersInit = {
        'Authorization': `Bearer ${get(authToken)}`,
        'Content-Type': 'application/json'
    };

    let opts: RequestInit = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({"content": currentLifepoints.toString()})
    };

    const response = await fetch(`${url}/tasks/${task.id}`, opts);
}

export const getLifepoints = async() : Promise<number> => {
    var project = await getLifepointsProject();

    let headers: HeadersInit = {
        Authorization: `Bearer ${get(authToken)}`
    };

    let opts: RequestInit = {
        headers: headers
    };

    const pointsReponse = await fetch(`${url}/tasks?project_id=${project.id}`, opts);
    let lifepoints: Task[] = await pointsReponse.json();

    return parseInt(lifepoints[0].content);
}

const getLifepointsTask = async() : Promise<Task> => {
    var project = await getLifepointsProject();

    let headers: HeadersInit = {
        Authorization: `Bearer ${get(authToken)}`
    };

    let opts: RequestInit = {
        headers: headers
    };

    const pointsReponse = await fetch(`${url}/tasks?project_id=${project.id}`, opts);
    let lifepoints: Task[] = await pointsReponse.json();
    return lifepoints[0]; //TODO by tag
}

const getLifepointsProject = async () : Promise<Project> => {
    let headers: HeadersInit = {
        Authorization: `Bearer ${get(authToken)}`
    };

    let opts: RequestInit = {
        headers: headers
    };

    const response = await fetch(`${url}/projects`, opts);
    var projects: Project[] = await response.json();

    var project = projects.filter(p => p.name == projectName)[0];
    return project;
}

const getPointsForTask = (task: Task) : number => {
    return labelCache[getLabelIdFromTask(task)];
}

const getLabelIdFromTask = (task: Task) : number =>  {
    return task.label_ids.length > 0 ? task.label_ids[0] : null;
}

export const clearLocalStorage = () => {
    localStorage.clear();
}