<template>
  <div class="grid grid-cols-3 m-5 gap-5">
    <div
      class="col-start-1 bg-zinc-800"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getItemsByList(1)"
        :key="item.id"
        class="drag-el text-sky-500 h-10 m-2"
        draggable="true"
        @dragstart="stratDrag($event, item)"
      >
        {{ item.title }}
        <hr>
      </div>
    </div>
    <div
      class="col-start-2 col-span-2 bg-green-50"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getItemsByList(2)"
        :key="item.id"
        class="drag-el text-sky-500 h-10 m-2"
        draggable="true"
        @dragstart="stratDrag($event, item)"
      >
        {{ item.title }}
        <input type="radio" />DAY
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
      employeelist: []
    }
  },
  computed: {},
  mounted() {
    this.getEmployee()
  },
  methods: {
    getItemsByList(listId) {              
                return this.employeelist.filter(item => item.list === listId) 
    },  
    stratDrag(event, item) {
      console.log(item)
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
        }));    
      } catch (err) {
        console.error('Error to fetch API :', err)
      }
    }
  }
}
</script>

<style scoped></style>
