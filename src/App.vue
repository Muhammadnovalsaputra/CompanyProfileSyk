<template>
  <Navbar />
  <HeroSection />
  <AboutSection />
  <OrganizationSection />
  <LegalitySection />
  <SafetySection />
  <ProjectSection />
  <SocialSection />
  <ServiceSection />
  <PartnerSection />
  <ContactSection />
  <FooterSection />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import OrganizationSection from './components/OrganizationSection.vue'
import SafetySection from './components/SafetySection.vue'
import LegalitySection from './components/LegalitySection.vue'
import ProjectSection from './components/ProjectSection.vue'
import SocialSection from './components/SocialSection.vue'
import ServiceSection from './components/ServiceSection.vue'
import PartnerSection from './components/PartnerSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap');
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>