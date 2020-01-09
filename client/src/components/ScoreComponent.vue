<template>
  <tr class="user">
    <td>{{userProp.name}}</td>
    <td>{{userProp.highScore}}</td>
    <td>{{this.newDate}}</td>
  </tr>
</template>
<script>
export default {
  name: "user",
  mounted() {},
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  data() {
    return {
      newDate: this.userProp.updatedAt.substring(
        0,
        this.userProp.updatedAt.length - 14
      )
    };
  },
  methods: {},
  props: ["userProp"]
};
</script>