<template>
  <li class="font-poppins my-1">
    <div
      class="items-center grid grid-cols-5 gap-5 h-full py-2 mx-4 text-2xl font-semibold"
    >
      <!-- Profile Picture -->
      <div>
        <img
          src="@/assets/img/profilepic.png"
          class="h-20 pl-4 oject-contain"
        />
      </div>
      <!-- Student Name -->
      <div>
        <h2>{{ student.studentFirst }} {{ student.studentLast }}</h2>
      </div>
      <!-- Student ID -->
      <div>
        <h2>Student ID: {{ student.studentID }}</h2>
      </div>
      <!-- Check In Time -->
      <div>
        <h2>Checked In at: {{ student.checkInTime }}</h2>
      </div>
      <!-- Checkout Button -->
      <action-button
        class="ml-20"
        text="Checkout"
        type="danger"
        @click="showModal()"
      />
      <!-- Checkout Modal -->
      <div v-if="displayModal" class="fixed inset-0 bg-gray-600 bg-opacity-50">
        <div
          class="relative top-40 mx-auto px-12 py-2 border w-1/3 h-60 shadow-lg rounded-md bg-white"
        >
          <!-- Modal Header and Body -->
          <div class="mt-3 text-center font-poppins">
            <div class="text-3xl font-bold text-black">Checkout?</div>
            <div class="mt-2 px-7 py-3">
              <div class="text-lg font-semibold text-black">
                Are you sure you want to checkout
                {{ student.studentFirst }}?
              </div>
            </div>
            <!-- Checkout and Cancel Buttons -->
            <div class="flex justify-center">
              <action-button
                class="mr-auto w-40"
                text="Cancel"
                type="secondary"
                @click="cancel"
              />
              <action-button
                class="ml-auto w-40"
                text="Checkout"
                type="danger"
                @click.prevent="emitCheckout()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "StudentEntry",
  components: {
    ActionButton,
  },
  //Student to be passed in
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  emits: ["emit-checkout"],
  //Data prop for model
  data() {
    return {
      displayModal: false,
    };
  },
  methods: {
    //Send checkout event to parent
    emitCheckout() {
      this.$emit("emit-checkout", this.student.studentID);
      console.log("emitted");
    },
    //Show modal
    showModal() {
      this.displayModal = true;
    },
    //Hide modal
    cancel() {
      this.displayModal = false;
    },
  },
};
</script>
<style scoped>
li {
  border: 3px solid black;
  border-radius: 5px;
}
</style>
