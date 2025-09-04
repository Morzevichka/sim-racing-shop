import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect, beforeAll } from 'vitest'
import Products from '~/components/index/Products.vue'

describe('Products.vue (unit)', () => {
    let component = null

    beforeAll(async () => {
        component = await mountSuspended(Products)
    })

    it('can mount the component', () => {
        expect(component.findAll('section')).toHaveLength(3)
        expect(component.findAll('img')).toHaveLength(3)
    })
})