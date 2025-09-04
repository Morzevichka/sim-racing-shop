import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect, beforeAll } from 'vitest'
import { h } from 'vue'
import Product from '~/components/index/Product.vue'

describe('Product.vue (unit)', () => {
    let component = null

    beforeAll(async () => {
        component = await mountSuspended(Product, {
            props: {
                image_src: '/test.png',
                button_text: 'test button',
                button_route: '/'
            },
            slots: {
                header: () => h('h2', [
                    'Test',
                    h('span', 'Product')
                ]),
                paragraph: () => h('p', 'test'),
            }
        })
    })

    it('can mount the component', () => {
        expect(component.find('.content-image').exists()).toBe(true)
        expect(component.find('.content-text').exists()).toBe(true)
    })

    it('checks image src', () => {
        expect(component.find('img').attributes('src')).toContain('/test.png')
    })

    it('checks button text and route', () => {
        expect(component.find('.content-text a').attributes('href')).toContain('/')
        expect(component.find('.content-text a').text()).toContain('test button')
    })

    it('checks slots', () => {

        const contentText = component.find('.content-text')

        // header
        expect(contentText.find('h2').html()).toMatchInlineSnapshot(`
                "<h2>Test<span>Product</span></h2>"
            `)

        // paragraph
        expect(contentText.find('p').html()).toContain('test')
    })

    it('checks reverse container', async () => {
        await component.setProps({ reverse: true })
        
        expect(component.find('.content').classes()).toContain('reverse')
    })
})