<template>
  <div class="todo-item">
        <div class="todo-item--title" v-html="todo.title" ></div>
        <div class="todo-item--description" v-html="todo.description" ></div>
        <div class="todo-item--date">
          {{ new Date(todo.date).toDateString() }}
        </div>
        <div class="todo-item--options">
          <v-btn >Complete</v-btn>
           <v-btn  color="primary">Edit</v-btn> 
           <v-btn  color="error">Delete</v-btn>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.todo-list {
  display: flex;
  flex-direction: column;
}

.todo-item {
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin: 2px;
  box-shadow: 0px 4px 2px 0px #8686861c;
}

.todo-item--title {
    flex: 2;
}

.todo-item--description {
    flex: 2;
}

.todo-item--date {
  flex: 2;
}

.todo-item--options {
    flex: 3;
}
</style>
