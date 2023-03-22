<template>
  <div>
    <!--Self enclosed component tag-->
    <all-metrics />
  </div>
</template>

<script>
//Import gym table component
import AllMetrics from "@/components/AllMetrics.vue";

export default {
  name: "HomeView",
  components: {
    AllMetrics,
  },
};
</script>
