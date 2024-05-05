<template>
    <template v-if="inQueue">
      <QueueComponent :toggleInQueue="toggleInQueue"/>
    </template>
    <template v-else>
      <LobbyComponent :toggleInQueue="toggleInQueue"/>
    </template>
</template>

<script lang="ts">
import LobbyComponent from "../components/LobbyComponent.vue";
import QueueComponent from "../components/QueueComponent.vue";

export default {
    name: "LobbyView",
    data() {
        return {
            inQueue: false,
        };
    },
    methods: {
        toggleInQueue() {
            this.inQueue = !this.inQueue;
        }
    },
    components: {
        LobbyComponent,
        QueueComponent,
    }
}
</script>

<style>
    .title{
        font-size: 2rem;
        font-weight: 900;
    }

    .subtitle{
        color: #5C8D89;
    } 
</style>