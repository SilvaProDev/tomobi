<template>
    <div>
      <section class="bg-position-top-center bg-repeat-0 pt-5" style="background-image: url(img/home/hero-bg.png); background-size: 1920px 630px;">
        <div class="container pt-5">
          <div class="row pt-lg-4 pt-xl-5">
            <div class="col-lg-5 col-md-5 pt-3 pt-md-4 pt-lg-5">
              <h1 class="text-dark pb-2 mb-4">Vente - Achat - Location de voiture partout en Côte d'Ivoire</h1>
              <p class="fw-bold text-dark opacity-90">TOMOBI est votre plateforme spécialisée dans la vente, l'achat et la location de véhicules en Côte d'Ivoire. <br>
              Trouvez, en un Clic, votre voiture parmi plus d'un million de voitures disponibles. </p>
            </div>
            <div class="col-lg-7 col-md-7 pt-md-5"><img class="d-block mt-4 ms-auto" src="/img/home/hero-img.png" width="800" alt="Car"></div>
          </div>
        </div>
        <div class="container mt-4 mt-sm-3 mt-lg-n3 pb-5 mb-md-4">
          <h5 class="text-primary text-start">
            <i class="fi-search"></i> Trouvez votre voiture rapidement
          </h5>
          <!-- Form group-->
          <form class="form-group form-group d-block">
            <div class="row g-0 ms-lg-n2">
              <div class="col-lg-2">
                <div class="input-group border-end-lg border-light"><span class="input-group-text text-muted ps-2 ps-sm-3"><i class="fi-search"></i></span>
                  <input class="form-control" type="text" name="keywords" placeholder="Mot clé...">
                </div>
              </div>
              <hr class="hr-light d-lg-none my-2">
              <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="dropdown border-end-sm border-light" data-bs-toggle="select">
                  <button class="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown"><i class="fi-list me-2"></i><span class="dropdown-toggle-label">Marque</span></button>
                  <input type="hidden" name="marque">
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Acura</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">BMW</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Citroen</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Lexus</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Mercedes-Benz</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Nissan</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Toyota</span></a></li>
                  </ul>
                </div>
              </div>
              <hr class="hr-light d-sm-none my-2">
              <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="dropdown border-end-md border-light" data-bs-toggle="select">
                  <button class="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown"><i class="fi-list me-2"></i><span class="dropdown-toggle-label">Model</span></button>
                  <input type="hidden" name="model">
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Altima</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Juke</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Leaf</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Maxima</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Micra</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Murano</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Note</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Patrol</span></a></li>
                  </ul>
                </div>
              </div>
              <hr class="hr-light d-md-none my-2">
              <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="dropdown border-end-sm border-light" data-bs-toggle="select">
                  <button class="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown"><i class="fi-car fs-lg me-2"></i><span class="dropdown-toggle-label">Type</span></button>
                  <input type="hidden" name="type">
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Compact</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Crossover</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Coupe</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Family MPV</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Pickup</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Sedan</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">SUV</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Wagon</span></a></li>
                  </ul>
                </div>
              </div>
              <hr class="hr-light d-sm-none my-2">
              <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="dropdown" data-bs-toggle="select">
                  <button class="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown"><i class="fi-map-pin me-2"></i><span class="dropdown-toggle-label">Localisation</span></button>
                  <input type="hidden" name="location">
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Dallas</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Chicago</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Houston</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Las Vegas</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Los Angeles</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">New York</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">San Francisco</span></a></li>
                  </ul>
                </div>
              </div>
              <hr class="hr-light d-lg-none my-2">
              <div class="col-lg-2">     
                <button class="btn btn-primary w-100" type="submit"> Recherche <i class="fi fi-search"> </i></button>
              </div>
            </div>
          </form>
        </div>
      </section>


      <section class="container pt-sm-1 pb-5 mb-md-2">
        <div class="d-sm-flex align-items-center justify-content-between mb-2 pb-sm-2">
          <h2 class="h3 text-primary mb-1 mb-sm-0">Offres Flash</h2><a class="btn btn-link btn-primary fw-normal px-0" href="#">Voir toutes les offres<i class="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i></a>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <!-- Item-->
            <div class="card card-white card-hover h-lg-100 mb-4 mb-lg-0">
              <div class="carousel-wrapper card-img-top card-img-hover"><a class="img-overlay" href="#"></a>
                <div class="position-absolute start-0 top-0 pt-3 ps-3"><span class="d-table badge bg-info mb-1">New</span><span class="d-table badge bg-success" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Certifié">Certified</span></div>

                <div class="tns-carousel-inner">
                  <img src="/img/catalog/17.jpg" alt="Image">
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-1"><span class="fs-sm text-dark me-3">2015</span>
                  <div class="form-check form-check-dark">
                    <input class="form-check-input" type="checkbox" id="compare1">
                    <label class="form-check-label fs-sm" for="compare1">Compare</label>
                  </div>
                </div>
                <h3 class="h6 mb-1 text-primary"> Mercedes Benz Convertible Coupe </h3>
                <div class="text-primary fw-bold mb-1">$25,800</div>
                <div class="fs-sm text-dark opacity-70"><i class="fi-map-pin me-1"></i>New York</div>
              </div>
              <div class="card-footer border-0 pt-0">
                <div class="border-top border-primary pt-3">
                  <div class="row g-2">
                    <div class="col me-sm-1">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2 border border-primary"><i class="fi-dashboard d-block h4 text-primary mb-0 mx-center"></i><span class="text-white">48 000 Km</span></div>
                    </div>
                    <div class="col me-sm-1">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2 border border-primary"><i class="fi-gearbox d-block h4 text-primary mb-0 mx-center"></i><span class="text-white">Automatique</span></div>
                    </div>
                    <div class="col">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2 border border-primary"><i class="fi-petrol d-block h4 text-primary mb-0 mx-center"></i><span class="text-white">Gasoil</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- Item-->
            <div class="card card-white card-hover card-horizontal mb-4">
              <div class="carousel-wrapper card-img-top card-img-hover"><a class="img-overlay" href="#"></a>
                <div class="position-absolute start-0 top-0 pt-3 ps-3"><span class="d-table badge bg-info">Used</span></div>
                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                  <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button>
                </div>
                <div class="tns-carousel-inner position-absolute top-0 h-100">
                  <img src="/img/catalog/09.jpg" class="h-100">
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-1"><span class="fs-sm text-dark me-3">1995</span>
                </div>
                <h3 class="h6 mb-1 text-primary"> Ford Truck Lifted </h3>
                <div class="text-primary fw-bold mb-1">$24,000</div>
                <div class="fs-sm text-dark opacity-70"><i class="fi-map-pin me-1"></i>Chicago</div>
                <div class="border-top border-light mt-3 pt-3">
                  <div class="row g-2">
                    <div class="col me-sm-1">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-dashboard d-block h4 text-primary mb-0 mx-center"></i><span class="fs-xs text-white">278 000 Km</span></div>
                    </div>
                    <div class="col me-sm-1">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-gearbox d-block h4 text-primary mb-0 mx-center"></i><span class="fs-xs text-white">Manuel</span></div>
                    </div>
                    <div class="col">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-petrol d-block h4 text-primary mb-0 mx-center"></i><span class="fs-xs text-white">Diesel</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Item-->
            <div class="card card-white card-hover card-horizontal">
              <div class="carousel-wrapper card-img-top card-img-hover"><a class="img-overlay" href="#"></a>
                <div class="position-absolute start-0 top-0 pt-3 ps-3"><span class="d-table badge bg-info">Used</span></div>
                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                  <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button>
                </div>
                <div class="tns-carousel-inner position-absolute top-0 h-100">
                  <img src="/img/catalog/13.jpg" class="h-100">
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-1"><span class="fs-sm text-dark me-3">2018</span>
                </div>
                <h3 class="h6 mb-1 text-primary">BMW 640 XI Gran Turismo</h3>
                <div class="text-primary fw-bold mb-1">$43,500</div>
                <div class="fs-sm text-dark opacity-70"><i class="fi-map-pin me-1"></i>San Francisco</div>
                <div class="border-top border-light mt-3 pt-3">
                  <div class="row g-2">
                    <div class="col me-sm-1">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-dashboard d-block h4 text-primary mb-0 mx-center"></i><span class="fs-xs text-white">10 000 Km</span></div>
                    </div>
                    <div class="col me-sm-1">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-gearbox d-block h4 text-primary mb-0 mx-center"></i><span class="fs-xs text-white">Automatique</span></div>
                    </div>
                    <div class="col">
                      <div class="bg-dark rounded text-center w-100 h-100 p-2"><i class="fi-petrol d-block h4 text-primary mb-0 mx-center"></i><span class="fs-xs text-white">Gasoil</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="container py-sm-3">
        <h5 class="text-primary">Les principales marques</h5>
        <div class="row py-2 bg-dark rounded  border border-primary">
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/opel.svg" width="86" alt="Opel"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/audi.svg" width="86" alt="Audi"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/mercedes.svg" width="86" alt="Mercedes-Benz"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/toyota.svg" width="86" alt="Toyota"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/mazda.svg" width="86" alt="Mazda"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/nissan.svg" width="86" alt="Nissan"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/hyundai.svg" width="86" alt="Hyundai"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/lexus.svg" width="86" alt="Lexus"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/honda.svg" width="86" alt="Honda"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/renault.svg" width="86" alt="Renault"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/infiniti.svg" width="86" alt="Infiniti"></a></div>
          <div class="col-3 col-sm-2 col-xl-1 p-1"><a class="opacity-25 opacity-transition d-table mx-auto" href="#"><img src="/img/brands/mitsubishi.svg" width="86" alt="Mitsubishi"></a></div>
        </div>
      </section>

      <Presentation />
      <DernieresOffres />

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Presentation from './sections/PresentationSite.vue';
import DernieresOffres from './sections/DernieresOffres.vue';
// import router from '@/router';
export default defineComponent({
  name: 'PageAccueil',
  
  components: {
    Presentation,
    DernieresOffres,
  },

  methods: {
    // routeDetaiVehicule() {
    //   router.push({
    //     name: "DetailsVehicule",
    //   });
    // }
  }
});
</script>
<style scoped>

</style>