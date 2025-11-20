<script setup>
import { useCart } from '@/Composables/useCart';

const { isCartOpen, cartItemCount } = useCart();
</script>

<template>
    <button 
        @click="isCartOpen = true"
        class="fixed bottom-6 right-6 z-50 bg-jowo-gold text-jowo-wood p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        :class="{ 'animate-bounce': cartItemCount > 0 }"
    >
        <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cartItemCount > 0" class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
                {{ cartItemCount }}
            </span>
        </div>
    </button>
</template>
