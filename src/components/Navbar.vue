<template>
  <nav class="navbar navbar-expand-lg sticky-top w-100 py-3">
    <div class="container">
      <a class="navbar-brand fw-bold d-flex align-items-center" href="#" @click="setActive('#')">
        <img src="@/assets/image/logoSyk.png" alt="logo" width="100" class="me-2">
        <span class="fs-6 lh-1 text-white">CV. SINAR YAFIQ<br><small>KAMIL TEHNIK</small></span>
      </a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-lg-4 align-items-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active">Tentang Kami</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/legalitas" class="nav-link" active-class="active">Legalitas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link" active-class="active">Service</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="btn btn-warning rounded-pill px-4 fw-bold shadow-sm" active-class="btn-active">
              Kontak
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const activeSection = ref('#');

const setActive = (section) => {
  activeSection.value = section;
};
</script>

<style scoped>
.navbar {
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: #0d6539; 
  backdrop-filter: blur(10px);
  
  border-radius: 2px;
}
.nav-link {
  font-weight: 500;
  color: white !important;
  opacity: 0.8;
  transition: 0.3s;
}
.nav-link.active {
  opacity: 1 !important;
  color: #ffc107 !important;
  border-bottom: 2px solid #ffc107; 
}


.btn-active {
  background-color: #e0a800 !important; 
  border-color: #d39e00 !important;
}


.navbar-brand span {
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>