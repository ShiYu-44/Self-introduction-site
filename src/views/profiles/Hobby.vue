<template>
  <div class="hobby-title">
    <h1>Hobby</h1>
    <div v-for="hobby in hobbies" :key="hobby.title">
      <hobby-element v-bind:hobby="hobby" />
    </div>
  </div>
</template>

<script>
import HobbyElement from "../../components/hobbies/HobbyElement";
export default {
  name: "hobby",
  components: {
    HobbyElement
  },
  data: () => {
    return {
      hobbies: [
        {
          title: "Muscle training",
          appeal: "朝、HIITでバーピーをやります！"
        },
        {
          title: "Walk",
          appeal: "30～60分ぐらいグリーンエクササイズをするのが好きです！"
        },
        {
          title: "Sing a song",
          appeal: "歌が好きです！V系バンドのSID(シド)やRADWIMPSが好きです！"
        },
        {
          title: "Cooking",
          appeal: "料理を作るのが好きです！お肉と野菜を炒めた料理が多いです！"
        },
        {
          title: "Relaxing with aroma",
          appeal:
            "アロマが好きです！ローズマリーやペパーミント、ユーカリが好きです！アロマ検定1級です！"
        }
      ]
    };
  }
};
</script>

<style scoped>
.hobby-title {
  color: rgb(245, 245, 245);
}
</style>

