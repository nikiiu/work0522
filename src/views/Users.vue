<template>
  <div>
    <div>用户列表</div>
    <ul>
      <li v-for="user in users" :key="(user, id)">
        {{ user.id }}:{{ user.username }}
      </li>
    </ul>
  </div>
  <div>
    用户id：<input type="text" v-model="uid" /><button @click="getUserById()">
      搜索
    </button>
  </div>
  <div v-if="user">
    id:{{ user.id }},name:{{ user.username }},sex:{{ user.sex }}
  </div>
</template>
<script setup>
import { getUsers } from "../http/users.js";
import { getUser } from "../http/users.js";
import { ref } from "vue";
const uid = ref(1);
const users = ref([]);
const user = ref();

function getUserById() {
  getUser({ id: uid.value }).then((res) => {
    if (res.status == 200) {
      user.value = res.data;
    }
  });
}

getUsers().then((res) => {
  if (res.status == 200) {
    users.value = res.data;
  }
});

getUserById();
</script>
