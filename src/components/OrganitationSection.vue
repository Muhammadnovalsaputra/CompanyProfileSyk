<template>
  <section class="py-5 bg-light">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-5">Struktur <span class="text-success">Organisasi</span></h2>
        <div class="mx-auto bg-warning mb-4" style="width: 80px; height: 4px;"></div>
      </div>

      <div class="org-wrapper p-4 rounded-5 shadow-sm">
        <div class="row justify-content-center mb-4">
          <div class="col-auto">
            <div class="org-box main-box">
              <div class="role">DIREKTUR</div>
              <div class="name">AGUS WALUYO</div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mb-4">
          <div class="col-auto">
            <div class="org-box secondary-box">
              <div class="role">FINANCE</div>
              <div class="name">AAN AFRIYANTI</div>
            </div>
          </div>
        </div>

        <div class="row g-3 justify-content-center mb-4">
          <div class="col-md-3">
            <div class="org-box secondary-box">
              <div class="role">KETUA TEKNISI</div>
              <div class="name">M. IKSAN</div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="org-box secondary-box">
              <div class="role">KETUA TEKNISI</div>
              <div class="name">ANDRE DWI</div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="org-box secondary-box">
              <div class="role">SEKERTARIS</div>
              <div class="name">OCTIVA WIDIANTI</div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="org-box secondary-box">
              <div class="role">MARKETING</div>
              <div class="name">FAHRIZI</div>
            </div>
          </div>
        </div>

        <div class="row g-3 justify-content-center">
          <div class="col-lg-6">
            <div class="org-box team-list-box p-4">
              <div class="role mb-3 border-bottom pb-2">TIM TEKNISI</div>
              <div class="row row-cols-2 g-2 text-start">
                <div class="col small" v-for="t in teknisi" :key="t.team">
                  <span class="fw-bold text-success">{{ t.team }}:</span> {{ t.names }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="org-box secondary-box h-100">
              <div class="role">ADMIN</div>
              <div class="name">ARTA WITA CHRISTIANI</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="org-box secondary-box h-100">
              <div class="role">ADMIN</div>
              <div class="name">DENTY SYALINDA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const teknisi = [
  { team: 'TEAM A', names: 'ARIF, OPIK' },
  { team: 'TEAM B', names: 'DENI, ROBY' },
  { team: 'TEAM C', names: 'SELAMET, ZERAL' },
  { team: 'TEAM D', names: 'DYO, RECI' },
  { team: 'TEAM E', names: 'ANDRE, PAKI' },
  { team: 'TEAM F', names: 'IKSAN, YUDA' },
  { team: 'TEAM G', names: 'DERMAWAN, IKBAL' },
  { team: 'TEAM H', names: 'REHAN, HERI' },
  { team: 'TEAM I', names: 'HADI, DEDI' }
];
</script>

<style scoped>
.org-wrapper {
  background-color: #1a5d3b; /* Hijau sesuai gambar struktur */
  background-image: radial-gradient(circle at center, #1e6d45 0%, #1a5d3b 100%);
}

.org-box {
  background: #f0f0f0;
  border-radius: 4px;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.org-box:hover {
  transform: scale(1.03);
}

.main-box {
  min-width: 250px;
  border-bottom: 5px solid #ffc107;
}

.secondary-box {
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.team-list-box {
  background: #eeeeee;
}

.role {
  font-weight: 800;
  font-style: italic;
  font-size: 0.85rem;
  color: #000;
  margin-bottom: 5px;
}

.name {
  font-weight: 500;
  font-size: 1.1rem;
  color: #333;
  text-transform: uppercase;
}

.small {
  font-size: 0.75rem;
  line-height: 1.4;
}
</style>