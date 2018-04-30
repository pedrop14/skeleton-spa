<template>
    <div id="look-elderly">
      <h3>{{name}}</h3>
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">Dados Pessoais</div>
            <div class="collapsible-body">
              <li>Cpf: {{cpf}}</li>
              <li>Data de Nascimento: {{born_date}}</li>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Responsável</div>
            <div class="collapsible-body">
              <li class="collection-item">Nome: {{answerable.name}}</li>
              <li class="collection-item">Cpf: {{answerable.cpf}}</li>
              <li class="collection-item">Telefone: {{answerable.cel}}</li>
              <li class="collection-item">Endereço: {{answerable.address}}</li>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Cuidador</div>
            <div class="collapsible-body">
              {{caregiver.name}}
            </div>
          </li>
        </ul>
        <router-link to="/elderly" class="btn grey">Back</router-link>
        <button @click="deleteElderly" class="btn red">Delete</button>

         <div class="fixed-action-btn">
           <router-link class="btn-floating btn-large orange" :to="{ name: 'edit-elderly', params:{_id: id}}"></router-link>
        </div>
      
    </div>
</template>

<script>
import db from "../db/firebaseInit";
export default {
  name: "look-elderly",
  data() {
    return {
      id: null,
      name: null,
      cpf: null,
      born_date: null,
      answerable: {
        name: null,
        address: null,
        cel: null,
        cpf: null
      },
      caregiver: {
        id: null,
        name: null
      }
    };
  },
  created() {
    $(document).ready(function() {
      $(".fixed-action-btn").floatingActionButton();
      $('.collapsible').collapsible();
    });
  },
  beforeRouteEnter: (to, from, next) => {
    db
      .collection("elderly")
      .where("id", "==", to.params._id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.id = doc.data().id;
            vm.name = doc.data().name;
            vm.cpf = doc.data().cpf;
            vm.born_date = doc.data().born_date;
            vm.answerable = doc.data().answerable;
            vm.caregiver = doc.data().caregiver;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db
        .collection("elderly")
        .where("id", "==", this.$route.params._id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.id = doc.data().id;
            this.name = doc.data().name;
            this.cpf = doc.data().cpf;
            this.born_date = Date(doc.data().born_date);
            this.answerable.name = doc.data().answerable.name;
            this.answerable.address = doc.data().answerable.address;
            this.answerable.cpf = doc.data().answerable.cpf;
            this.answerable.cel = doc.data().answerable.cel;
            this.caregiver.id = doc.data().caregiver.id;
            this.caregiver.name = doc.data().caregiver.name;
          });
        });
    },
    deleteElderly() {
      if (confirm("Certeza que deseja excluir?")) {
        db
          .collection("elderly")
          .where("id", "==", this.$route.params._id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$route.push("/");
            });
          });
      }
    }
  }
};
</script>
