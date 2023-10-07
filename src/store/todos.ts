import {selector} from "recoil";

enum Api {
    GET_ALL_TODOS = 'https://jsonplaceholder.typicode.com/todos',
}

enum TodosKeys {
    TODOS_QUERY = 'TodosQuery',
}

interface AllTodosQuery {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

const getAllTodos = async () => {
    const resp = await fetch(Api.GET_ALL_TODOS)
    return resp.json();
}

export const allTodosQuery = selector<AllTodosQuery[]>({
    key: TodosKeys.TODOS_QUERY,
    get: getAllTodos,
});