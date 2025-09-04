import { mountSuspended } from "@nuxt/test-utils/runtime"
import { describe, it, expect, beforeAll } from "vitest"
import ButtonTransparent from "~/components/button/Transparent.vue"

describe('Transparent.vue (unit)', () => {
    let component = null

    beforeAll(async () => {
        component = await mountSuspended(ButtonTransparent, {
            props: {route: '/'},
            slots: {default: () => 'test'}
        })
    })

    it('can mount the component', () => {
        expect(component.find('a').exists()).toBe(true)
        expect(component.find('div').exists()).toBe(true)
    })

    it('contains href and button text', () => {
        expect(component.find('a').attributes('href')).toContain('/')
        expect(component.find('div').text()).toContain('test')
    })
})