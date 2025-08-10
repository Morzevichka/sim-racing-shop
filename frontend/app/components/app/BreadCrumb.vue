<script setup>
const route = useRoute();

const breadcrumbs = computed(() => {
    const metaCrumbs = route.meta?.breadcrumbs || [];
    return [{ text: 'Главная', to: '/' }, ...metaCrumbs];
});
</script>

<template>
    <div class="container">
        <nav v-if="breadcrumbs.length > 1">
            <ul>
                <li v-for="(crumb, index) in breadcrumbs" :key="index">
                    <NuxtLink v-if="index !== breadcrumbs.length - 1" :to="crumb.to">
                        {{ crumb.text }}
                    </NuxtLink>
                    <span v-else>
                        {{ crumb.text }}
                    </span>
                    <span v-if="index !== breadcrumbs.length - 1">
                        <Icon name="mdi:keyboard-arrow-right" />
                    </span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
nav {
    padding: 2rem 0;
    color: var(--text-gray);
}

ul {
    display: flex;
    list-style: none;
}

li {
    display: flex;
    align-items: center;
}

.icon {
    display: flex;
    margin: 0 0.25rem;
}

a {
    color: var(--text-gray);
    text-decoration: none;
    transition: color 0.3s ease-out;
}

a:hover {
    color: var(--accent-blue);
}
</style>