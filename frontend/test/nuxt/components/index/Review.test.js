import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect, beforeAll } from 'vitest'
import { h } from 'vue'
import Review from '~/components/index/Review.vue'

describe('Review.vue (unit)', () => {
    let component = null

    beforeAll(async () => {
        component = await mountSuspended(Review, {
            props: {
                rating: 4,
            }, 
            slots: {
                review: () => h('p', 'test review text'),
                'reviewer-initials': () => "MT",
                name: () => 'Mark',
                from: () => 'Facebook'
            }
        })
    })

    it('can mount the component', () => {
        expect(component.find('.reviewer').exists()).toBe(true)
        expect(component.find('.reviewer-info').exists()).toBe(true)
        expect(component.find('.reviewer-icon').exists()).toBe(true)
        expect(component.find('.reviewer-rating').exists()).toBe(true)
    })

    it('shows right count of filled and empty stars', () => {
        const stars = component.findAll('span')
        .map(i => i.classes())
        .filter(c => c.length > 1)
        
        // filled
        expect(stars.filter(c => c.includes('i-mdi:star'))).toHaveLength(4)
        // empty
        expect(stars.filter(c => c.includes('i-mdi:star-outline'))).toHaveLength(1)
    })
})