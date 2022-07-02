<script>
  import { stepName } from '$lib/scale.ts';

  export let title;
  export let description;
  export let scale;
  export let pic;
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
          <button class='btn btn-success'>
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
