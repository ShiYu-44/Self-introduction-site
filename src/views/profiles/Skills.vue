<template>
  <div>
    <h1 class="title__font--color">Skills</h1>
    <div class="skill-page">
      <v-card class="mx-auto skill-page-color" max-width="300" tile>
        <v-list class="skill-page-color" dense>
          <v-subheader class="title__font--color">Detail</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title class="word__organization" v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card class="mx-auto skill-page-color" max-width="300" tile>
        <v-list class="skill-page-color" dense>
          <v-subheader class="title__font--color">Explain</v-subheader>
          <v-list-item-group v-model="explain" color="primary">
            <v-list-item v-for="(explain, i) in explains" :key="i">
              <v-list-item-content>
                <v-list-item-title class="word__organization" v-text="explain.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills",
  data: () => ({
    items: [
      { text: "HTML5:★★★" },
      { text: "CSS3：★★★" },
      { text: "JavaScript：★★★" },
      { text: "C#：★★★" },
      { text: "Python：★★★" },
      { text: "Linux：★★★" },
      { text: "Docker：★★★" },
    ],
    explains: [
      { text: "★:ビギナー" },
      { text: "★★：ヘルプが必要！" },
      { text: "★★★：自走できる！" },
      { text: "★★★★：人に教えられる！" },
      { text: "★★★★★：講師ができる！" },
    ],
  }),
};
</script>

<style scoped>
.skill-page {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.skill-page-color {
  background: linear-gradient(#cc33ff, #cc33cc);
}

.title__font--color {
  color: rgb(245, 245, 245);
}

.word__organization {
  text-align: left;
  color: rgb(245, 245, 245);
}
</style>
    
