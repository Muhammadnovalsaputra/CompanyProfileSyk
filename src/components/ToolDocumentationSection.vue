<template>
  <section class="py-5 bg-white">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5">Dokumentasi <span class="text-success">Alat Kerja</span></h2>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <p class="text-muted lead">Kami menggunakan peralatan modern dan berkualitas tinggi untuk memastikan hasil kerja yang optimal dan terpercaya.</p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center gap-2 mb-5 flex-wrap">
        <button v-for="cat in categories" :key="cat" 
                @click="activeCategory = cat"
                :class="['btn rounded-pill px-4 fw-bold shadow-sm', activeCategory === cat ? 'btn-success' : 'btn-light']">
          {{ cat }}
        </button>
      </div>

      <div class="row g-4">
        <div class="col-md-4" v-for="(tool, index) in filteredTools" :key="index">
          <div class="card h-100 border-0 shadow-sm tool-card overflow-hidden">
            <div class="tool-img-wrapper">
              <img :src="tool.image" class="card-img-top p-3" :alt="tool.name">
              <div class="category-badge shadow-sm">
                <i :class="['bi', tool.icon]"></i>
              </div>
            </div>
            <div class="card-body p-4">
              <h5 class="fw-bold mb-2">{{ tool.name }}</h5>
              <p class="text-muted small mb-0">{{ tool.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

import manifoldImage from '@/assets/image/Manifold.jpg';
import vacuumImage from '@/assets/image/VacuumPump.jpg';
import flaringImage from '@/assets/image/FlaringToolSet.jpg';
import steamCleanerImage from '@/assets/image/SteamAC.jpg';

const activeCategory = ref('Semua Alat');
const categories = ['Semua Alat', 'Instalasi', 'Pengukuran', 'Perbaikan','Perawatan'];

const tools = [
  { 
    name: 'Manifold Gauge Set', 
    category: 'Pengukuran', 
    description: 'Alat ukur tekanan refrigerant untuk sistem AC.', 
    icon: 'bi-speedometer2',
    image: manifoldImage
  },
  { 
    name: 'Vacuum Pump', 
    category: 'Instalasi', 
    description: 'Pompa vakum untuk menghilangkan udara dan kelembaban.', 
    icon: 'bi-tools',
    image: vacuumImage
  },
  { 
    name: 'Flaring Tool Set', 
    category: 'Perbaikan', 
    description: 'Set alat untuk membuat flare pada pipa tembaga.', 
    icon: 'bi-hammer',
    image: flaringImage 
  },
  { 
    name: 'Steam / Jet Cleaner', 
    category: 'Perawatan', 
    description: 'metode perawatan dan pembersihan unit pendingin ruangan (AC) menggunakan uap panas bertekanan tinggi atau semprotan air bertekanan untuk mengangkat debu, kotoran, dan jamur membandel.', 
    icon: 'bi-hammer',
    image: steamCleanerImage
  }
];

const filteredTools = computed(() => {
  if (activeCategory.value === 'Semua Alat') return tools;
  return tools.filter(t => t.category === activeCategory.value);
});
</script>

<style scoped>
.tool-card {
  transition: all 0.3s ease;
  border-radius: 1.5rem;
}
.tool-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
}
.tool-img-wrapper {
  background: #f8f9fa;
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tool-img-wrapper img {
  max-height: 100%;
  object-fit: contain;
}
.category-badge {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: #ffc107;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #000;
}
</style>