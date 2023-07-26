<template>
  <div class="grid grid-flow-row-dense grid-cols-3 gap-2 grid-rows-4 mr-5 min-h-full">
    <!-- mini-card -->
    <minicard/>
    <!-- table -->
    <div class="col-span-1 row-span-3 bg-zinc-900 rounded-t-md shadow-lg shadow-zinc-950 text-center" >
      <table class="table-fixed ">
        <thead>
          <tr >
            <th class="bg-sky-500 w-1/4 h-14 rounded-tl-md"><span class="">ลำดับ</span></th>
            <th class="bg-sky-500 w-1/4 h-14"><span class="">ชื่อ</span></th>
            <th class="bg-sky-500 w-1/4 h-14"><span class="">วัน</span></th>           
            <th class="bg-sky-500 w-1/4 h-14"><span class="">ยอดรวม</span></th>
            <th class="bg-sky-500 w-1/4 h-14 rounded-tr-md"><span class=""></span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in employeelist.data" :key="items.id" >
            <td>
              <span class="">{{ items.id }}</span>
            </td>
            <td>
              <span class="">{{ items.title }}</span>
            </td>
            <td>
               <span class="">1</span>
            </td>
            <td>
               <span class="">{{ 60 }}</span>
            </td>
            <td>
               <span class=""><button><font-awesome-icon class="pr-3" icon="fa-solid fa-circle-info"  /></button></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-span-2 row-span-3 bg-zinc-900 rounded-md shadow-lg shadow-zinc-950">2</div>
    
  </div>
</template>

<script>
import axios from "axios";
import minicard from "../components/MiniCard.vue"
  export default {
    components:{
      minicard,
    },
    data(){
      return{
        employeelist: [],
      }
    },
    methods:{
      getemployee(){
        axios.get("http://localhost:8000/api/employee")
        .then((response) => {
          this.employeelist = response.data;
        })
        .catch((err) =>{
          console.error("Failed to fetch API");
        })
      }
    },
    mounted(){
      this.getemployee();
    }
  }
</script>

<style scoped>

</style>