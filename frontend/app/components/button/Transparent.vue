<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    }
})
</script>

<template>
    <NuxtLink :to="route">{{ text }}</NuxtLink>
</template>

<style scoped>
a {
    display: inline-block;
    text-align: center;
    text-align: center;
    border-radius: 0.375rem;
    padding: 0.75rem 2rem;
    border: 2px solid white;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: var(--white);
    font-weight: 700;
}

a::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
    transition: left 0.3s ease;
    z-index: 0;
}

a:hover::before {
    left: 0;
}
</style>