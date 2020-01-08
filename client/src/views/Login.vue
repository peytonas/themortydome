<template>
<body class="container-fluid bg">
  <div class="row justify-content-center">
    <div class="col-4 font mt-1">
      <form v-if="loginForm" @submit.prevent="loginUser">
        <input class="nes-input" type="email" v-model="creds.email" placeholder="email" />
        <input class="nes-input" type="password" v-model="creds.password" placeholder="password" />
        <button class="nes-btn is-primary mt-2">Login</button>
      </form>
      <form v-else @submit.prevent="register">
        <input class="nes-input" type="text" v-model="newUser.name" placeholder="name" />
        <input class="nes-input" type="email" v-model="newUser.email" placeholder="email" />
        <input class="nes-input" type="password" v-model="newUser.password" placeholder="password" />
        <button class="nes-btn is-primary mt-2">Create Account</button>
      </form>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="nes-container is-rounded is-dark" @click="loginForm = !loginForm">
      <p v-if="loginForm">
        <b>No account? Click here to Register</b>
      </p>
      <p v-else>
        <b>Already have an account? Click here to Login</b>
      </p>
    </div>
  </div>
</body>
</template>

<script>
import router from "@/router.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>

<style scoped>
.bg {
  background-image: url("https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-portal-wallpaper-007.jpg");
  height: 688px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>