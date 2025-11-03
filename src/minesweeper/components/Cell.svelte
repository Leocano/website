<script lang="ts">
  import type { Cell } from "../types";
  import { store } from "../store.svelte";

  type Props = Cell & {
    row: number;
    col: number;
  };

  const { content, status, row, col, bombsAround }: Props = $props();

  const { gameStatus, revealCells, toggleFlag } = $derived(store);

  const handleCellClick = () => {
    if (status === "flagged" || gameStatus === "loss") {
      return;
    }

    revealCells(row, col);
  };

  const handleContextMenu = (e: Event) => {
    e.preventDefault();

    if (gameStatus !== "playing") {
      return;
    }

    toggleFlag(row, col);
  };
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
    {#if content === "mine"}
      💣
    {:else if bombsAround > 0}
      {bombsAround}
    {/if}
  {/if}
</button>
