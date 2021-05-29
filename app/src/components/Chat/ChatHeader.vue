<template>
  <div id="chat-header-message">
    <div class="brand">
      <div class="logo">
        <img src="@/assets/images/rocket.png" />
      </div>
      Chat Room
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
};
</script>

<style lang="scss">
#chat-header-message {
  padding: 10px 20px;
  display: flex;
  background: #fff;
  border-bottom: 2px solid #ccc;
  align-items: center;

  .brand {
    display: flex;
    align-items: center;

    .logo {
      img {
        margin-right: 20px;
        width: 24px;
      }
    }
  }
}
</style>