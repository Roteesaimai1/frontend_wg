<template>
  <div class="grid grid-cols-3 m-5 gap-5 ">
    <div
      class="col-start-1 bg-zinc-800"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
    <div class="bg-sky-500 h-10 rounded-t-md">Name</div>
      <div
        v-for="item in getItemsByList(1)"
        :key="item.id"
        class="drag-el text-sky-500 h-10 m-2"
        draggable="true"
        @dragstart="stratDrag($event, item)"
      >
        {{ item.title }} -  {{ item.name }}
        <hr>
      </div>
    </div>
    <div
      class="col-start-2 col-span-2 bg-green-50 bg-zinc-900"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
    <!-- POST DATA -->
    <div class="bg-sky-500 h-10 rounded-t-md">DATE:
      <input type="date" class="bg-sky-500 text-sky-50 hover:text-zinc-950" v-model="selectedDate" />
    </div>   
      <div
        v-for="item in getItemsByList(2)"
        :key="item.id"
        class="drag-el text-sky-500 h-10 m-2"
        draggable="true"
        @dragstart="stratDrag($event, item)"
         
      >
        <input type="text">{{ item.title }} -  {{ item.name }}
        
        <select class="ml-3 border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" v-model="item.selectStatus">
            <option disabled value="" selected >เลือกสถานะ</option>
            <option v-for="status in statuslist" :key="status.id" :value="status.name" >{{ status.name }}</option>                                                                              
        </select>
        <span class="ml-5 text-sky-50" >เงินรับ: 
          <input type="number" class="w-10 bg-zinc-900 text-sky-500" v-model="dataCreate.price"> 
        </span>       
        <span class="ml-5 text-sky-50" >วันที่:
          <input class="bg-zinc-900 text-sky-500" type="date" v-model="dataCreate.date" >
        </span>       
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {     
      employeelist: [],
      statuslist: [     
          { id: 1, name: 'DAY', price: 60},
          { id: 2, name: 'NIGHT', price: 60},
          { id: 3, name: 'วันหยุด', price: 0},
          { id: 4, name: 'ลา', price: 0},
          { id: 5, name: 'ป่วย', price: 0},
          { id: 6, name: 'ไม่เลือก', price: 0}
      ],
      selectStatus: '',
      selectedDate: this.getTodayDate(),
      dataCreate: [{
        id: '',
        price: '',
        day: '',       
        date: '',
      }]
    }
  },
  computed: {
    getPriceBySelectedStatus() {
            return (selectStatus) => {
                const selectedStatusItem = this.statuslist.find((item) => item.name === selectStatus);
                return selectedStatusItem ? selectedStatusItem.price : "";
      };   
    },
  },
  mounted() {
    this.getEmployee()
  },
  methods: {
    getItemsByList(listId) {              
                return this.employeelist.filter(item => item.list === listId) 
    },  
    stratDrag(event, item) {
      
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    },
    onDrop(event, list) {
      const itemID = event.dataTransfer.getData('itemID')
      const item = this.employeelist.find((item) => item.id == itemID)
      if (item.list !== list) {
            item.list = list;
        }
    },
    onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    },
    async getEmployee() {
      try {
        const response = await axios.get('http://localhost:8000/api/employee')
        const employees = response.data;
        
        this.employeelist = employees.map((employee) => ({
            ...employee,
            list: 1,
            selectStatus: '',
        }));    
      } catch (err) {
        console.error('Error to fetch API :', err)
      }
    },
    getTodayDate() {
        const today = new Date();
        today.setHours(today.getHours() + 7);       
        return today.toISOString().slice(0, 10);
    },
  }
}
</script>

<style scoped></style>
