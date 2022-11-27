import {writable} from "svelte/store";

export const product = writable([]);

const fetchProduct = async () => {
    const url = `https://fakestoreapi.com/products`
    const res = await fetch(url)
    const data = await res.json()
    product.set(data)
};
fetchProduct()