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
                  <li><a class="dropdown-item" href="car-finder-catalog-list.html">Neuve</a></li>
                  <li><a class="dropdown-item" href="car-finder-catalog-grid.html">Occasion</a></li>
                  <li><a class="dropdown-item" href="car-finder-catalog-grid.html">Professionnel</a></li>
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