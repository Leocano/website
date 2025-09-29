<script lang="ts">
  import type { Cell } from "../types";
  import { store } from "../store.svelte";

  type Props = Cell & {
    row: number;
    col: number;
  };

  function handleCellClick() {
    if (status === "flagged") {
      return;
    }

    if (content === "mine") {
      store.revealCells(row, col);
      store.lose();
      return;
    }

    store.revealCells(row, col);
  }

  function handleContextMenu(e: Event) {
    e.preventDefault();
    store.toggleFlag(row, col);
  }

  const { content, status, row, col, bombsAround }: Props = $props();
</script>

<button
  type="button"
  class={[
    content === "mine" ? "bg-red-200" : "bg-blue-200",
    "border-2",
    "text-3xl",
  ]}
  onclick={handleCellClick}
  oncontextmenu={handleContextMenu}
>
  {#if status === "flagged"}
    🚩
  {:else if status === "clicked"}
    {#if content === "empty"}
      {bombsAround}
    {:else}
      💣
    {/if}
  {/if}
</button>
