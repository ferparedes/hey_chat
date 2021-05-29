<template>
  <div class="chat-message">
    <div class="message-content">
      <div class="by">{{ message.user.name }}</div>
      {{ message.value }}
      <div class="created_at">05:40 pm</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  props: ["message"],
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
      font-size: 0.6em;
      text-align: right;
      color: #888;
    }
  }
}
</style>