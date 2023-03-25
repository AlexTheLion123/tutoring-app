<script>
  import Icons from "$lib/components/Icons.svelte"
  import CheckList from "$lib/components/CheckList.svelte"
  import Contact from "$lib/components/Contact.svelte"
  import RegForm from "$lib/components/RegForm.svelte"

  let isFormShown = false;
</script>

<div class="container">
  <section class="main-content">
    
    <div class="main-picture">
      <img id="student-image" src="src/lib/images/student.png" alt="Mountains">
    </div>

    <h1 class = "main-heading">Helping students help you</h1>
    <p class = "main-text">
        Many job requirements demand some level of experience from entry level positions,
        yet newly graduate students lack such an experience.<br>
        Many entrepreneurs and startups struggle with raising capital, yet at the beginning
      of their entrepreneurial journey, they are tasked with many roles, where some come with 
      many challenges.
      <br>
      <br>
      With Varsity Plug, it provides entrepreneurs and students in their penultimate and
      final year a place to connect and work with each other.
    </p>

    <div class="register-button" on:click={()=>isFormShown=true}>Register</div>
    
  </section>
  
  <section class="icons">
    <Icons/>
  </section>

  <section class="catch-text">
    The platform to get you the <strong>experience</strong> and <strong>expertise.</strong>
  </section>
</div>

{#if isFormShown}
<div class="form-modal">
  <RegForm bind:isFormShown/>
</div>
{/if}



<section class="check-list">
  <CheckList/>
</section>
    
<section class="contact">
  <Contact/>
</section>

<style>
  .form-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom:0;
    left: 0;
    background: rgb(0,0,0,60%);
    z-index: 100;
    display: grid;
    place-items: center;
}

  * {
    margin: 0;
  }
  .container {
    margin: auto;
    padding: 50px;
    max-width: 1500px;

  }

  .main-content {
    display: grid;
    grid-template:
      "mainPicture mainHeading" 1fr
      "mainPicture mainText" 5fr
      "mainPicture registerButton" 2fr
      / 1fr 1fr;
  }

  .main-content #student-image {
    width: 95%;
    height: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  .register-button {
      width: 200px;
      height: 50px;
      text-align: center;

      background: rgb(144, 144, 248);
      border-radius: 5px;
      color: white;
      font-size: 1.5rem;

      grid-area: registerButton;
      place-self: center;

      display: grid;
      place-items: center;
  }

  .register-button:hover {
    cursor: pointer;
  }

  .main-heading {
    grid-area: mainHeading;
    align-self: start;
    margin: 0;
  } 

  .main-text {
    grid-area: mainText;
    align-self: start;
    margin: 10px 0;
    font-size: 1.2rem;
  }

  .main-picture {
    grid-area: mainPicture;
    justify-self: start;
  }

  div.item {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    width: 120px;
  }
  img {
      width: 200px;
      height: 50px;
      background-color: grey;
  }

  section.icons {
    display: flex;
    justify-content: space-between;
    margin: 80px 0;
  }

  section.catch-text {
    font-size: 1.7rem;

    text-align: center;
    margin: 100px 0 80px 0;
  }

  section.check-list {
    background: #2e2f6cff;
    width: 100%;
    height: 600px;

    border-bottom: 5px solid rgb(100, 200, 100);
  }


</style>