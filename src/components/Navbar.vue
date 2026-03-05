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
            <a class="nav-link" :class="{ active: activeSection === '#' }" href="#" @click="setActive('#')">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === '#AboutSection' }" href="#AboutSection" @click="setActive('#AboutSection')">Tentang Kami</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === '#legalitySection' }" href="#legalitySection" @click="setActive('#legalitySection')">Legalitas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === '#service' }" href="#services-and-gallery" @click="setActive('#service')">Service</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-warning rounded-pill px-4 fw-bold shadow-sm" :class="{ 'btn-active': activeSection === '#contactSection' }" href="#contactSection" @click="setActive('#contactSection')">Kontak</a>
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