<template>
    <div>
         <header class="navbar navbar-expand-lg navbar-dark fixed-top" data-scroll-header>
        <div class="container"><a class="navbar-brand me-3 me-xl-4" href="car-finder-home.html"><img class="d-block" src="../../img/logo/tomobi03.png" width="116" alt="Tomobi"></a>
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><a class="btn btn-primary btn-sm order-lg-3" href="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Mon Espace</a>
          <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
            <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem;">
              <!-- Demos switcher-->
              <li class="nav-item active"><a class="nav-link" href="./">Accueil</a></li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vente</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="real-estate-home-v1.html"><i class="fi-building fs-base me-2"></i>Real Estate Demo</a></li>
                  <li class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="car-finder-home.html"><i class="fi-car fs-base me-2"></i>Car Finder Demo</a></li>
                  <li class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="job-board-home-v1.html"><i class="fi-briefcase fs-base me-2"></i>Job Board Demo</a></li>
                  <li class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="city-guide-home-v1.html"><i class="fi-map-pin fs-base me-2"></i>City Guide Demo</a></li>
                  <li class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="index.html"><i class="fi-home fs-base me-2"></i>Main Page</a></li>
                  <li><a class="dropdown-item" href="components/typography.html"><i class="fi-list fs-base me-2"></i>Components</a></li>
                  <li><a class="dropdown-item" href="docs/dev-setup.html"><i class="fi-file fs-base me-2"></i>Documentation</a></li>
                </ul>
              </li>
              <!-- Menu items-->
              <li class="nav-item active">
                <a class="nav-link" href=""  @click.prevent="routeHome">Home</a>
                </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalog</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="car-finder-catalog-list.html">List View</a></li>
                  <li><a class="dropdown-item" href="car-finder-catalog-grid.html">Grid View</a></li>
                  <li><a class="dropdown-item" href="car-finder-single.html">Car Single Page</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="car-finder-account-info.html">Personal Info</a></li>
                  <li><a class="dropdown-item" href="car-finder-account-security.html">Password &amp; Security</a></li>
                  <li><a class="dropdown-item" href="car-finder-account-cars.html">My Cars</a></li>
                  <li><a class="dropdown-item" href="car-finder-account-wishlist.html">Wishlist</a></li>
                  <li><a class="dropdown-item" href="car-finder-account-reviews.html">Reviews</a></li>
                  <li><a class="dropdown-item" href="car-finder-account-notifications.html">Notifications</a></li>
                  <li><a class="dropdown-item" href="signin-dark.html">Sign In</a></li>
                  <li><a class="dropdown-item" href="signup-dark.html">Sign Up</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vendor</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="car-finder-sell-car.html">Sell Car</a></li>
                  <li><a class="dropdown-item" href="car-finder-promotion.html">Ad Promotion Page</a></li>
                  <li><a class="dropdown-item" href="car-finder-vendor.html">Vendor Page</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="car-finder-about.html">About</a></li>
                  <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li><a class="dropdown-item" href="car-finder-blog.html">Blog Grid</a></li>
                      <li><a class="dropdown-item" href="car-finder-blog-single.html">Single Post</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="car-finder-contacts.html">Contacts</a></li>
                  <li><a class="dropdown-item" href="car-finder-help-center.html">Help Center</a></li>
                  <li><a class="dropdown-item" href="car-finder-404.html">404 Not Found</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="./">Location</a></li>
              <li class="nav-item"><a class="nav-link" href="./">Recherche  <i class="fi-search me-2"></i></a></li>
              <li class="nav-item"><a class="nav-link" href="./">Actualité </a></li>
              <li class="nav-item"><a class="nav-link" href="./">Concessionnaires </a></li>
              <li class="nav-item"><a class="nav-link" href="./">Contacts</a></li>

              <li class="nav-item d-lg-none"><a class="nav-link" href="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Sign in</a></li>
            </ul>
          </div>
        </div>
      </header>
      
    </div>
</template>
<script lang='ts' setup>
import { useRouter } from "vue-router";

const router = useRouter();


//  ICI DEBUT LES METHODES
function routeHome() {
  router.push({
    name: "DetailsVehicule",
  });
}
//  ICI FIN LES METHODES
</script>