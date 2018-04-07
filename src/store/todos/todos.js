import TodoService from '../../services/todos.service';

const state = {
  todos: [
    {
      id: 1,
      text: 'Learn Vue'
    }, {
      id: 2,
      text: 'Learn about single-file components'
    }, {
      id: 3,
      text: 'Fall in love'
    }
  ]
}

const getters = {
  todos: state => state.todos
}

const actions = {
  async fetchTodos({commit}) {
    const todos = await TodoService.getTodos();
    console.log(todos.data.data.docs);
    commit('setTodos', todos.data.data.docs);
  },
  async addTodo ({
        commit
    }, todo) {
    
    commit('addTodos', todos)
  },

  deleteTodo ({
        commit
    }, todo) {
    commit('deleteTodo', todo)
  }
}

const mutations = {

  setTodos(state, todos) {
    state.todos = todos;
  },

  addTodos (state, todos) {
    state.todos = [
      ...state.todos,
      ...todos
    ]
    console.log(state)
  },
  deleteTodo (state, todo) {
    state.todos = state
            .todos
            .filter(t => t.id !== todo.id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
