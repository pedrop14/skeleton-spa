<template>
  <div class="visits">
      <div class="row">
          <h4>Visitas</h4>
        <table class="highlight">
            <thead>
            <tr>
                <th>Idoso</th>
                <th>Visitante</th>
                <th>CPF</th>
                <th>Data</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="visit in visits" v-bind:key="visit._id">
                <td>{{visit.elderly_name}}</td>
                <td>{{visit.visitant_name}}</td>
                <td>{{visit.cpf}}</td>
                <td>{{visit.date_visit}}</td>
            </tr>
            </tbody>
      </table>
      </div>
      <div class="fixed-action-btn">
        <router-link v-bind:to="{ name: 'new-visit'}" class="btn-floating btn-large green lighten-1">
        <i class="fa fa-pencil-alt"></i>
      </router-link>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'visits',
  data (){
      return {
          visits : []
      }
  },
  created() {
      axios
      .get("http://localhost:3000/visit")
      .then(response => {
        response.data.forEach(element => {
          this.visits.push(element);
        });
      })
      .catch(error => console.log(error));
  }
}
</script>
