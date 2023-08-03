<template>
    <div class="grid grid-cols-6  gap-3 text-center m-5">  
    <div class="col-start-2 col-span-4  text-sky-50 bg-zinc-900 rounded-md ">  
      <!-- <div class="text-xl text-zinc-50 bg-sky-500 rounded-t-md">เลือกวันที่
          <input type="date" class="bg-sky-500 text-sky-50 hover:text-zinc-950" />                              
      </div> -->
      
      <table class="table-auto w-full">
        <thead >
          <tr >           
            <th class="bg-sky-500 rounded-tl-md h-14">ชื่อ</th>
            <th class="bg-sky-500  h-14">สถานะ</th>
            <th class="bg-sky-500  h-14">ยอดเงิน</th>
            <th class="bg-sky-500  h-14">วัน</th>
            <th class="bg-sky-500  h-14">วันที่</th>
            <th class="bg-sky-500 rounded-tr-md h-14"></th>
          </tr>
        </thead>
        <tbody>
          <tr>           
            <td>             
              <select v-model="datapost.id" id="status" name="status" class=" py-3 px-4 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <option  disabled value="" selected>เลือกชื่อ</option>
                <option v-for="list in employee" :key="list.id" :value="list.id">{{ list.name }}</option>                                                                               
              </select>
            </td>
            <td>
              <select v-model="datapost.status" id="status" name="status" class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <option disabled value="" selected>เลือกสถานะ</option>
                <option value="DAY">DAY</option>                                 
                <option value="NIGHT">NIGHT</option>                                 
              </select>
            </td>
            <td>
              <input type="number" class="w-14 bg-zinc-900 text-center rounded-md"  v-model="datapost.price">
            </td>
            <td>
              <input type="number" class="w-10 bg-zinc-900 rounded-md text-center" v-model="datapost.day">
            </td>
            <td>
              <input type="date" class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
            </td>
            <td><button class="bg-sky-500 w-20 h-7 rounded-sm mr-2 hover:bg-sky-300 shadow-md shadow-sky-800" @click="postData()">บันทึก</button></td>
          </tr>
        </tbody>       
      </table>
      
      <button @click="resetSelected()" class="bg-red-500 w-14 h-7 rounded-sm hover:bg-red-300 shadow-md shadow-red-800 m-3" >ล้างค่า</button>
    </div>
      
    </div>
</template>

<script >
import axios from "axios";
export default {   
    name: 'createData',     

    data() {
        return {
            selectedStatus: '',            
            daySet: 1,
            employee: [], //Get from api
            datapost: {
              id: '',
              status: '',
              price: 60,
              day: 1,
              date: ''
            },
            
        }
    }, 
    computed: {
        getPriceBySelectedStatus() {
            return (selectedStatus) => {
                const selectedStatusItem = this.listmenu.find((item) => item.name === selectedStatus);
                return selectedStatusItem ? selectedStatusItem.price : "";
      };   
    },
    },
    mounted() {
          this.getemployee();
    },
    methods: {
        async getemployee() {
            try {
              const response = await axios.get('http://localhost:8000/api/employee');
              this.employee = response.data.map((list) => ({
                ...list,
                selectedStatus: "",
              }))
            } catch (err) {
              console.error("Error to fetch API :", err);
            }
        },
        postData() {
          alert(`${this.datapost.id} ${this.datapost.status} ${this.datapost.price} ${this.datapost.day} ${this.datapost.date}`)
        },
        resetSelected() {
            window.location.reload();
        },
        
    }, 
      
               
}
</script>

<style scoped>

</style>