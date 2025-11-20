<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div class="font-sans antialiased text-gray-900 bg-jowo-cream">
        <!-- Navbar -->
        <nav 
            class="fixed w-full z-50 transition-all duration-300"
            :class="[isScrolled || isMobileMenuOpen ? 'bg-jowo-charcoal/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4']"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <Link href="/" class="text-2xl font-serif font-bold text-jowo-gold">
                            Mie Lethek
                        </Link>
                    </div>
                    
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#menu" class="text-white hover:text-jowo-gold transition-colors font-medium">Menu</a>
                        <a href="#about" class="text-white hover:text-jowo-gold transition-colors font-medium">Tentang Kami</a>
                        <a href="#location" class="text-white hover:text-jowo-gold transition-colors font-medium">Lokasi</a>
                        <Link :href="route('login')" class="px-4 py-2 rounded-full border border-jowo-gold text-jowo-gold hover:bg-jowo-gold hover:text-jowo-wood transition-all font-bold text-sm">
                            Login
                        </Link>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="md:hidden flex items-center">
                        <button @click="toggleMobileMenu" class="text-white hover:text-jowo-gold focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu Dropdown -->
            <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform -translate-y-4 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform -translate-y-4 opacity-0"
            >
                <div v-show="isMobileMenuOpen" class="md:hidden bg-jowo-charcoal border-t border-gray-700">
                    <div class="px-4 pt-2 pb-4 space-y-1">
                        <a href="#menu" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-jowo-gold hover:bg-gray-800">Menu</a>
                        <a href="#about" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-jowo-gold hover:bg-gray-800">Tentang Kami</a>
                        <a href="#location" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-jowo-gold hover:bg-gray-800">Lokasi</a>
                        <Link :href="route('login')" class="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-jowo-gold text-jowo-wood hover:bg-yellow-500">
                            Login
                        </Link>
                    </div>
                </div>
            </Transition>
        </nav>

        <main>
            <Transition name="page" appear>
                <div>
                    <slot />
                </div>
            </Transition>
        </main>
    </div>
</template>
