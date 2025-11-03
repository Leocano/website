<script>
  import Board from "./components/Board.svelte";
  import Timer from "./components/Timer.svelte";
  import FlagCounter from "./components/FlagCounter.svelte";
  import RestartButton from "./components/RestartButton.svelte";
</script>

<div class="flex justify-between">
  <Timer />
  <FlagCounter />
</div>
<RestartButton />
<Board />
