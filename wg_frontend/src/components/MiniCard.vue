<template>
    <div class="col-span-3 row-span-1  rounded-md shadow-lg shadow-zinc-950">
      <div class="text-xl text-zinc-50 rounded-t-md">เลือกวันที่
        <input type="date" class="bg-zinc-100 text-zinc-950 rounded-md hover:text-sky-500" v-model="selectedDate" @change="fetchDataByDate(selectedDate)" />
                             
      </div>
      <div class="grid grid-flow-row-dense grid-cols-4 gap-2 grid-rows-1">
        <!-- ยอดรวมวันนี้ -->
        <div class="col-span-1 row-span-1 bg-green-500 h-40 p-5 shadow-lg shadow-green-950 rounded-md flexd text-center">
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
          <div class="mt-5 text-2xl" v-for="item in totalMoney" :key="item.totalMonth" >           
            {{ item.total_money }}
          </div>
        </div>
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

      }
    },
    mounted() {
      const nowDate = this.getTodayDate();
      this.fetchDataByDate(nowDate);
    }, 
    methods: {
      getTodayDate() {
        const today = new Date();
        return today.toISOString().slice(0, 10);
      },
      
      async fetchDataByDate(selectedDate) {
        try {
          const response = await axios.get(`http://localhost:8000/api/minicard/${selectedDate}`);
          this.totalMoney = response.data;
        } catch (err) {
          console.error("Failed to fetch API", err);
        }
      },

      // ส่วนของ getTodayDate ที่ถูกแก้ไขให้เป็น async
      
      
    },
  }    
</script>

<style scoped>

</style>