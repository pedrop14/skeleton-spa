<template>
    <div id="look-elderly">
      <h3>{{name}}</h3>
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">Dados Pessoais</div>
            <div class="collapsible-body">
              <li>Cpf: {{cpf}}</li>
              <li>Data de Nascimento: {{date_born}}</li>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Responsável </div>
            <div class="collapsible-body">
              <li class="collection-item">Nome: {{answerable.name}}</li>
              <li class="collection-item">Cpf: {{answerable.cpf}}</li>
              <li class="collection-item">Telefone: {{answerable.contact.tel}}</li>
              <li class="collection-item">E-mail: {{answerable.contact.email}}</li>
              <li class="collection-item">Logradouro: {{answerable.address.street}}</li>
              <li class="collection-item">Número: {{answerable.address.number}}</li>
              <li class="collection-item">CEP: {{answerable.address.zip}}</li>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Cuidador :{{caregiver.name}} </div>
          </li>
        </ul>
        <router-link to="/elderly" class="btn grey lighten-1">Back</router-link>
        <router-link class="btn orange lighten-1" :to="{ name: 'edit-elderly', params:{_id: id}}">Editar</router-link>
        <router-link class="btn purple lighten-1" :to="{ name: 'new-consult', params:{_id: id}}">Nova Consulta</router-link>
        <router-link class="btn green lighten-1" :to="{ name: 'edit-elderly', params:{_id: id}}">Buscar Consultas</router-link>
        <button @click="deleteElderly" class="btn red lighten-1">Delete</button>
      
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "look-elderly",
  data() {
    return {
      id: null,
      name: null,
      date_born: null,
      cpf: null,
      sex: null,
      answerable: {
        name: null,
        date_born: null,
        relation: null,
        cpf: null,
        address: {
          street: null,
          number: null,
          zip: null
        },
        contact: {
          tel: null,
          email: null
        }
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
      $(".collapsible").collapsible();
    });
  },
  beforeRouteEnter: (to, from, next) => {
    axios
      .get("http://localhost:3000/elderly/{}".replace("{}", to.params._id))
      .then(response => {
        next(vm => {
          vm.id = response.data._id;
          vm.name = response.data.name;
          vm.date_born = response.data.date_born;
          vm.cpf = response.data.cpf;
          vm.sex = response.data.sex;
          vm.answerable = response.data.answerable;
          vm.caregiver = response.data.caregiver;
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/caregiver/{}".replace("{}", to.params._id))
        .then(response => {
          this.id = response.data._id;
          this.name = response.data.name;
          this.date_born = response.data.date_born;
          this.cpf = response.data.cpf;
          this.sex = response.data.sex;
          this.answerable = response.data.answerable;
          this.caregiver = response.data.caregiver;
        });
    },
    deleteElderly() {
      if (confirm("Certeza que deseja excluir?")) {
        axios
          .delete(
            "http://localhost:3000/caregiver/{}".replace("{}", to.params._id)
          )
          .then(this.$router.push("/elderly"));
      }
    }
  }
};
</script>
