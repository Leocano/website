<script lang="ts">
  import { store } from "../store.svelte";
  import { MINE_AMOUNT } from "../constants";
</script>

<div class="text-6xl text-white pb-6">{MINE_AMOUNT - store.flaggedCells}</div>
