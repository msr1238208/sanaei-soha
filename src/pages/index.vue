<template>
  <div>
    <KeepAlive>
      <component :is="activeComponent"></component>
    </KeepAlive>
  </div>
</template>

<script>
import authLogin from "../components/auth/authLogin.vue";
import authVerify from "../components/auth/authVerify.vue";

export default {
  components: {
    authLogin,
    authVerify,
  },
  computed: {
    activeComponent() {
      return "authLogin";
    },
  },
};
</script>

<style>
</style>r