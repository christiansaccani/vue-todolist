const {createApp} = Vue;

createApp({
    data() {
        return {

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
                console.log(currentTask.done);
            }
            else {
                currentTask.done = false;
                console.log(currentTask.done);
            }
        },
        taskDelete(index) {
            this.tasks.splice(index, 1);
        },
    },

}).mount("#app");