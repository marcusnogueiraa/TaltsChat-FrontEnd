<template>
    <div class="container">
        <h1 class="title">Wait a moment, <br>you're in queue!</h1>
        <h2 class="subtitle">We'll match you with<br> someone, John Doe!</h2>
        <br>
        <div class="leave-container">
            <img class="loading-icon" src="https://cdn-icons-png.flaticon.com/512/189/189768.png" alt="loading!">
            <button @click="toggleInQueue" class="leave-button">Leave Queue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "QueueComponent",
    props: {
        toggleInQueue: {type: Function, required: true},
    }
}
</script>

<style scoped>
    .leave-container{
        display: flex;
        gap: 2rem;
    }

    .leave-button{
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Inter";
        font-weight: 800;
        font-style: italic;
        background-color: white;
        color: #5C8D89;
        border: 2px solid #5C8D89;

        padding: 10px;
        width: 200px;
        height: 40px;
        border-radius: 20px;
    
        cursor: pointer;
        transition: 300ms ease-in-out;
    }

    .leave-button:hover {
        background-color: #5C8D89;
        color: white;
    }

    .loading-icon {
        height: 2rem;
        width: 2rem;
        animation: spin 3s linear infinite;
    }
    
    @keyframes spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
</style>