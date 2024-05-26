<template>
    <div class="pt-1 overflow-auto fixed h-100vh w-[420px]">
        <div class="flex w-full p-4 items-center cursor-pointer hover:bg-gray-100 transition-all">
            <img class="rounded-full ml-1 w-10 mr-3" src="https://source.unsplash.com/random/200x200?sig=1" alt="">
            <div class="w-full" @click="createNewChat">
                <div class="flex justify-between items-center">
                    <div class="text-[15px] text-gray-600">Mihailuch</div>
                </div>
                <div class="flex items-center mt-2">
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

// import TheMessageRow from '@/components/TheMessageRow.vue'

import { mapState, mapActions } from 'pinia'
import { useUserStore } from '@/store/UserStore'
export default {
    components: { AccountGroup, DotsVertical, Magnify },
    computed: {
        ...mapState(useUserStore, ['user']),
    },
    methods: {
        // ...mapActions(useUserStore, { logOut: 'logOut' }),
        createNewChat(chat) {
            console.log('testr');
            this.userChatData.value = [];
            this.userChatData.value.push({
                id: '',
                sub1: this.user.uid,
                sub2: chat.uid,
                fisrtName: this.user.displayName
            })
            console.log(this.userChatData.value);
        }
    }
}
</script>

<style lang="scss" scoped></style>