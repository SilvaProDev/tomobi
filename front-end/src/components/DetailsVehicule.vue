<template>
    <div>
        <div class="container mt-3 mb-1 py-5">
            <div class="row py-1">
                <nav class="mb-1 pt-md-2 pt-lg-4" aria-label="Breadcrumb">
                    <ol class="breadcrumb breadcrumb-primary">
                        <li class="breadcrumb-item"><a href="./">Acceuil</a></li>
                        <li class="breadcrumb-item"><a href="RechercheVehicule"> Recherche </a></li>
                        <li class="breadcrumb-item active" aria-current="page">Détails du Véhicule</li>
                    </ol>
                </nav>
                <h1>Détail du véhicule sélectionné</h1>
                <div class="row">
                    <div class="col-md-7">
                        <!-- Gallery-->
                        <div class="tns-carousel-wrapper">
                        <div class="tns-slides-count text-light"><i class="fi-image fs-lg me-2"></i>
                            <div class="ps-1"><span class="tns-current-slide fs-5 fw-bold"></span><span class="fs-5 fw-bold">/</span><span class="tns-total-slides fs-5 fw-bold"></span></div>
                        </div>
                        <div class="tns-carousel-inner" data-carousel-options="{&quot;navAsThumbnails&quot;: true, &quot;navContainer&quot;: &quot;#thumbnails&quot;, &quot;gutter&quot;: 12, &quot;responsive&quot;: {&quot;0&quot;:{&quot;controls&quot;: false},&quot;500&quot;:{&quot;controls&quot;: true}}}">

                            <div class="tns-carousel-inner">
                                <img src="/img/single/06.jpg" alt="Image">
                            </div>
                        </div>
                        </div>
                        <ul class="tns-thumbnails" id="thumbnails">
                        <li class="tns-thumbnail"><img src="/img/single/th01.jpg" alt="Thumbnail"></li>
                        <li class="tns-thumbnail"><img src="/img/single/th02.jpg" alt="Thumbnail"></li>
                        <li class="tns-thumbnail"><img src="/img/single/th03.jpg" alt="Thumbnail"></li>
                        <li class="tns-thumbnail"><img src="/img/single/th04.jpg" alt="Thumbnail"></li>
                        <li class="tns-thumbnail"><img src="/img/single/th05.jpg" alt="Thumbnail"></li>
                        <li class="tns-thumbnail"><img src="/img/single/th06.jpg" alt="Thumbnail"></li>
                        <li class="tns-thumbnail"><img src="/img/single/th07.jpg" alt="Thumbnail"></li>
                        <li class="tns-thumbnail"><img src="/img/single/th08.jpg" alt="Thumbnail"></li>
                        <li class="tns-thumbnail"><a class="d-flex flex-column align-items-center justify-content-center w-100 h-100 bg-faded-light rounded text-light text-decoration-none" href="https://www.youtube.com/watch?v=0ffN2hgKzOE" data-bs-toggle="lightbox" data-video="true"><i class="fi-play-circle fs-5"></i><span class="opacity-70 mt-1">Play video</span></a></li>
                        </ul>
                        <!-- Specs-->
                        <div class="py-3 mb-3">
                        <h2 class="h4 text-light mb-4">Specifications</h2>
                        <div class="row text-light">
                            <div class="col-sm-6 col-md-12 col-lg-6">
                            <ul class="list-unstyled">
                                <li class="mb-2"><strong>Manufacturing Year:</strong><span class="opacity-70 ms-1">2018</span></li>
                                <li class="mb-2"><strong>Mileage:</strong><span class="opacity-70 ms-1">25K miles</span></li>
                                <li class="mb-2"><strong>Body Type:</strong><span class="opacity-70 ms-1">Convertible</span></li>
                                <li class="mb-2"><strong>Drivetrain:</strong><span class="opacity-70 ms-1">Front Wheel Drive</span></li>
                                <li class="mb-2"><strong>Engine:</strong><span class="opacity-70 ms-1">2.5L Turbo 6 Cylinder</span></li>
                                <li class="mb-2"><strong>Transmission:</strong><span class="opacity-70 ms-1">7-Speed Shiftable Automatic</span></li>
                            </ul>
                            </div>
                            <div class="col-sm-6 col-md-12 col-lg-6">
                            <ul class="list-unstyled">
                                <li class="mb-2"><strong>Fuel Type:</strong><span class="opacity-70 ms-1">Gasoline</span></li>
                                <li class="mb-2"><strong>City MPG:</strong><span class="opacity-70 ms-1">20</span><i class='fi-alert-circle fs-sm text-primary ms-2' data-bs-toggle='tooltip' title='Verified by seller'></i></li>
                                <li class="mb-2"><strong>Highway MPG:</strong><span class="opacity-70 ms-1">29</span><i class='fi-alert-circle fs-sm text-primary ms-2' data-bs-toggle='tooltip' title='Verified by seller'></i></li>
                                <li class="mb-2"><strong>Exterior Color:</strong><span class="opacity-70 ms-1">Aspen White</span></li>
                                <li class="mb-2"><strong>Interior Color:</strong><span class="opacity-70 ms-1">Charcoal</span></li>
                                <li class="mb-2"><strong>VIN:</strong><span class="opacity-70 ms-1">2VW821AU9JM754284</span></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <!-- Card with icon boxes-->
                        <div class="card card-body p-4 card-light mb-4">
                        <div class="row row-cols-2 row-cols-sm-4 gx-3 gx-xl-4 gy-4">
                            <div class="col text-light text-center">
                            <div class="d-table bg-dark rounded-3 mx-auto p-3"><img src="/img/icons/check.svg" width="48" alt="Icon"></div>
                            <div class="fs-sm pt-2 mt-1">Checked and Certified by Finder</div>
                            </div>
                            <div class="col text-light text-center">
                            <div class="d-table bg-dark rounded-3 mx-auto p-3"><img src="/img/icons/steering-wheel.svg" width="48" alt="Icon"></div>
                            <div class="fs-sm pt-2 mt-1">Single Owner</div>
                            </div>
                            <div class="col text-light text-center">
                            <div class="d-table bg-dark rounded-3 mx-auto p-3"><img src="/img/icons/driving-test.svg" width="48" alt="Icon"></div>
                            <div class="fs-sm pt-2 mt-1">Well-Equipped</div>
                            </div>
                            <div class="col text-light text-center">
                            <div class="d-table bg-dark rounded-3 mx-auto p-3"><img src="/img/icons/accident.svg" width="48" alt="Icon"></div>
                            <div class="fs-sm pt-2 mt-1">No Accident / Damage Reported</div>
                            </div>
                        </div>
                        </div>
                        <!-- Features-->
                        <h2 class="h4 text-light pt-3 mb-4">Features</h2>
                        <div class="accordion accordion-light" id="features">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingExterior">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#exterior" aria-expanded="false" aria-controls="exterior">Exterior</button>
                            </h2>
                            <div class="accordion-collapse collapse" id="exterior" aria-labelledby="headingExterior" data-bs-parent="#features">
                            <div class="accordion-body fs-sm text-light opacity-70">
                                <ul>
                                <li>Alloy Wheels</li>
                                <li>Sunroof / Moonroof</li>
                                <li>Tinged glass</li>
                                <li>LED Headlights</li>
                                <li>Foldable Roof</li>
                                <li>Tow Hitch</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingInterior">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#interior" aria-expanded="true" aria-controls="interior">Interior</button>
                            </h2>
                            <div class="accordion-collapse collapse show" id="interior" aria-labelledby="headingInterior" data-bs-parent="#features">
                            <div class="accordion-body fs-sm text-light opacity-70">
                                <div class="row">
                                <div class="col-sm-6">
                                    <ul>
                                    <li>Adjustable Steering Wheel</li>
                                    <li>Auto-Dimming Rearview Mirror</li>
                                    <li>Driver Adjustable Lumbar</li>
                                    <li>Driver Illuminated Vanity Mirror</li>
                                    <li>Universal Garage Door Opener</li>
                                    <li>Steering Wheel Audio Controls</li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul>
                                    <li>Heated Front Seats</li>
                                    <li>Leather Seats</li>
                                    <li>Leather Steering Wheel</li>
                                    <li>Pass-Through Rear Seat</li>
                                    <li>Passenger Adjustable Lumbar</li>
                                    <li>Passenger Illuminated Visor Mirror</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSafety">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#safety" aria-expanded="false" aria-controls="safety">Safety</button>
                            </h2>
                            <div class="accordion-collapse collapse" id="safety" aria-labelledby="headingSafety" data-bs-parent="#features">
                            <div class="accordion-body fs-sm text-light opacity-70">
                                <div class="row">
                                <div class="col-sm-6">
                                    <ul>
                                    <li>Airbag: Driver</li>
                                    <li>Airbag: Passenger</li>
                                    <li>Adaptive Cruise Control</li>
                                    <li>Blind Spot Monitor</li>
                                    <li>Alarm</li>
                                    <li>Antilock Brakes</li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul>
                                    <li>Brake Assist</li>
                                    <li>Lane Departure Warning</li>
                                    <li>Stability Control</li>
                                    <li>Fog Lights</li>
                                    <li>Power Door Locks</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTechnology">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#technology" aria-expanded="false" aria-controls="technology">Technology</button>
                            </h2>
                            <div class="accordion-collapse collapse" id="technology" aria-labelledby="headingTechnology" data-bs-parent="#features">
                            <div class="accordion-body fs-sm text-light opacity-70">
                                <div class="row">
                                <div class="col-sm-6">
                                    <ul>
                                    <li>Multi-Zone A/C</li>
                                    <li>Climate Control</li>
                                    <li>Navigation System</li>
                                    <li>Remote Start</li>
                                    <li>Bluetooth</li>
                                    <li>Remote Start</li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul>
                                    <li>Apple CarPlay</li>
                                    <li>Android Auto</li>
                                    <li>Backup Camera</li>
                                    <li>HomeLink</li>
                                    <li>Keyless Start</li>
                                    <li>Premium Sound System</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <!-- Description-->
                        <div class="pb-4 mb-3">
                        <h2 class="h4 text-light pt-4 mt-3">Seller's Description</h2>
                        <p class="text-light opacity-70 mb-1">Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
                        <div class="collapse" id="seeMoreDescription">
                            <p class="text-light opacity-70 mb-1">Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
                        </div><a class="collapse-label collapsed" href="#seeMoreDescription" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreDescription"></a>
                        </div>
                        <!-- Post meta-->
                        <div class="d-flex flex-wrap border-top border-light fs-sm text-light pt-4 pb-5 pb-md-2">
                        <div class="border-end border-light pe-3 me-3"><span class="opacity-70">Published: <strong>May 9, 2021</strong></span></div>
                        <div class="border-end border-light pe-3 me-3"><span class="opacity-70">Ad number: <strong>681013232</strong></span></div>
                        <div class="opacity-70">Views: <strong>57</strong></div>
                        </div>
                    </div>
                    <!-- Sidebar-->
                    <div class="col-md-5 pt-5 pt-md-0" style="margin-top: -6rem;">
                        <div class="sticky-top pt-5">
                        <div class="d-none d-md-block pt-5">
                            <div class="d-flex mb-4"><span class="badge bg-info fs-base me-2">Used</span><span class="badge bg-success fs-base me-2" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div class=&quot;d-flex&quot;&gt;&lt;i class=&quot;fi-award mt-1 me-2&quot;&gt;&lt;/i&gt;&lt;div&gt;This car is checked and&lt;br&gt;certified by Finder.&lt;/div&gt;&lt;/div&gt;">Certified</span></div>
                            <div class="h3 text-light">$31,900</div>
                            <div class="d-flex align-items-center text-light pb-4 mb-2">
                            <div class="text-nowrap border-end border-light pe-3 me-3"><i class="fi-dashboard fs-lg opacity-70 me-2"></i><span class="align-middle">25K miles</span></div>
                            <div class="text-nowrap"><i class="fi-map-pin fs-lg opacity-70 me-2"></i><span class="align-middle">Chicago, IL 60603</span></div>
                            </div>
                        </div>
                        <div class="card card-light card-body mb-4">
                            <div class="text-light mb-2">Private Seller</div><a class="d-flex align-items-center text-decoration-none mb-3" href="car-finder-vendor.html"><img class="rounded-circle" src="/img/avatars/27.png" width="48" alt="Devon Lane">
                            <div class="ps-2">
                                <h5 class="text-light mb-0">Devon Lane</h5><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i></span><span class="fs-sm text-light opacity-70 align-middle ms-1">(5 reviews)</span>
                            </div></a><a class="text-light" href="car-finder-vendor.html">Other ads by this seller</a>
                            <div class="pt-4 mt-2">
                            <button class="btn btn-outline-light btn-lg px-4 mb-3" type="button"><i class="fi-phone me-2"></i>(316) *** **** – reveal</button><br><a class="btn btn-primary btn-lg" href="#send-mail" data-bs-toggle="collapse"><i class="fi-chat-left me-2"></i>Send message</a>
                            <div class="collapse" id="send-mail">
                                <form class="needs-validation pt-4" novalidate>
                                <div class="mb-3">
                                    <textarea class="form-control form-control-light" rows="5" placeholder="Write your message" required></textarea>
                                    <div class="invalid-feedback">Please enter you message.</div>
                                </div>
                                <button class="btn btn-outline-primary" type="submit">Submit</button>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div class="card card-body bg-transparent border-light">
                            <h5 class="text-light">Email me price drops and new listings for these search results:</h5>
                            <form class="form-group form-group-light mb-3">
                            <div class="input-group"><span class="input-group-text"> <i class="fi-mail"></i></span>
                                <input class="form-control" type="email" placeholder="Your email" required>
                            </div>
                            <button class="btn btn-primary" type="submit">Subscribe</button>
                            </form>
                            <div class="form-check form-check-light">
                            <input class="form-check-input" type="checkbox" id="subscription-agree">
                            <label class="form-check-label fs-sm opacity-70" for="subscription-agree">I agree to receive price drop alerts on this vehicle and helpful shopping information.</label>
                            </div>
                        </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>




