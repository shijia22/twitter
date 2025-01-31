<template>
  <div id="popular">
    <span class="popular-title">Popular</span>
    <div class="popular-user-list" v-for="user in users" :key="user.id">
      <router-link :to="{ name: 'profile', params: { userid: user.id } }">
        <img :src="user.avatar" alt="userAvatar" />
      </router-link>
      <div class="popular-user-list-ceneter">
        <router-link :to="{ name: 'profile', params: { userid: user.id } }">
          <p class="user-name">{{ user.name }}</p>
        </router-link>
        <router-link :to="{ name: 'profile', params: { userid: user.id } }">
          <p class="user-account">{{ "@" + user.account }}</p>
        </router-link>
      </div>
      <button
        v-show="currentUser.id !== user.id"
        :class="['btn', user.isFollowed && 'btn-orange']"
        type="submit"
        @click.stop.prevent="deleteFollowed(user)"
      >
        {{ user.isFollowed ? "正在跟隨" : "跟隨" }}
      </button>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
import { mapState, mapActions } from "vuex";

export default {
  name: "Popular",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  computed: {
    ...mapState(["currentUser", "isPopularReload"])
  },
  watch: {
    isPopularReload() {
      if (this.isPopularReload) {
        this.handlePopularReload(false);
        this.fetchTopUsers()
      }
    },
  },
  methods: {
    ...mapActions(["fetchCurrentUser", "handleUserReload", "handlePopularReload"]),
    async fetchTopUsers() {
      try {
        const { data } = await userAPI.getTopUsers();
        this.users = data.topUsers;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得追蹤，請稍後再試",
        });
      }
    },
    async deleteFollowed(user) {
      const { id, isFollowed } = user;
      await this.handleFollow(isFollowed, id);
      this.users = this.users.map((user) => {
        if (user.id !== id) {
          return user;
        }
        return {
          ...user,
          // FollowedCount: user.FollowedCount - 1,
          isFollowed: user.isFollowed === 0 ? 1 : 0,
        };
      });
      // .sort((a, b) => b.FollowedCount - a.FollowedCount)
    },
    async handleFollow(isFollowed, id) {
      try {
        if (isFollowed) {
          let { data } = await userAPI.deleteFollowed({ id });

          if (data.status === "error") {
            throw new Error(data.message);
          }
        } else {
          let { data } = await userAPI.addFollowed({ id });

          if (data.status === "error") {
            throw new Error(data.message);
          }
        }
        this.handleUserReload(true);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#popular {
  width: 350px;
  margin-top: 0.938rem;
  border-radius: 14px;
  background-color: $popular-bg;
  padding-bottom: 0.688rem;
}
.popular-title {
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  padding: 0.625rem 0 0.563rem 0.938rem;
  border-bottom: 1px solid $popular-border;
}

.popular-user-list {
  padding: 0.625rem 0.938rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $popular-border;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
  .popular-user-list-ceneter {
    flex-grow: 1;
  }
  .btn {
    padding: 0.625rem 0.938rem;
    border: 1px solid $button-color;
    font-size: 15px;
    font-weight: 700;
    color: $button-color;
    border-radius: 100px;
    &:hover {
      color: $button-text;
      background-color: $button-color;
    }
  }
  .btn-orange {
    color: $button-text;
    background-color: $button-color;
  }
}

.user-name {
  font-size: 15px;
  font-weight: 700;
  color: $main-text;
}
.user-account {
  font-size: 15px;
  font-weight: 700;
  color: $input-placeholder;
}
</style>
