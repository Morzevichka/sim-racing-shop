<template>
  <footer>
    <div class="container">
      <div id="footer-wrapper">
        <div>
          <AppLogo style="padding-bottom: 1.5rem" />
          <div style="padding-bottom: 1.5rem;">
            <p style="line-height: 1.75rem;">Производим все аккуратно и быстро, да и вообще компания хорошая</p>
          </div>
          <div id="footer-socials">
            <a href="https://google.com" target="_blank">
              <Icon name="mdi:vk" size="28px" />
            </a>
            <a href="https://google.com" target="_blank">
              <Icon name="mdi:instagram" size="28px" />
            </a>
            <a href="https://google.com" target="_blank">
              <Icon name="mdi:youtube" size="28px" />
            </a>
            <a href="https://google.com" target="_blank">
              <Icon name="mdi:telegram" size="28px" />
            </a>
          </div>
        </div>
        <div class="footer-container">
          <h4>Навигация</h4>
          <div class="nav-footer">
            <NuxtLink to="/">Главная</NuxtLink>
            <NuxtLink to="/catalog">Каталог</NuxtLink>
            <NuxtLink to="/about">О нас</NuxtLink>
            <NuxtLink to="/qa">QA</NuxtLink>
            <NuxtLink to="/">Доставка и оплата</NuxtLink>
            <NuxtLink to="/">Контакты</NuxtLink>
          </div>
        </div>
        <div class="footer-container">
          <h4>Продукция</h4>
          <div class="nav-footer">
            <NuxtLink to="/">Ручники</NuxtLink>
            <NuxtLink to="/">Шифтеры</NuxtLink>
            <NuxtLink to="/">Button Box</NuxtLink>
          </div>
        </div>
        <div class="footer-container">
          <h4>Контакты</h4>
          <div class="nav-footer">
            <div class="nav-footer-item">
              <Icon name="mdi:location" size="18px" />
              <p>г. Санкт-Петербург, ул. Оптиков, д. 1</p>
            </div>
            <div class="nav-footer-item">
              <Icon name="mdi:telephone" size="18px" />
              <p>+7 (999) 999-99-99</p>
            </div>
            <div class="nav-footer-item">
              <Icon name="mdi:envelope" size="18px" />
              <p>info@company.com</p>
            </div>
            <div class="nav-footer-item">
              <Icon name="mdi:clock" size="18px" />
              <p>24/7</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-bottom-wrapper">
        <p>© 2025 LOGO. Все права защищены.</p>
        <div id="terms">
            <NuxtLink to="/">Политика конфиденциальности</NuxtLink>
            <NuxtLink to="/">Условия использования</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  color: var(--paragraph);
  position: relative;
  bottom: 0;
  background-color: var(--dark-blue);
  padding-block: 4rem 2rem;
  border-top: 1px solid var(--gray);
}

footer a {
  text-decoration: none;
  transition: color 0.3s ease-out;
  color: var(--paragraph);
}

footer a:hover {
  color: var(--accent-blue);
}

#footer-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

#footer-socials {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-footer {
  display: flex;
  flex-flow: column;
}

.nav-footer a, .nav-footer p {
  padding-top: 0.75rem;
}

.nav-footer-item {
    display: flex;
    align-items: baseline;
    justify-content: start; 
    gap: 0.5rem;
}

.nav-footer-item .icon {
    color: var(--accent-blue);
    flex-shrink: 0;
}

.footer-container h4 {
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
}

#footer-bottom-wrapper {
    border-top: 1px solid var(--gray);
    padding-top: 2rem;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
}

#terms {
    display: flex;
    gap: 1.5rem;
}

#footer-bottom-wrapper a, #footer-bottom-wrapper p {
    color: #6b7280;
}

@media (max-width: 1024px) and (min-width: 768px) {
    #footer-wrapper {
        grid-template-columns:  repeat(2, 1fr);
    }
}

@media screen and (max-width: 768px) {
    #footer-wrapper {
        grid-template-columns: repeat(1, 1fr);
    }

    #footer-bottom-wrapper {
        flex-flow: column;
    }

    #footer-bottom-wrapper p {
        margin-bottom: 1rem;
    }
}
</style>