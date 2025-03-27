<template>
    <div>
        <div class="offcanvas-lg offcanvas-start bg-dark p-3 mt-3 rounded">
            <div class="offcanvas-header bg-transparent d-flex d-lg-none align-items-center">
                <h2 class="h5 text-light mb-0">Filtres</h2>
                <button class="btn-close btn-close-white" type="button" data-bs-dismiss="offcanvas" data-bs-target="#filters-sidebar"></button>
            </div>
            <h5 class="nav-link active bg-white p-2 rounded text-center"><i class="fi-search"></i>  Filtre de recherche</h5>
            <div class="offcanvas-body py-lg-4">
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Etat</h3>
                    <div class="form-check form-check-light">
                    <input class="form-check-input" type="checkbox" id="two-doors">
                    <label class="form-check-label fs-sm" for="two-doors">Neuve</label>
                    </div>
                    <div class="form-check form-check-light">
                    <input class="form-check-input" type="checkbox" id="four-doors">
                    <label class="form-check-label fs-sm" for="four-doors">Occasion</label>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Type</h3>
                    <div class="overflow-auto" data-simplebar data-simplebar-auto-hide="false" data-simplebar-inverse style="height: 11rem;">
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="sedan" checked>
                        <label class="form-check-label fs-sm" for="sedan">Sedan</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="suv" checked>
                        <label class="form-check-label fs-sm" for="suv">SUV</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="wagon">
                        <label class="form-check-label fs-sm" for="wagon">Wagon</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="crossover" checked>
                        <label class="form-check-label fs-sm" for="crossover">Crossover</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="coupe">
                        <label class="form-check-label fs-sm" for="coupe">Coupe</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="pickup">
                        <label class="form-check-label fs-sm" for="pickup">Pickup</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="sport">
                        <label class="form-check-label fs-sm" for="sport">Sport Coupe</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="compact">
                        <label class="form-check-label fs-sm" for="compact">Compact</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="convertible">
                        <label class="form-check-label fs-sm" for="convertible">Convertible</label>
                    </div>
                    <div class="form-check form-check-light">
                        <input class="form-check-input" type="checkbox" id="mpv">
                        <label class="form-check-label fs-sm" for="mpv">Family MPV</label>
                    </div>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light pt-1">Année</h3>
                    <div class="d-flex align-items-center">
                    <select class="form-select form-select-light w-100">
                        <option value="" disabled selected>De</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                    </select>
                    <div class="mx-2">&mdash;</div>
                    <select class="form-select form-select-light w-100">
                        <option value="" disabled>À</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019" selected>2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                    </select>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Marque &amp; Modèle</h3>
                    <select class="form-select form-select-light mb-2">
                    <option value="" disabled selected>Toute marque</option>
                    <option value="Audi">Audi</option>
                    <option value="Infiniti">Infiniti</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Lexus">Lexus</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Opel">Opel</option>
                    <option value="Renault">Renault</option>
                    <option value="Toyota">Toyota</option>
                    </select>
                    <select class="form-select form-select-light mb-1">
                    <option value="" disabled selected>Tous modèles</option>
                    <option value="Altima">Altima</option>
                    <option value="Juke">Juke</option>
                    <option value="Leaf">Leaf</option>
                    <option value="Maxima">Maxima</option>
                    <option value="Micra">Micra</option>
                    <option value="Murano">Murano</option>
                    <option value="Note">Note</option>
                    <option value="Pathfinder">Pathfinder</option>
                    <option value="Patrol">Patrol</option>
                    </select>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Prix</h3>
                    <div class="range-slider range-slider-light mb-3" data-start-min="25000" data-start-max="65000" data-min="4000" data-max="100000" data-step="1000">
                    <div class="range-slider-ui"></div>
                    <div class="d-flex align-items-center">
                        <div class="w-50 pe-2">
                        <input class="form-control form-control-light range-slider-value-min" type="text">
                        </div>
                        <div class="text-muted">&mdash;</div>
                        <div class="w-50 ps-2">
                        <input class="form-control form-control-light range-slider-value-max" type="text">
                        </div>
                    </div>
                    </div>
                    <div class="form-check form-switch form-switch-light">
                    <input class="form-check-input" type="checkbox" id="negotiated-price">
                    <label class="form-check-label fs-sm" for="negotiated-price">Prix négocié</label>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Transmission</h3>
                    <div class="form-check form-check-light">
                    <input class="form-check-input" type="checkbox" id="awd">
                    <label class="form-check-label fs-sm" for="awd">AWD/4WD</label>
                    </div>
                    <div class="form-check form-check-light">
                    <input class="form-check-input" type="checkbox" id="front-wheel">
                    <label class="form-check-label fs-sm" for="front-wheel">Traction avant</label>
                    </div>
                    <div class="form-check form-check-light">
                    <input class="form-check-input" type="checkbox" id="rear-wheel">
                    <label class="form-check-label fs-sm" for="rear-wheel">Traction arrière</label>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Nombre de portes</h3>
                    <div class="form-check form-check-light">
                    <input class="form-check-input" type="checkbox" id="two-doors">
                    <label class="form-check-label fs-sm" for="two-doors">2 portes</label>
                    </div>
                    <div class="form-check form-check-light">
                    <input class="form-check-input" type="checkbox" id="four-doors">
                    <label class="form-check-label fs-sm" for="four-doors">4 portes</label>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light pt-1">Kilométrage</h3>
                    <div class="d-flex align-items-center">
                    <input class="form-control form-control-light w-100" type="number" min="0" step="500" placeholder="De">
                    <div class="mx-2">&mdash;</div>
                    <input class="form-control form-control-light w-100" type="number" min="0" step="500" placeholder="À">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>