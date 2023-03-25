<script>
    import Star from './Star.svelte';

    export let rating;

    // calc the stars that are supposed to be filled
    rating = rating/2;
    let isYellowArray = Array(5);
    for(let i=0; i<isYellowArray.length; i++){
        isYellowArray[i] = (i < Math.trunc(rating)) ? true : false;
    }

   


</script>

<div class="stars">
    {#each isYellowArray as isYellow}
        <Star {isYellow}/>
    {/each}
</div>


<style>
    .stars {
        cursor: pointer;
    }

    
</style>

