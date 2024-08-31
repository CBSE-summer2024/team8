<template>
    <div class="login-page">
      <UserLogin/>
    </div>
  </template>
  
  <script>
  import UserLogin from '@/components/Auth/UserLogin.vue';
  
  export default {
    name: 'LoginPage',
    components: {
      UserLogin
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f5f5f5;
  }
  </style>