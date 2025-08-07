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
                    <ButtonAccentLight :text="button_text" :route="button_route" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.product {
    position: relative;
}

.content {
    position: relative;
    padding: 10rem 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
}

.content::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-image: var(--gradient-card);
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
    border: 1px solid var(--color-border);
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
    color: #90a1b9;
}

:deep(.content-text ul) {
    margin-bottom: 2rem;
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

:deep(.content-text svg) {
    height: 1rem;
    flex-shrink: 0;
    color: var(--accent-blue);
}

:deep(.content-text ul span) {
    margin-top: 0.5rem;
    color: #90a1b9;
}

:deep(.content-text ul div) {
    display: flex;
    flex-flow: column;
}

@media screen and (max-width: 1024px) {
    .product {
        height: auto;
    }

    .content {
        flex-flow: column;
        padding: 10rem 0;
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
        width: 70%;
    }

    .content-text {
        width: 100%;
    }
}

@media screen and (max-width: 640px) {
    .content-text a {
        width: 100%;
    }
}
</style>