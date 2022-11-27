<script lang="ts">
   import {product} from '../store/product_store.js'
   import Product from '../components/product.svelte'
</script>


<div class="grid grid-cols-3">
   {#each $product as produit}
      <Product product={produit}></Product>
      {/each}

</div>