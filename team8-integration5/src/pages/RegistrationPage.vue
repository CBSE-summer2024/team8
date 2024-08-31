<template>
  <div class="registration-page">
    <UserRegistration/>
  </div>
</template>

<script>
import UserRegistration from '@/components/Auth/UserRegistration.vue';

export default {
  components: {
    UserRegistration
  }
};
</script>

<style scoped>
.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}
</style>
