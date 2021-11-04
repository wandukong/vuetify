<template>
  <v-card>
    <v-card-title>GridSystem</v-card-title>
    <v-divider />

    <v-card-text>
      <!-- v-row는 v-container 안에 있어야 한다.-->
      <!-- App.vue의 v-container가 작성되어 있으므로 해당 vue에서는 작성할 필요가 없다-->
      <v-row>
        <v-col class="red" sm="2" md="6" lg="10" cols="12">A</v-col>
        <v-col class="green" sm="10" md="6" lg="2" cols="12">B</v-col>
      </v-row>
      <v-row class="blue lighten-3">
        <v-col sm="2" md="6" lg="10" cols="12">A</v-col>
        <v-col sm="10" md="6" lg="2" cols="12">B</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
