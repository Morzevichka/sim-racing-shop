<script setup>

const sidebarVisiable = useState('sidebar-visiable', () => false)

function openSidebar() {
    sidebarVisiable.value = true
}

function closeSidebar() {
    sidebarVisiable.value = false
}
</script>

<template>
  <header>
    <div class="container">
      <div id="nav-wrapper">
        <AppLogo />
        
        <div id="close-sidebar-button" @click="closeSidebar" :class="{ show: sidebarVisiable }">
        <Icon name="icon-park-outline:close" size="28px"/>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z"/></svg> -->
        </div>
        <nav id="menu" :class="{ show : sidebarVisiable }">
          <div class="container">
            <ul>
              <li><NuxtLink to="/">Главная</NuxtLink></li>
              <li><NuxtLink to="/catalog">Каталог</NuxtLink></li>
              <li><NuxtLink to="/about">О нас</NuxtLink></li>
              <li><NuxtLink to="/qa">QA</NuxtLink></li>
            </ul>
          </div>
        </nav>
        <div id="cart-profile" :class="{ show: sidebarVisiable }">
          <NuxtLink to="/cart">
            <Icon name="mdi:cart" size="28px"/>
          </NuxtLink>
          <NuxtLink to="/"> <!-- !!!!!!!!!!!!!!!! -->
            <Icon name="famicons:person-sharp" size="28px"/>
          </NuxtLink>
        
          <div id="open-side-bar" @click="openSidebar" :class="{ show: !sidebarVisiable}">
            <Icon name="charm:menu-hamburger" size="28px"/>
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

header a {
  text-decoration: none;
  transition: color 250ms ease;
  color: var(--white);
}

header a:hover {
  color: var(--accent-blue);
}

header .icon {
  color: var(--white);
  transition: color 0.3s ease-out;
  size: 28px;
}

header .icon:hover {
  color: var(--accent-blue);
}

#nav-wrapper {
  position: relative;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav-wrapper .router-link-exact-active {
  color: var(--accent-blue);
}

#menu ul{
  display: flex;
  gap: 2rem;
  list-style: none;
}

#cart-profile {
  position: relative;
  display: flex;
  gap: 1.5rem;
}

#cart-profile a {
  display: flex;
  width: 100%;
  height: 100%;
}

#cart-profile .router-link-exact-active svg {
  color: var(--accent-blue);
}

#close-sidebar-button {
  position: absolute;
  right: 0;
  height: 28px;
  width: 28px;
  display: none;
}

@media screen and (min-width: 768px) {
  #open-side-bar, #close-sidebar-button {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: var(--dark-blue);
    transition: right 300ms ease-in-out;
    z-index: 11;
    border-left: 1px solid #1f2937;
  }

  #menu.show {
    right: 0;
  }

  #menu ul {
    gap: 0;
    width: 100%;
    padding-top: 68px;
    flex-flow: column;
  }

  #menu li {
    display: flex;
    height: 3rem;
  }

  #menu a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  #open-side-bar {
    display: none;
    cursor: pointer;
    width: 28px;
    height: 28px;
    scale: 115%;
  }

  #open-side-bar.show {
    display: block;
  }

  #close-sidebar-button.show {
    display: block;
    z-index: 12;
  }

  #cart-profile.show {
    position: absolute;
    z-index: 12;
  }
}
</style>