<template>
    <div class="chat-box" id="chat">
        <p class="message response"><strong>[05/05 12:23] JohnDoe2:</strong> A confiança é uma mulher ingrata que te beija e te abaraça, te rouba e te mata.</p>
        <p class="message"><strong>[05/05 12:23] you:</strong> Você está certo...</p>
    </div>
</template>

<script>
export default {
    mounted() {
        var chatBox = document.getElementById("chat");
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
</script>

<style>
    .chat-box {
        max-height: 335px; /* Altura máxima da caixa de chat */
        max-width: 490px;
        overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando necessário */
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 5px;
    }
    
    .chat-box p {
        margin: 0;
    }
</style>