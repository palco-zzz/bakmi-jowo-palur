<script setup>
import { ref, computed } from 'vue';
import { useCart } from '@/Composables/useCart';

const { addToCart } = useCart();
const activeCategory = ref('makanan');

const categories = [
    { id: 'makanan', name: 'Makanan' },
    { id: 'minuman', name: 'Minuman' },
    { id: 'tambahan', name: 'Tambahan' },
];

const menuItems = [
    // Makanan
    {
        name: 'Mie Lethek Godog / Nyemek',
        description: 'Mie singkong khas dengan kuah kaldu gurih dan bumbu rempah.',
        price: 'Rp 16.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=2574&auto=format&fit=crop',
        popular: true,
    },
    {
        name: 'Mie Lethek Goreng / Nyemek',
        description: 'Mie singkong goreng dengan kecap manis dan sayuran segar.',
        price: 'Rp 16.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=2574&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Bakmi Jowo Godog / Nyemek',
        description: 'Mie kuning rebus tradisional dengan telur bebek dan suwiran ayam.',
        price: 'Rp 16.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop',
        popular: true,
    },
    {
        name: 'Bakmi Jowo Goreng / Nyemek',
        description: 'Mie kuning goreng dengan aroma anglo yang khas.',
        price: 'Rp 16.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2080&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Nasi Goreng Jowo',
        description: 'Nasi goreng kampung dengan bumbu ulek tradisional.',
        price: 'Rp 16.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?q=80&w=2525&auto=format&fit=crop',
        popular: true,
    },
    {
        name: 'Nasi Goreng Mawut',
        description: 'Campuran nasi dan mie goreng yang mengenyangkan.',
        price: 'Rp 16.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?q=80&w=2525&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Nasi Godog',
        description: 'Nasi rebus dengan kuah kental yang hangat dan gurih.',
        price: 'Rp 16.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Rica-rica Ayam',
        description: 'Potongan ayam dengan bumbu pedas manis yang meresap.',
        price: 'Rp 25.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2000&auto=format&fit=crop',
        popular: true,
    },
    {
        name: 'Nasi Putih',
        description: 'Nasi putih pulen.',
        price: 'Rp 4.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2000&auto=format&fit=crop', // Placeholder
        popular: false,
    },
    {
        name: 'Telor Ceplok / Dadar',
        description: 'Tambahan telur goreng.',
        price: 'Rp 4.000',
        category: 'makanan',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2000&auto=format&fit=crop', // Placeholder
        popular: false,
    },

    // Minuman
    {
        name: 'Wedang Uwuh',
        description: 'Minuman rempah hangat khas Imogiri.',
        price: 'Rp 8.000',
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1566825627266-98726f78c4aa?q=80&w=2574&auto=format&fit=crop',
        popular: true,
    },
    {
        name: 'Wedang Uwuh Susu',
        description: 'Wedang uwuh dengan tambahan susu kental manis.',
        price: 'Rp 10.000',
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1566825627266-98726f78c4aa?q=80&w=2574&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Teh Manis (Panas/Es)',
        description: 'Teh tubruk wangi dengan gula asli.',
        price: 'Rp 4.000',
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2564&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Jeruk (Panas/Es)',
        description: 'Sari jeruk peras segar.',
        price: 'Rp 5.000',
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=2547&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Lemon Tea (Panas/Es)',
        description: 'Teh dengan perasan lemon segar.',
        price: 'Rp 5.000',
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2564&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Kopi Hitam',
        description: 'Kopi tubruk hitam pekat.',
        price: 'Rp 4.000',
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2564&auto=format&fit=crop', // Placeholder
        popular: false,
    },
    {
        name: 'White Coffee',
        description: 'Kopi instan creamy.',
        price: 'Rp 4.000',
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2564&auto=format&fit=crop', // Placeholder
        popular: false,
    },
    {
        name: 'Susu Putih / Coklat',
        description: 'Susu kental manis seduh.',
        price: 'Rp 4.000',
        category: 'minuman',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2564&auto=format&fit=crop', // Placeholder
        popular: false,
    },

    // Tambahan
    {
        name: 'Kepala Ayam',
        description: 'Baceman kepala ayam goreng/bakar.',
        price: 'Rp 5.000',
        category: 'tambahan',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2000&auto=format&fit=crop',
        popular: false,
    },
    {
        name: 'Sayap Ayam',
        description: 'Baceman sayap ayam goreng/bakar.',
        price: 'Rp 5.000',
        category: 'tambahan',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2000&auto=format&fit=crop',
        popular: false,
    },
];

const showAll = ref(false);
const initialDisplayCount = 4;

const filteredItems = computed(() => {
    const items = menuItems.filter(item => item.category === activeCategory.value);
    return showAll.value ? items : items.slice(0, initialDisplayCount);
});

const hasMoreItems = computed(() => {
    return menuItems.filter(item => item.category === activeCategory.value).length > initialDisplayCount;
});
</script>

<template>
    <section id="menu" class="py-16 md:py-24 bg-jowo-cream relative">
        <!-- Decorative background pattern -->
        <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-50 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-12">
                <span class="text-jowo-gold font-bold tracking-widest uppercase text-sm mb-2 block">Pilihan Terbaik</span>
                <h2 class="text-3xl md:text-5xl font-serif font-bold text-jowo-wood mb-6">Daftar Menu</h2>
                <div class="w-24 h-1.5 bg-jowo-gold mx-auto rounded-full mb-6"></div>
                <p class="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
                    Nikmati aneka hidangan lezat dengan resep warisan leluhur.
                </p>
                
                <!-- GoFood Button -->
                <a href="https://gofood.co.id/" target="_blank" class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-900/20 transform hover:-translate-y-1 w-full sm:w-auto justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Pesan via GoFood
                </a>
            </div>

            <!-- Category Filter -->
            <div class="flex overflow-x-auto pb-4 gap-4 mb-8 snap-x no-scrollbar md:justify-center md:flex-wrap px-4 -mx-4 md:mx-0 md:px-0">
                <button 
                    v-for="category in categories" 
                    :key="category.id"
                    @click="activeCategory = category.id; showAll = false"
                    class="px-6 py-2 rounded-full font-bold transition-all duration-300 flex-shrink-0 snap-center"
                    :class="activeCategory === category.id ? 'bg-jowo-wood text-white shadow-lg scale-105' : 'bg-white text-jowo-wood border border-jowo-wood hover:bg-orange-50'"
                >
                    {{ category.name }}
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(item, index) in filteredItems" :key="index" 
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
                    
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="mb-2">
                            <h3 class="text-xl font-serif font-bold text-jowo-charcoal group-hover:text-jowo-gold transition-colors duration-300">{{ item.name }}</h3>
                        </div>
                        <p class="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">{{ item.description }}</p>
                        
                        <div class="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                            <span class="text-lg font-bold text-jowo-wood">{{ item.price }}</span>
                            <button 
                                @click="addToCart(item)"
                                class="w-10 h-10 rounded-full bg-jowo-wood text-white flex items-center justify-center hover:bg-jowo-gold hover:text-jowo-wood transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-90"
                                title="Tambah ke Keranjang"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16" v-if="hasMoreItems">
                <button 
                    @click="showAll = !showAll"
                    class="group px-10 py-4 border-2 border-jowo-wood text-jowo-wood font-bold rounded-full hover:bg-jowo-wood hover:text-white transition-all duration-300 hover:shadow-xl w-full sm:w-auto justify-center"
                >
                    <span class="flex items-center gap-2">
                        {{ showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Menu' }}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform" :class="showAll ? 'rotate-180' : 'group-hover:translate-y-1'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </section>
</template>
