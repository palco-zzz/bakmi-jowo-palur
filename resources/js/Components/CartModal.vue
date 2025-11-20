<script setup>
import { useCart } from '@/Composables/useCart';

const { cart, isCartOpen, updateQuantity, cartTotal, formatPrice } = useCart();

const checkout = () => {
    const phoneNumber = '6289652431182';
    let message = 'Halo Mie Lethek Palur, saya ingin pesan:\n\n';
    
    cart.value.forEach(item => {
        message += `${item.quantity}x ${item.name} (${item.price})\n`;
    });
    
    message += `\nTotal: ${formatPrice(cartTotal.value)}\n\nMohon diproses, terima kasih.`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};
</script>

<template>
    <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div v-if="isCartOpen" class="fixed inset-0 z-[60] flex justify-end">
            <!-- Backdrop -->
            <div @click="isCartOpen = false" class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            <!-- Slide-over Panel -->
            <div class="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300">
                <!-- Header -->
                <div class="p-6 bg-jowo-charcoal text-white flex justify-between items-center">
                    <h2 class="text-2xl font-serif font-bold text-jowo-gold">Keranjang Pesanan</h2>
                    <button @click="isCartOpen = false" class="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Cart Items -->
                <div class="flex-1 overflow-y-auto p-6 space-y-6">
                    <div v-if="cart.length === 0" class="text-center text-gray-500 mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p>Keranjang masih kosong.</p>
                        <button @click="isCartOpen = false" class="mt-4 text-jowo-gold font-bold hover:underline">Lihat Menu</button>
                    </div>

                    <div v-else v-for="(item, index) in cart" :key="index" class="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg">
                        <div class="flex-1">
                            <h3 class="font-bold text-jowo-charcoal">{{ item.name }}</h3>
                            <p class="text-jowo-gold font-bold text-sm">{{ item.price }}</p>
                        </div>
                        <div class="flex items-center gap-3 bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                            <button @click="updateQuantity(index, -1)" class="text-gray-500 hover:text-red-600 font-bold text-lg">-</button>
                            <span class="font-bold w-4 text-center">{{ item.quantity }}</span>
                            <button @click="updateQuantity(index, 1)" class="text-gray-500 hover:text-green-600 font-bold text-lg">+</button>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div v-if="cart.length > 0" class="p-6 bg-gray-50 border-t border-gray-200">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-lg font-bold text-gray-600">Total</span>
                        <span class="text-3xl font-serif font-bold text-jowo-charcoal">{{ formatPrice(cartTotal) }}</span>
                    </div>
                    <button @click="checkout" class="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-green-900/20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        Pesan via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>
