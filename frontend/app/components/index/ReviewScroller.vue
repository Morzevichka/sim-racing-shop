<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            });
        });
    }
});
</script>

<template>
    <section class="reviews">
        <div class="reviews-head">
            <h1>Отзывы от наших <span>покупателей</span></h1>
        </div>
        <div class="scroller">
            <div class="tag-list scroller__inner">
                <IndexReview :rating=5>
                    <template #review>
                        <p>"Ut commodo cupidatat sit aliquip aliquip aliqua aliquip cillum. Labore tempor mollit proident consectetur et cupidatat sunt. Lorem quis et irure excepteur cillum deserunt exercitation proident voluptate adipisicing. Cillum quis dolore cupidatat duis laboris ea ea incididunt id minim est proident tempor."</p>
                    </template>
                    <template #reviewer-initials>MT</template>
                    <template #name>Mark T.</template>
                    <template #from>Авито</template>
                </IndexReview>
                <IndexReview :rating=4>
                    <template #review>
                        <p>"Ut commodo cupidatat sit aliquip aliquip aliqua aliquip cillum. Labore tempor mollit proident consectetur et cupidatat sunt. Lorem quis et irure excepteur cillum deserunt exercitation proident voluptate adipisicing. Cillum quis dolore cupidatat duis laboris ea ea incididunt id minim est proident tempor."</p>
                    </template>
                    <template #reviewer-initials>MT</template>
                    <template #name>Mark T.</template>
                    <template #from>Авито</template>
                </IndexReview>
                <IndexReview :rating=3>
                    <template #review>
                        <p>"Ut commodo cupidatat sit aliquip aliquip aliqua aliquip cillum. Labore tempor mollit proident consectetur et cupidatat sunt. Lorem quis et irure excepteur cillum deserunt exercitation proident voluptate adipisicing. Cillum quis dolore cupidatat duis laboris ea ea incididunt id minim est proident tempor."</p>
                    </template>
                    <template #reviewer-initials>MT</template>
                    <template #name>Mark T.</template>
                    <template #from>Авито</template>
                </IndexReview>
                <IndexReview :rating=2>
                    <template #review>
                        <p>"Ut commodo cupidatat sit aliquip aliquip aliqua aliquip cillum. Labore tempor mollit proident consectetur et cupidatat sunt. Lorem quis et irure excepteur cillum deserunt exercitation proident voluptate adipisicing. Cillum quis dolore cupidatat duis laboris ea ea incididunt id minim est proident tempor."</p>
                    </template>
                    <template #reviewer-initials>MT</template>
                    <template #name>Mark T.</template>
                    <template #from>Авито</template>
                </IndexReview>
            </div>
        </div>
    </section>
</template>

<style scoped>
.reviews {
    position: relative;
    padding: 10rem 0;
}

.reviews-head {
    position: relative;
    margin-bottom: 3rem;
}

.reviews-head h1 {
    text-align: center;
    font-size: 2rem;
}

.reviews-head span {
    background-image: var(--gradient-accent-light);
    color: transparent;
    background-clip: text;
}

.scroller {
    margin: 0 auto;
    max-width: 90%;
}

.scroller__inner {
    padding-block: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.scroller[data-animated=true] {
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg, transparent, var(--primary) 20%, var(--primary) 80%, transparent);
    mask: linear-gradient(90deg, transparent, var(--primary) 20%, var(--primary) 80%, transparent);
}

.scroller[data-animated=true] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

@media (max-width: 1024px) {
    .reviews {
        padding: 5rem 0;
    }

    .scroller-head h1 {
        font-size: 1.75rem;
    }
}
</style>