<template>
  <section class="hero-wrapper py-5">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5">Dokumentasi <span class="text-warning">Proyek</span></h2>
        <p class="text-muted">Beberapa hasil pengerjaan HVAC dan Maintenance oleh tim CV. Sinar Yafiq.</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div id="projectCarousel" class="carousel slide shadow-lg rounded-5 overflow-hidden" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button v-for="(project, index) in projects" :key="'ind-'+index"
                type="button" data-bs-target="#projectCarousel" :data-bs-slide-to="index"
                :class="{ active: index === 0 }" aria-current="true">
              </button>
            </div>

            <div class="carousel-inner">
              <div v-for="(project, index) in projects" :key="index"
                :class="['carousel-item', { active: index === 0 }]" data-bs-interval="3000">
                <div class="project-img-container">
                  <img :src="project.image" class="d-block w-100" :alt="project.title">
                  <div class="carousel-caption d-none d-md-block rounded-4 px-4 py-3">
                    <h4 class="fw-bold text-warning mb-1">{{ project.title }}</h4>
                    <p class="mb-0">{{ project.location }}</p>
                  </div>
                </div>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon p-3 bg-dark bg-opacity-25 rounded-circle" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon p-3 bg-dark bg-opacity-25 rounded-circle" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import untirta from '@/assets/image/dokumentasiuntirta.png';
import pinus from '@/assets/image/DokumentasiPinus.png';
import urban from '@/assets/image/dokumentasiUrban.png';
import moya from '@/assets/image/dokumentasiMoya.png';
import tkcm from '@/assets/image/dokumentasiTkcm.png';
import furnilac from '@/assets/image/dokumentasiFurnilac.png';
import gihon from '@/assets/image/dokumentasiGihon.png';

const projects = [
  { 
    title: 'Perawatan dan Perbaikan AC Gedung', 
    location: 'Universitas Sultan Ageng Tirtayasa, Serang', 
    image: untirta 
  },
  { 
    title: 'Pemasangan dan Perawatan AC ', 
    location: 'PT Pinus Merah Abadi, Cipondoh Tangerang', 
    image: pinus 
  },
  { 
    title: 'Perawatan AC', 
    location: 'PT Urban Indo Manufaktur, Cikupa Tangerang', 
    image: urban 
  },
  { 
    title: 'Perawatan AC', 
    location: 'PT Moya Tangerang, Neglasari Tangerang', 
    image: moya
  },
  { 
    title: 'Perawatan AC', 
    location: 'PT Tirta Kencana Cahaya Mandiri,Cikokol Tangerang', 
    image: tkcm
  },
  { 
    title: 'Perawatan AC', 
    location: 'PT. Furnilac Primaguna, Jatiuwung Tangerang', 
    image: furnilac
  },
  { 
    title: 'Perbaikan AC', 
    location: 'PT Gihon Telekomunikasi Indonesia Tbk, Serpong Tangerang Selatan', 
    image: gihon
  }
];
</script>

<style scoped>
.hero-wrapper {
background:radial-gradient(circle at top right, #1a7a4a, #0a4d2c)
}
.project-img-container {
  height: 500px;
  position: relative;
}
.project-img-container img {
  height: 100%;
  object-fit: cover;
}
.carousel-caption {
  background: rgba(0, 77, 44, 0.8); 
  backdrop-filter: blur(5px);
  bottom: 40px;
  max-width: 60%;
  margin: 0 auto;
  border-left: 5px solid #ffc107;
}
.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: #ffc107;
}
@media (max-width: 768px) {
  .project-img-container { height: 300px; }
}
</style>