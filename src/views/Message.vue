<template>
  <div class="msg">
    <div class="navbar">
      <NavBars />
    </div>
    <div class="msg-center">
      <NavTabs plainText="訊息" :isMsg="true" />
      <a class="msg-user-block">
        <img src="https://i.imgur.com/bwr85EN.png" alt="avatar" />
        <div class="user-detail w-100">
          <div class="d-flex justify-content-between">
            <div>
              <span class="user-name">:NAME</span>
              <span class="user-account">:@用戶名稱</span>
            </div>
            <span class="msg-time">日期</span>
          </div>
          <div class="content">Nulla Lorem mollit cupidatat irure....</div>
          <!-- <div class="content">{{ stringLimit(description) }}</div> -->
        </div>
      </a>
    </div>
    <div class="msg-right">
      <NavTabs plainText="預留人名" />
      <div class="msg-room scrollbar">
        <div class="msg-content">
          <div class="client">
            <div class="right-msg-panel">
              <img
                class="chat-avatar"
                src="https://loremflickr.com/240/240/?random=82.34086245031686"
                alt=""
              />
            </div>
            <div class="left-msg-panel">
              <p class="chat-msg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
              <p class="chat-time">下午4:00</p>
            </div>
          </div>
          <div class="self">
            <div class="right-msg-panel">
              <p class="chat-msg">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum.
              </p>
              <p class="chat-time">下午6:08</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 訊息輸入框 -->
      <div class="chat-input">
        <div class="input-group">
          <!-- <input
            v-model="message"
            type="text"
            class="form-control"
            placeholder="輸入訊息..."
            @keyup.enter="sendMessage"
          /> -->
          <input type="text" class="form-control" placeholder="輸入訊息..." />
          <div class="input-group-append">
            <!-- <button
              @click.stop.prevent="sendMessage"
              class="btn-submit"
              type="submit"
            > -->
            <button class="btn-submit" type="submit">
              <img src="@/assets/svg/send.svg" alt="send icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBars from '@/components/NavBars.vue'
import NavTabs from '@/components/NavTabs.vue'
import { mapState } from 'vuex'
//stocket io
import Vue from 'vue'
import store from '../store'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
const token = localStorage.getItem('token')
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: SocketIO("http://3101-150-117-52-218.ngrok.io", {
//       reconnectionDelayMax: 10000,
//       auth: {
//         token: token,
//       },
//       query: {
//         'my-key': 'my-value',
//       },
//     }),
//     vuex: {
//       store,
//       actionPrefix: "SOCKET_",
//       mutationPrefix: "SOCKET_",
//     },
//   })
// );
export default {
  name: 'Messenge',
  components: {
    NavBars,
    NavTabs,
  },
  data() {
    return {
      // onlineCount: 5,
      // users: {
      //   name: "",
      //   account: "",
      //   avatar: "",
      // },
      // chatTime: "",
      // message: "",
      // records: [],
    }
  },
  // mounted() {
  //   this.$socket.on("allRecords", (obj) => {
  //     console.log("received all records");
  //     this.records = obj;
  //   });
  //   this.$socket.on("newMessage", (obj) => {
  //     console.log("received new message");
  //     this.records.push(obj);
  //   });
  // },
  // socket: {
  //   connect() {
  //     console.log("socket connected");
  //   },
  // },
  methods: {
    stringLimit(description) {
      return description.length > 31
        ? description.slice(0, 31) + '...'
        : description
    },
    // sendMessage() {
    //   if (this.message === "") {
    //     return;
    //   }
    //   console.log('send new message');
    //   this.$socket.emit("message", this.message);
    //   this.message = "";
    // },
  },
  // computed: {
  //   ...mapState(["currentUser"]),
  // },
}
</script>

<style lang="scss" scoped>
.msg {
  width: 100%;
  display: flex;
}
.navbar {
  margin-left: 6.438rem;
}

// 訊息匣
.msg-center {
  margin-left: 2.5rem;
  width: 390px;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
}

.msg-user-block {
  width: 100%;
  padding: 0.625rem 0.938rem 0.938rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $popular-border;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
  &:hover,
  &:active {
    border-right: 2px solid $button-color;
  }
}

.user-detail {
  .user-name {
    font-size: 15px;
    font-weight: 700;
    color: $main-text;
    margin-right: 0.313rem;
  }
  .user-account {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
  }
  .msg-time {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
  }
}

// 訊息框
.msg-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
}

// 訊息中間區
.msg-room {
  margin-top: auto;
  padding: 2.5rem 0.938rem 0 0.938rem;
  overflow-y: scroll;
}

.msg-content {
  height: 100%;
}

// 別人傳來
.client {
  display: flex;
  margin-bottom: 1em;
}
.right-msg-panel {
  display: flex;
  align-items: flex-end;
  .chat-avatar {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 0.625rem;
  }
}
.left-msg-panel {
  .chat-msg {
    max-width: 365px;
    font-size: 15px;
    font-weight: 400;
    background-color: #e6ecf0;
    border-radius: 25px 25px 25px 0;
    padding: 0.625rem 0.938rem;
  }
}
// 自己的
.self {
  display: flex;
  justify-content: end;
  margin-bottom: 1em;
  .right-msg-panel {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: end;
    .chat-msg {
      font-size: 15px;
      font-weight: 400;
      background-color: $button-color;
      color: $body-bg;
      border-radius: 25px 25px 0 25px;
      padding: 0.625rem 0.938rem;
    }
  }
}

.chat-time {
  font-size: 13px;
  font-weight: 400;
  color: $input-placeholder;
}

// 輸入框
.input-group {
  height: 55px;
  display: flex;
  align-items: center;
  padding: 12px 5px 12px 15px;
  border-top: 1px solid $popular-border;
}

input {
  flex: 1;
  height: 32px;
  padding: 8px 15px;
  border-radius: 50px;
  background-color: #e6ecf0;
  &::placeholder {
    color: $main-text;
    opacity: 40%;
  }
}
</style>
