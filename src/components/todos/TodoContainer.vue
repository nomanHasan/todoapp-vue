<template>
  <div class="todo-container">
  <TodoList
  v-if="todos && todos.length"
  :todos="todos"
  >
    
  </TodoList>
  <TodoItemForm :todo="newTodo" @submit="onSubmit"></TodoItemForm>
  </div>

</template>

<script>
import TodoList from "./TodoList";
import TodoItemForm from './TodoItemForm';
// import VTextField from 'vuetify/src/components';
import { mapGetters, mapActions } from "vuex"

export default {
  data: function() {
    return {
      newTodo: {
        title: '',
        description: '',
        date: new Date().toISOString().slice(0, 10)
      }
    }
  },
  computed: {
    todos: function() {
      console.log(this.$store.getters.todos);
      return this.$store.getters.todos;
    }
  },
  
  methods: {
    onSubmit(todo) {
      this.$store.dispatch('addTodo', todo);
    }
  },
  components: {
    TodoList,
    TodoItemForm
  },
  beforeCreate: function() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>

<style>

</style>
