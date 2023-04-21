<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
