<template>
    <div class="col-start-2 col-span-4 text-sky-50 bg-zinc-900 rounded-md ">
      <div class="text-xl text-zinc-50 bg-sky-500 rounded-t-md">เลือกวันที่
          <input type="date" class="bg-sky-500 text-sky-50 hover:text-zinc-950" />                              
      </div>
      <table class="table-fixed">
        <thead >
          <tr >
            <th class="bg-sky-500 w-1/4 h-14">ชื่อ</th>
            <th class="bg-sky-500 w-1/4 h-14">สถานะ</th>
            <th class="bg-sky-500 w-1/4 h-14">ยอดเงิน</th>
            <th class="bg-sky-500 w-1/4 h-14">วัน</th>
            <th class="bg-sky-500 w-1/4 h-14"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tle</td>
            <td>
              <select class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" v-model="selectedStatus">
                <option disabled value="" selected>เลือกสถานะ</option>
                <option v-for="item in listmenu" :key="item.id" :value="item.name"> {{ item.name }}</option>                                 
              </select>
            </td>
            <td>{{ getPriceBySelectedStatus }}</td>
            <td>1</td>
            <td></td>
          </tr>
        </tbody>       
      </table>
      <button class="bg-sky-500 w-10 rounded-sm">ส่ง</button>
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
                { id: 5, name: 'ป่วย', price: 0}
            ],
        }
    }, 
    computed: {
        getPriceBySelectedStatus() {
            const selectedStatusItem = this.listmenu.find(item => item.name === this.selectedStatus);
            return selectedStatusItem ? selectedStatusItem.price : '';
        }   
    } 
      
        
        
}
</script>

<style scoped>

</style>