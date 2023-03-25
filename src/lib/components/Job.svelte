<script>
    export let logo;
    import Stars from '$lib/components/Stars.svelte';
    export let rating;
    export let id;
</script>


<div class="job">
    <div class="picture-content">
        <h3><slot name="companyName"/></h3>
        <img src={logo} alt="logo">
    </div>

    <div class="description">
        <slot name="description"/>
    </div>

    <div class="requiredSkills"><b>Required Skills </b><slot name="requiredSkills"/></div>

    <div class="applications">
        <b># Applicants </b><slot name="numApplicants"/>
    </div>

    <div class="job-id">
        {id+1}
    </div>

    <div class="apply-button">Apply</div>

    <div class="reviews"><b>Reviews </b><slot name="reviews"/><Stars {rating}/></div>
</div>

<style>
    .job {
		width: 100%;
        max-width: 900px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;

        display: grid;
        grid-template:
            "picture description description reviews" 2fr
            "picture requiredSkills ........ button" 1fr
            "id applications ...... apply" 1fr
            / 1fr 2fr 2fr 1fr;    

        transition: 1s all ease;
	}

    .picture-content {
        grid-area: picture;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .description {
        grid-area: description;
    }

    .requiredSkills {
        grid-area: requiredSkills;
        align-self: end;
    }

    .applications {
        grid-area: applications;
        align-self: end;
    }

    .job-id {
        grid-area: id;
        align-self: end;
    }

    .reviews {
        grid-area: reviews;
        justify-self: center;
    }

    .apply-button {
        padding: 8px 20px;
        text-align: center;

        background: rgb(144, 144, 248);
        border-radius: 5px;
        color: white;
        font-size: 1rem;

        grid-area: apply;
    }


    .job:hover {
        transform: scale(1.05);
    }

    img {
        height: 4rem;
    }

    h3 {
        margin: 0 0 10px 0;
        font-size: 1rem;
    }
    h4 {
        margin: 0;
        color: rgb(133, 125, 125);
        font-size: 0.8rem
    }
</style>