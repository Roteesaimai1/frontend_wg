<template>
  <div class="grid grid-cols-6 grid-row-1 gap-3 text-center"> 
    <createData/>
  </div>
</template>

<script>
import createData from '../components/CreateData.vue';
  export default {
    components: {
      createData,
    }
    
  }
</script>

<style scoped>

</style>