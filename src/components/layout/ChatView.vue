<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
			<div class="BG"></div>
      <div class="border-l border-green-500 w-full">
        <div class="bg-[#F0F0F0] fixed z-10 min-w-[calc(100vw-420px)] flex justify-between items-center px-2 py-2">
          <div class="flex items-center">
            <img class="rounded-full mx-1 w-10" src="https://source.unsplash.com/random/200x200?sig=1" alt="">
            <div class="text-gray-900 ml-1">Mihailuch</div>
          </div>
          <DotsVertical fillColor="#515151" class="cursor-pointer"/>
        </div>
      </div>
    </div>
    <div class="w-[calc(100vw-420px)] p-2.5 z-10 bg-[#F0F0F0] fixed bottom-0">
      <div class="flex items-center justify-center">
        <EmoticonExcitedOutline :size="27" fillColor="#515151" class="mx-1.5"/>
        <PaperclipIcon :size="27" fillColor="#515151" class="mx-1.5"/>
        <input
          class="
            mr-1
            apperance-none
            w-full
            rounded-lg
            py-3
            px-4
            text-gray-700
            leading-tight
            focus:outline-none
            focus:shadow-outline
            plaseholder:text-sm
            placeholder:text-gray-500
          "
          placeholder="Write something"
          type="text"
          >
        <button class="ml-3 p-2">
          <Send/>
        </button>
      </div>
    </div>
    <div class=" fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center
      pt-20
      pb-8
      z-[-1]
      h-[calc(100vh-65px)]
      w-[calc(100vw-420px)]
      overflow-auto
      fixed
      touch-auto
      "
    >
      <div class="px-10 text-sm text-left">
        <div class="flex w-[calc(100%-100px)] max-w-[400px]">
          <div class="inline-block bg-white p-2 rounded-md my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi laboriosam error dolore facere impedit vero eos, est assumenda mollitia, ullam sit eaque, voluptatibus nemo consequatur unde placeat eius! Non.
          </div>
        </div>
        <div class="flex w-[calc(100%-100px)] space-x-1 float-right max-w-[400px]">
          <div class="inline-block bg-green-200 p-2 rounded-md my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi laboriosam error dolore facere impedit vero eos, est assumenda mollitia, ullam sit eaque, voluptatibus nemo consequatur unde placeat eius! Non.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue'
import EmoticonExcitedOutline from 'vue-material-design-icons/EmoticonExcitedOutline.vue'
import PaperclipIcon from 'vue-material-design-icons/Paperclip.vue'
import Send from 'vue-material-design-icons/Send.vue'
export default {
  components:{DotsVertical, PaperclipIcon,EmoticonExcitedOutline,Send}
}
</script>

<style scoped>
/* .BG{
	background: url('/message-bg.png') no-repeat center;
	width: 100%;
	height: 100%;
	z-index: -1;
	position: fixed;
} */
</style>