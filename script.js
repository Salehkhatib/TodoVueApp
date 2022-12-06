const app = Vue.createApp({
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },

  async created() {
    const response = await fetch("http://localhost:3000/todos");
    this.todos = await response.json();
  },
  methods: {
    async saveTodos() {
      const newTodo = {
        description: this.newTodo,
        done: false,
      };
      await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      this.addNewTodo();
    },

    async deleteTodos() {
      this.todos.forEach((todo) => {
        if (todo.done === true) {
          let id = todo.id;
          fetch("http://localhost:3000/todos/" + id, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then(() => {});
        }
      });
      this.deleteAllDone();
    },

    addNewTodo() {
      this.todos.push({
        id: Date.now(),
        description: this.newTodo,
        done: false,
      });
      this.resetInput();
    },

    resetInput() {
      this.newTodo = "";
    },

    changeDoneState(id) {
      const currentTodo = this.todos.find((todo) => todo.id === id);
      currentTodo.done = !currentTodo.done;
    },

    deleteAllDone() {
      this.todos = this.todos.filter((todo) => {
        return todo.done !== true;
      });
    },

    filterDone(event) {
      let filteredList = [];
      if (event.target.checked) {
        filteredList = this.todos.filter((todo) => {
          if (todo.done === true) {
            return todo;
          }
        });
      }
      this.todos = filteredList;
    },

    filterOpen(event) {
      let filteredList = [];
      if (event.target.checked) {
        filteredList = this.todos.filter((todo) => {
          if (todo.done === false) {
            return todo;
          }
        });
      }
      this.todos = filteredList;
    },

    async loadTodos() {
      const response = await fetch("http://localhost:3000/todos");
      this.todos = await response.json();
    },
  },
}).mount("#app");
