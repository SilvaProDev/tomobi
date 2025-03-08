<template>
  <div>
    <TheNavBar />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavBar from './layouts/NavBar.vue';
import TheFooter from './layouts/TheFooter.vue';

export default defineComponent({
  name: 'PagePrincipale',
  components: {
    TheNavBar,
    TheFooter
  }
});
</script>

<style>
/* Add your styles here */
</style>

