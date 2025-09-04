import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe, beforeAll } from 'vitest'
import Footer from '~/components/app/Footer.vue'

describe('Footer.vue (unit)', () => {
    let component = null

    beforeAll(async () => {
        component = await mountSuspended(Footer)
    })

    it('can mount the component', async () => {
        expect(component.find('#footer-socials').exists()).toBe(true)
        expect(component.findAll('.footer-container')).toHaveLength(3)
        expect(component.find('#footer-bottom-wrapper').exists()).toBe(true)
        expect(component.findAll('a')).toHaveLength(16)
    })

    it('contains right links to socials', async () => {
        const socialsLinks = component.findAll('#footer-socials a').map(l => l.attributes('href'))

        expect(socialsLinks).toContain('https://vk.com')
        expect(socialsLinks).toContain('https://instagram.com')
        expect(socialsLinks).toContain('https://youtube.com')
        expect(socialsLinks).toContain('https://telegram.com')
    })

    it('contains right links in Navigation and Products', async () => {
        component = await mountSuspended(Footer)
        const links = component.findAll('.footer-container a').map(l => l.attributes('href'))

        expect(links).toContain('/')
        expect(links).toContain('/catalog')
        expect(links).toContain('/about')
        expect(links).toContain('/qa')
    })
})