<template>
  <div id="elderlies">
      <ul class="collection with-header">
          <li class="collection-header"><h4>Idosos</h4></li>
          <li class="collection-item" v-for="elderly in elderlies" v-bind:key="elderly._id">
            <div class="chip">{{elderly._id}}</div>
              {{elderly.name}}
              <router-link class="secondary-content" :to="{name:'look-elderly', params: {_id: elderly._id}}">
              <i class="fa fa-eye"></i>
              </router-link>
          </li>
      </ul>
      <div class="fixed-action-btn">
        <router-link v-bind:to="{ name: 'new-elderly'}" class="btn-floating btn-large green">
        <i class="fa fa-plus"></i>
      </router-link>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "elderlies",
  data() {
    return {
      elderlies: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/elderly")
      .then(response => {
        response.data.forEach(element => {
          this.elderlies.push(element);
        });
      })
      .catch(error => console.log(error));
  }
};
</script>