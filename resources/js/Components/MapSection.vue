<script setup>
</script>

<template>
    <section id="location" class="py-20 bg-cream-50 relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-serif font-bold text-brown-900 mb-4">Lokasi Kami</h2>
                <p class="text-brown-600 max-w-2xl mx-auto">
                    Kunjungi kami dan rasakan suasana hangat sambil menikmati hidangan spesial.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Map Container -->
                <div class="rounded-2xl overflow-hidden shadow-xl h-[400px] border-4 border-white/50 relative group">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.149778343587!2d110.8546763147766!3d-7.558631994549365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16e6b6f6b6b3%3A0x6b6b6b6b6b6b6b6b!2sBakmi%20Jowo%20Palur!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    
                    <!-- Overlay for hover effect -->
                    <div class="absolute inset-0 bg-brown-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <!-- Address Info -->
                <div class="space-y-8">
                    <div class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-brown-100">
                        <h3 class="text-2xl font-serif font-bold text-brown-800 mb-4">Mie Lethek Palur</h3>
                        <div class="space-y-4 text-brown-600">
                            <div class="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Jl. Raya Palur, Palur, Kec. Mojolaban, Kabupaten Sukoharjo, Jawa Tengah</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>Buka setiap hari: 16.00 - 23.00 WIB</p>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <a href="https://maps.google.com/?q=Bakmi+Jowo+Palur" target="_blank" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Petunjuk Arah
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
