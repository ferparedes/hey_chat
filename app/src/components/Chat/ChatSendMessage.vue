<template>
  <div id="chat-send-message">
    {{ message }}
    <input type="text" placeholder="Type a message" v-model="message" />
    <div class="send" title="Send message" v-on:click="sendMessage">
      <img src="@/assets/images/send.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatSendMessage",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      alert("send");
    },
  },
};
</script>

<style lang="scss">
#chat-send-message {
  padding: 20px 20px;
  background: #e8e8e8;
  border-top: 2px solid #ccc;
  display: flex;
  align-items: center;

  input {
    margin: 0 10px;
    padding: 4px 20px;
    height: 40px;
    flex: 1 1 auto;
    border-radius: 20px;
    border: none;
  }

  .send {
    cursor: pointer;
  }
}
</style>