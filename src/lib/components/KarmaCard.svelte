<script>
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
    </div>
  </div>
</a>
