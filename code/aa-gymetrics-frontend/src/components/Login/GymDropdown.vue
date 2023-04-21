<template>
  <div class="flex flex-nowrap">
    <div class="relative inline-flex align-middle font-poppins">
      <!--Dropdown button-->
      <button
        ref="btnDropdownRef"
        class="flex justify-center text-white text-lg px-6 py-3 rounded hover:bg-btn-primary-alt w-full bg-btn-primary-blue"
        type="button"
        @click="toggleDropdown()"
      >
        <!--Dropdown for all gym locations for shifts -->
        {{ selected }} &emsp;
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
        <!--Action buttons -->
        <action-button
          class="h-full w-full"
          text="LPC"
          type="secondary"
          @click.prevent="emitLPC"
        />
        <action-button
          class="h-full w-full"
          text="Little Papago"
          type="secondary"
          @click.prevent="emitLittlePapago"
        />
        <action-button
          class="h-full w-full"
          text="Juniper"
          type="secondary"
          @click.prevent="emitJuniper"
        />
        <action-button
          class="h-full w-full"
          text="Chaparral"
          type="secondary"
          @click.prevent="emitChaparral"
        />
        <action-button
          class="h-full w-full"
          text="Verde River"
          type="secondary"
          @click.prevent="emitVerdeRiver"
        />
        <action-button
          class="h-full w-full"
          text="Antelope"
          type="secondary"
          @click.prevent="emitAntelope"
        />
      </div>
    </div>
  </div>
</template>

<script>
//Imports for dependencies, state properties, mutations, and component
import { createPopper } from "@popperjs/core";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "GymDropdown",
  components: {
    ActionButton,
  },
  emits: [
    "emit-lpc",
    "emit-little-papago",
    "emit-juniper",
    "emit-chaparral",
    "emit-verde-river",
    "emit-antelope",
  ],
  //Local conditional to determine whether dropdown should show or not
  data() {
    return {
      dropdownPopoverShow: false,
      selected: "Gym Location",
    };
  },
  //Use global state property for loggedIn status
  computed: {
    arrowIcon() {
      return this.dropdownPopoverShow
        ? ["fas", "chevron-up"]
        : ["fas", "chevron-down"];
    },
    updateSelected() {
      return {
        [this.updateSelect()]: true,
      };
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
          placement: "bottom",
        });
      }
    },
    //Update the selected gym from dropdown
    updateSelect(selectedGym) {
      this.selected = selectedGym;
    },
    //Emit the selected gym to parent component
    emitLPC() {
      this.$emit("emit-lpc", "LPC");
      console.log("emitting lpc click");
    },
    emitLittlePapago() {
      this.$emit("emit-little-papago", "Little Papago");
      console.log("emitting little papago click");
    },
    emitChaparral() {
      this.$emit("emit-chaparral", "Chaparral");
      console.log("emitting chaparral click");
    },
    emitJuniper() {
      this.$emit("emit-juniper", "Juniper");
      console.log("emitting juniper click");
    },
    emitVerdeRiver() {
      this.$emit("emit-verde-river", "Verde River");
      console.log("emitting verde river click");
    },
    emitAntelope() {
      this.$emit("emit-antelope", "Antelope");
      console.log("emitting antelope click");
    },
  },
};
</script>
