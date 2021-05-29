<template>
  <div id="chat-messages">
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
};
</script>

<style lang="scss">
#chat-messages {
  padding: 10px 20px 5px;
  background: #ccc;
}
</style>