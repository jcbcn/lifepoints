import type { Task } from './models/task'

const url = 'https://api.todoist.com/rest/v0/';

const headers: HeadersInit = {
    Authorization: 'Bearer ${}'
};

const opts: RequestInit = {
    headers: headers
};

export const fetchTasks = async () : Promise<Task> =>  {
    const filter = '(today | overdue) & (@1P | @2P | @3P | @5P)';
    const response = await fetch(`${url}/tasks/?filter=${filter}`, opts);
    return await response.json();
};