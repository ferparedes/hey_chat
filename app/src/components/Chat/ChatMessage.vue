<template>
  <div class="chat-message" v-bind:class="{ owner: isMessageOwner }">
    <div class="message-content">
      <div class="by">{{ message.user.name }}</div>
      {{ message.value }}
      <div class="created_at">{{ createdAt }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  props: ["message"],
  computed: {
    isMessageOwner() {
      return this.$store.getters.userId == this.message.user._id;
    },
    createdAt() {
      const timestamp = this.$store.state.user._id.toString().substring(0, 8);
      const date = new Date(parseInt(timestamp, 16) * 1000);
      let hours = date.getHours();
      let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;

      return `${hours}:${minutes} ${ampm} ${
        (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1)
      }/${
        (date.getDate() < 10 ? "0" : "") + date.getDate()
      }/${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss">
.chat-message {
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: flex-start;

  .message-content {
    max-width: 80%;
    min-width: 150px;
    padding: 5px 10px;
    background: #fff;
    border-radius: 12px;
    font-size: 1em;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 11px solid transparent;
      border-right-color: #fff;
      border-left: 0;
      border-bottom: 0;
      margin-top: -5.5px;
      margin-left: -11px;
    }
    @at-root .chat-message.owner .message-content {
      align-self: flex-end;
      background-color: #e9f5ff;
      &:after {
        content: "";
        position: absolute;
        left: initial;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 11px solid transparent;
        border-left-color: #e9f5ff;
        border-right: 0;
        border-bottom: 0;
        margin-top: -5.5px;
        margin-right: -11px;
      }
    }

    .by {
      font-size: 0.8em;
      padding-bottom: 2px;
    }

    .created_at {
      padding-top: 3px;
      font-size: 0.6em;
      text-align: right;
      color: #888;
      font-weight: 300;
    }
  }
}
</style>