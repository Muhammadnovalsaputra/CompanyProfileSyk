<template>
  <section id="service" class="py-5 bg-white">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5">Layanan <span class="text-success">Kami</span></h2>
        <div class="mx-auto bg-warning my-3" style="width: 80px; height: 4px;"></div>
        <p class="text-muted">Kami menyediakan berbagai layanan lengkap untuk semua kebutuhan HVAC Anda dengan kualitas terjamin.</p>
      </div>

      <div class="row g-4">
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
  </section>
</template>

<script setup>
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
.service-card {
  transition: all 0.3s ease;
  background-color: #fcfdfd; /* Warna background kartu sangat muda */
  border: 1px solid rgba(25, 135, 84, 0.05) !important;
}

.service-card:hover {
  transform: translateY(-10px);
  background-color: #ffffff;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.1) !important;
}

.icon-box {
  width: 55px;
  height: 55px;
  background-color: #198754;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.5rem;
}

.service-card:hover .icon-box {
  background-color: #ffc107;
  color: #000;
}

h4 {
  color: #212529;
}

.text-muted {
  line-height: 1.6;
}
</style>