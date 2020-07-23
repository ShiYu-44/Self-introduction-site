<template>
  <div class="header">
    <div class="header--content">
      <router-link class="header__font--color" to="/">
        <h5>Home</h5>
      </router-link>
    </div>
    <div class="header--content">
      <router-link class="header__font--color" to="/about">
        <h5>About</h5>
      </router-link>
    </div>
    <div class="header--content">
      <router-link class="header__font--color" to="/hobby">
        <h5>Hobby</h5>
      </router-link>
    </div>
    <div class="header--content">
      <router-link class="header__font--color" to="/skills">
        <h5>Skills</h5>
      </router-link>
    </div>
    <div class="header--content">
      <router-link class="header__font--color" to="/curiositylist">
        <h5>Curiosity List</h5>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-header",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  flex-basis: 50px;
  flex-shrink: 0;
}

.header--content {
  margin-right: 10px;
}

.header__font--color {
  color: rgb(245, 245, 245);
}
</style>