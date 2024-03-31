<template>
  <div is="Messages" class=" flex pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]">
    <TheMessageRow/>
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