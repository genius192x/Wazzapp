<template>
  <div class="w-full">
    <div class="flex w-full px-4 py-3 items-center cursor-pointer hover:bg-gray-100 transition-all">
      <img class="rounded-full ml-1 w-10 mr-3" src="https://source.unsplash.com/random/200x200?sig=1" alt="">
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">
            Mihailuch
          </div>
          <div class="text-[12px] text-gray-600">
            Date
          </div>
        </div>
        <div class="flex items-center mt-2">
          <CheckAll :size="18" class="mr-1"/>
          <div class="text-[15px] text-gray-500 w-full items-center flex justify-between">
            This is message
          </div>
        </div>
      </div>
    </div>
    <div class="border-b w-[calc(100%-70px)] float-right"></div>
  </div>
</template>

<script>
import CheckAll from 'vue-material-design-icons/CheckAll.vue'
export default {
  components:{CheckAll}
}
</script>

<style lang="scss" scoped>

</style>