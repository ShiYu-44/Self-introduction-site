<template>
  <div>
    <div>{{curiosity.title}}</div>
    <div>{{curiosity.element1}}</div>
    <div>{{curiosity.element2}}</div>
    <div>{{curiosity.element3}}</div>
    <div>{{curiosity.element4}}</div>
    <div>{{curiosity.element5}}</div>
    <div>{{curiosity.element6}}</div>
  </div>
</template>

<script>
export default {
  name: "curiosity-element",
  props: ["curiosity"],
};
</script>