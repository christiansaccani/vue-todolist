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

    },

}).mount("#app");