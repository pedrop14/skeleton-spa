<template>
  <div class="caregivers">
      <ul class="collection with-header">
          <li class="collection-header"><h4>Cuidadores</h4></li>
          <li class="collection-item" v-for="caregiver in caregivers" v-bind:key="caregiver.id">
              {{caregiver.name}}
              <router-link class="secondary-content" :to="{name:'look-caregiver', params: {_id: caregiver._id}}">
              <i class="fa fa-eye"></i>
              </router-link>
          </li>
      </ul>
      <div class="fixed-action-btn">
        <router-link v-bind:to="{ name: 'new-caregiver'}" class="btn-floating btn-large green">
        <i class="fa fa-plus"></i>
      </router-link>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "caregivers",
  data() {
    return {
      caregivers: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/caregiver")
      .then(response => {
        response.data.forEach(element => {
          this.caregivers.push(element)
        });
      })
      .catch(error => console.log(error));
  }
};
</script>
