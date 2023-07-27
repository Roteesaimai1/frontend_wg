<template>
    <div>
        <div class="text-xl text-zinc-50 bg-sky-500 rounded-t-md">เลือกวันที่
            <input type="date" class="bg-sky-500 text-sky-50 hover:text-zinc-950" v-model="selectedDate" @change="fetchDataByDate(selectedDate)" />                              
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
                <td>{{ item.title }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.money }}</td>
            </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
import axios from "axios";
    export default {
        
    name: 'tabledata',    
    
    data() {
        return {
            selectedDate: this.getTodayDate(),
            foodstamp: [],
        }
    },
    methods: {
        getTodayDate() {
            const today = new Date();
            return today.toISOString().slice(0, 10);
        },
        
        async fetchDataByDate(selectedDate) {
            try {
            const response = await axios.get(`http://localhost:8000/api/data/${selectedDate}`);
            this.foodstamp = response.data;
            } catch (err) {
            console.error("Failed to fetch API", err);
            }
        },   
        
        
       
    },
    mounted() {
        const nowDate = this.getTodayDate();
        this.fetchDataByDate(nowDate);
    },
    
    }
</script>

<style scoped>

</style>