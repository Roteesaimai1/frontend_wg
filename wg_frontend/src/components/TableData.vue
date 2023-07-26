<template>
    <div>
        <table class="table-fixed">
            <thead>
            <tr>
                <th class="bg-sky-500 w-1/4 h-14 rounded-tl-md"><span class="">วันที่</span></th>
                <th class="bg-sky-500 w-1/4 h-14"><span class="">ชื่อ</span></th>
                <th class="bg-sky-500 w-1/4 h-14"><span class="">สถานะ</span></th>           
                <th class="bg-sky-500 w-1/4 h-14"><span class="">ยอดรับ</span></th>
                <th class="bg-sky-500 w-1/4 h-14 rounded-tr-md"><span class=""></span></th>
            </tr>
            </thead>
            <tbody>
            <tr class="" v-for="item in foodstamp.data" :key="item.id">
                <td>{{ item.date_stamp }}</td>
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
            foodstamp: [],
        }
    },
    methods: {
        getfoodstamp() {
            axios.get("http://localhost:8000/api/employee/fs")
            .then((response) => {
                this.foodstamp = response.data;
            })
            .catch((err) => {
                console.error("Failed to fetch API");
            })
        }
    },
    mounted() {
        this.getfoodstamp()
    }
    }
</script>

<style scoped>

</style>