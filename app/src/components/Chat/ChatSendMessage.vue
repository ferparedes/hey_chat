<template>
  <div id="chat-send-message">
    <input type="text" placeholder="Type a message" v-model="message" />
    <div class="send" title="Send message" v-on:click="sendMessage">
      <img src="@/assets/images/send.png" />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "ChatSendMessage",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.message.trim() == "") {
        return;
      }

      this.$apollo
        .mutate({
          mutation: gql`
            mutation($user: ID!, $value: String!) {
              createMessage(input: { user: $user, value: $value }) {
                value
              }
            }
          `,
          variables: {
            user: "60b19277aad263390417bbe0",
            value: this.message,
          },
        })
        .then((result) => {
          console.log(result.data.createMessage);          
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss">
#chat-send-message {
  padding: 20px 20px 30px;
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