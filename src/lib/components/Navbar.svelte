<script>
  import { page } from "$app/stores";
</script>

<center>
  <div class='top-0 absolute left-0 right-0 mx-auto'>
    <div class='max-w-min bg-black/30 flex flex-row items-center justify-center gap-2 rounded-full p-1 m-3'>
      <h3 class='{$page.url.pathname === "/" ? "nav-active" : "nav-item"}'>Karma</h3>
      <h3 class='{$page.url.pathname === "/p1" ? "nav-active" : "nav-item"}'>Bruh</h3>
      <h3 class='{$page.url.pathname === "/p2" ? "nav-active" : "nav-item"}'>Lmao</h3>
      <h3 class='{$page.url.pathname === "/p3" ? "nav-active" : "nav-item"}'>Smth</h3>
    </div>
  </div>
</center>