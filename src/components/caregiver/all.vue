<template>
  <div class="caregivers">
      <ul class="collection with-header">
          <li class="collection-header"><h4>Cuidadores</h4></li>
          <li class="collection-item" v-for="caregiver in caregivers" v-bind:key="caregiver.id">
              {{caregiver.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "caregivers",
  data() {
    return {
      caregivers: [
        {
          name: "Pedro"
        },
        {
            name: "João"
        }
      ]
    };
  },
  mounted() {
    axios
      .get("https://localhost:3000/caregiver")
      .then(response => {
        response.data.array.forEach(element => {
          this.caregivers.push(element);
        });
      })
      .catch(error => console.log(error));
  }
};
</script>
