<script lang="ts">
  import { stepName } from '$lib/scale.ts';

  let rangeVal: number = 0;
</script>

<main class='min-h-screen'>
  <div class='flex flex-col min-h-screen w-full items-center justify-center'>
    <div class='flex flex-col gap-4 items-center justify-center p-4 md:w-[445px] w-xl rounded-xl shadow-lg bg-black/40'>
      <h1 class='md:text-xl text-left w-full text-white'>
        บันทึกเวรกรรม
      </h1>
      <div class='flex flex-col gap-2 w-full'>
        <input class='input input-bordered input-primary w-full' placeholder='Input 1' type='text' />
        <input class='input input-bordered input-primary w-full' placeholder='Input 2' type='text' />
        <label for='karma-idx'>🔥ความเลว (Karma Index)</label>
        <input type='range' id='karma-idx' class='range range-primary' bind:value={rangeVal}>
        <p>{rangeVal} {stepName[Math.round(rangeVal / 10) * 10]}</p>
      </div>
      <button class='btn btn-success'>
        บันทึกเลอ
      </button>
    </div>
  </div>
</main>