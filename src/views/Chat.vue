<template>
  <div class="chat">
    <div class="navbar">
      <NavBars />
    </div>
    <div class="chat-center">
      <NavTabs plainText="上線使用者" :account="onlineCount" />
      <div class="chat-center-online">
        <a class="online-user-block">
          <img
            src="https://loremflickr.com/240/240/?lock=53.96615135591365"
            alt="avatar"
          />
          <span class="user-name">假:NAME</span>
          <span class="user-account">假:@用戶名稱</span>
        </a>
      </div>
    </div>
    <div class="chat-right">
      <NavTabs plainText="公開聊天室" />
      <div class="chatroom">
        <div class="chat-content">
          <div class="msg-container">
            <div class="left-other">
              <div class="img-panel">
                <img
                  class="chat-avatar"
                  src="https://loremflickr.com/240/240/?random=82.34086245031686"
                  alt=""
                />
              </div>

              <div class="left-msg-panel">
                <p class="chat-msg">
                  left msgleft msgleft msgleft msgleft msgleft msgleft msgleft
                  msgleft msgleft msgleft msgleft msgleft msgleft msgleft
                  msgleft msgleft msgleft msgleft msgleft msg
                </p>
                <p class="chat-time">下午4:00</p>
              </div>
            </div>

            <div class="right-self">
              <div class="right-msg-panel">
                <p class="chat-msg">
                  right panelright panelright panelright panelright panelright
                  panelright panelright panelright panelright panelright
                  panelright panelright panelright panelright panelright
                  panelright panel
                </p>
                <p class="chat-time">下午6:08</p>
              </div>
            </div>

            <div class="center-info">
              <p class="chat-notif">Ralph Edward 離線</p>
            </div>
            <!-- <div>{{ typing?'有人輸入中...':'' }}</div> -->
          </div>
        </div>
      </div>
      <!-- 聊天室輸入框 -->
      <div class="chat-input">
        <div class="input-group">
          <input v-model="message"
              type="text"
              class="form-control"
              placeholder="輸入訊息..."
              @keyup.enter="sendMessage"/>
          <div class="input-group-append">
            <button @click.stop.prevent="sendMessage"
                class="btn-submit"
                type="submit">
              <img src="@/assets/svg/send.svg" alt="home icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBars from "@/components/NavBars.vue";
import NavTabs from "@/components/NavTabs.vue";
import { mapState } from "vuex";
//stocket io
import Vue from "vue";
import store from "../store";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
const token = localStorage.getItem("token");
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("http://3101-150-117-52-218.ngrok.io", {
      reconnectionDelayMax: 10000,
      auth: {
        token: token,
      },
      query: {
        "my-key": "my-value",
      },
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);
export default {
  name: "Chat",
  components: {
    NavBars,
    NavTabs,
  },
  data() {
    return {
      onlineCount: 5,
      users: {
        name: "",
        account: "",
        avatar: "",
      },
      chatTime: "",
      message: "",
      records: [],
    };
  },
  mounted() {
    this.$socket.on("allRecords", (obj) => {
      console.log("received all records");
      this.records = obj;
    });
    this.$socket.on("newMessage", (obj) => {
      console.log("received new message");
      this.records.push(obj);
    });
  },
  socket: {
    connect() {
      console.log("socket connected");
    },
  },
  methods: {
    sendMessage() {
      if (this.message === "") {
        return;
      }
      console.log('send new message');
      this.$socket.emit("message", this.message);
      this.message = "";
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  display: flex;
  // max-width: 1245px;
}
.navbar {
  margin-left: 6.438rem;
}

// 上線人數
.chat-center {
  margin-left: 2.5rem;
  width: 390px;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
}

.online-user-block {
  width: 100%;
  padding: 0.625rem 0 0.938rem 0.938rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $popular-border;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
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
}

// 聊天室
.chat-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // height: 100vh;
}

.chatroom {
  // display: flex;
  // flex-direction: column;
  // height: 100vh;
  // flex-basis: 0;
}

.chat-content {
  // flex-grow: 1;
  // display: flex;
  // flex-direction: column;
  // justify-content: end;
  padding: 1.5em 0;
  height: 100%;
  // height: 1092px;
}

.chat-input {
  margin-top: auto;
  // flex-basis: 55px;
}

.msg-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.chat-time {
  font-size: 13px;
  font-weight: 400;
  color: #657786;
}

.left-other {
  display: flex;
  margin-bottom: 1em;
  .img-panel {
    display: flex;
    flex-direction: column-reverse;
    .chat-avatar {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 10px 20px 10px;
    }
  }
  .left-msg-panel {
    max-width: 365px;
    .chat-msg {
      font-size: 15px;
      font-weight: 400;
      background-color: #e6ecf0;
      border-radius: 25px 25px 25px 0;
      padding: 10px 15px 15px 15px;
    }
  }
}

.right-self {
  display: flex;
  justify-content: end;
  margin-bottom: 1em;
  .right-msg-panel {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-right: 10px;
    .chat-msg {
      font-size: 15px;
      font-weight: 400;
      background-color: $button-color;
      color: $body-bg;
      border-radius: 25px 25px 0 25px;
      padding: 10px 15px 15px 15px;
    }
  }
}

.center-info {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  .chat-notif {
    background-color: #e5e5e5;
    color: #657786;
    font-size: 15px;
    font-weight: 500;
    padding: 7px 14px;
    border-radius: 50px;
  }
}

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
