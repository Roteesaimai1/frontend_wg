<template>
  <div class="grid grid-flow-row-dense grid-cols-3 gap-2 grid-rows-4 mr-5 min-h-full">
    <!-- mini-card -->
    <minicard/>
    <!-- table name -->
    <div class="col-span-1 row-span-3 bg-zinc-900 rounded-t-md shadow-lg shadow-zinc-950 text-center" >
      <tablename/>
    </div>
    <div class="col-span-2 row-span-3 bg-zinc-900 rounded-md shadow-lg shadow-zinc-950 text-center">
      <tabledata/>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import minicard from "../components/MiniCard.vue"
import tablename from "../components/TableName.vue"
import tabledata from "../components/TableData.vue"
  export default {
    components:{
      minicard,
      tablename,
      tabledata,
    },
    data(){
      return{
        
      }
    },
    methods:{
      
    },
    mounted(){
      
    }
  }
</script>

<style scoped>

</style>