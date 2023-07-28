<template>
    <div class="sticky top-0">
        <!-- Logo -->
        <div class="max-lg:grid max-lg:justify-items-center ">          
            <button class="mb-5">
                <span class="brightness-125 antialiased animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-violet-500 to-red-700  text-5xl">HRWG</span>                      
            </button>
        </div>         
        <!-- User & Role -->
        <hr> 
        <div class="mt-3 mb-3 max-lg:hidden">
            <p class="mb-2">
                <span>Username : <span class="text-sky-300">Tle</span></span>   
            </p>
            <p class="mb-2">
                <span>Role : <span class="text-sky-300">CS</span></span>  
            </p>  
        </div>
        <hr>
        <!-- Menu -->
        <div class="mt-10 max-lg:grid max-lg:justify-items-center">
            <ul class="">
                <li class="mb-14 hover:text-2xl hover:text-sky-500">
                    <router-link to="/" class="">
                        <font-awesome-icon class="pr-3 " icon="fa-solid fa-house" size="xl" />                      
                        <span class="max-lg:hidden ml-3">หน้าหลัก</span>                                               
                    </router-link>
                </li>
                <li class="mb-14 hover:text-2xl hover:text-sky-500">
                    <router-link to="/adddata">
                        <font-awesome-icon class="pr-3" icon="fa-solid fa-circle-plus" size="xl" />
                        <span class="max-lg:hidden ml-3">ลงค่าอาหาร</span>                       
                    </router-link>
                </li>
                <li class="mb-14 hover:text-2xl hover:text-sky-500">
                    <router-link to="#">
                        <font-awesome-icon class="pr-3" icon="fa-solid fa-money-bill-transfer" size="xl" />
                        <span class="max-lg:hidden ml-1">ตั้งค่าการจ่าย</span>  
                    </router-link>
                </li>
                <li class="mb-14 hover:text-2xl hover:text-sky-500">
                    <router-link to="#">
                        <font-awesome-icon class="pr-3" icon="fa-solid fa-address-card" size="xl" />
                        <span class="max-lg:hidden ml-1.5">ตั้งค่าพนักงาน</span>  
                    </router-link>
                </li>
                <li class="mb-14 hover:text-2xl hover:text-sky-500">
                    <router-link to="#">
                        <font-awesome-icon class="pr-3" icon="fa-solid fa-right-to-bracket" size="xl" />
                        <span class="max-lg:hidden ml-2">ออกจากระบบ</span>  
                    </router-link>
                </li>
            </ul>
               
        </div>
        
        
        
    
        

    </div>
</template>

<script>
    export default {
    name: 'Navbar',    
    }
</script>

<style scoped>

</style>