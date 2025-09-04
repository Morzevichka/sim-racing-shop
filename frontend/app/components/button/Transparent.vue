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
div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

a {
    display: inline-flex;
    border-radius: 0.375rem;
    padding: 0.75rem 2rem;
    border: 2px solid white;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: var(--primary);
    font-weight: 700;
    cursor: pointer;
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

@media screen and (max-width: 768px) {
    a {
        display: flex;
        justify-content: center;
    }
}
</style>