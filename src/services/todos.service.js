import HttpClient from './http.client';

const getTodos = (size = 10, limit = 10, page = 1) => {
    return HttpClient.get('api/todos');
}

const TodoService = {
    getTodos
}

export default TodoService;