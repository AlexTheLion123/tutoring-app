<script>
    export let isFormShown;
</script>

<div class="form-content">
    <div class="form-header">
        <i class="fas fa-window-close" on:click={()=>isFormShown = false}></i>
    </div>
    
    <form action="">
        <input type="text" placeholder="Enter your first name">
        <input type="text" placeholder="Enter your last name">
        <input type="text" placeholder="Enter your email">
        <input type="text" placeholder="Enter your password">
        <textarea name="message" cols="40" rows="5" id="message" placeholder="Enter a description of your academic and work experience"></textarea>

    </form>
</div>

<style>

  input {
        display: block
    }

    .form-header {
        height: 30px;
        background: rgb(230, 230, 230);
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    input,
    textarea {
        font-family: 'Nunito';
        outline: none;
        border: none;
        width: 100%;
        margin: 10px 0;
        padding: 20px 10px;
        border-radius: 5px;
        background-color: rgb(239, 239, 239);
    }

    textarea {
        resize: none;
        font-family: 'Nunito';
    }

    input:focus,
    textarea:focus{
        box-shadow: 0 0 1px rgb(0, 162, 255);
        border-color: rgb(187, 183, 183);
    }
    
    i {
        margin: 10px;
        cursor: pointer;
    }

    i:hover {
        color: red;
    }

    .form-content {
        overflow: hidden;

        background: #fafafa;
        border: 1px solid grey;
        width: 40%;

        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    form {
        padding: 30px;
    }

</style>