<script lang="ts">
  import { store } from "../store.svelte";

  let elapsedSeconds = $state(0);
  let elapsedMinutes = $state(0);
  let intervalId: NodeJS.Timeout | null;

  const { gameStatus } = $derived(store);

  const startTimer = () => {
    if (intervalId) return;

    intervalId = setInterval(() => {
      if (elapsedSeconds >= 59) {
        elapsedMinutes++;
        elapsedSeconds = 0;
      } else {
        elapsedSeconds++;
      }
    }, 1000);
  };

  const stopTimer = () => {
    intervalId && clearInterval(intervalId);
    intervalId = null;
  };

  const resetTimer = () => {
    elapsedMinutes = 0;
    elapsedSeconds = 0;
  };

  const formatTimer = () => {
    const seconds = elapsedSeconds < 10 ? `0${elapsedSeconds}` : elapsedSeconds;
    const minutes = elapsedMinutes < 10 ? `0${elapsedMinutes}` : elapsedMinutes;

    return `${minutes}:${seconds}`;
  };

  $effect(() => {
    if (gameStatus === "playing" && !intervalId) {
      startTimer();
      return;
    }

    if (gameStatus === "loss" || gameStatus === "win") {
      stopTimer();
      return;
    }

    if (gameStatus === "initial") {
      stopTimer();
      resetTimer();
    }
  });
</script>

<div class="text-6xl text-white pb-6">{formatTimer()}</div>
