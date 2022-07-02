<script>
    import KarmaCard from "$lib/components/KarmaCard.svelte";
    const karmaList = [{
        id : 1,
        title : "หาวบ่อย",
        description : "เพิ่ม Carbon dioxcide ให้โลกเกินความจำเป็น",
        scale: 50,
        pic: 'yawn.jpeg'
    },
    {
        id : 2,
        title : "กินข้าวเหลือ",
        description : "ไม่มีมุทิตาจิต  ไม่คิดถึงหัวจิตหัวใจของชาวนา",
        scale: 99,
        pic: 'food.jpeg',
    }]
</script>

<div class="flex flex-col min-h-screen w-full items-center justify-center">
    {#each karmaList as karma (karma.id) }
    <KarmaCard title={karma.title} description={karma.description} scale={karma.scale}  pic={karma.pic}/>
    {/each}
   
</div>