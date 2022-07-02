<script>
  import { page } from "$app/stores";
</script>

<center>
  <div class='top-0 absolute left-0 right-0 mx-auto'>
    <div class='max-w-min bg-black/30 flex flex-row items-center justify-center gap-2 rounded-[100px] p-1 px-2 m-3'>
      <h3 class='{$page.url.pathname === "/" ? "nav-active" : "nav-item"}'>Karma</h3>
      <h3 class='{$page.url.pathname === "/p1" ? "nav-active" : "nav-item"}'>Bruh</h3>
      <h3 class='{$page.url.pathname === "/p2" ? "nav-active" : "nav-item"}'>Lmao</h3>
      <h3 class='{$page.url.pathname === "/p3" ? "nav-active" : "nav-item"}'>Smth</h3>
    </div>
  </div>
  <div class='top-0 absolute right-0 m-3'>
    <div class='flex'>
      <button>Connect นรก</button>
    </div>
  </div>
</center>