<script lang="ts" setup>
interface IForm {
  name: string;
  password: string;
}

const loginForm = reactive<IForm>({
  name: "admin",
  password: "123456",
});

const accountStore = useStore();

const login = () => {
  accountStore.dispatch("account/login", loginForm);
};
</script>

<template lang="pug">
div.layout
    el-form.login-form
        h1 登录
        el-form-item(prop="account")
            el-input(placeholder="请输入账号", v-model="loginForm.name")
        el-form-item(prop="password")
            el-input(placeholder="请输入密码", v-model="loginForm.password")
        el-form-item 
            ElButton(type="primary" @click="login") 登录
</template>

<style lang="sass" scoped>
.layout
    height: 100%
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    .login-form
        width: 300px
        padding: 20px
        border-radius: 10px
        border: 1px solid #eee
        h1
            margin-bottom: 20px
</style>
