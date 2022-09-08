<template>
    <div id="app">
        <task v-bind:tasks="tasks"></task>
    </div>
</template>

<script>
import Task from "./components/Task";

export default{
    name: "app",
    components: {
        Task,
    },
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    title: "learn Vue JS",
                    completed: true,
                },
                {
                    id: 2,
                    title: "Watch Netflix",
                    completed: true,
                },
                {
                    id: 3,
                    title: "go shopping",
                    completed: false,
                },
                {
                    id: 4,
                    title: "learn Guitar",
                    completed: false,
                },
                {
                    id: 5,
                    title: "Send email",
                    completed: false,
                },
            ],
        };
    },
};
</script>