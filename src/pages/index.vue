<template>
  <div>
    <component
      :is="activeComponent"
      @setPhone="setPhone"
      @changeComponent="changeComponent"
      :phone="phone"
    ></component>
  </div>
</template>

<script>
import authLogin from "../components/auth/authLogin.vue";
import authVerify from "../components/auth/authVerify.vue";

export default {
  // mounted() {
  //   if (localStorage.getItem("token")) {
  //     this.$router.push({ path: "/dashboard/dong" });
  //   } else {
  //     this.$router.push({ path: "/login" });
  //   }
  // },
  components: {
    authLogin,
    authVerify,
  },
  data() {
    return {
      currentComponent: "authLogin",
      phone: "",
    };
  },

  methods: {
    setPhone(phone) {
      this.phone = phone;
    },
    changeComponent() {
      if (this.currentComponent == "authLogin") {
        this.currentComponent = "authVerify";
      } else {
        this.currentComponent = "authLogin";
      }
    },
  },
  computed: {
    activeComponent() {
      return this.currentComponent;
    },
  },
};
</script>

<style>
</style>r