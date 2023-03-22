<template>
  <div class="font-poppins w-full h-full p-8">
    <!--Welcome message-->
    <h1 class="flex font-bold text-4xl w-full justify-center pb-4">
      Welcome to AA Gymetrics!
    </h1>
    <!--Table styling-->
    <div class="px-12">
      <table class="flex-nowrap items-center w-full text-lg py-4 my-8">
        <thead class="text-2xl">
          <!--Table Headers-->
          <tr>
            <th>Fitness Center</th>
            <th>Active Count</th>
            <th>Gym Population Density</th>
          </tr>
        </thead>
        <tbody
          class="items-center font-semibold text-lg h-full w-full justify-center text-center"
        >
          <!--LPC metrics-->
          <tr>
            <td>Lopes Performance Center</td>
            <td>{{ lpcCount }} Students Checked-In</td>
            <td>{{ lpcPercentage }} to Capacity</td>
          </tr>
          <!--Juniper metrics-->
          <tr>
            <td>Juniper Fitness Center</td>
            <td>{{ junCount }} Students Checked-In</td>
            <td>{{ junPercentage }} to Capacity</td>
          </tr>
          <!--Chaparral metrics-->
          <tr>
            <td>Chaparral Fitness Center</td>
            <td>{{ chapCount }} Students Checked-In</td>
            <td>{{ chapPercentage }} to Capacity</td>
          </tr>
          <!--Little Papago metrics-->
          <tr>
            <td>Little Papago Fitness Center</td>
            <td>{{ papCount }} Students Checked-In</td>
            <td>{{ papPercentage }} to Capacity</td>
          </tr>
          <!--Antelope metrics-->
          <tr>
            <td>Antelope Fitness Center</td>
            <td>{{ antCount }} Students Checked-In</td>
            <td>{{ antPercentage }} to Capacity</td>
          </tr>
          <!--Verde River metrics-->
          <tr>
            <td>Verde River Fitness Center</td>
            <td>{{ verCount }} Students Checked-In</td>
            <td>{{ verdePercentage }} to Capacity</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--Footer with time of last update-->
    <div class="font-semibold text-right px-12 text-2xl">
      Table Last Updated: {{ updateTime }}
    </div>
  </div>
</template>

<script>
//API functions
import getCountChaparral from "@/api/actives/counts/get-count-Chaparral";
import getCountLPC from "@/api/actives/counts/get-count-LPC";
import getCountJuniper from "@/api/actives/counts/get-count-Juniper";
import getCountAntelope from "@/api/actives/counts/get-count-Antelope";
import getCountLittlePapago from "@/api/actives/counts/get-count-LittlePapago";
import getCountVerdeRiver from "@/api/actives/counts/get-count-VerdeRiver";

export default {
  name: "AllMetrics",
  //Data values to assign api return values to
  data() {
    return {
      //Gym headcounts
      lpcCount: 0,
      junCount: 0,
      chapCount: 0,
      papCount: 0,
      antCount: 0,
      verCount: 0,
      //Interval time
      interval: null,
      //Time of last update
      updateTime: "",
    };
  },
  //Percentages based on headcount and max capacity
  //Capacity is a rough estimate
  //Percentages are formatted for readability
  computed: {
    //Chaparral capacity %
    chapPercentage() {
      const percentage = this.chapCount / 40;
      return this.formatPercentage(percentage);
    },
    //Little Papago capacity %
    papPercentage() {
      const percentage = this.papCount / 45;
      return this.formatPercentage(percentage);
    },
    //LPC capacity %
    lpcPercentage() {
      const percentage = this.lpcCount / 120;
      return this.formatPercentage(percentage);
    },
    //Juniper capacity %
    junPercentage() {
      const percentage = this.junCount / 40;
      return this.formatPercentage(percentage);
    },
    //Verde River capacity %
    verdePercentage() {
      const percentage = this.verCount / 60;
      return this.formatPercentage(percentage);
    },
    //Antelope capacity %
    antPercentage() {
      const percentage = this.antCount / 50;
      return this.formatPercentage(percentage);
    },
  },
  //Call method to update table data
  created() {
    this.updateTable();
  },
  //Cleanup interval
  beforeUnmount() {
    clearInterval(this.interval);
  },
  async mounted() {
    //Call get functions for api data of active counts in gyms
    this.chapCount = await getCountChaparral();
    this.lpcCount = await getCountLPC();
    this.papCount = await getCountLittlePapago();
    this.antCount = await getCountAntelope();
    this.verCount = await getCountVerdeRiver();
    this.junCount = await getCountJuniper();
    //Create a date object
    const date = new Date();
    //Utilize date object to display time of update
    this.updateTime = date.toLocaleTimeString("en-us", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  },
  //Methods for formatting and updating table
  methods: {
    //Format percentage for readability
    formatPercentage(num) {
      return `${parseFloat(num * 100).toFixed(1)}%`;
    },
    //Utilize interval to call on functions every minute
    updateTable() {
      this.interval = setInterval(async () => {
        //Call get functions for api data
        this.chapCount = await getCountChaparral();
        this.lpcCount = await getCountLPC();
        this.papCount = await getCountLittlePapago();
        this.antCount = await getCountAntelope();
        this.verCount = await getCountVerdeRiver();
        this.junCount = await getCountJuniper();
        //Create a date object
        const date = new Date();
        //Utilize date object to display time of update
        this.updateTime = date.toLocaleTimeString("en-us", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        });
      }, 10000);
    },
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 3px black solid;
}
tr {
  height: 70px;
}
</style>
