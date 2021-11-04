<template>
  <v-card>
    <v-card-title>TextAndTypography</v-card-title>
    <v-divider />
    <v-card-text>
      <!-- 배경 색깔 : 색깔 작성 | 글자 색깔:색깔--text 작성 -->
      <div class="text-h1 yellow black--text">text-h1</div>
      <div class="text-h2 blue yellow--text">text-h2</div>

      <!-- 배경 색깔 밝기 주기-->
      <div class="text-h3 red lighten-4">text-h3</div>

      <!-- 글자 색깔 밝기 주기-->
      <div class="text-h4 red--text text--lighten-4">text-h4</div>
      <div class="text-h5">text-h5</div>

      <!-- break point에 따라 글자 크기가 달라짐-->
      <div class="text-sm-h6 text-md-h4 text-lg-h2">text-h6</div>

      <div class="text-body-1">text-body-1</div>
    </v-card-text>

    <v-divider />

    <v-card-text class="black--text">
      <p class="text-left">text-left</p>
      <p class="text-center">text-center</p>
      <p class="text-right">text-right</p>
      <p class="text-sm-left">text-sm-left</p>
      <p class="text-md-center">text-md-left</p>
      <p class="text-lg-right">text-lg-left</p>
      <p class="text-xl-center">text-xl-left</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TextAndTypography",
};
</script>

<style scoped></style>
