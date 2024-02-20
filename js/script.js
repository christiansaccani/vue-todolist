const {createApp} = Vue;

createApp({
    data() {
        return {

            addTask: "",

            tasks: [
                {
                    text: "Rifai il letto",
                    done: false,
                },
                {
                    text: "Lavati",
                    done: false,
                },
                {
                    text: "Porta fuori il cane",
                    done: false,
                },
            ]

        }
    },

    methods: {
        taskDone(currentTask) {
            if (! currentTask.done){
                currentTask.done = true;
            }
            else {
                currentTask.done = false;
            }
        },

        taskDelete(index) {
            this.tasks.splice(index, 1);
        },

        addNewTask() {
            this.tasks.push({
                text: this.addTask,
                done: false,
              });
            this.addTask = "";
        },
    },

}).mount("#app");