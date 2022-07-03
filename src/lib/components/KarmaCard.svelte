<script>
  import { stepName } from '$lib/scale.ts';
  import { signer } from '$lib/wallet.ts';
  import { ethers } from 'ethers';

  export let title;
  export let description;
  export let scale;
  export let pic;

  function ahosigum(sc) {
    try {
      const tx = signer.sendTransaction({
        to: "0xE9c5a8e33d1D4C0bcf7f527F7B46B031914C6228",
        value: ethers.utils.parseEther(String(sc / 1000)),
      });
    } catch (e) {
      alert(e.message)
    }
  }
</script>

<a href='#'>
  <div class='card w-96 h-64 bg-base-100 shadow-xl image-full shadow-lg'>
    <div class='card-body flex flex-col justify-between'>
      <div class='flex flex-col gap-1'>
        <h2 class='card-title'>{title}</h2>
        <p>{description}</p>
      </div>
      <div class='flex flex-col gap-1'>
        <progress class='progress progress-error w-full' max='100' value={scale}></progress>
        {scale}% {stepName[Math.round(scale / 10) * 10]}
        <div class='flex flex-row gap-2'>
          <button class='btn btn-success' on:click={() => ahosigum(scale)}>
            อโหสิกรรม
          </button>
          <button class='btn btn-error'>
            กรรมตามสนอง
          </button>
        </div>
      </div>
    </div>
    <figure><img alt='img' src='{pic}' /></figure>
  </div>
</a>

<!-- <a>
  <div class="card w-96 bg-base-100 shadow-xl image-full">
   
   
  </div>
</a> -->
