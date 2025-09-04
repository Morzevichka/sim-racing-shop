<template>
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
</template>