<template>
    <section class="contact">
        <div class="container">
            <div class="content">
                <div class="card">
                    <div style="padding: 2rem;">
                        <div class="card-header">
                            <span class="card-header-icon">
                                <Icon name="weui:shop-filled" size="28px"/>
                            </span>
                            <h3>Хотите больше?</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                        <ButtonAccentLight route="/">
                            Перейти в каталог
                            <Icon name="si:arrow-right-line" size="29px"/>
                        </ButtonAccentLight>
                    </div>
                </div>
                <div class="card">
                    <div style="padding: 2rem;">
                        <div class="card-header">
                            <span class="card-header-icon">
                                <Icon name="bxs:chat" size="26px"/>
                            </span>
                            <h3>Не нашли свое?</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                        <ButtonTransparent route="/">
                            Написать нам
                            <Icon name="mdi:telegram" size="25px"/>
                        </ButtonTransparent>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
.contact {
    background-image: linear-gradient(var(--dark), var(--dark-blue));
}

.content {
    position: relative;
    padding-block: 10rem 20rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
}

.card {
    width: 50%;
    background-color: var(--card-bg);
    border: 1px solid var(--gray);
    border-radius: 0.75rem;
    overflow: hidden;
    transition: color 0.3s ease-out;
}

.card:hover {
    border-color: var(--accent-blue);
}

.card:hover h3 {
    color: var(--accent-blue);
}

.card p {
    font-weight: 300;
    margin-bottom: 1.5rem;
    color: var(--paragraph);
}

.card-content {
    padding: 2rem;
}

.card-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 1rem;
}

.card-header .card-header-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #1e90ff33;
    border-radius: 50%;
}

.card-header .icon {
    flex-shrink: 0;
    color: var(--accent-blue);
}

.card-header h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    transition: color 0.15s ease-out;
}
@media screen and (max-width: 1024px) {
    .content {
        padding-block: 5rem 10rem;
        flex-direction: column;
    }

    .card {
        width: 100%;
    } 
}
</style>