import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect, beforeAll } from 'vitest'
import Hero from '~/components/index/Hero.vue'

describe('Hero.vue (unit)', () => {
    let component = null

    beforeAll(async () => {
        component = await mountSuspended(Hero)
    })

    it('can mount the component', () => {
        expect(component.find('#hero-bg').exists()).toBe(true)
        expect(component.find('#hero-content').exists()).toBe(true)
        expect(component.find('#hero-content-button').exists()).toBe(true)
        expect(component.find('#curve').exists()).toBe(true)
    })

    it('loads image', () => {
        expect(component.find('img').exists()).toBe(true)
        expect(component.find('img').attributes('src')).toContain('/hero.png')
    })

    it('contains hero text', () => {
        expect(component.find('#hero-content h1').text()).toContain('Крутой товар вообще')
        expect(component.find('#hero-content h1 span').text()).toContain('а это еще круче')
        expect(component.find('#hero-content p').text()).toContain('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar')
    })

    it('contains right links in the buttons', () => {
        const links = component.findAll('a').map(l => l.attributes('href'))

        expect(links).toContain('/catalog')
        expect(links).toContain('/about')
    })
})