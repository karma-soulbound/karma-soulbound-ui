<script>
  import { onMount } from 'svelte';
  import { apiData, karmaLists } from '../lib/store';
  import KarmaCard from '$lib/components/KarmaCard.svelte';
  const karmaList = []
  const karmaListMock = [
    {
      id: 1,
      title: 'หาวบ่อย',
      description: 'เพิ่ม Carbon dioxcide ให้โลกเกินความจำเป็น',
      scale: 50,
      pic: 'yawn.jpeg',
    },
    {
      id: 2,
      title: 'กินข้าวเหลือ',
      description: 'ไม่มีมุทิตาจิต  ไม่คิดถึงหัวจิตหัวใจของชาวนา',
      scale: 99,
      pic: 'food.jpeg',
    },
  ];

  const getData = async () => {
    try {
      const res = await  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
      const data = await res.json()
      console.log(data)
      karmaListMock.forEach(element => {
        karmaList.push(element)
      });
      apiData.set(karmaListMock)
      return karmaListMock
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  console.log(karmaList)
</script>

<div class="flex flex-col min-h-screen w-full items-center justify-center">
    {#await getData()}
        Loading...
    {:then _}
    {#each karmaList as karma (karma.id)}
        <KarmaCard
        title={karma.title}
        description={karma.description}
        scale={karma.scale}
        pic={karma.pic}
        />
    {/each}
  {/await}
</div>
