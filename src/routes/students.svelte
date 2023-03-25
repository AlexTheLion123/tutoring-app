<script context="module">
    export async function load({ fetch }) {
      const res = await fetch('/api');
  
        if (res.ok) return {props: {students: await res.json()}};
        return { // if failed
            status: res.status,
            error: new Error()
        };
    }
</script>


<script>
    import cloneDeep from 'lodash/cloneDeep';
    import Student from '$lib/components/Student.svelte';

    export let students;
    let studentsCopy = cloneDeep(students);

    let value;

    function filterStudents() {
        students = studentsCopy.filter(item => {
            return item.firstName.substr(0, value.length).toUpperCase() == value.toUpperCase();
        })
    }

</script>


<div class="container">

    <div class="search-content">
        <input type="text" placeholder="Enter a student name" bind:value on:input={filterStudents}>
        <i class="fas fa-search"></i>
    </div>

    <div class="container-wrapper">
        {#each students as {firstName, lastName, catchPhrase, avatar, description, skills, reviews}}
            <Student {avatar} rating={reviews}>
                <svelte:fragment slot = "name">{firstName} {lastName}</svelte:fragment>
                <svelte:fragment slot = "catchPhrase">{catchPhrase}</svelte:fragment>
                <svelte:fragment slot = "description">{description}</svelte:fragment>
                <svelte:fragment slot = "skills">{skills}</svelte:fragment>
                <svelte:fragment slot = "reviews">{reviews/2}</svelte:fragment>
            </Student>
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

    
</style>