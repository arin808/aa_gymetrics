<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto">
    <div
      class="relative top-40 mx-auto px-12 py-2 border w-1/3 h-auto shadow-lg rounded-md bg-white"
    >
      <!--Warning Icon-->
      <div class="flex justify-center">
        <font-awesome-icon icon="fa-triangle-exclamation" size="4x" />
      </div>
      <!--Header and body text obtained from parent-->
      <div class="mt-3 text-center font-poppins">
        <div class="text-3xl font-bold text-black">{{ messageHeader }}</div>
        <div class="mt-2 px-7 py-3">
          <div class="text-lg font-semibold text-black">
            {{ messageText }}
          </div>
        </div>
        <!--Button emits event to parent to signal close modal method-->
        <div class="items-center px-4 py-3">
          <action-button
            text="Okay"
            type="primary"
            @click.prevent="emitCloseModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "AlertModal",
  components: {
    ActionButton,
  },
  //Props for modal text
  props: {
    messageHeader: {
      type: String,
      required: true,
    },
    messageText: {
      type: String,
      required: true,
    },
  },
  //Emit event to parent component
  emits: ["emit-close-modal"],
  //Method to emit event
  methods: {
    emitCloseModal() {
      this.$emit("emit-close-modal");
      console.log("emitting okay");
    },
  },
};
</script>
