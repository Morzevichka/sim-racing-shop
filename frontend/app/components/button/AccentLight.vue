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
    transition: 300ms;
    border-radius: 0.375rem;
    padding: 0.75rem 2rem;
    background-image: var(--gradient-accent-light);
    text-decoration: none;
    color: var(--white);
    font-weight: 700;
}

a:hover {
    opacity: 0.85;
}
</style>