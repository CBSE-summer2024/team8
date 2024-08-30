<template>
    <div class="registration-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <h5> Register new account </h5>
      <form @submit.prevent="register">
        <input-field
          v-model="firstName"
          type="text"
          placeholder=" Enter First Name"
          error-message="First name is required"
        />
        <input-field
          v-model="lastName"
          type="text"
          placeholder="Enter Last Name"
          error-message="Last name is required"
        />
        <input-field
          v-model="email"
          type="email"
          placeholder="Enter Email"
          error-message="Invalid email address"
        />
        <input-field
          v-model="password"
          type="password"
          placeholder="Enter Password"
          error-message="Password is required"
        />
        <StandardButton :disabled="!isFormValid" @click="register">Register</StandardButton>
      </form>
         <p>
        Already have an account?
        <router-link class="link" to="/">Log In </router-link>
      </p>
    </div>
  </template>
  
  <script>
  import InputField from '@/components/Shared/InputField.vue';
  import StandardButton from '@/components/Shared/StandardButton.vue';
  import { mapActions } from 'vuex';
  
  export default {
    components: {
      InputField,
      StandardButton
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      };
    },
    computed: {
      isFormValid() {
        return this.firstName && this.lastName && this.email && this.password;
      }
    },
    methods: {
      ...mapActions(['register']),
      register() {
        this.$store.dispatch('register', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/HomePage');
        })
        .catch(error => {
          console.error('Registration failed:', error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .registration-container {
    max-width: 400px;
    margin-bottom:70px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h5 {
    text-align: center;
    margin-bottom: 20px;
  }
  p{
   display: flex;
    justify-content: center; 
    align-items: center;
  }
  
  .link{
    font-size: 14px;
    color: #b3b3b3;
    text-decoration: none;
  }
  .logo {
     display: flex;
    justify-content: center;
    align-items: center;
    width: 200px; 
    height: auto; 
    margin: 20px auto;
  }
  </style>