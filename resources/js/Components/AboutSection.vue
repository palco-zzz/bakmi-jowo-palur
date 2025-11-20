<template>
    <section id="about" class="py-24 bg-jowo-wood text-jowo-cream relative overflow-hidden">
        <!-- Decorative Background Pattern -->
        <div class="absolute top-0 left-0 w-96 h-96 bg-jowo-gold rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
        <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-jowo-spice rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3 animate-float" style="animation-delay: 2s;"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-16">
                <div class="lg:w-1/2 order-2 lg:order-1">
                    <div class="relative group">
                        <div class="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-jowo-gold rounded-tl-3xl transition-all duration-500 group-hover:-top-4 group-hover:-left-4"></div>
                        <div class="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-jowo-gold rounded-br-3xl transition-all duration-500 group-hover:-bottom-4 group-hover:-right-4"></div>
                        
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <img 
                                src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=2000&auto=format&fit=crop" 
                                alt="Proses Memasak Mie Lethek" 
                                class="w-full h-[600px] object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-jowo-wood/80 via-transparent to-transparent opacity-60"></div>
                            
                            <div class="absolute bottom-8 left-8 right-8">
                                <p class="text-jowo-gold font-serif italic text-xl">"Dimasak satu per satu untuk rasa yang sempurna"</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="lg:w-1/2 space-y-8 order-1 lg:order-2">
                    <div>
                        <span class="text-jowo-gold font-bold tracking-widest uppercase text-sm mb-2 block">Tentang Kami</span>
                        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                            Warisan Kuliner <br />
                            <span class="text-jowo-gold">Sejak 1985</span>
                        </h2>
                    </div>
                    
                    <div class="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                        <p>
                            Mie Lethek Palur bermula dari sebuah gerobak sederhana di sudut kota. Dengan ketekunan dan resep rahasia keluarga yang dijaga ketat, kami menghadirkan cita rasa otentik yang tak lekang oleh waktu.
                        </p>
                        <p>
                            Kunci kelezatan kami terletak pada penggunaan <span class="text-jowo-gold font-semibold">Ayam Kampung Asli</span> dan proses memasak tradisional menggunakan <span class="text-jowo-gold font-semibold">Anglo Arang</span>. Metode ini memberikan aroma 'smoky' yang khas dan mematangkan bumbu dengan sempurna.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-8 pt-4">
                        <div class="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <h4 class="text-4xl font-bold text-jowo-gold mb-2">35+</h4>
                            <p class="text-sm text-gray-400 uppercase tracking-wider">Tahun Pengalaman</p>
                        </div>
                        <div class="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <h4 class="text-4xl font-bold text-jowo-gold mb-2">100%</h4>
                            <p class="text-sm text-gray-400 uppercase tracking-wider">Bahan Alami</p>
                        </div>
                    </div>
                    
                    <div class="pt-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_sample.svg" alt="Signature" class="h-16 opacity-50 invert filter" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
