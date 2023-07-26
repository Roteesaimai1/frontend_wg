<template>
    <div class="col-span-3 row-span-1  rounded-md shadow-lg shadow-zinc-950">
      <div class="grid grid-flow-row-dense grid-cols-4 gap-2 grid-rows-1">
        <!-- ยอดรวมวันนี้ -->
        <div class="col-span-1 row-span-1 bg-green-500 h-40 p-5 shadow-lg shadow-green-950 rounded-md flexd text-center">
          <div class="mb-2">
            <span class="font-bold text-2xl ">ยอดรวมวันนี้</span>
          </div>
          <hr>
          <div class="mt-5 text-2xl">
            180 บาท
          </div>
        </div>
        <!-- รับสูงสุด -->
        <div class="col-span-1 row-span-1 bg-red-500 h-40 p-5 shadow-lg shadow-red-950 rounded-md flexd text-center">
          <div class="mb-2">
            <span class="font-bold text-2xl ">รับสูงสุด</span>
          </div>
          <hr>
          <div class="mt-5 text-2xl">
            <span>แบงค์</span>
            60 บาท
          </div>
        </div>
        <!-- รับน้อยสุด -->
        <div class="col-span-1 row-span-1 bg-yellow-500 h-40 p-5 shadow-lg shadow-yellow-950 rounded-md flexd text-center">
          <div class="mb-2">
            <span class="font-bold text-2xl ">รับน้อยสุด</span>
          </div>
          <hr>
          <div class="mt-5 text-2xl">
            <span>เติ้ล</span>
            60 บาท
          </div>
        </div>
        <!-- ยอดรวมทั้งเดือน -->
        <div class="col-span-1 row-span-1 bg-sky-500 h-40 p-5 shadow-lg shadow-sky-950 rounded-md flexd text-center">
          <div class="mb-2">
            <span class="font-bold text-2xl ">ยอดรวมทั้งเดือน</span>
          </div>
          <hr>
          <div class="mt-5 text-2xl">           
            180 บาท
          </div>
        </div>
      </div>    
    </div>
</template>

<script>
    export default {
    name: 'minicard',    
    }
</script>

<style scoped>

</style>