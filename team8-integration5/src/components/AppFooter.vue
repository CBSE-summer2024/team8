<template>
  <footer class="app-footer">
    <p>&copy; 2024 Mart.ps.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped lang="scss">
.app-footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: fixed;
  width: 100%;
  bottom: 0;
  
  p {
    margin: 0;
  }
}
</style>
