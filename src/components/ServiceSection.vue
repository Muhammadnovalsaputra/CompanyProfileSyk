<template>
  <section id="services-and-gallery" class="py-5 bg-white">
    <div class="container py-5 border-bottom mb-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5">Layanan <span class="text-success">Kami</span></h2>
        <div class="mx-auto bg-warning my-3" style="width: 80px; height: 4px;"></div>
        <p class="text-muted">Kami menyediakan berbagai layanan lengkap untuk semua kebutuhan HVAC Anda dengan kualitas terjamin.</p>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-6 col-lg-4" v-for="(service, index) in services" :key="index">
          <div class="card service-card h-100 border-0 shadow-sm p-4 rounded-4">
            <div class="icon-box mb-3 shadow-sm">
              <i :class="['bi', service.icon]"></i>
            </div>
            <h4 class="fw-bold mb-3">{{ service.title }}</h4>
            <p class="text-muted small mb-4">{{ service.desc }}</p>
            <ul class="list-unstyled mb-0">
              <li v-for="item in service.points" :key="item" class="d-flex align-items-center mb-2 small">
                <i class="bi bi-circle-fill text-warning me-2" style="font-size: 0.5rem;"></i>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5">Detail <span class="text-success">Pengerjaan</span></h2>
        <div class="mx-auto bg-warning my-3" style="width: 80px; height: 4px;"></div>
        <p class="text-muted">Berikut adalah foto foto pengerjaan dalam layanan kami.</p>
      </div>

      <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          :class="['btn rounded-pill px-4 py-2 fw-bold transition shadow-sm', activeCategory === cat ? 'btn-success' : 'btn-outline-success']"
        >
          {{ cat }}
        </button>
      </div>

      <div class="row g-3">
        <div 
          v-for="(img, index) in filteredImages" 
          :key="activeCategory + index" 
          class="col-6 col-md-4 col-lg-3 animate-fade-in"
        >
          <div class="gallery-item rounded-4 overflow-hidden shadow-sm" @click="openLightbox(img)">
            <img :src="img" class="img-fluid w-100 h-100 object-fit-cover" alt="Portofolio Kami">
            <div class="gallery-overlay">
              <i class="bi bi-zoom-in text-white fs-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="lightboxModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-body p-0 text-center">
            <img :src="selectedImg" class="img-fluid rounded-4 shadow-lg" alt="Preview">
            <button type="button" class="btn btn-light rounded-circle mt-3 shadow" data-bs-dismiss="modal">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import * as bootstrap from 'bootstrap';

// 1. State Management
const activeCategory = ref('Instalasi');
const selectedImg = ref('');
let modalObj = null;

const categories = [
  'Instalasi', 
  'Perawatan',  
  'Pemasangan Ducting', 
  'Perbaikan'
];

const allImages = import.meta.glob('@/assets/image/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});


const filteredImages = computed(() => {
 
  const folderMapping = {
    'Instalasi': 'Instalasi',
    'Perawatan': 'Perawatan',
    'Pemasangan Ducting': 'pemasanganDuktif', 
    'Perbaikan': 'Perbaikan'
  };

  const targetFolder = folderMapping[activeCategory.value];
  
  // Filter semua gambar yang path-nya mengandung nama folder kategori
  return Object.keys(allImages)
    .filter(path => path.includes(`/image/${targetFolder}/`))
    .map(path => allImages[path]);
});

// 4. Modal Logic
onMounted(() => {
  const modalEl = document.getElementById('lightboxModal');
  if (modalEl) modalObj = new bootstrap.Modal(modalEl);
});

const openLightbox = (img) => {
  selectedImg.value = img;
  if (modalObj) modalObj.show();
};

// 5. Data Layanan (Service Cards)
const services = [
  {
    title: 'Instalasi AC',
    icon: 'bi-snow',
    desc: 'Pemasangan sistem AC untuk residensial dan komersial dengan standar profesional.',
    points: ['AC Split', 'AC Central', 'VRV/VRF System']
  },
  {
    title: 'Service & Repair',
    icon: 'bi-wrench-adjustable',
    desc: 'Perbaikan dan perawatan rutin untuk memastikan performa optimal sistem HVAC.',
    points: ['Perbaikan Cepat', 'Diagnosis Akurat', 'Suku Cadang Asli']
  },
  {
    title: 'Maintenance',
    icon: 'bi-gear-fill',
    desc: 'Layanan perawatan berkala untuk menjaga kinerja dan umur sistem AC Anda.',
    points: ['Kontrak Tahunan', 'Jadwal Teratur', 'Laporan Lengkap']
  },
  {
    title: 'Cleaning & Sanitasi',
    icon: 'bi-stars',
    desc: 'Pembersihan menyeluruh dan sanitasi sistem AC untuk udara lebih sehat.',
    points: ['Deep Cleaning', 'Sanitasi UV', 'Filter Replacement']
  },
  {
    title: 'Konsultasi',
    icon: 'bi-thermometer-half',
    desc: 'Konsultasi gratis untuk menentukan solusi HVAC yang tepat untuk kebutuhan Anda.',
    points: ['Survey Lokasi', 'Analisis Kebutuhan', 'Rekomendasi Sistem']
  },
  {
    title: 'Ducting System',
    icon: 'bi-wind',
    desc: 'Instalasi dan perawatan sistem ducting untuk distribusi udara optimal.',
    points: ['Desain Custom', 'Material Berkualitas', 'Instalasi Rapi']
  }
];
</script>

<style scoped>
/* CSS UNTUK SERVICE CARDS (Tetap dipertahankan) */
.service-card {
  transition: all 0.3s ease;
  background-color: #fcfdfd;
  border: 1px solid rgba(25, 135, 84, 0.05) !important;
}
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 3rem rgba(0,0,0,.1) !important;
}
.icon-box {
  width: 55px; height: 55px;
  background-color: #198754; color: white;
  display: flex; align-items: center; justify-content: center;
  border-radius: 12px; font-size: 1.5rem;
}

/* CSS UNTUK GALERI BARU */
.gallery-item {
  position: relative;
  aspect-ratio: 1 / 1;
  cursor: pointer;
}
.gallery-item img {
  transition: transform 0.6s ease;
}
.gallery-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(25, 135, 84, 0.8);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s ease;
}
.gallery-item:hover img {
  transform: scale(1.1);
}
.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.transition { transition: all 0.3s ease; }

/* Animasi Fade-In saat ganti kategori */
.animate-fade-in {
  animation: fadeIn 0.4s ease-in-out both;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 576px) {
  .display-5 { font-size: 2rem; }
}
</style>