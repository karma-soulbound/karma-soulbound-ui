<script>
  import { apiData } from '../lib/store';
  import KarmaCard from '$lib/components/KarmaCard.svelte';
  import { contracts } from '$lib/contracts.ts';

  const karmaList = [];
  const karmaListMock = [
    {
      id: 1,
      title: 'หาวบ่อย',
      description: 'เพิ่ม Carbon dioxcide ให้โลกเกินความจำเป็น',
      scale: 10,
      pic: 'yawn.jpeg',
    },
    {
      id: 2,
      title: 'กินข้าวเหลือ',
      description: 'ไม่มีมุทิตาจิต  ไม่คิดถึงหัวจิตหัวใจของชาวนา',
      scale: 50,
      pic: 'food.jpeg',
    },{
        id: 3,
      title: 'แก้โค้ดบน Production',
      description: 'ความจริงมีเพียง branch เดียว',
      scale: 70,
      pic: 'bug.png',

    },
    {
        id: 4,
      title: 'แก้ไขปัญหาน้ำท่วมช้า',
      description: 'หากุญแจปั๊มน้ำไม่เจอ',
      scale: 100,
      pic: 'flood.jpeg',

    },
    {
        id: 5,
      title: 'ขับเครื่องบินเลี้ยวตีวงกว้างไปหน่อย',
      description: 'คุณพรี่มาจากประเทศไหนคร้าาาาาาาาา (เขาไม่ได้ล้ำ แค่มาตีวงเลี้ยว)',
      scale: 1,
      pic: 'mig29.jpeg',

    }
  ];

  const getData = async () => {
    try {
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon');
      const data = await res.json();
      console.log(data);
      karmaListMock.forEach(element => {
        karmaList.push(element);
      });
      apiData.set(karmaListMock);
      return karmaListMock;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  console.log(karmaList);
</script>

<div class='md:grid md:grid-cols-2 flex flex-col place-items-center min-h-screen w-full items-center justify-center gap-2 my-4'>
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

