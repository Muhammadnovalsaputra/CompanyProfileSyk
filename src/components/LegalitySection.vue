<template>
  <section class="hero-wrapper py-5" id="legalitySection">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5 ">Legalitas <span class="text-warning border-bottom border-4 border-warning">Perusahaan</span></h2>
        <p class="text-dark">Kami adalah perusahaan yang terdaftar secara resmi dan memiliki kelengkapan dokumen legal yang sah.</p>
      </div>

      <div class="row g-4">
        <div class="col-md-3" v-for="(item, index) in documents" :key="index">
          <div class="card h-100 border-0 shadow-sm legality-card">
            <div class="image-container">
              <img :src="item.image" class="card-img-top p-2" :alt="item.title">
              <div class="badge-status" :class="item.statusColor">{{ item.status }}</div>
            </div>
            
            <div class="card-body text-center">
              <div class="icon-circle mb-3 mx-auto">
                <i :class="['bi', item.icon]"></i>
              </div>
              <h5 class="fw-bold mb-1">{{ item.title }}</h5>
              <p class="small text-muted mb-0">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5 g-4">
        <div class="col-lg-6">
          <div class="p-4 bg-white rounded-4 shadow-sm h-100">
            <h4 class="fw-bold mb-4">Sertifikasi & Standar Kualitas</h4>
            <div class="d-flex align-items-start mb-3" v-for="cert in certifications" :key="cert.name">
              <i class="bi bi-patch-check-fill text-success fs-4 me-3"></i>
              <div>
                <h6 class="fw-bold mb-0">{{ cert.name }}</h6>
                <small class="text-muted">{{ cert.desc }}</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-4 bg-success text-white rounded-4 shadow-sm h-100">
            <h4 class="fw-bold mb-4 text-warning">Komitmen Kami</h4>
            <ul class="list-unstyled">
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-check2-circle me-3 fs-5"></i> Bekerja sesuai standar operasional prosedur
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-check2-circle me-3 fs-5"></i> Menggunakan peralatan berkualitas tinggi
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-check2-circle me-3 fs-5"></i> Memberikan garansi untuk setiap pekerjaan
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-check2-circle me-3 fs-5"></i> Transparan dalam setiap proses dan biaya
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NibImage from '@/assets/image/NomorIndukBerusaha.jpeg';
import SuratKeterangan from '@/assets/image/SuratKeteranganTerdaftar.jpeg';
import npwpImage from '@/assets/image/npwp.png';
import AktaImage from '@/assets/image/AktaPerusahaan.jpeg';

const documents = [
  { title: 'Nomor Induk Berusaha(NIB)', desc: 'Nomor: 0220002250998', icon: 'bi-file-earmark-text', status: 'Terdaftar', statusColor: 'bg-success', image: NibImage },
  { title: 'Surat Keterangan Terdaftar', desc: 'Nomor :AHU-0072168-AH.01.14 Tahun 2019 ', icon: 'bi-building-check', status: 'Terdaftar', statusColor: 'bg-success', image: SuratKeterangan },
  { title: 'Nomor Pokok Wajib Pajak(NPWP)', desc: 'Nomor: 0935-3491-5940-2000', icon: 'bi-shield-check', status: 'Aktif', statusColor: 'bg-warning text-dark', image: npwpImage },
  { title: 'Akta Perusahaan', desc: 'Sinar Yafiq Kamil Tehnik', icon: 'bi-credit-card-2-front', status: 'Terdaftar', statusColor: 'bg-success', image: AktaImage }
];

const certifications = [
  { name: 'Is A Daikin Authorized Service Partner (DSAP)', desc: 'Mitra PT DAIKIN INDONESIA' },
  { name: 'Sertifikat BNSP', desc: 'Tata Udara Air Conditioning' },
  { name: 'Sertifikat Of Dealership', desc: 'Is An Authorized Service Partner by PT Daikin Air Conditioning Indonesia' }
];
</script>

<style scoped>
.hero-wrapper {
  background:radial-gradient(circle at top right, #1a7a4a, #0a4d2c)
}
.legality-card {
  transition: transform 0.3s ease;
  overflow: hidden;
}
.legality-card:hover {
  transform: translateY(-10px);
}
.image-container {
  position: relative;
  background: #f8f9fa;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-container img {
  height: 100%;
  object-fit: contain; /* Agar foto dokumen tidak terpotong */
}
.badge-status {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: bold;
}
.icon-circle {
  width: 50px;
  height: 50px;
  background: #e9f5ee;
  color: #198754;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
}
</style>