<script>
  export let title;
  export let description;
  export let scale;
  export let pic;
</script>

<a
  class='w-full bg-grey rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-[50%] mb-4 hover:text-black'
  href='#'
>
  <div class='flex'>
    <img
      alt=''
      class='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
      src={pic}
    />
    <div class='flex-1'>
      <div class='flex flex-col justify-between p-4 leading-normal'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight dark:text-gray-900  text-white '>{title}</h5>
        <p class='mb-3 font-normal dark:text-gray-700 hover:text-gray-700  text-gray-400 '>{description}</p>
      </div>
      <div class='p-4'>
        <div class='mb-1 text-base font-medium text-red-700'>Karma Scale : {scale}</div>
        <progress class="progress progress-error w-full" value={scale} max="100"></progress>
      </div>
    </div>
  </div>
</a>
