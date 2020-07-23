<template>
  <v-expansion-panels>
    <v-expansion-panel class="hobby-element-color">
      <v-expansion-panel-header>
        <h2 class="hobby-element">{{hobby.title}}</h2>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <h3 class="hobby-element">{{hobby.appeal}}</h3>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "hobby-element",
  props: ["hobby"],
};
</script>

<style scoped>
.hobby-element-color {
  background: linear-gradient(#cc33ff, #cc33cc);
}

.hobby-element {
  text-align: center;
  color: rgb(245, 245, 245);
}
</style>