<script>
  export let title;
  export let description;
  export let scale;
  export let pic;
</script>

<a
  href="#"
  class="block w-full bg-grey rounded-lg border shadow-md md:flex-row md:max-w-xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-[75%] mb-4 hover:text-black opacity-80"
>
  <div class="flex">
    <img
      class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
      src={pic}
      alt=""
    />
    <div class="flex-1">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-gray-900  text-black ">{title}</h5>
      <p class="mb-1 font-normal dark:text-gray-700 hover:text-gray-700  text-gray-400 ">{description}</p>
    </div>
    <div class="p-4">
    <div class="mb-1 text-base font-medium text-red-700">Karma Scale : {scale}</div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="bg-red-600 h-2.5 rounded-full" style={`width: ${scale}%`} />
    </div>
    <div class="flex justify-start gap-3 items-center pt-4">
        <button class="p-2 rounded-md bg-red-500 text-black hover:bg-red-800 hover:text-white">รับกรรมทันที</button>
        <button class="p-2 rounded-md bg-green-500 text-black hover:bg-green-800 hover:text-white">ขออโหสิกรรม</button>
    </div>
</div>
</div>
  </div>
</a>
