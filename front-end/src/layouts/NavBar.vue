<template>
    <div>
        <div class="modal fade" id="signin-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style="max-width: 950px;">
        <div class="modal-content bg-dark border-light">
            <div class="modal-body px-0 py-2 py-sm-0">
            <button class="btn-close btn-close-white position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
            <div class="row mx-0 align-items-center">
                <div class="col-md-6 border-end-md border-light p-4 p-sm-5">
                <h2 class="h3 text-light mb-4 mb-sm-5">Bienvenue<br>Partenaire</h2><img class="d-block mx-auto" src="/img/logo/tomobi.png" width="344" alt="Illustration">
                <div class="text-light mt-4 mt-sm-5"><span class="opacity-60">Si vous n'avez pas de compte </span><br><a class="text-light" href="#signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Inscrivez-vous maintenant</a></div>
                </div>
                <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a class="btn btn-outline-info w-100 mb-3" href="#"><i class="fi-google fs-lg me-1"></i>Avec Google</a><a class="btn btn-outline-info w-100 mb-3" href="#"><i class="fi-facebook fs-lg me-1"></i>Avec Facebook</a>
                <div class="d-flex align-items-center py-3 mb-3">
                    <hr class="hr-light w-100">
                    <div class="text-light opacity-70 px-3">Ou</div>
                    <hr class="hr-light w-100">
                </div>
                <form class="needs-validation" novalidate>
                    <div class="mb-4">
                    <label class="form-label text-light mb-2" for="signin-email">Email: </label>
                    <input class="form-control form-control-light" type="email" id="signin-email" placeholder="Entrez votre email" required>
                    </div>
                    <div class="mb-4">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <label class="form-label text-light mb-0" for="signin-password">Mot de Passe:</label><a class="fs-sm text-light" href="#">Mot de passe Oublié?</a>
                    </div>
                    <div class="password-toggle">
                        <input class="form-control form-control-light" type="password" id="signin-password" placeholder="Entrez votre mot de passe" required>
                        <label class="password-toggle-btn" aria-label="Show/hide password">
                        <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                        </label>
                    </div>
                    </div>
                    <button class="btn btn-primary btn-lg w-100" type="submit">Se Connecter</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <!-- Sign Up Modal-->
    <div class="modal fade" id="signup-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style="max-width: 950px;">
        <div class="modal-content bg-dark border-light">
            <div class="modal-body px-0 py-2 py-sm-0">
            <button class="btn-close btn-close-white position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
            <div class="row mx-0 align-items-center">
                <div class="col-md-6 border-end-md border-light p-4 p-sm-5">
                <h2 class="h3 text-light mb-4 mb-sm-5">Rejoignez Finder.<br>Obtenez des avantages premium:</h2>
                <ul class="list-unstyled mb-4 mb-sm-5">
                    <li class="d-flex mb-2"><i class="fi-check-circle text-primary mt-1 me-2"></i><span class="text-light">Ajoutez et promouvez vos annonces</span></li>
                    <li class="d-flex mb-2"><i class="fi-check-circle text-primary mt-1 me-2"></i><span class="text-light">Gérez facilement votre liste de souhaits</span></li>
                    <li class="d-flex mb-0"><i class="fi-check-circle text-primary mt-1 me-2"></i><span class="text-light">Laissez des avis</span></li>
                </ul><img class="d-block mx-auto" src="/img/logo/tomobi.png" width="344" alt="Illustration">
                <div class="text-light mt-sm-4 pt-md-3"><span class="opacity-60">Vous avez déjà un compte? </span><a class="text-light" href="#signin-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Connectez-vous</a></div>
                </div>
                <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a class="btn btn-outline-info w-100 mb-3" href="#"><i class="fi-google fs-lg me-1"></i>Se connecter avec Google</a><a class="btn btn-outline-info w-100 mb-3" href="#"><i class="fi-facebook fs-lg me-1"></i>Se connecter avec Facebook</a>
                <div class="d-flex align-items-center py-3 mb-3">
                    <hr class="hr-light w-100">
                    <div class="text-light opacity-70 px-3">Ou</div>
                    <hr class="hr-light w-100">
                </div>
                <form class="needs-validation" novalidate>
                    <div class="mb-4">
                    <label class="form-label text-light" for="signup-name">Nom complet</label>
                    <input class="form-control form-control-light" type="text" id="signup-name" placeholder="Entrez votre nom complet" required>
                    </div>
                    <div class="mb-4">
                    <label class="form-label text-light" for="signup-email">Adresse email</label>
                    <input class="form-control form-control-light" type="email" id="signup-email" placeholder="Entrez votre email" required>
                    </div>
                    <div class="mb-4">
                    <label class="form-label text-light" for="signup-password">Mot de passe <span  class='fs-sm opacity-50'>min. 8 caractères</span></label>
                    <div class="password-toggle">
                        <input class="form-control form-control-light" type="password" id="signup-password" minlength="8" required>
                        <label class="password-toggle-btn" aria-label="Show/hide password">
                        <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                        </label>
                    </div>
                    </div>
                    <div class="mb-4">
                    <label class="form-label text-light" for="signup-password-confirm">Confirmez le mot de passe</label>
                    <div class="password-toggle">
                        <input class="form-control form-control-light" type="password" id="signup-password-confirm" minlength="8" required>
                        <label class="password-toggle-btn" aria-label="Show/hide password">
                        <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                        </label>
                    </div>
                    </div>
                    <div class="form-check form-check-light mb-4">
                    <input class="form-check-input" type="checkbox" id="agree-to-terms" required>
                    <label class="form-check-label" for="agree-to-terms"><span class='opacity-70'>En rejoignant, j'accepte les</span> <a href='#' class='text-light'>Conditions d'utilisation</a> <span class='opacity-70'>et la</span> <a href='#' class='text-light'>Politique de confidentialité</a></label>
                    </div>
                    <button class="btn btn-primary btn-lg w-100" type="submit">S'inscrire</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    <!-- Navbar-->
    <header class="navbar navbar-expand-lg navbar-dark fixed-top" data-scroll-header>
        <div class="container"><a class="navbar-brand me-3 me-xl-4" href="./"><img class="d-block" src="/img/logo/tomobi.png" width="116" alt="Tomobi"></a>
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><a class="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3" href="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i> Espace Pro</a><a class="btn btn-primary btn-sm ms-2 order-lg-3" href="/RechercheVehicule"><i class="fi-search me-2"></i>Recherche</a>
        <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
            <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem;">
            <!-- Menu items-->
            <li class="nav-item active"><a class="nav-link" href="./">Accueil</a></li>
            <li class="nav-item"><a class="nav-link" href="/RechercheVehicule">Recherche</a></li>
            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vente</a>
                <ul class="dropdown-menu dropdown-menu-light">
                  <li><a class="dropdown-item" href="#">Neuves</a></li>
                  <li><a class="dropdown-item" href="#">Reconditionnées</a></li>
                  <li><a class="dropdown-item" href="#">Occasions</a></li>
                </ul>
              </li>
            <li class="nav-item"><a class="nav-link" href="#">Nos partenaires</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Actualité</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contacts</a></li>
            <li class="nav-item d-lg-none"><a class="nav-link" href="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Espace Pro</a></li>
            </ul>
        </div>
        </div>
    </header>

    </div>
</template>
