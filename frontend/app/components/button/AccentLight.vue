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
        </div>
    </NuxtLink>
</template>

<style scoped>

:deep(.icon) {
    flex-shrink: 0;
}

div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

a {
    display: inline-flex;
    transition: 300ms;
    border-radius: 0.375rem;
    padding: 0.75rem 2rem;
    background-image: var(--gradient-accent-light);
    text-decoration: none;
    color: var(--primary);
    font-weight: 700;
    cursor: pointer;
}

a:hover {
    opacity: 0.85;
}


@media screen and (max-width: 768px) {
    a {
        display: flex;
        justify-content: center;
    }
}
</style>