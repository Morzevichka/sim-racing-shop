// import { mountSuspended } from '@nuxt/test-utils/runtime'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import Header from '~/components/app/Header.vue'

describe('Header.vue (unit)', () => {
    it('can mount the component', async () => {
        const component = await mountSuspended(Header)
        expect(component.find('.logo').exists()).toBe(true)
        expect(component.find('#menu').exists()).toBe(true)
        expect(component.find('#cart-profile').exists()).toBe(true)
    })

    it('contains right menu links', async () => {
        const component = await mountSuspended(Header)
        const links = component.findAll('a').map(l => l.attributes('href'))
        
        expect(links).toContain('/')
        expect(links).toContain('/catalog')
        expect(links).toContain('/about')
        expect(links).toContain('/qa')
    })

    it('opens and close sidebar', async () => {
        const component = await mountSuspended(Header)
        const openButton = component.find('#open-sidebar-button')
        const closeButton = component.find('#close-sidebar-button')

        // open
        await openButton.trigger('click')
        expect(component.find('#menu').classes()).toContain('show')
        // close
        await closeButton.trigger('click')
        expect(component.find('#menu').classes()).not.toContain('show')
    })
})