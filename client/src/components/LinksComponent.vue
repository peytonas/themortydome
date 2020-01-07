<template>
  <div class="linksComponent">
    <div class="row justify-content-end" v-if="this.$route.name != `login`">
      <div class="col-2 mt-3 mr-4 text-right">
        <li class="dropdown">
          <a class="dropbtn text-white">
            {{this.$store.state.user.name}}
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown-content text-left">
            <a href="#" v-if="this.$route.name != `home`">
              <router-link :to="{name: `home`}">Home</router-link>
            </a>
            <a href="#" v-if="this.$route.name == `home`">
              <router-link class="size" :to="{name: `create`}">Make-a-Morty</router-link>
            </a>
            <a href="#">
              <h6 @click="logout()" aria-placeholder="logout-Button" class="logout">Logout</h6>
            </a>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
import NotificationService from "../NotificationService.js";
export default {
  name: "links",
  computed: {},
  methods: {
    async logout() {
      if (
        await NotificationService.confirmAction(
          "Are you sure you want to log out?"
        )
      ) {
        this.$store.dispatch("logout");
      }
    },
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style>
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 8px 8px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #a19e9e;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
.size {
  font-size: 13px;
}
</style>