<script setup>
import { ButtonAccentLight } from '#components';

defineProps({
    image_src: {
        type: String,
        required: true
    },
    image_alt: {
        type: String,
        required: false
    },
    button_text: {
        type: String,
        required: true
    },
    button_route: {
        type: String,
        required: true
    },
    reverse: {
        type: Boolean,
        required: false
    }
})

</script>

<template>
    <section class="product">
        <div class="container">
            <div class="content" :class="{ 'reverse': reverse }">
                <div class="content-image">
                    <img :src="image_src" :alt="image_alt">
                </div>
                <div class="content-text">
                    <slot name="header" />
                    <slot name="paragraph" />
                    <slot name="list"/>
                    <ButtonAccentLight :route="button_route">{{ button_text }}</ButtonAccentLight>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.content {
    position: relative;
    padding: 10rem 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
}

.content.reverse {
    flex-direction: row-reverse;
}

.content-image {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
}

.content.reverse .content-image {
    justify-content: end;
}

img {
    width: 70%;
    object-fit: cover;
    border-radius: 2%;
    opacity: 100%;
    border: 1px solid var(--gray);
}

.content-text {
    width: 50%;
    height: 100%;
}

:deep(.content-text h2) {
    font-size: 2.125rem;
    line-height: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

:deep(.content-text h2 span) {
    color: transparent;
    background-image: var(--gradient-accent-light);
    background-clip: text;
}

:deep(.content-text p) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 1.5rem;
    color: var(--paragraph);
}

:deep(.content-text ul) {
    margin-bottom: 2.25rem;
    list-style: none;
}

:deep(.content-text li) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
}

:deep(.content-text i) {
    margin-right: 0.75rem;
}

:deep(.content-text .icon) {
    margin-top: 0;
    flex-shrink: 0;
    color: var(--accent-blue);
}

:deep(.content-text ul span) {
    margin-top: 0.5rem;
    color: var(--paragraph);
}

:deep(.content-text ul div) {
    display: flex;
    flex-flow: column;
}

@media (min-width: 1280px) {
    .content {
        padding: 15rem 0;
    }
}

@media (max-width: 1024px) {
    .content {
        flex-flow: column;
    }

    .content.reverse {
        flex-flow: column;
    }

    .content-image {
        width: 100%;
        padding: 0;
        justify-content: center;
        margin-bottom: 3rem;
    }

    .content.reverse .content-image {
        justify-content: center;
    }

    .content-image img {
        width: 55%;
    }

    .content-text {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .content-text a {
        width: 100%;
    }
}
</style>