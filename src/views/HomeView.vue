<template>
  <div class="flex ">
    <header class="fixed w-[420px] z-10">
      <div class="bg-[#F0F0F0] w-full flex justify-between items-center px-3 py-2">
        <img class="rounded-full ml-1 w-10" src="https://source.unsplash.com/random/200x200?sig=1" alt="">
        <div class="flex items-center justify-center">
          <AccountGroup fillColor="#515151" class="mr-6"/>
          <DotsVertical fillColor="#515151" class=" cursor-pointer"/>
        </div>
      </div>
      <div id="search" class="bg-white w-full px-2 border-b shadow-sm">
        <div class="px-1 m-2 bg-[#F0F0F0] flex justify-between items-center rounded-md">
          <Magnify fillColor="#515151" :size="20" class="ml-2"/>
          <input
            class="
              ml-5
              apperance-none
              w-full
              bg-[#F0F0F0]
              py-1.5
              px-1.5
              text-gray-700
              leading-tight
              focus:outline-none
              focus:shadow-outline
              plaseholder:text-sm
              placeholder:text-gray-500
            "
            placeholder="Start new chat"
            type="text">
        </div>
      </div>
    </header>
	<div v-if="!showFindFriends">
		<ChatsView class="mt-[100px]"/>
	</div>
	<div v-else>
		<FindFriendsView class="mt-[100px]"/>
	</div>
    <div v-if="open" class="">
      <ChatView/>
    </div>
    <div v-else>
      <div class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center">
        <div class="grid h-screen place-items-center">
          <div>
        		<img class="" src="/w-web-not-loaded-chat.png" alt="">
            <div class="text-[32px] text-gray-500 font-light">WhatsApp Web</div>
            <div class="text-[14px] text-gray-600">clone :-)</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ChatView from '@/components/layout/ChatView.vue'
import ChatsView from '@/components/layout/ChatsView.vue'
import FindFriendsView from '@/components/layout/ChatsView.vue'
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue'
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'

export default {
  data() {
    return {
      open:true,
	  showFindFriends: false
    }
  },
  components:{AccountGroup, DotsVertical, Magnify, ChatsView, ChatView}
}
</script>

<style lang="scss" scoped>

</style>