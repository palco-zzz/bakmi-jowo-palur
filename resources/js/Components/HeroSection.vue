<script setup>
import { Link } from '@inertiajs/vue3';

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
    <div class="relative min-h-screen flex items-center justify-center bg-jowo-charcoal overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=2574&auto=format&fit=crop" 
                alt="Mie Lethek Background" 
                class="w-full h-full object-cover opacity-50 animate-fade-in"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-jowo-charcoal via-jowo-charcoal/70 to-black/30"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="animate-fade-in-up">
                <span class="inline-block py-1 px-3 rounded-full bg-jowo-gold/20 text-jowo-gold border border-jowo-gold/50 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
                    EST. 1985
                </span>
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-jowo-cream mb-6 tracking-wide drop-shadow-2xl leading-tight">
                    <span class="text-jowo-gold inline-block hover:scale-105 transition-transform duration-300">Mie Lethek</span> <br class="md:hidden" /> Palur
                </h1>
                <p class="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                    Cita rasa legendaris yang menghangatkan jiwa. 
                    <br class="hidden md:block" />
                    Nikmati kelezatan resep turun-temurun di setiap suapan.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="#menu" class="group relative px-8 py-4 bg-jowo-gold text-jowo-wood font-bold rounded-full overflow-hidden shadow-lg hover:shadow-gold/50 transition-all duration-300 transform hover:-translate-y-1">
                        <span class="relative z-10 flex items-center gap-2">
                            Lihat Menu
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                        <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                    <a href="#location" class="group px-8 py-4 border-2 border-jowo-cream text-jowo-cream font-bold rounded-full hover:bg-jowo-cream hover:text-jowo-wood transition-all duration-300 backdrop-blur-sm">
                        Lokasi Kami
                    </a>
                </div>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-jowo-cream to-transparent"></div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow text-jowo-cream/70">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    </div>
</template>
