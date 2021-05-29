<template>
  <div id="chat-send-message">
    <form @submit.prevent="sendMessage">
      <input type="text" placeholder="Type a message" v-model="message" />
    </form>
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
            user: this.$store.getters.userId,
            value: this.message,
          },
        })
        .then(() => {
          this.message = "";
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

  form {
    flex: 1 1 auto;
    margin: 0 10px;
    input {
      width: 100%;
      padding: 4px 20px;
      height: 40px;
      border-radius: 20px;
      border: none;
    }
  }

  .send {
    cursor: pointer;
  }
}
</style>