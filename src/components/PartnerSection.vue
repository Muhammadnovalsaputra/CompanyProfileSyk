<template>
  <section class="py-5 bg-white overflow-hidden">
    <div class="container mb-5">
      <div class="text-center">
        <div class="d-flex align-items-center justify-content-center mb-3">
          <img src="@/assets/image/logoSyk.png" alt="Logo CV Sinar Yafiq" width="60" class="me-3">
          <div class="text-start border-start ps-3 border-success border-3">
            <h2 class="fw-bold mb-0 text-success">CV. SINAR YAFIQ</h2>
            <h5 class="fw-semibold text-secondary mb-0">KAMIL TEKNIK</h5>
          </div>
        </div>
        <h6 class="text-uppercase text-muted fw-bold mt-4" style="letter-spacing: 3px;">Mitra Strategis & Jaringan Kami</h6>
        <div class="mx-auto bg-warning" style="width: 50px; height: 3px;"></div>
      </div>
    </div>

    <div class="carousel-wrapper py-4 bg-light">
      <div class="logo-track">
        <div v-for="(logo, index) in allLogos" :key="index" class="logo-item">
          <div class="card border-0 shadow-sm rounded-4 p-3 d-flex align-items-center justify-content-center">
            <img :src="logo.image" :alt="logo.name" class="partner-img">
            <span class="mt-2 small fw-bold text-muted text-center">{{ logo.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

import untirtaLogo from '@/assets/image/UntirtaLogo.png';
import urbanLogo from '@/assets/image/UrbanLogo.png';
import aetraLogo from '@/assets/image/aetraLogo.png';
import prambananLogo from '@/assets/image/prambananLogo.png';
import daikinLogo from '@/assets/image/daikinLogo.png';
import gasindoLogo from '@/assets/image/gasindoLogo.png';
import wahanaLogo from '@/assets/image/wahanaLogo.png';
import marigoldLogo from '@/assets/image/marigoldLogo.png';

const logos = [
  { name: 'Universitas Sultan Ageng Tirtayasa', image: untirtaLogo },
  { name: 'Urban Indo Manufaktur', image: urbanLogo },
  { name: 'PT Aetra Air Tangerang', image: aetraLogo },
  { name: 'PT Prambanan Kencana', image: prambananLogo },
  { name: 'PT Daikin Airconditioning Indonesia', image: daikinLogo },
  { name: 'PT Gasindo Andalan Sukses', image: gasindoLogo },
  { name: 'Klinik Rumah Sehat Wahana', image: wahanaLogo },
  { name: 'Marigold Navapark Apartemen BSD', image: marigoldLogo },
];


const allLogos = computed(() => [...logos, ...logos, ...logos]);
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  display: flex;
}

.logo-track {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite; 
}

.logo-item {
  width: 220px;
  padding: 0 20px;
}

.logo-item .card {
  height: 150px;
  transition: all 0.3s ease;
  background: white;
}

.partner-img {
  max-width: 120px;
  height: auto;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.logo-item:hover .card {
  transform: translateY(-5px);
  border: 1px solid #198754;
}

.logo-item:hover .partner-img {
  filter: grayscale(0%);
  opacity: 1;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}


.carousel-wrapper:hover .logo-track {
  animation-play-state: paused;
}
</style>