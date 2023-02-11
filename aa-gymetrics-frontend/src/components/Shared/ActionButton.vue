<template>
  <!--Provide button object, text is bound to provided text-->
  <button :class="[buttonClass, 'px-10']">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  //Properties for action buttons
  props: {
    //Required text property to display over button
    text: {
      type: String,
      required: true,
    },
    //Required type to dictate color of button
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return [
          "primary",
          "secondary",
          "warning",
          "danger",
          "success",
        ].includes(value);
      },
    },
  },
  //Use required type value to deterine the button type to choose
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<!--Styles for specific buttons based on the button type provided-->
<style scoped>
button {
  @apply font-poppins px-5 py-3  rounded hover:shadow-black;
}
.primary {
  @apply text-white bg-btn-primary-blue hover:bg-btn-primary-alt;
}

.secondary {
  @apply text-white bg-btn-secondary-grey hover:bg-btn-secondary-alt;
}

.danger {
  @apply text-white bg-btn-danger-red hover:bg-btn-danger-alt;
}
.success {
  @apply text-black bg-btn-success-grn hover:bg-btn-success-alt;
}
.warning {
  @apply bg-btn-warn-ylw hover:bg-btn-warn-alt;
}
</style>
