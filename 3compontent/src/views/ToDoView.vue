<script>
import axios from 'axios';
axios.defaults.baseURL = "/api/todo";
import ToDoList from '../components/ToDoList.vue';
export default {
  components:{ToDoList},
  data() {
    return {
      newTodo: '',
      todos: [
        { id: 1, text: 'HTML 배우기' },
        { id: 2, text: 'JavaScript 배우기' },
        { id: 3, text: 'Vue 배우기' }
      ]
    }
  },
  methods: {
    todoList() {
      axios.get('/')
        .then(response => this.todos = response.data);
    },
    addTodo() {
      axios.post('/', { text: this.newTodo })
        .then(() => {
          this.newTodo = '';
          this.todoList();
        });
    },
    removeTodo(id) {
      axios.delete(`/${id}`)
        .then(() => this.todoList());
    }
  },
  mounted() {
    this.todoList();
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button type="submit">할 일 추가</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo.id)">X</button>
    </li>
  </ul>
</template>
