<template>
  <div class="chat-message">
    {{ message.value }}
    {{ message.user.name }}
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: ['message']
};
</script>

<style lang="scss">
#chat-message {
}
</style>