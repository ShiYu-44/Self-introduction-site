<template>
  <div class="home">
    <div>
      <img src="../assets/picture.png" alt="写真" />
    </div>
    <div>
      <p class="font-family">
        確実に運が良い人間です！
        <br />夢は
        <br />「できるだけ多くの人の心を癒したり、
        <br />心に響くようなことを伝える人」
        <br />になることです！！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  border: solid;
  border-color: rgb(245, 245, 245);
}

.home div {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(245, 245, 245);
}

.font-family {
  font-family: "メイリオ", "Meiryo", sans-serif;
}
</style>