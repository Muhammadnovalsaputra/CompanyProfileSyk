<template>
  <section class="hero-wrapper d-flex align-items-center">
    <div class="container pt-5">
      <div class="row align-items-center">
        <div class="col-lg-6 text-white pt-5">
          <h1 class="display-3 fw-bold mb-0 mt-5">CV. SINAR YAFIQ</h1>
          <h1 class="display-3 fw-bold text-warning mb-4">KAMIL TEHNIK</h1>
          <h5 class="mb-4 fw-light tracking-widest">HVAC - SERVICE AND REPAIR</h5>
          <p class="lead mb-5 opacity-75">Solusi terpercaya untuk kebutuhan HVAC Anda. Dengan pengalaman dan dedikasi tinggi, kami siap memberikan layanan terbaik untuk kenyamanan ruangan Anda.</p>
          
          <div class="d-flex gap-3 mb-5">
            <a href="#contactSection">
              <button class="btn btn-warning btn-lg rounded-pill px-4 fw-bold shadow">Hubungi Kami <i class="bi bi-arrow-right"></i></button>
            </a>
            <a href="#service">
              <button class="btn btn-outline-light btn-lg rounded-pill px-4">Lihat Layanan</button>
            </a>
          </div>

          <div class="row g-3">
            <div class="col-md-4 mb-3" v-for="stat in stats" :key="stat.label">
              <div class="stat-box p-3 rounded-4">
                <i :class="['bi', stat.icon, 'text-warning fs-3 mb-2']"></i>
                <h4 class="fw-bold mb-0">{{ stat.val }}</h4>
                <p class="small mb-0 opacity-75">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block position-relative px-5 mt-4">
          <div class="image-frame">
             <img src="@/assets/image/beranda1.jpeg" class="img-fluid rounded-5 shadow-lg " alt="Hero Image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { icon: 'bi-wind', val: '1000+', label: 'Proyek Selesai' },
  { icon: 'bi-wrench', val: 'Handal', label: 'Teknisi Profesional' },
  { icon: 'bi-shield-check', val: 'Garansi', label: 'Terjamin' }
];
</script>

<style scoped>
.hero-wrapper {
  background: #0d6539;
  min-height: 100vh;
  position: relative;
}
.stat-box {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
.image-frame {
  background: rgba(239, 239, 239, 0.1);
  padding: 15px;
  border-radius: 3rem;
  transform: rotate(2deg);
  margin-top: 2rem;
}
.image-frame img {
  transform: rotate(-2deg);
}
</style>