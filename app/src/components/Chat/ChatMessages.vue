<template>
  <div id="chat-messages" ref="chatMessage">
    <ChatMessage
      v-for="message in messages"
      :key="message._id"
      :message="message"
    />
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage";

export default {
  name: "ChatMessages",
  props: ["messages"],
  components: {
    ChatMessage,
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  updated() {
    this.scrollToEnd();
  },
  methods: {
    scrollToEnd() {
      let containerChat = this.$refs.chatMessage;
      containerChat.scrollTop = containerChat.scrollHeight;      
    },
  },
};
</script>

<style lang="scss">
#chat-messages {
  padding: 10px 20px 5px;
  background: #ccc;
  background-image: url("../../assets/images/background-chat.jpg");
  background-size: cover  100%;
  background-position: center top;
  background-attachment: fixed;
}
</style>