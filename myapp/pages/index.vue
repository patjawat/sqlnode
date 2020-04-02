<template>
  <div class="container">
    <h1>Hello</h1>

    <div class="container">
      <h2>Stacked form</h2>
      {{JSON.stringify(form)}}
      <form action="/action_page.php">
        <div class="form-group">
          <label for="email">User:</label>
          <input
            type="email"
            class="form-control"
            id="user"
            placeholder="Enter Username"
            v-model="form.username"
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            v-model="form.email"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            v-model="form.password"
          />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" /> Remember me
          </label>
        </div>
        <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
        <a href="#" @click="saveAction()" class="btn btn-primary">Save</a>
      </form>
    </div>

        <ul>
      <li v-for="product in items">{{ product.username }}</li>
    </ul>

  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
export default {
  data() {
    return {
      items: [],
      form: {}
    };
  },
  mounted() {
   this.loadUser()
  },
  methods: {
    save(){
      alert('Save');
    },
    loadUser(){
 this.$apollo
      .query({
        query: require("../gql/query/users").users
      })
      .then(res => {
        console.log(res.data.allUser);
        this.items = res.data.allUser;
      });
    },
    clearForm(){
      this.form = {}
    },
    saveAction() {
      this.$apollo.mutate({
        mutation:require("../gql/mutation/users").register,
        variables:{
          username:this.form.username,
          email:this.form.email,
          password:this.form.password
        }
      }).then(res =>{
        console.log(res.data.signup)
        this.items.push(res.data.signup)
        this.clearForm()
      }).catch(err =>{
        console.log(err)
      });
    },

  },
  components: {
    Logo
  }
};
</script>

