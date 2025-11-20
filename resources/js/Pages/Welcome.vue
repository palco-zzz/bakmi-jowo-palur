<script setup>
import { Head } from '@inertiajs/vue3';
import LandingLayout from '@/Layouts/LandingLayout.vue';
import HeroSection from '@/Components/HeroSection.vue';
import MenuSection from '@/Components/MenuSection.vue';
import AboutSection from '@/Components/AboutSection.vue';
import MapSection from '@/Components/MapSection.vue';
import FooterSection from '@/Components/FooterSection.vue';
import SeoHead from '@/Components/SeoHead.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});
</script>

<template>
    <SeoHead />

    <LandingLayout>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <MapSection />
        <FooterSection />
    </LandingLayout>
</template>
