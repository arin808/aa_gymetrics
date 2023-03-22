<template>
  <div class="font-poppins mb-20">
    <!--Page title-->
    <div class="text-4xl font-semibold text-center mt-6 pb-10">
      Employee Login
    </div>
    <!-- Modal  to display error message if login fails-->
    <alert-modal
      id="loginFail"
      style="display: none"
      message-header="Login Failed"
      message-text="There was an error trying to log you in. Try again."
      @emit-close-modal="closeErrorModal"
    />
    <!-- Modal  to display error message if fields are missing-->
    <alert-modal
      id="fieldError"
      style="display: none"
      message-header="Missing Fields"
      message-text="Please fill in all the required fields."
      @emit-close-modal="closeFieldModal"
    />
    <div class="flex justify-center">
      <!--Login form-->
      <form class="text-center w-1/2 h-5/6 rounded-md border-4 border-black">
        <!--Logo-->
        <div class="text-center my-10">
          <font-awesome-icon icon="fa-user-lock" size="5x" />
        </div>
        <!--Email input-->
        <div class="text-2xl my-6">
          <input
            v-model="employeeEmail"
            required
            type="email"
            class="text-left focus:outline-none rounded-full border-2 border-black h-12 w-80 valid:border-green-500"
            placeholder="&nbsp Email"
          />
        </div>
        <!--Password input (visible)-->
        <div class="flex items-center justify-center text-2xl my-6">
          <input
            v-if="showPassword"
            v-model="employeePassword"
            required
            type="text"
            class="focus:outline-none rounded-l-full border-t-2 border-l-2 border-b-2 border-black h-12 w-64"
            placeholder="&nbsp Password"
          />
          <!--Password input-->
          <input
            v-else
            v-model="employeePassword"
            required
            type="password"
            class="focus:outline-none rounded-l-full border-t-2 border-l-2 border-r-0 border-b-2 border-black h-12 w-64"
            placeholder="&nbsp Password"
          />
          <!--Password visibility toggle-->
          <div>
            <button
              class="rounded-r-full border-t-2 border-r-2 border-b-2 border-black h-12 w-16"
              @click.prevent="toggleShow"
            >
              <font-awesome-icon
                :icon="showPassword ? 'fa-eye-slash' : 'fa-eye'"
              />
            </button>
          </div>
        </div>
        <!--Gym dropdown-->
        <div class="flex justify-center">
          <select
            v-model="selectedGym"
            class="form-select appearance-none block rounded-full w-80 h-12 mb-12 text-center text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border b order-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-btn-primary-blue focus:outline-none"
          >
            <option selected>Select a Gym</option>
            <option v-for="gym in gymArray" :key="gym.id">
              {{ gym.name }}
            </option>
          </select>
        </div>
        <!--Login button-->
        <div>
          <action-button
            type="primary"
            text="Login"
            class="w-80 mb-12 text-2xl"
            @click.prevent="empLogin"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import getEmployee from "@/api/employee/getEmployee";
import AlertModal from "@/components/Shared/AlertModal.vue";
import newLog from "@/api/employee/newLog.js";
import "tw-elements";
import { LOGIN, GYM_LOCATION, SET_EMPLOYEE } from "@/store";
import { mapState, mapMutations } from "vuex";

export default {
  name: "LoginPage",
  components: {
    ActionButton,
    AlertModal,
  },
  data() {
    return {
      //Array of gyms to populate dropdown
      gymArray: [
        { id: 1, name: "Antelope" },
        { id: 2, name: "Chaparral" },
        { id: 3, name: "Little Papago" },
        { id: 4, name: "LPC" },
        { id: 5, name: "Juniper" },
        { id: 6, name: "Verde River" },
      ],
      //Variable to hold selected gym
      selectedGym: "Select a Gym",
      //Variable to hold password visibility
      showPassword: false,
      //Variables to hold email and password
      employeeEmail: "",
      employeePassword: "",
    };
  },
  computed: {
    //State properties
    ...mapState(["loggedIn", "gymLocation", "employeeName"]),
    //Computed property to toggle password visibility
    eyeLabel() {
      return this.showPassword ? "Hide Password" : "Show Password";
    },
  },
  methods: {
    //Methods to alter state properties
    ...mapMutations([LOGIN, GYM_LOCATION, SET_EMPLOYEE]),

    //Method to process login, write log file and redirect
    async empLogin() {
      const alertModal = document.getElementById("loginFail");
      const fieldModal = document.getElementById("fieldError");

      //Check if fields are empty and display modal if they are
      if (
        this.employeeEmail == "" ||
        this.employeePassword == "" ||
        this.selectedGym == "Select a Gym"
      ) {
        fieldModal.style.display = "block";
        return;
      }

      //Temp variable to hold employee object
      const employee = await getEmployee(this.employeeEmail);

      if (employee) {
        //Check if email and password match and display modal if they don't
        if (employee.empEmail == this.employeeEmail) {
          console.log("email matches");
          //Hash pw for comparison
          const md5 = require("blueimp-md5");
          const hashPw = md5(this.employeePassword);
          //Check if hashed password matches
          if (employee.empPassword == hashPw) {
            //If email and password match, set state properties, write log and redirect
            this.LOGIN();
            this.GYM_LOCATION(this.selectedGym);
            this.SET_EMPLOYEE(employee.empFirst);
            await newLog(employee, this.selectedGym);
            this.$router.push("/employee");
          }
        }
      } else {
        //Display modal if email and password don't match
        alertModal.style.display = "block";
      }
    },

    //Method to toggle password visibility
    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    //Method to close ID length validation modal
    closeErrorModal() {
      const alertModal = document.getElementById("loginFail");
      alertModal.style.display = "none";
    },
    //Method to close ID length validation modal
    closeFieldModal() {
      const fieldModal = document.getElementById("fieldError");
      fieldModal.style.display = "none";
    },
  },
};
</script>
