<template>
  <!--Only displays page if logged in-->
  <div>
    <!--Alert modal if a student thats already checked in attempts to check in-->
    <alert-modal
      id="existingAlertModal"
      style="display: none"
      message-header="Already Checked In"
      message-text="This student is already checked in at another gym."
      @emit-close-modal="closeExistingAlertModal"
    />
    <!--Alert modal if a check in attempt doesnt satisfy required ID length-->
    <alert-modal
      id="lengthAlertModal"
      style="display: none"
      message-header="Invalid Student ID"
      message-text="Please enter a valid, 8-digit student ID number."
      @emit-close-modal="closeLengthAlertModal"
    />
    <!--Alert modal if a student can't be found/doesn't exist-->
    <alert-modal
      id="noStudentAlertModal"
      style="display: none"
      message-header="No Student Found"
      message-text="We couldn't find a student with a matching ID number."
      @emit-close-modal="closeNoStudentAlertModal"
    />
    <div class="font-poppins h-40">
      <!--Header for specific gym-->
      <h1 class="flex font-bold text-4xl w-full justify-center bg-white py-4">
        VerdeRiver Fitness Center
      </h1>
      <div class="items-center w-full px-12 py-2">
        <!--List for each student entry-->
        <ul class="h-96 overflow-y-scroll overflow-hidden">
          <!--Iterate over results and create entry for each item in array-->
          <student-entry
            v-for="student in students"
            :key="student.studentID"
            :student="student"
            @emit-checkout="checkOut($event)"
          />
        </ul>
      </div>

      <div
        class="flex items-center text-center text-2xl font-semibold px-12 h-16"
      >
        <!--Manual check-in for employees-->
        <h2 class="pr-2 ml-auto">Enter Student ID to Check In:</h2>
        <form>
          <!--Manual input for ID check in-->
          <input
            v-model="studentID"
            type="number"
            placeholder="Student ID"
            class="underline w-36 outline-none text-blue-700"
          />
          <!--Check in button-->
          <action-button
            type="success"
            text="Check In"
            class="h-14 items-center text-center"
            @click.prevent="checkIn"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//Component and method imports
import StudentEntry from "@/components/Employee/StudentEntry.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import getAllVerdeRiver from "@/api/actives/all-gym/get-all-VerdeRiver";
import getStudent from "@/api/actives/check-ins-outs/getStudent";
import checkIn from "@/api/actives/check-ins-outs/checkIn";
import checkOut from "@/api/actives/check-ins-outs/checkOut";
import checkForExisting from "@/api/actives/check-ins-outs/checkForExisting";

import AlertModal from "../Shared/AlertModal.vue";

export default {
  name: "VerdeRiverLanding",
  components: {
    StudentEntry,
    ActionButton,

    AlertModal,
  },
  data() {
    //Required class data objects to house array of
    //students and a given ID for check-ins
    return {
      students: [],
      studentID: "",
    };
  },

  //Mount get result to show all active students in the gym
  async mounted() {
    this.students = await getAllVerdeRiver();
  },
  methods: {
    //Method for check in
    async checkIn() {
      //Constants for modal display
      const lengthAlertModal = document.getElementById("lengthAlertModal");
      const existingAlertModal = document.getElementById("existingAlertModal");
      const noStudentAlertModal = document.getElementById(
        "noStudentAlertModal"
      );

      //Validation for id entry length
      if (String(this.studentID).length != 8) {
        //If exact length isnt met, display modal
        return (lengthAlertModal.style.display = "block");
      }
      //Use id to search for a matching student
      const student = await getStudent(this.studentID);
      if (student) {
        //Check if student is already in a gym to avoid duplication
        const existing = await checkForExisting(this.studentID);
        //Return alert message if student is already active
        if (existing) {
          //If student is already checked in, display modal
          return (existingAlertModal.style.display = "block");
        }

        //Process check in
        const response = await checkIn(student, "Verde-River");
        console.log(response.data);
        //Reload students array to reflect changes
        this.students = await getAllVerdeRiver();
        //Reset id to empty string
        this.studentID = "";
      } else {
        //If student ID doesn't exist meet with error modal
        return (noStudentAlertModal.style.display = "block");
      }
    },
    //Method to process a student checkout
    //checkoutID is passed from emitted event property
    async checkOut(checkoutID) {
      //Assign local variable to passed ID
      const id = checkoutID;
      console.log(id);
      //Run imported checkout method
      const response = await checkOut(id);
      //Reload students array to reflect changes
      this.students = await getAllVerdeRiver();
      console.log(response);
    },
    //Method to close ID length validation modal
    closeLengthAlertModal() {
      const lengthAlertModal = document.getElementById("lengthAlertModal");
      lengthAlertModal.style.display = "none";
    },
    //Method to close no student found modal
    closeNoStudentAlertModal() {
      const noStudentAlertModal = document.getElementById(
        "noStudentAlertModal"
      );
      noStudentAlertModal.style.display = "none";
    },
    //Method to close existing student validation modal
    closeExistingAlertModal() {
      const existingAlertModal = document.getElementById("existingAlertModal");
      existingAlertModal.style.display = "none";
    },
  },
};
</script>
<style scoped>
ul {
  border: 3px solid black;
  padding: 4px;
  border-radius: 5px;
}
</style>
