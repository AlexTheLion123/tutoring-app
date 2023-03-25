<script>
    export let avatar;
    import Stars from '$lib/components/Stars.svelte';
    export let rating;
</script>


<div class="student">
    <div class="picture-content">
        <h3><slot name="name"/></h3>
        <img src={avatar} alt="Avatar">
    </div>
    <div class="text-content">
        <div class="description">
            <slot name="description"/>
            <h4 class="catchPhrase"><slot name="catchPhrase"/></h4>
        </div>
        <div class="student-foot-content">
            <span class="skills"><b>Skills </b><slot name="skills"/></span>
            <span class="reviews"><b>Reviews </b><slot name="reviews"/> <Stars {rating}/></span>
        </div>
    </div>
</div>

<style>
    .student {
		width: 100%;
        max-width: 900px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;

        display: grid;
        grid-template: 1fr / 1fr 3fr;

        transition: 1s all ease;
	}

    .student:hover {
        transform: scale(1.05);
    }

    .student-foot-content {
        position: relative;
        bottom: 0;
        padding: 5px 0;
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 15px 0 0 0;
    }

    img {
        height: 4rem;
    }
    

    .picture-content, .text-content {
        padding: 5px; 
        flex: 1 1 150px;

    }
    .text-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1 1 500px;

        position: relative;
    }

    h3 {
        margin: 0;
        font-size: 1rem;
    }
    h4 {
        margin: 0;
        color: rgb(133, 125, 125);
        font-size: 0.8rem
    }

    .catchPhrase {
        display: none;
    }
</style>