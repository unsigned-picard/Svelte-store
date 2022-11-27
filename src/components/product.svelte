<script>
    export let product;
    import {fade} from 'svelte/transition';
</script>

<div transition:fade class="w-96 min-h-0 rounded-md shadow-sm hover:shadow-md flex flex-col m-4">
    <a href="/product/{product.id}">
    <div class="flex justify-end mr-6">
        <span class="uppercase font-bold ">{product.price}€</span>
    </div>
    <div class="h-64 w-full bg-contain bg-no-repeat bg-center mb-6" style="background-image: url({product.image})">

    </div>
    <div class="h-full w-full flex flex-row space-y-4">
        <div>
            <div class="mb-1.5">
                <h2 class="font-semibold text-lg">{product.title}</h2>
            </div>
            <div>
                <p class="text-sm text-grey-500">{product.description}</p>
            </div>
        </div>
    </div>
    </a>
</div>