<template>
  <div class="grid grid-flow-row-dense grid-cols-3 gap-2 grid-rows-4 mr-5 min-h-full">
    <div class="col-span-3 row-span-1  rounded-md shadow-lg shadow-zinc-950">
      <div class="text-xl text-zinc-50 rounded-t-md">เลือกวันที่
        <input type="date" class="bg-zinc-100 text-zinc-950 rounded-md hover:text-sky-500" v-model="selectedDate" @change="fetchDataByDate(selectedDate)" />
                             
      </div>
      <div class="grid grid-flow-row-dense grid-cols-4 gap-2 grid-rows-1">
        <!-- ยอดรวมวันนี้ -->
        <div class="col-span-1 row-span-1 bg-green-500  h-40 p-5 shadow-lg shadow-green-950 rounded-md flexd text-center">
          <div class="mb-2">
            <span class="font-bold text-2xl ">ยอดรวมวันนี้</span>
          </div>
          <hr>
          <div class="mt-5 text-2xl" v-for="item in totalMoney" :key="item.resultByDate" >
             {{ item.total_date_money }}
          </div>
        </div>
        <!-- รับสูงสุด -->
        <div class="col-span-1 row-span-1 bg-red-500 h-40 p-5 shadow-lg shadow-red-950 rounded-md flexd text-center">
          <div class="mb-2" >
            <span class="font-bold text-2xl ">รับสูงสุด</span>
          </div>
          <hr>
          <div class="mt-5 text-2xl" v-for="item in totalMoney" :key="item.maxRuslts">
           {{ item.max_money }} 
            
          </div>
        </div>
        <!-- รับน้อยสุด -->
        <div class="col-span-1 row-span-1 bg-yellow-500 h-40 p-5 shadow-lg shadow-yellow-950 rounded-md flexd text-center">
          <div class="mb-2">
            <span class="font-bold text-2xl ">รับน้อยสุด</span>
          </div>
          <hr>
          <div class="mt-5 text-2xl" v-for="item in totalMoney" :key="item.minRuslts">
           {{ item.min_money }} 
            
          </div>
        </div>
        <!-- ยอดรวมทั้งเดือน -->
        <div class="col-span-1 row-span-1 bg-fuchsia-500 h-40 p-5 shadow-lg shadow-fuchsia-950 rounded-md flexd text-center">
          <div class="mb-2">
            <span class="font-bold text-2xl ">ยอดรวมทั้งเดือน</span>
          </div>
          <hr>
          <div class="mt-5 text-2xl" v-for="item in totalMonth" :key="item.totalMonth" >           
            {{ item.total_money }}
          </div>
        </div>
      </div>    
    </div>

    <div class="col-span-1 start-col-1 row-span-3 bg-zinc-900 rounded-t-md shadow-lg shadow-zinc-950 text-center" >
      <div class="text-xl text-zinc-50 bg-sky-500 rounded-t-md">
            <span>สรุปประจำเดือน</span>            
            <select v-model="selectMonth" @change="fetchDataByMonth" id="status" name="status" class="bg-zinc-950 rounded-md w-42 text-center m-2" required>               
              <option value="1">มกราคม</option>                             
              <option value="2">กุมภาพันธิ์</option>                             
              <option value="3">มีนาคม</option>                             
              <option value="4">เมษายน</option>                             
              <option value="5">พฤษภาคม</option>                             
              <option value="6">มิถุนายม</option>                             
              <option value="7">กรกฏาคม</option>                             
              <option value="8">สิงหาคม</option>                             
              <option value="9">กันยายน</option>                             
              <option value="10">ตุลาคม</option>                             
              <option value="11">พฤจิกายน</option>                             
              <option value="12">ธันวาคม</option>                             
            </select>                                                                     
        </div>
        <table class="table-fixed ">
        <thead>
          <tr >
            <th class="bg-sky-500 w-1/4 h-14 "><span class="">ลำดับ</span></th>
            <th class="bg-sky-500 w-1/4 h-14"><span class="">ชื่อ</span></th>
            <th class="bg-sky-500 w-1/4 h-14"><span class="">วัน</span></th>           
            <th class="bg-sky-500 w-1/4 h-14"><span class="">ยอดรวม</span></th>
            <th class="bg-sky-500 w-1/4 h-14 "><span class=""></span></th>
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
               <span class="">{{ items.total_days }}</span>
            </td>
            <td>
               <span class="">{{ items.total_amount }}</span>
            </td>
            <td>
               <span class=""><button><font-awesome-icon class="pr-3 text-yellow-300" icon="fa-solid fa-circle-info"  /></button></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      <div class="col-span-2 start-col-2 row-span-3 bg-zinc-900 rounded-md shadow-lg shadow-zinc-950 text-center">
        <div class="text-xl text-zinc-50 bg-sky-500 rounded-t-md h-12">
            <span>สรุปประจำวัน</span>                              
        </div>
        <table class="table-fixed">
            <thead>
            <tr>
                <th class="bg-sky-500 w-1/4 h-14 "><span class="">วันที่</span></th>
                <th class="bg-sky-500 w-1/4 h-14"><span class="">ชื่อ</span></th>
                <th class="bg-sky-500 w-1/4 h-14"><span class="">สถานะ</span></th>           
                <th class="bg-sky-500 w-1/4 h-14"><span class="">ยอดรับ</span></th>
                <th class="bg-sky-500 w-1/4 h-14 "><span class=""></span></th>
            </tr>
            </thead>
            <tbody>
            <tr class="" v-for="item in foodstamp" :key="item.id">
                <td>{{ item.date_only }}</td>
                <td>{{ item.name }} - <span class="text-sky-500">{{ item.title }}</span></td>
                <td>{{ item.status }}</td>
                <td>{{ item.money }}</td>
            </tr>
            </tbody>
        </table>
      </div>


    </div>

    
</template>

<script>
import axios from "axios";
    export default {
    name: 'minicard', 
    data() {
      return {       
        selectedDate: this.getTodayDate(),        
        totalMoney: [],
        employeelist: [],       
        foodstamp: [],
        currentMonth: "",
        selectMonth: 8,
        totalMonth: [],
      }
    },
    mounted() {
      const nowDate = this.getTodayDate();
      this.fetchDataByDate(nowDate);     
      this.getemployee(this.selectMonth);
       
    }, 
    methods: {
      getTodayDate() {
        const today = new Date();
        today.setHours(today.getHours() + 7);       
        return today.toISOString().slice(0, 10);
      },     
      async fetchDataByDate(selectedDate) {
        try {
          const response = await axios.get(`http://localhost:8000/api/minicard/${selectedDate}`);
          this.totalMoney = response.data;
          const response2 = await axios.get(`http://localhost:8000/api/data/${selectedDate}`);
          this.foodstamp = response2.data;         
        } catch (err) {
          console.error("Failed to fetch API", err);
        }
      },
      async getemployee(selectMonth) {
        try {
          const response = await axios.get(`http://localhost:8000/api/employee/${selectMonth}`);
          this.employeelist = response.data;
          const response2 = await axios.get(`http://localhost:8000/api/employeetotal/${selectMonth}`);
          this.totalMonth = response2.data;
        } catch (err) {
          console.error("Failed to fetch API", err);
        }
      },
      fetchDataByMonth() {       
        this.getemployee(this.selectMonth);
      },
    },
  }    
</script>

<style scoped>

</style>