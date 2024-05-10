<template>
  <div is="Messages" class=" flex pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]">
    <div class="messages w-[100%]">
      <div class="messages__item" v-for="chat in allUsers">
        <ChatRow :name="chat.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useUserStore } from '@/store/UserStore'

import AccountGroup from 'vue-material-design-icons/AccountGroup.vue'
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'

import ChatRow from '@/components/ChatRow.vue'
export default {
  components: { AccountGroup, DotsVertical, Magnify, ChatRow },
  computed: {
    ...mapState(useUserStore, ['allUsers']),
  },
}
</script>

<style lang="scss" scoped>

</style>