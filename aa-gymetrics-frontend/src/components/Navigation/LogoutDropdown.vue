<template>
  <div class="flex flex-nowrap">
    <div class="relative inline-flex align-middle w-full font-poppins">
      <!--Dropdown button-->
      <button
        ref="btnDropdownRef"
        class="flex text-white text-lg px-6 py-3 rounded hover:bg-btn-primary-alt w-full bg-btn-primary-blue"
        type="button"
        @click="toggleDropdown()"
      >
        <!--Employee Greeting (will be changed to use Employee name)-->
        Hello {{ employeeName }}&emsp;
        <div class="flex items-center object-contain h-6 w-6">
          <!--Utilize computed method to determine which icon to show-->
          <svg>
            <font-awesome-icon :icon="arrowIcon" />
          </svg>
        </div>
      </button>
      <!--Enclosing div for logout dropdown button-->
      <div
        ref="popoverDropdownRef"
        :class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
        class="text-md z-50 float-left text-right rounded w-full"
      >
        <!--Action button component to logout user-->
        <action-button
          class="h-full w-full"
          text="Logout"
          type="danger"
          @click="LOGOUT"
        />
      </div>
    </div>
  </div>
</template>

<script>
//Imports for dependencies, state properties, mutations, and component
import { createPopper } from "@popperjs/core";
import { mapState, mapMutations } from "vuex";
import { LOGOUT } from "@/store";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "Dropdown",
  components: {
    ActionButton,
  },
  //Local conditional to determine whether dropdown should show or not
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  //Use global state property for loggedIn status
  computed: {
    ...mapState(["loggedIn", "employeeName"]),
    arrowIcon() {
      return this.dropdownPopoverShow
        ? ["fas", "chevron-up"]
        : ["fas", "chevron-down"];
    },
  },
  //Methods for dropdown and change of state
  methods: {
    //Toggle the dropdown logic to show dropdown menu or not
    toggleDropdown: function () {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    //Use to change loggedIn state
    ...mapMutations([LOGOUT]),
  },
};
</script>
