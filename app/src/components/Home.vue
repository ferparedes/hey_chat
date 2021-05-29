<template>
  <div id="home">
    <div class="title">
      Welcome
      <div>
        <img src="@/assets/images/rocket.png" />
      </div>
    </div>
    <div class="content">
      <div class="instructions">{{ instructions }}</div>
      <form>
        <div class="field">
          <input
            type="text"
            v-model="username"
            placeholder="hello"
            :readonly="isLoading"
          />
          <div class="hint" v-if="hasError">{{ error }}</div>
        </div>
        <div class="enter" title="Start" v-on:click="signIn" v-if="!isLoading">
          <img src="@/assets/images/enter.png" />
        </div>
        <div class="loading" v-else title="Loading">
          <img src="@/assets/images/rocket-loading.gif" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Home",
  data() {
    return {
      instructions: "Enter your name to enter the chat room",
      error: "",
      username: "fer",
      validations: {
        minLength: 2,
      },
      loading: false,
    };
  },
  created() {},
  computed: {
    hasError() {
      return this.error.trim() == "" ? false : true;
    },
    isLoading() {
      return this.loading;
    },
  },
  watch: {
    username() {
      this.clearError();
    },
  },
  methods: {
    signIn() {
      if (this.username.trim() == "") {
        this.error = "Enter your name to continue";
        return;
      }

      if (this.username.trim().length < this.validations.minLength) {
        this.error = `Please enter at least ${this.validations.minLength} characters`;
        return;
      }

      this.loading = true;
      this.instructions = "Connecting to the chat room";

      this.$apollo
        .mutate({
          mutation: gql`
            mutation($user: String!) {
              createUser(input: { name: $user }) {
                _id
                name
              }
            }
          `,
          variables: {
            user: this.username,
          },
        })
        .then((result) => {
          console.log(result.data.createUser);
          this.$emit("signIn");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    clearError() {
      this.error = "";
    },
  },
};
</script>

<style lang="scss">
#home {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  align-items: center;

  .title {
    display: flex;
    padding-top: 3rem;
    padding-bottom: 3.5rem;
    font-size: 2em;
    font-weight: 500;
    justify-content: center;

    img {
      width: 24px;
      margin-left: 10px;
    }
  }
  .content {
    .instructions {
      font-size: 1em;
      padding-bottom: 1.5rem;
      text-align: center;
    }

    form {
      padding-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      .enter {
        width: 24px;
        cursor: pointer;
        $home-enter: &;

        img {
          transition: all 0.45s ease;
          @at-root #{$home-enter}:hover img {
            transform: translateX(3px);
          }
        }
      }

      .loading {
        width: 24px;
        height: 24px;

        img {
          width: 24px;
        }
      }

      .field {
        position: relative;

        input {
          height: 40px;
          font-size: 1.3em;
          border: none;
          flex: 0 1 auto;
          border-bottom: 2px solid #474747;
          transition: border 0.3s linear;
          &:focus {
            border-color: #5e9bf3;
          }
        }

        .hint {
          font-size: 13px;
          color: red;
          position: absolute;
          bottom: -20px;
          left: 0;
        }
      }
    }
  }
}
</style>