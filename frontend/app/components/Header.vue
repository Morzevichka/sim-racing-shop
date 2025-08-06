<script setup>
import { ref } from 'vue'

const sidebarVisiable = ref(false)

function openSidebar() {
    sidebarVisiable.value = true
}

function closeSidebar() {
    sidebarVisiable.value = false
}
</script>

<template>
  <header>
    <div class="vertical-wrapper">
      <div id="nav-wrapper">
        <div class="logo-wrapper">
          <NuxtLink to="/"><span>LOGO</span></NuxtLink>
        </div>
      
        <nav id="menu" :class="{ show : sidebarVisiable }">
    
        <div id="close-sidebar-button" @click="closeSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z"/></svg>
        </div>
        
          <NuxtLink to="/">Главная</NuxtLink>
          <NuxtLink to="/catalog">Каталог</NuxtLink>
          <NuxtLink to="/about">О нас</NuxtLink>
          <NuxtLink to="/qa">QA</NuxtLink>
        </nav>
        <div id="overlay" @click="closeSidebar"></div>

        <div id="cart-profile">
          <NuxtLink to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
          </NuxtLink>
          <NuxtLink to="/"> <!-- !!!!!!!!!!!!!!!! -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
          </NuxtLink>
        
          <div id="open-side-bar" @click="openSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--dark-blue);
  opacity: 95%;
  border-bottom: 1px solid var(--color-border);
}

#nav-wrapper {
  height: 68px;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav-wrapper .router-link-exact-active {
  color: var(--accent-blue);
}

#nav-wrapper a {
  text-decoration: none;
  transition: color 250ms ease;
}

#nav-wrapper a {
  color: var(--white);
}

#nav-wrapper a:hover {
  color: var(--accent-blue);
}

#menu {
  display: flex;
  gap: 2rem;
}

#cart-profile {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

#cart-profile svg {
  color: white;
  width: 23px;
  height: 23px;
  transition: color 250ms ease-out;
  display: block;
}

#cart-profile svg:hover {
color: var(--accent-blue);
}

#cart-profile .router-link-exact-active svg {
color: var(--accent-blue);
}

#close-sidebar-button {
  width: 30px;
  height: 30px;
}

#close-sidebar-button svg {
  width: 100%;
  height: 100%;
  transition: fill 250ms ease-out;
  cursor: pointer;
  fill: white;
}

#close-sidebar-button svg:hover {
  fill: var(--accent-blue);
}

#overlay {
  position: fixed;
  inset: 0;
  z-index: 9;
  display: none;
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 768px) {
  #open-side-bar, #close-sidebar-button {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #layout {
    display: block;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  #menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: var(--dark-blue);
    transition: right 300ms ease-in-out;
    z-index: 50;
    border-left: 1px solid #1f2937;
  }

  #menu a {
    padding: 0 5rem;
  }

  #menu.show {
    right: 0;
  }

  #menu.show ~ #overlay {
    display: block;
  }

  #open-side-bar {
    display: block;
    cursor: pointer;
  }
}
</style>