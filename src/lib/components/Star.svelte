<script>
    export let isYellow;
</script>

<svg height="25" width="23" class="star rating" data-rating="1" class:isYellow>
    <!-- {#if blablabla} // to calculate correct portion of star to fill
        <defs>
            <linearGradient id="water" x1="0" y1="1" x2="0" y2="0">
            <stop id="stop1" offset="0%" stop-color="blue"/>
            <stop id="stop2" offset="0%" stop-color="transparent"/>
            </linearGradient>
        </defs>
    {/if} -->
    
    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" class:isBlank={isYellow == false}/>
</svg>

<style type="scss">
    
    .isYellow {
        fill: #ffd055;
    }

    .isBlank {
        fill: #d8d8d8;
    }

</style>