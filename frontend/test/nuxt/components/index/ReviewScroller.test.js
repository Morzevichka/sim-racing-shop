import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it, describe, beforeAll } from 'vitest'
import ReviewScroller from '~/components/index/ReviewScroller.vue'
import { nextTick } from 'vue'

describe('ReviewScroller.vue (unit)', () => {
    let component = null

    beforeAll(async () => {
        component = await mountSuspended(ReviewScroller)
        await nextTick()
    })

    it('can mount the component', () => {
        expect(component.find('.reviews').exists()).toBe(true)
        expect(component.find('.reviews-head').exists()).toBe(true)
        expect(component.find('.scroller').exists()).toBe(true)
        expect(component.find('.scroller__inner').exists()).toBe(true)
    })
})

