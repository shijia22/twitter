<template>
  <div class="user-likes-container d-flex justify-content-center">
    <ul class="user-like-list">
      <li v-for="like in likes" :key="like.id" class="like-item d-flex">
        <div class="user-avatar">
          <img class="avatar" :src="like.Tweet.User.avatar" />
        </div>
        <div class="user-like-main">
          <div class="user-info">
            <span class="user name">{{ like.Tweet.User.name }}</span>
            <router-link
              :to="`/users/${like.Tweet.User.id}`"
              class="user account"
              >{{ "@" + like.Tweet.User.account }}</router-link
            >
            <span class="seperater">•</span>
            <span class="user created-at">{{
              isToday(like.Tweet.createdAt)
                ? fromNow(utcOffset(like.Tweet.createdAt))
                : timeFormat(utcOffset(like.Tweet.createdAt), "MM月DD日")
            }}</span>
          </div>
          <router-link :to="`/tweets/${like.Tweet.id}`">
            <p class="like-content">
              {{ like.Tweet.description }}
            </p>
          </router-link>
          <div class="reply-likes d-flex align-items-center">
            <div
              class="reply-wrapper d-flex align-items-center cursor-pointer"
              @click="showtweetReplyModal(like)"
            >
              <!-- <router-link :to="`/tweets/${like.Tweet.id}`"> -->
              <img class="icon reply-icon" src="../assets/svg/reply.svg" />
              <!-- </router-link> -->
              <p class="counts reply-counts">{{ like.Tweet.replyCount }}</p>
            </div>
            <div class="like-wrapper d-flex align-items-center">
              <img
                class="icon isliked-icon"
                src="../assets/svg/like_fill.svg"
                @click.stop.prevent="unLike(like.Tweet.id)"
              />
              <p class="counts isliked-counts">{{ like.Tweet.likeCount }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <TweetReplyModal
      :tweet="modalData"
      v-if="Object.keys(modalData).length !== 0"
      @close="modalClose"
      @submit="replySubmit"
    />
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import userAPI from "./../apis/user";
import TweetReplyModal from "@/components/TweetReplyModal.vue";
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweets";

export default {
  mixins: [fromNowFilter],
  components: {
    TweetReplyModal,
  },
  data() {
    return {
      likes: [],
      modalData: {},
      isShowModal: false,
    };
  },
  created() {
    const { userid: userid } = this.$route.params;
    this.fetchLikes(userid);
  },
  beforeRouteUpdate(to, from, next) {
    const { userid } = to.params;
    this.fetchLikes(userid);
    next();
  },
  methods: {
    async fetchLikes(userid) {
      try {
        const { data } = await userAPI.getUserLikes({ userid });
        this.likes = data;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async unLike(tweetId) {
      try {
        const { data } = await tweetAPI.unlikeTweet({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功移除最愛",
        });
        this.likes = this.likes.filter((like) => like.Tweet.id !== tweetId);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法 加入/移除 最愛",
        });
      }
    },
    showtweetReplyModal(like) {
      this.modalData = {
        name: like.Tweet.User.name,
        account: like.Tweet.User.account,
        avatar: like.Tweet.User.avatar,
        createdAt: like.Tweet.createdAt,
        description: like.Tweet.description,
        id: like.TweetId,
      };
    },
    modalClose() {
      this.modalData = {};
    },
    replySubmit(formData) {
      console.log(formData);
      // ...api
      this.modalClose();
    },
  },
};
</script>

<style lang="scss" scoped>
.user-likes-container {
  width: 100%;
}
.user-like-list {
  width: 100%;
}
.like-item {
  padding: 10px 15px;
  border-bottom: 1px solid $popular-border;
}
.user-avatar {
  padding: 4px 10px 0 0;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}

.user-like-main {
  .user-info {
    span,
    a {
      display: inline-block;
      margin-bottom: 12px;
    }
    .name {
      font-size: 15px;
      font-weight: 700;
      margin-right: 8px;
    }
    .account,
    .seperater,
    .created-at {
      font-size: 15px;
      font-weight: 500;
      color: $input-placeholder;
    }
  }
  .like-content {
    max-width: 500px;
    word-wrap: break-word;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: $main-text;
  }
  .reply-likes {
    margin-top: 12px;
    .reply-wrapper {
      margin-right: 3em;
    }
    .reply-icon {
      width: 15px;
      height: 15px;
    }
    .isliked-icon {
      width: 24px;
      height: 24px;
    }
    .counts {
      font-weight: 500;
      font-size: 13px;
      line-height: 13px;
      color: $input-placeholder;
      margin-left: 1em;
    }
    .isliked-counts {
      color: $like-icon;
    }
  }
}
</style>
