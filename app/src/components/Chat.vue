<template>
  <div id="chat">
    <ChatHeader />
    <ChatMessages :messages="chat" />
    <ChatSendMessage />
  </div>
</template>

<script>
import gql from "graphql-tag";

import ChatHeader from "./Chat/ChatHeader.vue";
import ChatMessages from "./Chat/ChatMessages.vue";
import ChatSendMessage from "./Chat/ChatSendMessage.vue";

export default {
  name: "Chat",
  components: {
    ChatHeader,
    ChatMessages,
    ChatSendMessage,
  },
  data() {
    return {};
  },
  apollo: {
    chat: {
      query: gql`
        {
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
      subscribeToMore: {
        document: gql`
          subscription onMessageAdded {
            messageAdded {
              _id
              value
              user {
                _id
                name
              }
            }
          }
        `,
        updateQuery: (previousResult, { subscriptionData }) => {
          return {
            chat: [...previousResult.chat, subscriptionData.data.messageAdded],
          };
        },
      },
    },
  },
};
</script>

<style lang="scss">
#chat {
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    padding: 10px 20px;
    background: #fbfbfb;
    border-bottom: 2px solid #eee;
  }

  #chat-messages {
    flex: 1 1 auto;
    overflow: auto;
  }
}
</style>