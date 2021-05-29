<template>
  <div id="chat-messages">
    <!-- <div v-for="message in chat" :key="message._id">
      {{ message.value }} /
      {{ message.user.name }}
    </div> -->
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "ChatMessages",
  data() {
    return {
      chat: [],
    };
  },
  created() {
    this.$apollo
      .mutate({
        mutation: gql`
          query {
            chat {
              _id
              value
              user {
                _id
                name
              }
            }
          }
        `,
      })
      .then((result) => {
        this.chat = result.data.chat;
      })
      .catch((error) => {
        console.error(error);
      });
  }  
};
</script>