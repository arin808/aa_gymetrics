<template>
  <!--Only displays page if logged in-->
  <div>
    <!--Alert modal if a student thats already checked in attempts to check in-->
    <!--Button will emit an event calling the method to close the modal-->
    <alert-modal
      id="existingAlertModal"
      style="display: none"
      message-header="Already Checked In"
      message-text="This student is already checked in at another gym."
      @emit-close-modal="closeExistingAlertModal"
    />
    <!--Alert modal if a check in attempt doesnt satisfy required ID length-->
    <!--Button will emit an event calling the method to close the modal-->
    <alert-modal
      id="lengthAlertModal"
      style="display: none"
      message-header="Invalid Student ID"
      message-text="Please enter a valid, 8-digit student ID number."
      @emit-close-modal="closeLengthAlertModal"
    />
    <!--Alert modal if a student can't be found/doesn't exist-->
    <!--Button will emit an event calling the method to close the modal-->
    <alert-modal
      id="noStudentAlertModal"
      style="display: none"
      message-header="No Student Found"
      message-text="We couldn't find a student with a matching ID number."
      @emit-close-modal="closeNoStudentAlertModal"
    />
    <div class="font-poppins">
      <!--Header for specific gym-->
      <h1 class="flex font-bold text-4xl w-full justify-center bg-white py-4">
        Antelope Fitness Center
      </h1>
      <div class="items-center w-full px-12 py-2">
        <!--List for each student entry-->
        <ul class="h-screen overflow-y-scroll overflow-hidden">
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
            autofocus
          />
          <!--Check in/check out button-->
          <!--Button will also automatically process a check out if a valid ID 
            is scanned/entered and they are in the same gym-->
          <action-button
            type="primary"
            text="Check In/Check Out"
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
import getAllAntelope from "@/api/actives/all-gym/get-all-Antelope";
import getStudent from "@/api/actives/check-ins-outs/getStudent";
import checkIn from "@/api/actives/check-ins-outs/checkIn";
import checkOut from "@/api/actives/check-ins-outs/checkOut";
import checkForExisting from "@/api/actives/check-ins-outs/checkForExisting";
import AlertModal from "../Shared/AlertModal.vue";

export default {
  name: "AntelopeLanding",
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

  //Mount get result to show all active students in the gym on page load
  async mounted() {
    this.students = await getAllAntelope();
  },
  methods: {
    //Method for check in
    async checkIn() {
      //Constants for modal display to close or display them if necessary
      const lengthAlertModal = document.getElementById("lengthAlertModal");
      const existingAlertModal = document.getElementById("existingAlertModal");
      const noStudentAlertModal = document.getElementById(
        "noStudentAlertModal"
      );

      //Validation for id entry length; ID must be 8 digits
      if (String(this.studentID).length != 8) {
        //If exact length isnt met, display modal
        return (lengthAlertModal.style.display = "block");
      }
      //Use id to search for a matching student
      const student = await getStudent(this.studentID);
      if (student) {
        //Check if student is already in a gym to avoid duplication
        const existing = await checkForExisting(this.studentID);
        //If student is already checked in, check if they are in
        //the same gym
        if (existing) {
          //If they are in the same gym, process a check out and reset ID property
          if (existing.gymLocation == "Antelope") {
            this.checkOut(existing.studentID);
            return (this.studentID = "");
          }
          //If student is already checked in elsewhere, display modal
          return (existingAlertModal.style.display = "block");
        }

        //If no matching student is found to be active,
        //process check in
        const response = await checkIn(student, "Antelope");
        console.log(response.data);
        //Reload students array to reflect changes
        this.students = await getAllAntelope();
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
      this.students = await getAllAntelope();
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
.h-screen {
  height: 60vh;
}
</style>
