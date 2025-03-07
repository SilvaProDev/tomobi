<template>
    <div>
      <div class="container mt-3 mb-1 py-5">
        <div class="row py-1">
          <!-- Filers sidebar (Offcanvas on mobile)-->
          <div class="col-lg-3 pe-xl-4">
            <FiltreRecherche />
          </div>
          <!-- Results section-->
          <div class="col-lg-9">
            <!-- Breadcrumb-->
            <nav class="mb-3 pt-md-2 pt-lg-4" aria-label="Breadcrumb">
              <ol class="breadcrumb breadcrumb-primary">
                <li class="breadcrumb-item"><a href="car-finder-home.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Used cars</li>
              </ol>
            </nav>
            <!-- Page title-->
            <div class="d-flex align-items-center justify-content-between pb-2 mb-2">
              <h3 class="text-dark me-3 mb-0">Voitures disponibles</h3>
              <div class="text-primary"><i class="fi-car fs-lg me-2"></i><span class="align-middle">249 Véhicules</span></div>
            </div>
            <!-- Sorting + View-->
            <div class="d-sm-flex align-items-center justify-content-between pb-4 mb-2">
              <div class="d-flex align-items-center me-sm-4">
                <label class="fs-sm text-primary me-2 pe-1 text-nowrap" for="sorting1">
                <i class="fi-arrows-sort mt-n1 me-2"></i>Trier par:</label>
                <select class="form-select form-select-dark form-select-sm me-sm-4">
                  <option>Plus récent</option>
                  <option>Populaire</option>
                  <option>Prix: Bas - Elevé</option>
                  <option>Price: Elevé - Bas</option>
                </select>                
              </div>
            </div>
            <!-- Item -->
            <div class="card card-white card-hover card-horizontal mb-4">
              <div class="carousel-wrapper card-img-top card-img-hover"><a class="img-overlay" href="#"></a>
                <div class="position-absolute start-0 top-0 pt-3 ps-3"><span class="d-table badge bg-info">Used</span></div>
                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                  <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button>
                </div>
                <div class="tns-carousel-inner position-absolute top-0 h-100">
                  <a class="nav-link-light" href="#">
                    <img src="/img/catalog/06.jpg" class="h-100" />
                  </a>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-1">
                  <span class="fs-sm text-primary me-3">1995</span>
                  <small class="text-dark opacity-70">Posté le: 07/03/2025</small>
                </div>
                <h5 class="mb-1 text-dark">Ford Truck Lifted </h5>
                <div class="text-primary fw-bold mb-1">2 400 000 FCFA</div>
                <div class="fs-sm text-dark opacity-70"><i class="fi-map-pin me-1"></i>Chicago</div>
                <div class="border-top border-light mt-3 pt-3">
                  <div class="row g-2">
                    <div class="col me-sm-1">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-dashboard d-block h4 text-light mb-0 mx-center"></i><span class="fs-xs text-light">278K mi</span></div>
                    </div>
                    <div class="col me-sm-1">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-gearbox d-block h4 text-light mb-0 mx-center"></i><span class="fs-xs text-light">Manual</span></div>
                    </div>
                    <div class="col">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-petrol d-block h4 text-light mb-0 mx-center"></i><span class="fs-xs text-light">Diesel</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- fin Item -->
          </div>
        </div>
      </div>
      <!-- Filters sidebar toggle button (mobile)-->
    <button class="btn btn-primary btn-sm w-100 rounded-0 fixed-bottom d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters-sidebar"><i class="fi-filter me-2"></i>Filtres de Recherche</button>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import FiltreRecherche from './sections/FiltreRecherche.vue';

export default defineComponent({
  name: 'RechercheVehicule',
  components: {
    FiltreRecherche
  }
});
</script>

<style>
/* Ajoutez vos styles ici */
.content {
  padding: 20px;
}
</style>
