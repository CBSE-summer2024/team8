<template>
  <header class="app-header">
    <nav>
      <ul>
        <li><router-link to="/">Login</router-link></li>
         <li><router-link to="/RegistrationPage">Register</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped lang="scss">
.app-header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  
  nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    
    li {
      margin: 0 15px;
      
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
