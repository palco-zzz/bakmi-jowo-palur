<script setup>
import { Head } from '@inertiajs/vue3';

defineProps({
    title: {
        type: String,
        default: 'Mie Lethek Palur'
    },
    description: {
        type: String,
        default: 'Nikmati kelezatan otentik Mie Lethek Palur. Cita rasa legendaris dengan resep turun temurun.'
    }
});
</script>

<template>
    <Head :title="title">
        <meta name="description" :content="description" />
        <meta property="og:title" :content="title" />
        <meta property="og:description" :content="description" />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
</template>
