<template>
  <v-card class="mx-auto" width="400px">
    <v-img src="@/assets/photos/photo3.jpg" height="250px" />
    <v-card-title>ABOUT</v-card-title>
    <v-card-subtitle>This is an about page</v-card-subtitle>
    <v-divider />
    <v-card-text> The v-card component is a versatile component that can be used for anything from a panel to a static image. </v-card-text>
    <v-divider />
    <v-card-text>
      The card component has numerous helper components to make markup as easy as possible. Components that have no listed options use Vue’s functional component option for faster rendering and serve as markup sugar to make building easier. Try out an interactive screencast on how Vuetify cards
      work.
    </v-card-text>
    <v-card-actions>
      <div class="mx-auto">
        <v-btn class="mr-2" color="success">OK</v-btn>
        <v-btn color="info">Cancel</v-btn>
      </div>
    </v-card-actions>
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
