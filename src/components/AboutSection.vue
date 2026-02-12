<template>
  <section id="AboutSection" class="py-5 bg-white">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5">Tentang <span class="text-success border-bottom border-4 border-warning">Kami</span></h2>
        <div class="row justify-content-center mt-4">
          <div class="col-lg-8">
            <p class="lead text-muted">
              CV. Sinar Yafiq Kamil Teknik adalah perusahaan HVAC (Heating,
              Ventilation, and Air Conditioning) yang berkomitmen memberikan
              solusi terbaik dan layanan profesional. Kami melayani pemeliharaan,
              perbaikan, hingga instalasi sistem HVAC dengan fokus pada kualitas,
              ketepatan waktu, dan kepuasan pelanggan.
            </p>
          </div>
        </div>
      </div>

      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <img src="@/assets/image/gambar2.jpeg" 
               class="img-fluid rounded-5 shadow-lg" alt="Workshop">
        </div>

        <div class="col-lg-6">
          <h3 class="fw-bold mb-4">Visi dan Misi</h3>
          <h4 class="fw-bold mb-4">Visi</h4>
          <p class="text-secondary mb-4">
            Menjadi yang terbaik dalam memberikan pelayanan kepada konsumen.
          </p>
          <h4 class="fw-bold mb-4">Misi</h4>
          <ul class="text-secondary mb-5">
            <li>Meningkatkan kemampuan sumber daya manusia dengan kemampuan yang terbaik</li>
            <li>Mengembangkan jaringan yang luas di masyarakat</li>
            <li>memenuhi kebutuhan dan kepuasan konsumen</li>
            <li>saling membantu antar tim untuk mencapai hasil akhir</li>
          </ul>
          <div class="d-flex gap-3">
            <div 
                v-for="work in works" 
                :key="work.label"
                class="stat-card-custom p-4 rounded-4 flex-fill shadow-sm position-relative overflow-hidden" 
                :class="work.textColor"
                :style="{ backgroundColor: work.bgColor }">
                <div class="icon-wrapper mb-3">
                   <i :class="work.icon" class="fs-2 text-muted"></i> 
                </div>
                
                <div class="stat-content text-center">
                <h3 class="fw-bold mb-0">{{ work.val }}</h3>
                <p class="small mb-0 opacity-75">{{ work.label }}</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const works = [
    {icon: 'bi bi-building', val: '10+', label: 'Tahun Pengalaman',bgColor:'#198754',textColor: 'text-black' },
    {icon: 'bi bi-person', val: '1000+', label: 'Klien Puas',bgColor:'#EDDD53',textColor: 'text-black' },

]
</script>



<style scoped>
.stat-card-custom {
  min-height: 160px; 
  transition: transform 0.3s ease;
  border: none;
}

.icon-mini-left {
  position: absolute;
  top: 12px;    
  left: 15px;   
  font-size: 2.5rem; 
  opacity: 0.9;
  line-height: 1;
}

.stat-content {
  padding-top: 20px; 
}

h3 {
  font-size: 2.5rem; 
  margin-top: 10px;
}

small {
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}
img {
  transition: transform 0.5s ease;
}
img:hover {
  transform: scale(1.02);
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.15); 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  position: absolute;
  top: 15px;
  left: 15px;
}
</style>