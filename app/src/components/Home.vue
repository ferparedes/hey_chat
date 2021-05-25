<template>
  <div id="home">
    <div class="title">
      Welcome
      <div>
        <img src="@/assets/images/rocket.png" />
      </div>
    </div>
    <div class="content">
      <div class="instructions">Enter your name to enter the chat room</div>
      <form>
        <input type="text" placeholder="Name" />
        <div class="enter" title="Start" v-on:click="signIn">
          <img src="@/assets/images/enter.png" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    signIn() {
      
    },
  },
};
</script>

<style lang="sass">
#home
    display: flex
    flex-direction: column
    padding-bottom: 30px
    align-items: center

    .title
        display: flex
        padding-top: 3rem
        padding-bottom: 3.5rem
        font-size: 2em
        font-weight: 500
        justify-content: center

        img
            width: 24px
            margin-left: 10px

    .content

        .instructions
            font-size: 1em
            padding-bottom: 1.5rem

        form
            display: flex
            justify-content: center
            align-items: center

            .enter
                cursor: pointer
                $home-enter: &

                img
                    transition: all 0.45s ease
                    @at-root #{$home-enter}:hover img
                        transform: translateX(3px)

            input
                height: 40px
                font-size: 1.3em
                border: none
                flex: 0 1 auto
                border-bottom: 2px solid #474747
                transition: border 0.3s linear
                &:focus
                    border-color: #5e9bf3
</style>