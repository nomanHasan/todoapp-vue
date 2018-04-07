<template>
  <div class="todo-list">
      <TodoItem class="todo-item" v-for="todo in todos" :key="todo._id" :todo="todo">
      </TodoItem>
  </div>
</template>

<script>

import TodoItem from './TodoItem';

export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoItem
  }
};
</script>

<style>
.todo-list {
    display: flex;
    flex-direction: column;
}

.todo-item{
    display: flex;
    flex-direction: row;
    padding: 15px;
    margin: 2px;
    box-shadow: 0px 4px 2px 0px #8686861c
}

.todo-item--title {
    flex: 4;
}

.todo-item--options {
    flex: 3;
}

</style>
