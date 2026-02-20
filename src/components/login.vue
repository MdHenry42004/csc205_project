<template>
    <div class="page">
        <header>
            <img src="@/assets/images/genevalogo.webp" alt="Geneva College Logo">
            <nav></nav>
        </header>

        <h1 style="margin: 5rem auto auto 0;">Welcome</h1>

        <div class="container">
            <h2 style="color: white;">Please Login</h2>

            <form @submit.prevent="login">
                <input type="text" name="username" placeholder="Username" required>
                <input type="text" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
        </div>

        <footer>
            <p style="color: white;">Geneva College</p>
        </footer>
    </div>
</template>

<script>
    export default{
        name: "login",
        methods:{
            login(){
                this.$router.push("/studentList")
            }
        }
    }
</script>