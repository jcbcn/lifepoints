import type { Task } from './models/task'

const url = 'https://api.todoist.com/rest/v1/';

const headers: HeadersInit = {
    Authorization: 'Bearer'
};

const opts: RequestInit = {
    headers: headers
};

export const fetchTasks = async () : Promise<Task[]> =>  {
    const filter = '(today%20%7C%20overdue)%20%26%20(%401P%20%7C%20%402P%20%7C%20%403P%20%7C%20%405P)';
    const response = await fetch(`${url}/tasks?filter=${filter}`, opts);
    return await response.json();
};