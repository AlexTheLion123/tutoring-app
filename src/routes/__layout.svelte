<script>
    import { isLogInShown } from "$lib/stores/stores"

    let navActiveArray = [true, false, false];
    function toggleNavActive(index) {
        for(let i=0; i<navActiveArray.length; i++){
            navActiveArray[i] = (i==index) ? true : false;
            navActiveArray = navActiveArray;
        }
    }
    import LogInForm from "$lib/components/LogInForm.svelte"
</script>

<nav>
    <div class="nav-wrapper">
        <span><h1>Varsity Plug</h1></span>
        <div class="links">
            <ul>
                <li class:isActive={navActiveArray[0]==true}><a href="/" on:click={() => toggleNavActive(0)}>Home</a></li>
                <li class:isActive={navActiveArray[1]==true}><a href="/sessions" on:click={() => toggleNavActive(1)}>Sessions</a></li>
                <!-- <li class:isActive={navActiveArray[2]==true}><a href="/students" on:click={() => toggleNavActive(2)}>Students</a></li> -->
            </ul>
            <span class="login-button" on:click={() => {
                $isLogInShown = true
            }}>Login</span>
        </div>
        
    </div>
</nav>

{#if $isLogInShown}
<div class="form-modal">
  <LogInForm/>
</div>
{/if}

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito&display=swap">
    <script src="https://kit.fontawesome.com/30f595e84f.js" crossorigin="anonymous"></script>
</svelte:head>

<slot></slot>

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

:global(body) {
    margin: 0;
    /* font: 16px/1.6em -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; */
    font-family: 'Nunito';
}

:global(*) {
    box-sizing: border-box;
}

ul {
    list-style-type: none;
    display: inline;
}

li {
    display: inline;
    width: 50px;
    padding: 10px 20px;
    border-radius: 5px;
}

nav {
    display: grid;
    place-items: center;
    background: rgb(241, 241, 241);

    width: 100%;
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 60px;
    background: rgb(241, 241, 241);
    max-width: 1500px;
    width: 100%;
    height: 50px;
}
a {
    text-decoration: none;
}
li:hover {
    background: #d0d4d9;
}

.isActive {
    background: #d0d4d9;
}

.login-button {
    padding: 10px 20px;
    margin-left: 30px;

    background: rgb(144, 144, 248);
    border-radius: 5px;
    color: white;
    font-size: 1.3rem;
    
}

.login-button:hover {
    cursor: pointer;
}
</style>