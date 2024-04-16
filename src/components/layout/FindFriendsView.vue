<template>
  <div is="FindFriends" class="pt-[100px] pt-1 overflow-auto fixed h-100vh w-full">
    <div class="flex w-full p-4 items-center cursor-pointer hover:bg-gray-100 transition-all">
      <img class="rounded-full ml-1 w-10 mr-3" src="https://source.unsplash.com/random/200x200?sig=1" alt="">
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">Mihailuch</div>
        </div>
        <div class="flex items-center mt-2">
          <CheckAll :size="18" class="mr-1"/>
          <div class="text-[15px] text-gray-500">
            Hi, i am using Wazzapp
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue'
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'

import TheMessageRow from '@/components/TheMessageRow.vue'
export default {
  components:{AccountGroup, DotsVertical, Magnify, TheMessageRow}
}
</script>

<style lang="scss" scoped>

</style>