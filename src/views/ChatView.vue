<template>
    <div class="container">
        <h1 class="title">Chat with JohnDoe2</h1>
        <button class="leave-chat">Next Chat</button>
        <ChatComponent/>
        <div class="send-message-container">
            <textarea placeholder="Send a message..." class="send-message-input" type="text"></textarea>
            <button class="send-button">SEND</button>
        </div>
    </div>
</template>

<script>
import ChatComponent from "../components/ChatComponent.vue";

export default {
    name: "ChatView",
    components: {
        ChatComponent
    }
}
</script>

<style>
.response strong {
    color: #5C8D89;
}

.send-message-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.send-message-input {
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

.send-message-input::placeholder {
    font-weight: 1000;
    color: rgba(92, 141, 137, 0.17);
    
    font-size: 1.2rem;
    font-family: "Inter";
    font-style: bold;
}

.send-message-input:focus{
    outline: none;
    border-color: #5C8D89;
}

.send-button{
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

.send-button:hover {
    background-color: #5C8D89;
    color: white;
}

.leave-chat {
    border: 1px solid #5C8D89;
    padding: 3px;
    background-color: white;
    border-radius: 10px;
    color: #5C8D89;
    font-family: "Inter";
    font-weight: 800;
    cursor: pointer;
    transition: 300ms ease-in-out;
}

.leave-chat:hover {
    background-color: #5C8D89;
    color: white;
}
</style>