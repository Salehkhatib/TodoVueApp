Vue.createApp({
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          description: "Html lernen",
          done: false,
        },
        {
          id: 2,
          description: "CSS lernen",
          done: false,
        },
        {
          id: 3,
          description: "Vue.js lernen",
          done: false,
        },
      ],
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: Date.now(),
        description: this.newTodo,
        done: false,
      });
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
  },
}).mount("#app");
