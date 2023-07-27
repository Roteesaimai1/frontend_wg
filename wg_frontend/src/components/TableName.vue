<template>
    <div>
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
          <tr v-for="items in employeelist" :key="items.id" >
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
               <span class=""><button><font-awesome-icon class="pr-3 text-yellow-300" icon="fa-solid fa-circle-info"  /></button></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import axios from "axios";
    export default {       
    name: 'tablename',  
    
    data() {
        return {
            employeelist: [],
        }
    },
    methods: {
       getemployee() {
        axios.get("http://localhost:8000/api/employee")
        .then((response) => {
            this.employeelist = response.data;
        })
        .catch((err) => {
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