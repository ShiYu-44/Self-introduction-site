<template>
  <div class="curiosity">
    <h1 class="curiosity-list-title">CuriosityList</h1>
    <div class="curiosity-list">
      <div v-for="item in items" :key="item.title">
        <hobby-element v-bind:hobby="hobby" />
        <curiosity-element v-bind:curiosity="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CuriosityElement from "../../components/curiosity/list";
export default {
  name: "curiositylist",
  components: {
    CuriosityElement,
  },
  data: () => ({
    items: [
      { title: "Modern Web Tech" },
      { title: "運動" },
      { title: "アロマ" },
      { title: "歌" },
      { title: "小説" },
      { title: "英語" },
      { title: "脳科学" },
      { title: "HSP" },
      { title: "脇見恐怖症" },
    ],
  }),
};
</script>

<style scoped>
.curiosity {
  background: linear-gradient(rgb(187, 0, 234), rgb(38, 0, 255));
}

.curiosity-list-title {
  text-align: center;
  color: rgb(245, 245, 245);
}

.curiosity-list {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  border: solid;
  border-color: silver;
}

.curiosity-list div {
  height: 5rem;
  text-align: center;
  color: rgb(245, 245, 245);
}
</style>