<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-white shadow-sm">
      <div class="container">
        <!-- Logo and Brand Name -->
        <a class="navbar-brand" href="#">
          <!-- <img src="" alt="Logo" /> -->
          <!-- Replace with your logo path -->
          OrderME
        </a>

        <!-- Toggle Button for Mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links -->
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Home</a> -->
               <router-link to="/" class=" nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/menus" class=" nav-link">Browse Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/offers" class=" nav-link">Special Offers</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/restaurants" class=" nav-link">Restaurants</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tracking" class=" nav-link">Track Order</router-link>
            </li>
          </ul>

          <!-- Login/Signup Button -->
          <a href="#" class="btn login-signup-btn ms-lg-3">Login/Signup</a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
    export default {};
</script>
<style></style>
