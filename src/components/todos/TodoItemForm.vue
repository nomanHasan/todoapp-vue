<template>
  <div class="todo-form">
      <div class="todo-form--title">
          <div class="form-element">
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="todo.title"
            ></v-text-field>
          </div>
      </div>
      <div class="todo-form--description">
          <div class="form-element">
    <v-text-field
        name="description"
        label="Description"
        id="description"
        v-model="todo.description"
      ></v-text-field>
          </div>
      </div>
      <div class="todo-form--date">
          <div class="form-element">
      <v-menu
        ref="menu"
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        min-width="290px"
        :return-value.sync="todo.date"
      >
        <v-text-field
          slot="activator"
          label="Picker in menu"
          v-model="todo.date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="todo.date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(todo.date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
          </div>
      </div>
      <div class="todo-form--options">
          <v-btn color="primary" @click="submit()" >
              Submit
          </v-btn>
          <v-btn color="warn">
              Reset
          </v-btn>
          <v-btn color="error">
              Cancel
          </v-btn>
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
    },
    data: function() {
        return {
            landscape: true,
            menu: false,
            modal: false
        }
    },
    methods: {
        onDateChange: e => {
            console.log(e);
        },
        submit() {
            const {title, description, date} = this.todo;
            this.$emit('submit', {title, description, date});
        }
    }
};
</script>

<style>
.todo-form {
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin: 2px;
}

.form-element {
    margin: 0px 10px;
}

.todo-form--title {
  flex: 2;
  /* padding: 10px; */
}
.todo-form--description {
  flex: 2;
  /* margin: 10px; */
}
.todo-form--date {
  flex: 2;
  /* margin: 10px; */
}
.todo-form--options {
  flex: 3;
}
</style>
