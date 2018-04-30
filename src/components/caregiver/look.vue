<template>
    <div id="edit-elderly">
      <h3>{{name}}</h3>
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">Dados Pessoais</div>
            <div class="collapsible-body">
              <li>CPF: {{cpf}}</li>
              <li>Data de Nascimento: {{born_date}}</li>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Endereço</div>
            <div class="collapsible-body">
              <li class="collection-item">Logradouro: {{address.street}}</li>
              <li class="collection-item">Número: {{address.number}}</li>
              <li class="collection-item">CEP: {{address.zip}}</li>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Contato</div>
            <div class="collapsible-body">
              <li class="collection-item">Telefone: {{contact.tel}}</li>
              <li class="collection-item">E-mail: {{contact.email}}</li>
            </div>
          </li>
        </ul>
        <router-link to="/elderly" class="btn grey">Back</router-link>
        <button @click="deleteCaregiver" class="btn red">Delete</button>

         <div class="fixed-action-btn">
          <router-link class="btn-floating btn-large orange" 
          v-bind:to="{ name: 'edit-elderly', params:{_id: id}}">
            <i class="fa fa-pencil">
          </i></router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "edit-elderly",
  data() {
    return {
      name: null,
      date_born: null,
      cpf: null,
      sex: null,
      address: {
        street: null,
        number: null,
        zip: null
      },
      contact: {
        tel: null,
        email: null
      }
    };
  },
  beforeRouteEnter: (to, from, next) => {
    axios
      .get("http://localhost:3000/caregiver/{}".replace('{}', to.params._id))
      .then(response => {
        next(vm => {
          vm.name = response.data.name;
          vm.date_born = response.data.date_born;
          vm.cpf = response.data.cpf;
          vm.sex = response.data.sex;
          vm.address = response.data.address;
          vm.contact = response.data.contact;
        })
      });
  },
  created() {
    $(document).ready(function() {
      $(".collapsible").collapsible();
    });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      axios
      .get("http://localhost:3000/caregiver/{}".replace('{}', to.params._id))
      .then(response => {
        next(vm => {
          this.name = response.data.name;
          this.date_born = response.data.date_born;
          this.cpf = response.data.cpf;
          this.sex = response.data.sex;
          this.address = response.data.address;
          this.contact = response.data.contact;
        })
      });
    },
    deleteElderly() {
      if (confirm("Certeza que deseja excluir?")) {
        axios.delete()
      }
    }
  }
};
</script>
