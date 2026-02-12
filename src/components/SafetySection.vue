<template>
  <section class="py-5 bg-white">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h6 class="text-success fw-bold text-uppercase">Standar Operasional Kerja</h6>
        <h2 class="fw-bold display-5">Kesehatan & Keselamatan <span class="text-success">Kerja (K3)</span></h2>
        <div class="mx-auto bg-warning mt-3" style="width: 80px; height: 4px;"></div>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-6 col-lg" v-for="(rule, index) in safetyRules" :key="index">
          <div class="safety-card text-center h-100">
            <div class="arrow-step mb-3">
              <div class="icon-box shadow-sm">
                <i :class="['bi', rule.icon]"></i>
              </div>
            </div>
            <h6 class="fw-bold mb-2">{{ rule.title }}</h6>
            <p class="small text-muted mb-0">{{ rule.desc }}</p>
          </div>
        </div>
      </div>

      <div class="work-stages-banner rounded-5 overflow-hidden shadow-lg position-relative my-5">
        <div class="row g-0">
          <div class="col-lg-6 d-none d-lg-block">
            <div class="image-collage d-flex h-100">
              <img src="@/assets/image/keselamatan2.jpeg" alt="Work 1" class="w-50 object-fit-cover">
              <img src="@/assets/image/keselamatan1.jpeg" alt="Work 2" class="w-50 object-fit-cover">
            </div>
          </div>
          <div class="col-lg-6 bg-success p-5 d-flex align-items-center">
            <div class="text-white">
              <h2 class="fw-bold display-6 mb-3">TAHAPAN KERJA</h2>
              <p class="opacity-75">Sebelum proyek dimulai, kami pastikan setiap tahapan terpenuhi dengan baik untuk menjamin kualitas dan keamanan hasil kerja.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 pt-4">
        <div class="workflow-container">
          <div class="workflow-line"></div>
          <div class="row g-4 position-relative">
            <div class="col-md col-6 text-center" v-for="(step, sIndex) in workSteps" :key="sIndex">
              <div class="step-point mx-auto mb-3" :style="{ backgroundColor: step.color }"></div>
              <h6 class="fw-bold small text-uppercase mb-1">{{ step.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const safetyRules = [
  { icon: 'bi-search', title: 'Penilaian Risiko', desc: 'Identifikasi potensi bahaya sebelum pekerjaan dimulai.' },
  { icon: 'bi-person-badge', title: 'Alat Pelindung Diri', desc: 'Wajib menggunakan APD sesuai jenis pekerjaan dan risiko.' },
  { icon: 'bi-people', title: 'Pelatihan K3', desc: 'Memberikan pengarahan keselamatan sebelum pelaksanaan.' },
  { icon: 'bi-radioactive', title: 'Manajemen Bahan', desc: 'Penanganan bahan kimia atau material berbahaya secara aman.' },
  { icon: 'bi-gear-wide-connected', title: 'Pemeliharaan Alat', desc: 'Inspeksi rutin dan perawatan alat kerja secara berkala.' },
  { icon: 'bi-wind', title: 'Pengendalian Kerja', desc: 'Mengontrol kebisingan, debu, dan faktor lingkungan.' },
  { icon: 'bi-shield-plus', title: 'Tanggap Darurat', desc: 'Prosedur darurat dan pengawasan ketat selama bekerja.' }
];

const workSteps = [
  { title: 'Identifikasi Proyek', color: '#ffffff' },
  { title: 'Desain & Rekayasa', color: '#d1e7dd' },
  { title: 'Rencana Prosedur', color: '#a3cfbb' },
  { title: 'Instalasi & Pengujian', color: '#75b798' },
  { title: 'Rencana Keselamatan', color: '#479f76' },
  { title: 'Rapat Koordinasi', color: '#198754' }
];
</script>

<style scoped>
.icon-box {
  width: 60px;
  height: 60px;
  background: #198754;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin: 0 auto;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.safety-card:hover .icon-box {
  background: #ffc107;
  color: #000;
  transform: translateY(-5px);
}

.image-collage img {
  filter: grayscale(30%);
  transition: 0.5s;
}

.image-collage img:hover {
  filter: grayscale(0%);
}

.workflow-container {
  position: relative;
  padding: 20px 0;
}

.workflow-line {
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(to right, #ffffff, #198754);
  border-radius: 10px;
  z-index: 0;
}

.step-point {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid #f8f9fa;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .workflow-line { display: none; }
  .icon-box { width: 50px; height: 50px; font-size: 1.2rem; }
}
</style>