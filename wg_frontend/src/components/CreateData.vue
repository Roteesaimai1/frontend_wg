<template>
  <div class="mt-5">
      <div class="bg-sky-500 text-center text-xl rounded-t-md h-10" >ลงค่าอาหาร</div>
      <div v-for="(employee, index) in selectedItems" :key="index" class="text-sky-500 bg-zinc-900">
          <label class="m-2" for="status">เลือกชื่อ :</label> 
          <select v-model="employee.employee_id" id="status" name="status" class="bg-zinc-950 rounded-md w-42 text-center m-2" required>               
              <option v-for="em in employees" :key="em.id" :value="em.id">{{ em.name }}</option>                             
          </select>
          <label class="m-2" for="status">เลือกกะ :</label>          
          <select v-model="employee.status" id="status" name="status" class="bg-zinc-950 rounded-md w-14 text-center m-2" required>               
              <option value="DAY">เช้า</option>
              <option value="NIGHT">ดึก</option>               
          </select>           
          <input v-model="employee.days" placeholder="Day" type="number" class="bg-zinc-950 w-14 text-center m-2 hidden" required>       
          <input v-model="employee.money" type="number" placeholder="Price" class="bg-zinc-950 w-14 text-center rounded-md m-2 hidden" required>
          <input v-model="employee.date_stamp" type="date" placeholder="Date" class="bg-zinc-900 m-2" required>                       
      </div>
      <div >
          <button @click="addRow" class="bg-green-500 p-1 rounded-md m-2">เพิ่มข้อมูล</button>
          <button @click="postFoodDat()" class="bg-sky-500 p-1 rounded-md">บันทึก</button>           
      </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      data() {
          return {
              selectedItems: [
                  { employee_id: null, status: null, days: 1, money: 60, date_stamp: null }
              ],
              employees: [],
          }
      },
      methods: {
      addRow() {
          const lastEmployee = this.selectedItems[this.selectedItems.length - 1];
          if (lastEmployee.employee_id && lastEmployee.status && lastEmployee.days && lastEmployee.money && lastEmployee.date_stamp) {
          this.selectedItems.push({ employee_id: null, status: null, days: 1, money: 60, date_stamp: null });
          }
      },
      async getEmployee() {
          try {
              const response = await axios.get('http://localhost:8000/api/employee')
              this.employees = response.data;            
              
          } catch (err) {
              console.error('Error to fetch API :', err)
          }
      },
      async postFoodDat() {
          try {
              this.selectedItems.forEach(async (item) => {
                  const response = await axios.post('http://localhost:8000/api/employeecreate', item)
                  console.log(response.data);
              })
              
          } catch (err) {
              console.error('Failed to save data (FrontEnd)', err);
              
          }
      },       
      },
      mounted() {
          this.getEmployee()
      },

  }
</script>

<style scoped>

</style>