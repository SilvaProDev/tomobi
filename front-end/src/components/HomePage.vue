<template>
    <div>
        <h1>Home 1</h1>
         <button
              type="button"
              class="btn btn-warning"
              @click.prevent="routeDetaiVehicule"
            >
              <i class="bi bi-arrow-up-left-square-fill"></i>
              detail vehicule
            </button>
    </div>
</template>
<script lang="ts" setup {
    
}>
import { useRouter } from "vue-router";

const router = useRouter();

//  ICI DEBUT LES COMPUTED

//  ICI FIN LES COMPUTED


//  ICI DEBUT LES METHODES
function routeDetaiVehicule() {
  router.push({
    name: "DetailsVehicule",
  });
}
//  ICI FIN LES METHODES

</script>
<style scoped>

</style>