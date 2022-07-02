<script>
  import { stepName } from '$lib/scale.ts';

  export let title;
  export let description;
  export let scale;
  export let pic;
</script>

<a>
  <div class="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src={pic} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{description}</p>
      <progress class="progress progress-error w-full" value={scale} max="100"></progress>
      {scale}% {stepName[Math.round(scale / 10) * 10]}
    </div>
  </div>
</a>
