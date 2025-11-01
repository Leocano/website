<script lang="ts">
  import { store } from "../store.svelte";

  const { restartGame } = $derived(store);
</script>

<button
  class="bg-red-700 hover:bg-red-600 active:bg-red-900 focus:bg-red-800 text-white p-2 rounded-sm mb-6"
  onclick={restartGame}>Restart</button
>
