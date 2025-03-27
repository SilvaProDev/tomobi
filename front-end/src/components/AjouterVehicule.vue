<template>
    <div>
        <div class="container mt-3 mb-1 py-5">
            <div class="row py-1">
                <nav class="mb-1 pt-md-2 pt-lg-4" aria-label="Breadcrumb">
                    <ol class="breadcrumb breadcrumb-primary">
                        <li class="breadcrumb-item"><a href="./">Acceuil</a></li>
                        <li class="breadcrumb-item"><a href="#"> Gestion Véhicules </a></li>
                        <li class="breadcrumb-item active" aria-current="page">Ajouter un Véhicule</li>
                    </ol>
                </nav>
                <div class="col-md-8 mx-auto">
                    <!-- Gallery-->
                    <h3 class="text-success"><i class="fi fi-pencil"></i> Ajouter Un Véhicule</h3>
                        <!-- Basic info-->
                    <section class="card card-light card-body bg-white border-0 shadow-sm p-4 mb-4 text-dark">
                        <h2 class="h4 mb-4"><i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>Informations de Base</h2>
                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <label class="form-label" for="sc-condition">Opération<span class="text-danger">*</span></label>
                                <select class="form-select" id="sc-condition" required>
                                    <option value="" disabled selected>Choisir l'Opération</option>
                                    <option value="Used">Vente</option>
                                    <option value="New">Location</option>
                                    <option value="New">Location / Vente</option>
                                </select>
                            </div>
                            <div class="col-sm-6 mb-3">
                                <label class="form-label" for="sc-condition">Etat du Véhicle<span class="text-danger">*</span></label>
                                <select class="form-select" required>
                                    <option value="" disabled selected>Choisir l'Etat </option>
                                    <option value="New">Neuve</option>
                                    <option value="Used">Occasion</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="sc-title">Titre <span class="text-danger">*</span></label>
                            <input class="form-control" type="text" id="sc-title" placeholder="Titre" value="Mercedes-Benz E 400 Cabriolet" required>
                        </div>
                    </section>

                    <section class="card card-light card-body border-0 bg-white text-dark shadow-sm p-4 mb-4" id="price">
                        <h2 class="h4 mb-4"><i class="fi-cash text-primary fs-5 mt-n1 me-2"></i>Prix</h2>
                        
                        <div class="row">
                            <div class="col-md-4">
                                <label class="form-label" for="sc-price">Prix <span class="text-danger">*</span></label>
                                <input class="form-control w-100 me-2 mb-2" type="number" id="sc-price" min="200" step="50" required>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label" for="frequence">Fréquence <span class="text-danger">*</span></label>
                                <select class="form-select me-2 mb-2">
                                    <option value="" disabled selected>Choisir la fréquence</option>
                                    <option value="jour">Jour</option>
                                    <option value="semaine">Semaine</option>
                                    <option value="mois">Mois</option>
                                </select>
                            </div>
                            <div class="col-md-4  form-check form-switch d-flex align-items-center">
                                <label class="form-label me-2" for="negotiated-price"> A Débattre ? </label>
                                <input class="h3 form-check-input ms-0" type="checkbox" id="negotiated-price">
                            </div>
                        </div>
                    </section>

                    <!-- Vehicle information-->
                    <section class="card card-light card-body bg-white border-0 shadow-sm p-4 mb-4" id="vehicle-info">
                        <h2 class="h4 mb-4"><i class="fi-car text-primary fs-5 mt-n1 me-2"></i>Informations sur le Véhicle</h2>
                        <div class="row pb-2">
                            <div class="col-sm-6 mb-3">
                                <label class="form-label" for="sc-make">Marque <span class="text-danger">*</span></label>
                                <select class="form-select" id="sc-make">
                                    <option value="" disabled selected>Sélectionner la marque</option>
                                    <option value="Acura">Acura</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Citroen">Citroen</option>
                                    <option value="Lexus">Lexus</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Toyota">Toyota</option>
                                </select>
                            </div>
                            <div class="col-sm-6 mb-3">
                                <label class="form-label" for="sc-model">Modèle <span class="text-danger">*</span></label>
                                <select class="form-select" id="sc-model">
                                    <option value="" disabled selected>Sélectionner le modèle</option>
                                    <option value="A-Class">A-Class</option>
                                    <option value="B-Class">B-Class</option>
                                    <option value="C-Class">C-Class</option>
                                    <option value="E 220">E 220</option>
                                    <option value="E 400">E 400</option>
                                    <option value="GLS 550">GLS 550</option>
                                    <option value="GLE-Class">GLE-Class</option>
                                    <option value="ML 350">ML 350</option>
                                    <option value="Viano">Viano</option>
                                </select>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-3">
                                <label class="form-label" for="sc-year">Année <span class="text-danger">*</span></label>
                                <select class="form-select" id="sc-year">
                                    <option value="" disabled selected>Année</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                </select>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-3">
                                <label class="form-label" for="sc-mileage">Kilométrage <span class="text-danger">*</span></label>
                                <input class="form-control" type="number" id="sc-mileage" min="200" step="100" value="25000" placeholder="Enter mileage">
                            </div>
                            <div class="col-md-3 col-sm-6 mb-3">
                                <label class="form-label" for="sc-vin">Portes</label>
                                <select class="form-select" id="sc-year">
                                    <option value="" disabled selected>Portes</option>
                                    <option value="2">2 Portières</option>
                                    <option value="4">4 Portières</option>
                                </select>
                            </div>
                            <div class="col-md-3 col-sm-6 mb-3">
                                <label class="form-label" for="sc-vin">Carrosserie</label>
                                <select class="form-select mb-3" id="sc-body">
                                    <option value="" disabled>Select body type</option>
                                    <option value="Compact">Compact</option>
                                    <option value="Convertible" selected>Convertible</option>
                                    <option value="Crossover">Crossover</option>
                                    <option value="Coupe">Coupe</option>
                                    <option value="Family MPV">Family MPV</option>
                                    <option value="Pickup">Pickup</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Wagon">Wagon</option>
                                </select>
                            </div>
                        </div>
                        <div class="border-top border-light mt-3 pt-4 row pb-2">
                            <div class="col-md-4">
                                <label class="form-label" for="sc-fuel">Energie <span class="text-danger">*</span></label>
                                <select class="form-select mb-3" id="sc-fuel">
                                <option value="" disabled selected>Type d'Energie</option>
                                <option value="Gasoline">Gasoile</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Electric">Electric</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label" for="sc-engine">Moteur <span class="text-danger">*</span></label>
                                <select class="form-select mb-3" id="sc-engine">
                                    <option value="" disabled selected>Select engine</option>
                                    <option value="1.5 Turbo 3 Cylinder Engine">1.5 Turbo 3 Cylinder Engine</option>
                                    <option value="2.4L 4 Cylinder Engine">2.4L 4 Cylinder Engine</option>
                                    <option value="3.5L 4 Cylinder Engine">3.5L 4 Cylinder Engine</option>
                                    <option value="2.5L Turbo 6 Cylinder">2.5L Turbo 6 Cylinder</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label" for="sc-engine">Transmission<span class="text-danger">*</span></label>
                                <select class="form-select mb-3" id="sc-transmission">
                                <option value="" disabled selected>Transmission</option>
                                <option value="Manual">Manuel</option>
                                <option value="Automatic">Automatic</option>
                                </select>
                            </div>
                        </div>
                        <div class="border-top border-light mt-3 pt-4">
                            <label class="form-label" for="sc-description">Description Détaillée <span class="text-danger">*</span> </label>
                            <textarea class="form-control" id="sc-description" rows="8" placeholder="Décrivez le véhicule "></textarea><span class="form-text text-light opacity-50">3000 characters left</span>
                        </div>
                    </section>
                    <div class="row">
                        <div class="col-md-6 mx-auto text-center">
                            <button type="submit" class="btn btn-success"> 
                                <i class="fi-info-circle text-white me-2"></i>
                                Enregistrer ce Véhicule
                            </button>
                        </div>
                    </div> 
                    
                </div>



                <!-- Sidebar  style="margin-top: -6rem;" -->
                <div class="col-md-4 pt-3 pt-md-0 bg-dark rounded">
                    <div class="sticky-top pt-5">
                        <div class="card card-light card-body mb-4">
                            <h5 class="text-white">Info Vendeur</h5>
                            <div class="text-light mb-2">
                                ....
                            </div>

                        </div>

                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import router from '@/router';

export default defineComponent({
  name: 'AjouterVehicule',
  components: {
 
  },
  

  methods: {
 
  }
});
</script>

<style scoped></style>


