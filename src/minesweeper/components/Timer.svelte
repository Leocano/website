<script lang="ts">
  import { store } from "../store.svelte";

  let elapsedSeconds = $state(0);
  let elapsedMinutes = $state(0);
  let intervalId: NodeJS.Timeout | null;

  function startTimer() {
    intervalId = setInterval(() => {
      if (elapsedSeconds >= 59) {
        elapsedMinutes++;
        elapsedSeconds = 0;
      } else {
        elapsedSeconds++;
      }
    }, 1000);
  }

  function stopTimer() {
    intervalId && clearInterval(intervalId);
    intervalId = null;
  }

  function formatTime() {
    const seconds = elapsedSeconds < 10 ? `0${elapsedSeconds}` : elapsedSeconds;
    const minutes = elapsedMinutes < 10 ? `0${elapsedMinutes}` : elapsedMinutes;

    return `${minutes}:${seconds}`;
  }

  $effect(() => {
    if (store.status === "playing" && !intervalId) {
      startTimer();
    }

    if ((store.status === "loss" || store.status === "win") && intervalId) {
      stopTimer();
    }
  });
</script>

<div class="text-6xl text-white pb-6">{formatTime()}</div>
