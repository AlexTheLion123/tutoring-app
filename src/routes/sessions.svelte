<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('/api/jobs');
        
        if (res.ok) return {props: {jobs: await res.json()}};
        return { // if failed
            status: res.status,
            error: new Error()
        };
    }
</script>
    
<script>
    import cloneDeep from 'lodash/cloneDeep';
    import Job from '$lib/components/Job.svelte';

    export let jobs;
    let jobsCopy = cloneDeep(jobs);

    let value;

    function filterJobs() {
        jobs = jobsCopy.filter(item => {
            return item.student_name.substr(0, value.length).toUpperCase() == value.toUpperCase();
        })
    }
</script>

<div class="container">
    <div class="search-content">
        <input type="text" placeholder="Enter a tutor name" bind:value on:input={filterJobs}>
        <i class="fas fa-search"></i>
    </div>
    
    <div class="container-wrapper">
        {#each jobs as {logo, student_name, requiredSkills, jobDescription, numApplicants, reviews}, id}
            <Job {logo} rating={reviews} {id}>
                <svelte:fragment slot = "student_name">{student_name}</svelte:fragment>
                <svelte:fragment slot = "description">{jobDescription}</svelte:fragment>
                <svelte:fragment slot = "requiredSkills">{requiredSkills}</svelte:fragment>
                <svelte:fragment slot = "numApplicants">{numApplicants}</svelte:fragment>
                <svelte:fragment slot = "reviews">{reviews/2}</svelte:fragment>
            </Job>
        {/each}
    </div>
</div>

<style>
    input {
        margin-top: 40px;
        width: 300px;
        padding: 10px;
        background: rgb(253, 253, 253);
        border-radius: 5px;
        font-size: 20px;
        margin-right: 10px;
        border: 1px solid rgb(0,0,0,50%); 
        box-shadow: 0 0 1px black;
    }

    input:focus {
        outline: none;
        border: 1px solid rgb(148, 212, 255);
    }

    i {
        font-size: 1.3rem;
    }

    i:hover {
        color: grey;
    }

    .container {
        width: 100%;
        display: grid;
        place-items: center;
    }

    .container-wrapper {
        width: 100%;
        max-width: 1500px;
        padding: 50px 150px;

        display: grid;
        place-items: center;

    }

    .container {
        width: 100%;
        display: grid;
        place-items: center;
    }

    .container-wrapper {
        width: 100%;
        max-width: 1500px;
        padding: 50px 150px;

        display: grid;
        place-items: center;

    }
</style>


