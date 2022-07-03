<script>
  import { contracts } from '$lib/contracts.ts';
  import { JSONRPCProvider, provider } from '$lib/wallet.ts';
  import { ethers } from 'ethers';
  import KarmaCard from '$lib/components/KarmaCard.svelte';

  let searchVal;
  let data;
  let isLoading = false;

  const searchData = async () => {
    try {
      isLoading = true;
      const newContract = await contracts.connect(JSONRPCProvider)
      console.log(searchVal)
      let bal =  await newContract.balanceOf(searchVal);
      let karma =await Promise.all([...Array(bal.toNumber())].map( (el,idx) => {
        console.log(newContract.tokenOfOwnerByIndex(searchVal, idx))
        return  newContract.tokenOfOwnerByIndex(searchVal, idx);
      }))
      data = await Promise.all(karma.map((id) => newContract.tokenURI(id)));
      data = data.map((val) => JSON.parse(atob(val.split(',')[1])))
      console.log(data);
      isLoading = false;
    }catch (e) {
      isLoading = false;
      console.log(e)
    }


  }
</script>

<main>
  <div>
    <div class='flex flex-col my-12 w-full items-center justify-center'>
      <div>
        <div class='flex flex-row gap-2 items-center justify-center'>
          <input class='input input-bordered input-primary min-w-full' placeholder='หากรรม...' type='text' bind:value={searchVal} />
          <button class='btn btn-primary' on:click={() => searchData()}>Search</button>
        </div>
      </div>
    </div>
    {#if isLoading}
      <p>Loading...</p>
    {/if}
    <div class='md:grid md:grid-cols-2 flex flex-col place-items-center min-h-screen w-full items-center justify-center gap-2 my-4'>
      {#if data}
        {#each data as karma}
          <KarmaCard
            title={karma.name}
            description={decodeURIComponent(escape(karma.attributes[1].value))}
            scale={karma.attributes[0].value / 1000000000000000000}
            pic={karma.image}
          />
        {/each}
      {/if}
    </div>
  </div>
</main>
