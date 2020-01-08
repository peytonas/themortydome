<template>
  <tr class="user">
    <td>{{userProp.name}}</td>
    <td>{{userProp.highScore}}</td>
  </tr>
</template>
<script>
export default {
  name: "user",
  data() {
    return {};
  },
  mounted() {},
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {},
  props: ["userProp"]
};
</script>