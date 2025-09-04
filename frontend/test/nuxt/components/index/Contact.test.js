import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect, beforeAll } from 'vitest'
import Contact from '~/components/index/Contact.vue'

describe('Contact.vue (unit)', () => {
    let component = null

    beforeAll(async () => {
        component = await mountSuspended(Contact)
    })

    it('can mount the component', () => {
        expect(component.find('.contact').exists()).toBe(true)
        expect(component.findAll('.card')).toHaveLength(2)
    })
})
