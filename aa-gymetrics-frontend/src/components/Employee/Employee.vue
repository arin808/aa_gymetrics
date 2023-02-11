<template>
  <div>
    <!--Conditionally displays component based on state properties-->
    <antelope-landing
      v-if="
        gymLocation == 'Antelope' && employeeName != null && loggedIn == true
      "
    />
    <chaparral-landing
      v-if="
        gymLocation == 'Chaparral' && employeeName != null && loggedIn == true
      "
    />
    <lpc-landing
      v-if="gymLocation == 'LPC' && employeeName != null && loggedIn == true"
    />
    <juniper-landing
      v-if="
        gymLocation == 'Juniper' && employeeName != null && loggedIn == true
      "
    />
    <little-papago-landing
      v-if="
        gymLocation == 'Little Papago' &&
        employeeName != null &&
        loggedIn == true
      "
    />
    <verde-river-landing
      v-if="
        gymLocation == 'Verde River' && employeeName != null && loggedIn == true
      "
    />
    <!-- Display access denied page if state properties aren't filled -->
    <access-denied
      v-if="gymLocation == null || employeeName == null || loggedIn == false"
    />
  </div>
</template>

<script>
import AntelopeLanding from "@/components/Employee/AntelopeLanding.vue";
import ChaparralLanding from "@/components/Employee/ChaparralLanding.vue";
import JuniperLanding from "@/components/Employee/JuniperLanding.vue";
import LpcLanding from "@/components/Employee/LpcLanding.vue";
import LittlePapagoLanding from "@/components/Employee/LittlePapagoLanding.vue";
import VerdeRiverLanding from "@/components/Employee/VerdeRiverLanding.vue";
import AccessDenied from "@/components/Employee/AccessDenied.vue";

import { mapState } from "vuex";

export default {
  name: "Employee",
  components: {
    AntelopeLanding,
    ChaparralLanding,
    JuniperLanding,
    LittlePapagoLanding,
    VerdeRiverLanding,
    LpcLanding,
    AccessDenied,
  },

  computed: {
    ...mapState(["gymLocation", "loggedIn", "employeeName"]),
  },
};
</script>
