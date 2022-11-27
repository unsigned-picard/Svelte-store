/** @type {import('./$types').PageServerLoad} */
export async function load(page) {
    const url = `https://fakestoreapi.com/products/${page.params["slug"]}`
    const res = await fetch(url)
    const product = await res.json()
    return {props:{product}};
};