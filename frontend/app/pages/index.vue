<script setup>
useSeoMeta({

})

</script>

<template>
    <section id="hero">
        <div id="hero-bg">
            <img src="/hero.png" alt="Hero img" loading="lazy">
        </div>
        <div class="container">
            <div id="hero-content">
                <h1>Крутой товар вообще<br/>
                    <span>а это еще круче</span> ну короче
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar</p>
                <div id="hero-content-button">
                    <ButtonAccentLight route="/catalog">Каталог продукции</ButtonAccentLight>
                    <ButtonTransparent route="/about">Узнать больше</ButtonTransparent>
                </div>
            </div>
        </div>
        <div id="curve">
            <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,0 C360,200 1080,-100 1440,100 L1440,150 L0,150 Z" fill="var(--main-bg)" />
            </svg>
        </div>
    </section>
    
    <IndexProduct image_src="/first-video.png" image_alt="hand-brake" button_text="Подробнее" button_route="/">
        <template #header>
            <h2>Бэбэбэ
                <span>ручник</span>
            </h2>
        </template>
        <template #paragraph>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>
        </template>
        <template #list>
            <ul>
                <li>
                    <i>
                        <Icon name="mdi:check" size="20px" />
                    </i>
                    <div>
                        <strong>Живучесть</strong>
                        <span>Изготовлены из материала</span>
                    </div>
                </li>
                <li>
                    <i>
                        <Icon name="mdi:check" size="20px" />
                    </i>
                    <div>
                        <strong>Используй везде</strong>
                        <span>Совместимость со всеми популярными симуляторами</span>
                    </div>
                </li>
            </ul>
        </template>
    </IndexProduct>
    <IndexProduct image_src="/first-video.png" image_alt="shifter" button_text="Подробнее" button_route="/" :reverse="true">
        <template #header>
            <h2>Бэбэбэ 
                <span>шифтер</span>
            </h2>
        </template>
        <template #paragraph>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>
        </template>
        <template #list>
            <ul>
                <li>
                    <i>
                        <Icon name="mdi:check" size="20px" />
                    </i>
                    <div>
                        <strong>Живучесть</strong>
                        <span>Изготовлены из материала</span>
                    </div>
                </li>
                <li>
                    <i>
                        <Icon name="mdi:check" size="20px" />
                    </i>
                    <div>
                        <strong>Используй везде</strong>
                        <span>Совместимость со всеми популярными симуляторами</span>
                    </div>
                </li>
            </ul>
        </template>
    </IndexProduct>
    <IndexProduct image_src="/first-video.png" image_alt="button-box" button_text="Подробнее" button_route="/">
        <template #header>
            <h2>Бэбэбэ 
                <span>button box</span>
            </h2>
        </template>
        <template #paragraph>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>
        </template>
        <template #list>
            <ul>
                <li>
                    <i>
                        <Icon name="mdi:check" size="20px" />
                    </i>
                    <div>
                        <strong>Живучесть</strong>
                        <span>Изготовлены из материала</span>
                    </div>
                </li>
                <li>
                    <i>
                        <Icon name="mdi:check" size="20px" />
                    </i>
                    <div>
                        <strong>Используй везде</strong>
                        <span>Совместимость со всеми популярными симуляторами</span>
                    </div>
                </li>
            </ul>
        </template>
    </IndexProduct>

    <IndexReviewScroller />
    
    <IndexContact />
</template>

<style scoped>
#hero {
    position: relative;
    height: 100vh;
    background: var(--gradient-hero);
}

#hero-bg {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

#hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 40%;
}

#hero .container {
    position: relative;
    display: flex;
    align-items: end;
    height: calc(100% - 68px);
}

#hero-content {
    max-width: 58rem;
    padding-bottom: 3rem;
}

#hero-content h1 {
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 0.75rem;
}

#hero-content h1 span {
    color: transparent;
    background-image: var(--gradient-accent-light);
    background-clip: text;
}

#hero-content p {
    font-size: 1.25rem;
    color: var(--review-text-color);
    margin-bottom: 2rem;
}

#hero-content-button {
    display: flex;
    flex-flow: row;
    gap: 1rem;
}

#hero #curve {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 0;
}

#hero #curve svg {
  display: block;
  width: 100%;
  height: 30px;
}

@media screen and (max-width: 768px) {
    #hero-content h1 {
        font-size: 2.5rem;
        line-height: 1.25;
    }
}

@media screen and (max-width: 640px) {
    #hero-content-button {
        flex-direction: column;
    }
}
</style>