<script lang="ts">
  import { darkTheme } from '$lib/store';
  import Head from '$lib/components/Head.svelte';
  import '../tailwind.css';
  import '../index.css';
</script>

<div class={$darkTheme ? 'dark' : ''}>
  <Head />
  <slot />
</div>
