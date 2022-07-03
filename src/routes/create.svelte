<script lang="ts">
  import { stepName } from '$lib/scale.ts';
  import { contracts } from '$lib/contracts';
  import { BigNumber, ethers } from 'ethers';

  let rangeVal: number = 0;
  let addr, kdes;

  function mint() {
    if (!addr || !kdes) {
      return alert("Invalid Option")
    }
    try {
      contracts.mintKarma(addr, ethers.utils.parseEther(String(rangeVal)), kdes, {
        gasLimit: 1000000,
        gasPrice: ethers.utils.parseUnits("3",9)
      })
    } catch(e) {
      throw new Error(e);
    }
  }
</script>

<main class='min-h-screen'>
  <div class='flex flex-col min-h-screen w-full items-center justify-center'>
    <div class='flex flex-col gap-4 items-center justify-center p-4 md:w-[445px] w-xl rounded-xl shadow-lg bg-black/40'>
      <h1 class='md:text-xl text-left w-full text-white'>
        บันทึกเวรกรรม
      </h1>
      <div class='flex flex-col gap-2 w-full'>
        <input class='input input-bordered input-primary w-full' placeholder='Address คนเลว ๆ' type='text' bind:value={addr} />
        <input class='input input-bordered input-primary w-full' placeholder='สิ่งที่พวกเขาธรรม' type='text'    bind:value={kdes} />
        <label for='karma-idx'>🔥ความเลว (Karma Index)</label>
        <input type='range' id='karma-idx' class='range range-primary' bind:value={rangeVal}>
        <p>{rangeVal} {stepName[Math.round(rangeVal / 10) * 10]}</p>
      </div>
      <button class='btn btn-success' on:click={() => mint()}>
        บันทึกเลอ
      </button>
    </div>
  </div>
</main>