<script setup>
const menuItems = [
    {
        name: 'Bakmi Godog',
        description: 'Mie kuning rebus dengan kuah kaldu ayam kampung yang gurih, telur bebek, dan suwiran ayam.',
        price: 'Rp 25.000',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop',
        popular: true,
    },
    {
        name: 'Bakmi Goreng',
        description: 'Mie kuning goreng dengan bumbu rempah khas Jawa, kecap manis pilihan, dan sayuran segar.',
        price: 'Rp 25.000',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2080&auto=format&fit=crop',
        popular: true,
    },
    {
        name: 'Nasi Goreng Mawut',
        description: 'Perpaduan nasi dan mie yang digoreng bersamaan dengan bumbu spesial dan topping melimpah.',
        price: 'Rp 27.000',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?q=80&w=2525&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Wedang Uwuh',
        description: 'Minuman herbal tradisional kaya rempah yang menghangatkan badan dan menyehatkan.',
        price: 'Rp 10.000',
        image: 'https://images.unsplash.com/photo-1566825627266-98726f78c4aa?q=80&w=2574&auto=format&fit=crop',
        popular: false,
    },
];
</script>

<template>
    <section id="menu" class="py-24 bg-jowo-cream relative">
        <!-- Decorative background pattern -->
        <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-50 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-20">
                <span class="text-jowo-gold font-bold tracking-widest uppercase text-sm mb-2 block">Pilihan Terbaik</span>
                <h2 class="text-5xl font-serif font-bold text-jowo-wood mb-6">Menu Andalan</h2>
                <div class="w-24 h-1.5 bg-jowo-gold mx-auto rounded-full mb-6"></div>
                <p class="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    Dibuat dengan bahan-bahan pilihan dan resep warisan leluhur untuk menjaga keaslian rasa yang tak terlupakan.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(item, index) in menuItems" :key="index" 
                    class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500 overflow-hidden border border-orange-100 flex flex-col h-full transform hover:-translate-y-2">
                    
                    <div class="relative h-56 overflow-hidden bg-gray-100">
                        <img :src="item.image" :alt="item.name" loading="lazy" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div v-if="item.popular" class="absolute top-4 right-4 bg-jowo-gold text-jowo-wood text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            FAVORIT
                        </div>
                    </div>
                    
                    <div class="p-8 flex flex-col flex-grow">
                        <div class="mb-4">
                            <h3 class="text-2xl font-serif font-bold text-jowo-charcoal group-hover:text-jowo-gold transition-colors duration-300">{{ item.name }}</h3>
                        </div>
                        <p class="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{{ item.description }}</p>
                        
                        <div class="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                            <span class="text-xl font-bold text-jowo-wood">{{ item.price }}</span>
                            <button class="w-10 h-10 rounded-full bg-jowo-wood text-white flex items-center justify-center hover:bg-jowo-gold hover:text-jowo-wood transition-all duration-300 shadow-md hover:shadow-lg transform hover:rotate-90">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-16">
                <button class="group px-10 py-4 border-2 border-jowo-wood text-jowo-wood font-bold rounded-full hover:bg-jowo-wood hover:text-white transition-all duration-300 hover:shadow-xl">
                    <span class="flex items-center gap-2">
                        Lihat Menu Lengkap
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </section>
</template>
