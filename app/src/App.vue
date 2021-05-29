<template>
  <div id="app" v-bind:class="{ loaded: loaded, 'chat-mode': signed }">
    <div class="content">
      <Home v-if="!signed" @signIn="signIn" />
      <Chat v-if="signed" />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Chat from "./components/Chat.vue";

export default {
  name: "App",
  components: {
    Home,
    Chat,
  },
  data() {
    return {
      loaded: false,
      signed: false,
    };
  },
  created() {
    setTimeout(() => {
      this.loaded = true;
    }, 200);
  },
  computed: {},
  methods: {
    signIn() {
      this.signed = true;
    },
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap')

html
  box-sizing: border-box
  height: 100%

*, *:before, *:after
  box-sizing: inherit

body
  margin: 0
  height: 100%
  background-color: #e8e8e8
  transition: background 0.8s ease

#app
  font-family: 'Roboto', sans-serif
  color: #2c3e50
  transform: translateY(-15%)
  opacity: 0
  transition: all 0.9s ease
  height: 100%
  $app: &
  &.loaded
    transform: translateY(0%)
    opacity: 1
  &.chat-mode 
    background: #ccc

  > .content
    width: 95%
    max-width: 600px
    margin: auto
    height: 100%
    border-bottom-right-radius: 20px
    border-bottom-left-radius: 20px
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 18px
    transition: max-height 2.2s linear 0.3s, border-radius 1.5s ease 0.3s
    background: #fff
    padding: 20px
    height: auto
    max-height: 80vh

    @at-root #{$app}.chat-mode .content
      padding: 0px;
      height: 100%
      max-height: 1000px
      border-radius: 0

*:focus
  outline: none
</style>
