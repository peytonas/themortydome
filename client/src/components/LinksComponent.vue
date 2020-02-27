<template>
  <div class="linksComponent">
    <div class="row justify-content-end" v-if="this.$route.name != `login`">
      <div class="col-2 mt-4 text-right">
        <li class="dropdown">
          <a class="dropbtn nes-container is-dark is-rounded text-warning">
            {{this.$store.state.user.name}}
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown-content text-left">
            <a href="#" v-if="this.$route.name != `home`">
              <router-link class="size" :to="{name: `home`}">Home</router-link>
            </a>
            <a href="#" v-if="this.$route.name == `home`">
              <router-link class="size" :to="{name: `garage`}">Garage</router-link>
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
  // data() {
  //   return {
  //     avatar:
  //       "https://robohash.org/" + this.$store.state.user.name + "?size=40x40"
  //   };
  // },
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
  background-color: #202429;
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
  background-color: rgba(255, 255, 255, 0.9);
  min-width: 160px;
}

.dropdown-content a {
  color: #202429;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #202429;
}
.size {
  font-size: 1rem;
}
</style>