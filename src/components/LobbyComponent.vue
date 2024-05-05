<template>
    <div class="container">
        <h1 class="title">Welcome to <br> RandomChat</h1>
        <input class="username-input" placeholder="Username"/>
        <div class="submit-container">
            <h3 class="nav-link">How does it work?</h3>
            <button @click="toggleInQueue" class="submit-button">I WANT TO TALK!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "LobbyComponent",
    props: {
        toggleInQueue: {type: Function, required: true},
    }
}
</script>

<style scoped>
    .username-input {
        font-weight: 100;
        font-size: 1.2rem;
        
        max-width: 360px;
        width: 80vw;
        height: 60px;
        
        background-color: transparent;
        border: 2px solid #000000;
        border-radius: 10px;
        
        padding: 20px;

        transition: 0.4s ease-in-out;
    }

    .username-input::placeholder {
        font-weight: 1000;
        color: rgba(92, 141, 137, 0.17);
        
        font-size: 1.2rem;
        font-family: "Inter";
        font-style: bold;
    }

    .username-input:focus{
        outline: none;
        border-color: #5C8D89;
    }

    .submit-container {
        gap: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 10px;
        max-width: 80vw;
    }

    .submit-button{
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Inter";
        font-weight: 800;
        font-style: italic;
        color: white;
        background-color: #5C8D89;

        padding: 10px;
        width: 200px;
        height: 40px;
        border: none;
        border-radius: 20px;
    
        cursor: pointer;
        transition: 300ms ease-in-out;
    }

    .submit-button:hover{
        scale: 1.05;
    }

    .nav-link{
        cursor: pointer;
        text-decoration: none;
        font-family: "Inter";
        font-weight: 100;
    
        transition: 100ms ease-in-out;
    }

    .nav-link:hover{
        color: #5C8D89;
        font-weight: 800;
    }
</style>