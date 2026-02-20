<script setup lang="ts"></script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&display=swap');
  body{
    font-family: "Atkinson Hyperlegible Mono", sans-serif;
    background-color: white;
    margin: 0;
    padding-bottom: 80px;
  }

  h1{
    font-family: "Atkinson Hyperlegible Mono", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 2rem;
    text-align: center;
  }

  h2{
    font-family: "Atkinson Hyperlegible Mono", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1.5rem;
    text-align: center;
  }

  p{
    font-family: "Arial";
    font-weight: 300;
    font-style: normal;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  nav{
    background-color: #3D3936;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  nav a{
    font-family: "Atkinson Hyperlegible Mono", sans-serif;
    font-weight: 500;
    font-style: normal;
    width: 150px;
    color: white;
    text-align: center;
    font-size: large;
    padding: 2.5rem;
    text-decoration: none;
  }

  nav a:hover {
    background-color: gray;
    color: #C7982C;
  }

  footer{
    padding: 14px 20px;
    background-color: #3D3936;
    text-align: center;
    color: white;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .container{
    background-color: #3D3936;
    border-radius: 10px;
    width: 350px;
    height: auto;
    padding: 40px;
    text-align: center;
    margin: 9rem auto auto auto;
  }

  input{
    height: 30px;
    width: 300px;
    margin: 10px;
  }

  button{
    margin: 10px;
    width: 140px;
  }
    
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #3D3936;
    width: 96.65%;
  }

  img{
    height: 50px;
    width: auto;
  }

  table{
      border: 2px solid black;
      margin: 0 auto;
      border-collapse: collapse;
  }

  th, td{
    font-family: "Atkinson Hyperlegible Mono", sans-serif;
    border: 2px solid black;
    text-align: center;
    padding: 3px 15px;
    font-weight: 400;
  }
</style>