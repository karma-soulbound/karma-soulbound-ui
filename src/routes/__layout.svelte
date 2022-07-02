<script lang='ts'>
  import { darkTheme } from '$lib/store';
  import Head from '$lib/components/Head.svelte';
  import '../tailwind.css';
  import '../index.css';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class={$darkTheme ? 'dark' : ''}>
  <Navbar />
  <Head />
  <slot />
</div>
