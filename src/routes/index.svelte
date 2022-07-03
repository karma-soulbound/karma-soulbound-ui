<!--<script context="module">-->
<!--  export const hydrate = false;-->
<!--</script>-->

<script>
  import { onMount } from 'svelte';
  import { signer } from '$lib/wallet.ts';

  onMount(() => {
    console.log(signer);
  })
</script>

<main class='min-h-screen'>
  <div class='flex flex-col min-h-screen w-full items-center justify-center'>

  </div>
</main>