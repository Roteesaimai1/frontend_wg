<template>
    <div class="grid grid-cols-6  gap-3 text-center m-5">  
    <div class="col-start-2 col-span-4  text-sky-50 bg-zinc-900 rounded-md ">  
      <div class="text-xl text-zinc-50 bg-sky-500 rounded-t-md">เลือกวันที่
          <input type="date" class="bg-sky-500 text-sky-50 hover:text-zinc-950" />                              
      </div>
      
      <table class="table-auto w-full">
        <thead >
          <tr >
            <th class="bg-sky-500 h-14">ลำดับ</th>
            <th class="bg-sky-500  h-14">ชื่อ</th>
            <th class="bg-sky-500  h-14">สถานะ</th>
            <th class="bg-sky-500  h-14">ยอดเงิน</th>
            <th class="bg-sky-500  h-14">วัน</th>
            <th class="bg-sky-500  h-14"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="list in employee" :key="list.id" >
            <td>{{ list.id }}</td>
            <td>
              {{ list.name }} 
            </td>
            <td>
              <select class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" v-model="list.selectedStatus">
                <option disabled value="" selected>เลือกสถานะ</option>
                <option v-for="item in listmenu" :key="item.id" :value="item.name"> {{ item.name }}</option>                                 
              </select>
            </td>
            <td>{{ getPriceBySelectedStatus(list.selectedStatus) }}</td>
            <td>1</td>
            <td><button class="bg-sky-500 w-20 h-7 rounded-sm mr-2 hover:bg-sky-300 shadow-md shadow-sky-800">บันทึก</button></td>
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
            listmenu: [
                { id: 1, name: 'DAY', price: 60},
                { id: 2, name: 'NIGHT', price: 60},
                { id: 3, name: 'วันหยุด', price: 0},
                { id: 4, name: 'ลา', price: 0},
                { id: 5, name: 'ป่วย', price: 0},
                { id: 6, name: 'ไม่เลือก', price: 0}
            ],
            employee: [], //Get from api
             
            
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
        resetSelected() {
            window.location.reload();
        },
        
    }, 
      
               
}
</script>

<style scoped>

</style>