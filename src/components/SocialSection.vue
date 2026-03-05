<template>
  <section class="py-5 bg-white">
    <div class="container py-5">
      <div class="row align-items-end mb-5">
        <div class="col-lg-6">
          <h6 class="text-success fw-bold">SOCIAL & CULTURE</h6>
          <h2 class="fw-bold display-5">Kegiatan <span class="text-warning">Sosial & Gathering</span></h2>
        </div>
        <div class="col-lg-6">
          <p class="text-muted mb-0">Selain fokus pada layanan teknis, kami percaya bahwa berbagi kepada sesama dan menjaga kekompakan tim adalah kunci kesuksesan jangka panjang.</p>
        </div>
      </div>

      <div class="row g-4">
        <div v-for="(item, index) in socialActivities" :key="index" :class="item.colClass">
          <div class="social-card h-100 position-relative overflow-hidden rounded-5 shadow-sm">
            <img :src="item.image" class="img-fluid w-100 h-100 object-fit-cover" :alt="item.title">
            <div class="social-overlay d-flex flex-column justify-content-end p-4">
              <span class="badge bg-warning text-dark align-self-start mb-2 rounded-pill">{{ item.category }}</span>
              <h4 class="text-white fw-bold mb-1">{{ item.title }}</h4>
              <p class="text-white-50 small mb-0">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import baksoPanasonic from '@/assets/image/bakso1.jpeg';
import trainingGree from '@/assets/image/traininggree.jpeg';
import familyGathering from '@/assets/image/gathering.jpeg';
import baktiSosial from '@/assets/image/bakso2.jpeg';
import baksoKabisat from '@/assets/image/kabisat.jpeg';
import Apresiasi from '@/assets/image/penghargaan.jpeg';
import sosial from '@/assets/image/yatimpiatu.jpeg';
import trainingDaikin from '@/assets/image/daikin1.jpeg';


const socialActivities = [
  { 
    title: 'Buka Bersama bersama pimpinan perusahaan panasonic GOBEL', 
    category: 'Sosial', 
    date: 'Maret 2024', 
    image: baksoPanasonic,
    colClass: 'col-lg-8 col-md-12' 
  },
  { 
    title: 'Mengikuti Pelatihan yang diselenggarakan oleh GREE Indonesia', 
    category: 'Eksternal', 
    date: 'Januari 2026', 
    image: trainingGree,
    colClass: 'col-lg-4 col-md-6' 
  },
  { 
    title: 'Bakti Sosial Danau Ranau', 
    category: 'Eksternal', 
    date: 'Oktober 2025', 
    image: baktiSosial,
    colClass: 'col-lg-4 col-md-6' 
  },
  { 
    title: 'Family Gathering CV Sinar Yafiq Kamil Tehnik', 
    category: 'Internal', 
    date: 'November 2025', 
    image: familyGathering,
    colClass: 'col-lg-8 col-md-12' 
  },
  { 
    title: 'Bakti Sosial Asisi Banten dan Kabisat', 
    category: 'Eksternal', 
    date: 'Oktober 2025', 
    image: baksoKabisat,
    colClass: 'col-lg-8 col-md-12' 
  },
  { 
    title: 'Apresiasi Sultan Ageng Tirtayasa (Untirta)', 
    category: 'Internal', 
    date: 'November 2025', 
    image: Apresiasi,
    colClass: 'col-lg-4 col-md-6' 
  },
  { 
    title: 'Kegiatan Santunan Yatim Piatu', 
    category: 'Internal', 
    date: 'Kegiatan Tahunan', 
    image: sosial,
    colClass: 'col-lg-4 col-md-6' 
  },
  { 
    title: 'Peresmian PT Daikin Indonesia dan Service Partner bersama mitra Daikin', 
    category: 'Eksternal', 
    date: '20 juni 2025', 
    image: trainingDaikin,
    colClass: 'col-lg-8 col-md-12' 
  }
];
</script>

<style scoped>
.social-card {
  min-height: 350px;
  cursor: pointer;
  border: none;
}

.social-card img {
  transition: transform 0.6s ease;
}

.social-card:hover img {
  transform: scale(1.1);
}

.social-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 77, 44, 0.9) 0%, rgba(0,0,0,0) 60%);
  opacity: 1;
  transition: background 0.3s ease;
}

.social-card:hover .social-overlay {
  background: linear-gradient(to top, rgba(25, 135, 84, 0.95) 0%, rgba(0,0,0,0.1) 100%);
}

.object-fit-cover {
  object-fit: cover;
}
</style>