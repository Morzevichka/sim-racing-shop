export default defineEventHandler((event) => {
    const { category } = getQuery(event)
    console.log()   

   return { 
        hello: `hello from /api/products/${category}`
    } 
})