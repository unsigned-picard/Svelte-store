<script>

    export let data;
    import Product from '../../../components/product.svelte'

    console.log(data.props.product)
</script>


<div class="w-full mx-32 flex flex-row">
    <div class="flex grid grid-cols-1">
        <div class="h-64 w-64 bg-contain bg-no-repeat mr-8 mb-8"
             style="background-image: url({data.props.product.image})"></div>
        <div class="flex">
            <div class="h-32 w-32 bg-contain bg-no-repeat mr-8"
                 style="background-image: url({data.props.product.image})"></div>
            <div class="h-32 w-32 bg-contain bg-no-repeat mr-8"
                 style="background-image: url({data.props.product.image})"></div>
        </div>
    </div>
    <div class="flex ml-8">
        <div class="w-64">
            <h2 class="font-bold text-lg mb-16">{data.props.product.title}</h2>
            <div class="text-sm">{data.props.product.description}</div>
        </div>
    </div>
</div>