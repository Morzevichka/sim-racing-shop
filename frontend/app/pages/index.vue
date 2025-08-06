<script setup>
</script>

<template>
    <section id="hero">
        <div id="hero-bg-img">
            <img src="/hero.png" alt="Hero img" loading="lazy">
        </div>
        <div class="container">
            <div id="hero-content">
                <h1>
                    Крутой товар вообще
                    <br/>
                    <span>а это еще круче</span>
                    ну короче
                </h1>
                <p>А тут еще много текста который круто подходит под все это описание придумаю потом с GPT как всегда</p>
                <div id="hero-content-button">
                    <span id="hero-content-button-catalog">
                        <RouterLink to="/catalog">Каталог продукции</RouterLink>
                    </span>
                    <span id="hero-content-button-about">
                        <RouterLink to="/about">Узнать больше</RouterLink>
                    </span>
                </div>
            </div>
        </div>
        <div id="curve">
            <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
                <path d="M0,0 C360,200 1080,-100 1440,100 L1440,150 L0,150 Z" fill="#0F1419"/>
            </svg>
        </div>
    </section>
    <section class="video-section">
        <div class="container">
            <div class="container-wrappwer">
                 <div class="video-container">
                    <img src="/first-video.png"/>
                </div>
                <div class="text-container">
                </div>
            </div>
        </div>
    </section>
    <section class="product-section">

    </section>
</template>

<style scoped>
#hero {
    position: relative;
    height: 100vh;
    background: var(--gradient-main);
}

#hero-bg-img {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

#hero-bg-img img {
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
    max-width: 52rem;
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
    color: var(--text-gray);
    margin-bottom: 2rem;
}

#hero-content-button {
    display: flex;
    flex-flow: row;
    gap: 1rem;
}

#hero-content-button span {
    text-align: center;
    transition: 300ms;
    border-radius: 0.375rem;
    padding: 0.75rem 2rem;
}

#hero-content-button a {
    font-weight: 700;
    color: white;
    text-decoration: none;
}

#hero-content-button-catalog {
    background-image: var(--gradient-accent-light);
}

#hero-content-button-catalog:hover {
    opacity: 0.85;
}

#hero-content-button-about {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

#hero-content-button-about::before {
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

#hero-content-button-about:hover::before {
    left: 0;
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
  height: 50px;
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

.video-section {
    padding: 5rem 0;
    background-color: var(--dark);
    height: 700px;
}

.container-wrapper {
    display: flex;
    flex-flow: row;
    gap: 3rem;
    align-items: center;
}

.video-container {
    width: 50%;
    position: relative;
}

.video-container img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 1024px) {
    .container-wrapper {
        flex-flow: column;
    }

    .video-container {
        width: 100%;
    }

    .card-content {
        width: 100%;
    }
}
</style>