<template>
  <div id="elderlies">
      <ul class="collection with-header">
          <li class="collection-header"><h4>Idosos</h4></li>
          <li class="collection-item" v-for="elderly in elderlies" v-bind:key="elderly.id">
              {{elderly.name}}
              <router-link class="secondary-content" v-bind:to="{name:'edit-elderly', params: {_id: elderly.id}}">
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
import db from '../db/firebaseInit'
export default {
  name: "elderlies",
  data() {
    return {
      elderlies: []
    };
  },
   created () {
      db.collection('elderly').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.data().id,
            'name': doc.data().name
          }
          this.elderlies.push(data)
        })
      })
    }
};
</script>