<template>
    <footer>
    <div class="vertical-wrapper">
      <div id="footer-wrapper">
        <div>
          <div class="logo-wrapper" style="padding-bottom: 1.5rem;">
            <RouterLink to="/"><span>LOGO</span></RouterLink>
          </div>
          <div style="padding-bottom: 1.5rem;">
            <p>Производим все аккуратно и быстро, да и вообще компания хорошая</p>
          </div>
          <div id="footer-socials">
            <a href="https://google.com" target="_blank">
              <svg data-icon="vk" role="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"></path></svg>
            </a>
            <a href="https://google.com" target="_blank">
              <svg data-icon="instagram" role="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href="https://google.com" target="_blank">
              <svg data-icon="youtube" role="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </a>
            <a href="https://google.com" target="_blank">
              <svg data-icon="telegram" role="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path></svg>
            </a>
          </div>
        </div>

        <!-- Nav -->
        <div class="footer-container">
          <h4>Навигация</h4>
          <div class="nav-footer">
            <RouterLink to="/">Главная</RouterLink>
            <RouterLink to="/catalog">Каталог</RouterLink>
            <RouterLink to="/about">О нас</RouterLink>
            <RouterLink to="/why-us">Почему мы</RouterLink>
            <RouterLink to="/">Доставка и оплата</RouterLink>
            <RouterLink to="/">Контакты</RouterLink>
          </div>
        </div>
        <!-- Products -->
        <div class="footer-container">
          <h4>Продукция</h4>
          <div class="nav-footer">
            <RouterLink to="/">Ручники</RouterLink>
            <RouterLink to="/">Шифтеры</RouterLink>
            <RouterLink to="/">Button Box</RouterLink>
          </div>
        </div>
        <!-- Contacts -->
        <div class="footer-container">
          <h4>Контакты</h4>
          <div class="nav-footer">
            <div class="nav-footer-item">
                <svg data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400  512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
                <p>г. Санкт-Петербург, ул. Оптиков, д. 1</p>
            </div>
            <div class="nav-footer-item">
                <svg data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                <p>+7 (999) 999-99-99</p>
            </div>
            <div class="nav-footer-item">
                <svg data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
                <p>info@company.com</p>
            </div>
            <div class="nav-footer-item">
                <svg data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                <p>24/7</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-bottom-wrapper">
        <p>© 2023 LOGO. Все права защищены.</p>
        <div id="terms">
            <RouterLink to="/">Политика конфиденциальности</RouterLink>
            <RouterLink to="/">Условия использования</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  color: var(--text-gray-footer);
  position: relative;
  bottom: 0;
  background-color: var(--dark-blue);
  padding: 4rem 0 2rem 0;
  border-top: 1px solid var(--color-border);
}

footer a {
  text-decoration: none;
  transition: color 250ms ease;
}

footer a {
  color: var(--text-gray-footer);
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
  display: flex;
  gap: 1rem;
  align-items: center;
}

#footer-socials svg {
  width: 20px;
  display: block;
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

.nav-footer-item svg {
    height: 1rem;
    color: var(--accent-blue);
    flex-shrink: 0;
}

.footer-container h4 {
  color: var(--white);
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
}

#footer-bottom-wrapper {
    border-top: 1px solid var(--color-border);
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

@media screen and (max-width: 1024px)  and (min-width: 768px) {
    #footer-wrapper {
        grid-template-columns:  repeat(2, 1fr);
    }
}

@media screen and (max-width: 768px) {
    #footer-wrapper {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media screen and (max-width: 768px) {
    #footer-bottom-wrapper {
        flex-flow: column;
    }

    #footer-bottom-wrapper p {
        margin-bottom: 1rem;
    }
}
</style>