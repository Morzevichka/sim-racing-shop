export default defineEventHandler((event) => {
    const name = getRouterParam(event, 'productId')

    return {
        hello: `hello from products/${name}`
    }
})