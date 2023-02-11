<template>
  <header class="w-full h-20">
    <div class="fixed top-0 left-0 w-full h-20 bg-nav-back">
      <div class="flex h-full border-b-4 border-solid border-black">
        <!--Logo in navbar also serves as link to home-->
        <div
          class="flex items-center h-full mr-auto px-7 hover:bg-nav-back-alt"
        >
          <logo />
        </div>
        <!--Navbar router link items-->
        <nav>
          <ul class="flex h-full list-none">
            <!--Adjusted Home link when employee is logged in-->
            <li v-if="loggedIn" class="flex h-full mx-10">
              <router-link
                to="/"
                class="flex items-center h-full px-7 text-4xl font-poppins hover:bg-nav-back-alt"
                >AA Gymetrics</router-link
              >
            </li>
            <!--Default margins and router link to Home-->
            <li v-else class="flex h-full mx-36">
              <router-link
                to="/"
                class="flex items-center h-full px-7 text-4xl font-poppins hover:bg-nav-back-alt"
                >AA Gymetrics</router-link
              >
            </li>
            <!--Adjusted About link when employee is logged in-->
            <li v-if="loggedIn" class="flex h-full mx-10">
              <router-link
                to="/about"
                class="flex items-center h-full px-7 text-4xl font-poppins hover:bg-nav-back-alt"
                >About Us</router-link
              >
            </li>
            <!--Default margins and router to About page-->
            <li v-else class="flex h-full mx-36">
              <router-link
                to="/about"
                class="flex items-center h-full px-7 text-4xl font-poppins hover:bg-nav-back-alt"
                >About Us</router-link
              >
            </li>
            <!--Conditional navbar item displays when employee is logged in-->
            <li v-if="loggedIn" class="flex h-full mx-10">
              <router-link
                to="/employee"
                class="flex items-center h-full px-7 text-4xl font-poppins hover:bg-nav-back-alt"
              >
                Employee Home
              </router-link>
            </li>
          </ul>
        </nav>
        <!--Dropdown displays on click only when employee is logged in-->
        <div class="flex text-lg items-center h-full ml-auto pr-10">
          <logout-dropdown v-if="loggedIn" />
          <action-button
            v-else
            text="Employee Login"
            type="primary"
            @click="$router.push('/login')"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
//Imported components and store/state properties and mutations
import { mapState, mapMutations } from "vuex";
import { LOGIN } from "@/store";
import Logo from "@/components/Navigation/Logo.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import LogoutDropdown from "@/components/Navigation/LogoutDropdown.vue";

export default {
  name: "Navbar",
  components: {
    Logo,
    ActionButton,
    LogoutDropdown,
  },
  //Utilze state property to keep track of login status
  computed: {
    ...mapState(["loggedIn"]),
  },
  //Utilize state mutation for logging in
  methods: {
    ...mapMutations([LOGIN]),
  },
};
</script>
