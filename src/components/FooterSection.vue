<template>
  <footer class="footer-section pt-5 pb-3">
    <div class="container pt-4">
      <div class="row g-4 mb-5">
        <div class="col-lg-5 col-md-12">
          <h4 class="fw-bold text-white mb-4">CV. SINAR YAFIQ KAMIL TEKNIK</h4>
          <p class="text-white-50 pe-lg-5 mb-4">
            Perusahaan HVAC profesional yang berkomitmen memberikan solusi terbaik untuk 
            kenyamanan ruangan Anda dengan layanan berkualitas tinggi.
          </p>
          <div class="d-flex gap-3 social-links">
            <a href="https://wa.me/6287871066021" class="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
              <i class="bi bi-whatsapp"></i>
            </a>
            <a href="mailto:syktehnik@gmail.com" class="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold text-white mb-4">Link Cepat</h5>
          <ul class="list-unstyled quick-links">
            <li class="mb-2">
              <router-link to="/" class="text-white-50 text-decoration-none">Beranda</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/about" class="text-white-50 text-decoration-none">Tentang Kami</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/legalitas" class="text-white-50 text-decoration-none">Legalitas</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/services" class="text-white-50 text-decoration-none">Service</router-link>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6">
          <h5 class="fw-bold text-white mb-4">Kontak</h5>
          <div class="contact-info">
            <div class="d-flex align-items-start mb-3">
              <i class="bi bi-telephone-fill text-warning me-3 fs-5"></i>
              <div>
                <span class="d-block text-white-50 small">Telepon</span>
                <span class="text-white fw-bold">+62 878 7106 6021</span>
              </div>
            </div>
            <div class="d-flex align-items-start mb-3">
              <i class="bi bi-envelope-fill text-warning me-3 fs-5"></i>
              <div>
                <span class="d-block text-white-50 small">Email</span>
                <span class="text-white fw-bold">syktehnik@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="border-light opacity-25 mb-4">
      <div class="text-center">
        <p class="text-white-50 small mb-0">
          CV Sinar Yafiq Kamil Tehnik
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background-color: #004d2c;
}

.quick-links a:hover {
  color: #ffc107 !important; 
  padding-left: 5px;
  transition: all 0.3s ease;
}

.social-links a {
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
}

.social-links a:hover {
  background-color: #ffc107;
  color: #004d2c !important;
  transform: translateY(-3px);
}

.contact-info .bi {
  margin-top: 3px;
}
</style>