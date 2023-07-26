<template>
  <div class="grid grid-rows-6 grid-cols-6 grid-flow-col gap-4 min-h-screen ">
    <!-- Sidebar -->
    <div class="row-span-6 text-red-50 h-full bg-zinc-900 p-10  "> <Navbar/> </div>
    <!-- header -->
    <div class="max-lg:hidden  col-span-5 text-5xl text-red-50 h-full pl-10 pt-3 pb-2">HRWG</div> 
    <!-- Content -->
    <div class="row-span-5 col-span-5  text-red-50 pl-10 "><router-view></router-view></div>
  </div>
</template>

<script>
// import sidebar
import Navbar from './components/NavBar.vue';
  export default {
    name:"App",
    components:{
      Navbar,
    }
  }
</script>

<style>
/* Mitr Font */
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap');

body {
  background-color: #09090b;
  box-sizing: border-box;
  min-height: 100vh;
  font-family: 'Mitr', sans-serif;
}

</style>