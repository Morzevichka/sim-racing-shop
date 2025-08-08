<script setup>
defineProps({
    route: {
        type: String,
        required: true
    }
})
</script>

<template>
    <NuxtLink :to="route">
        <div>
            <slot />
            <slot name="icon" />
        </div>
    </NuxtLink>
</template>

<style scoped>
div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

:deep(.icon) {
    flex-shrink: 0;
}

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
    cursor: pointer;
}

a:hover {
    opacity: 0.85;
}
</style>