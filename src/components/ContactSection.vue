<template>
  <section id="contactSection" class="py-5 bg-light">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5">Hubungi <span class="text-success">Kami</span></h2>
        <div class="mx-auto bg-warning my-3" style="width: 80px; height: 4px;"></div>
        <p class="text-muted">Siap melayani kebutuhan perbaikan, perawatan, dan instalasi AC Anda kapan saja.</p>
      </div>

      <div class="row g-4">
        <div class="col-lg-5">
          <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
            <h4 class="fw-bold mb-4 text-success">Informasi Kontak</h4>
            
            <div class="d-flex mb-4">
              <div class="icon-circle bg-success text-white me-3">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Alamat Kantor</h6>
                <p class="text-muted small mb-0">Pasar Kemis , Tangerang</p>
              </div>
            </div>

            <div class="d-flex mb-4">
              <div class="icon-circle bg-success text-white me-3">
                <i class="bi bi-whatsapp"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Telepon / WhatsApp</h6>
                <p class="text-muted small mb-0">+62 878-7106-6021</p>
              </div>
            </div>

            <div class="d-flex mb-4">
              <div class="icon-circle bg-success text-white me-3">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Email Resmi</h6>
                <p class="text-muted small mb-0">syktehnik@gmail.com</p>
              </div>
            </div>

            <hr class="my-4 opacity-50">

            <h5 class="fw-bold mb-3">Jam Operasional</h5>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted">Senin - Jumat:</span>
              <span class="fw-bold text-dark">08.00 - 17.00 WIB</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted">Sabtu:</span>
              <span class="fw-bold text-dark">08.00 - 14.00 WIB</span>
            </div>
            <div class="d-flex justify-content-between">
              <span class="text-muted">Minggu:</span>
              <span class="text-danger fw-bold">Tutup</span>
            </div>

            <div class="mt-auto pt-4">
              <a href="https://wa.me/6287871066021" target="_blank" class="btn btn-success w-100 rounded-pill py-3 fw-bold shadow-sm">
                <i class="bi bi-chat-dots me-2"></i> Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.878208182328!2d106.55092187400597!3d-6.147055660254442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a01227985bc35%3A0x4651c19a03c88261!2sCV.%20Sinar%20Yafiq%20Kamil%20Tehnik!5e0!3m2!1sid!2sid!4v1770046759336!5m2!1sid!2sid" 
             width="600" 
             height="450" 
             style="border:0;" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon-circle {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>