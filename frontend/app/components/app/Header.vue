<script setup>

const sidebarVisible = useState('sidebar-visible', () => false);

function openSidebar() {
    sidebarVisible.value = true;
}

function closeSidebar() {
    sidebarVisible.value = false;
}
</script>

<template>
    <header>
        <div class="container">
            <div id="header-wrapper">
                <AppLogo />

                <div id="close-sidebar-button" @click="closeSidebar" :class="{ show: sidebarVisible }">
                    <Icon name="icon-park-outline:close" size="28px"/>
                </div>

                <nav id="menu" :class="{ show : sidebarVisible }">
                    <div class="container">
                    <ul>
                        <li><NuxtLink to="/">Главная</NuxtLink></li>
                        <li><NuxtLink to="/catalog">Каталог</NuxtLink></li>
                        <li><NuxtLink to="/about">О нас</NuxtLink></li>
                        <li><NuxtLink to="/qa">QA</NuxtLink></li>
                    </ul>
                    </div>
                </nav>

                <div id="cart-profile" :class="{ show: sidebarVisible }">
                    <NuxtLink to="/cart">
                        <Icon name="mdi:cart" size="24px"/>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <Icon name="famicons:person-sharp" size="24px"/>
                    </NuxtLink>
                    
                    <div id="open-sidebar-button" @click="openSidebar" :class="{ show: !sidebarVisible }">
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
    border-bottom: 1px solid var(--gray);
}

header a, header .icon {
    text-decoration: none;
    transition: color 0.3s ease-in;
    color: var(--primary);
    cursor: pointer;
}

header a:hover, header .icon:hover {
    color: var(--accent-blue);
}

#header-wrapper {
    position: relative;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#header-wrapper .router-link-exact-active {
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

#close-sidebar-button, #open-sidebar-button {
    cursor: pointer;
    height: 28px;
    width: 28px;
    display: none;
}

#open-sidebar-button {
    scale: 115%;
}

#close-sidebar-button {
    position: absolute;
    right: 0;
}

@media (max-width: 768px) {
    #menu {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        background-color: var(--dark);
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

    #close-sidebar-button.show, #open-sidebar-button.show {
        display: block;
        z-index: 12;
    }

    #cart-profile.show {
        position: absolute;
        z-index: 12;
    }
}
</style>