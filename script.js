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
          id: 1,
          description: "CSS lernen",
          done: false,
        },
        {
          id: 1,
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
  },
}).mount("#app");
