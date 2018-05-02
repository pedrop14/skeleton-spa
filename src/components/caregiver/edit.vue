<template>
    <div id="edit-caregiver">
        <h5>{{name}}</h5>
        <div class="row">
            <form @submit.prevent="updateCaregiver" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label class="active">Nome</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="date" maxlength="10" v-model="date_born" required>
                        <label class="active">Data de Nascimento</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="cpf" required>
                        <label class="active">Cpf</label>
                    </div>
                </div>
                <div class="row">
                     <div class="input-field col s12">
                        <select v-model="sex">
                        <option value="NI" disabled selected>Escolha uma opção</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        </select>
                        <label class="active">Sexo</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="tel" v-model="contact.tel" required maxlength="15">
                        <label class="active">Telefone</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="contact.email" required>
                        <label class="active">E-mail</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="address.street" required>
                        <label class="active">Logradouro</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="address.number" type="text" required>
                        <label class="active">Número</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="address.zip" required pattern="[0-9]{5}-[0-9]{3}"> 
                        <label class="active">CEP</label>
                    </div>
                </div>
                <button type="submit" class="btn">Atualizar</button>
                <router-link to="/caregiver" class="btn grey">Cancelar</router-link>
            </form>
        </div>
    </div> 
</template>


<script>
import axios from "axios";
export default {
  name: "edit-caregiver",
  data() {
    return {
      id: null,
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
      .get("http://localhost:3000/caregiver/{}".replace("{}", to.params._id))
      .then(response => {
        next(vm => {
          vm.id = response.data._id;
          vm.name = response.data.name;
          vm.date_born = response.data.date_born;
          vm.cpf = response.data.cpf;
          vm.sex = response.data.sex;
          vm.address = response.data.address;
          vm.contact = response.data.contact;
        });
      });
  },
  created() {
    $(document).ready(function() {
      M.updateTextFields();
      $("select").formSelect();
    });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/caregiver/{}".replace("{}", this.$route.params._id))
        .then(response => {
          this.id = response.data._id;
          this.name = response.data.name;
          this.date_born = response.data.date_born;
          this.cpf = response.data.cpf;
          this.sex = response.data.sex;
          this.address = response.data.address;
          this.contact = response.data.contact;
        });
    },
    updateCaregiver() {
      axios
        .put("http://localhost:3000/caregiver/{}".replace("{}", this.$route.params._id), {
          name: this.name,
          date_born: this.date_born,
          cpf: this.cpf,
          sex: this.sex,
          address: this.address,
          contact: this.contact
        })
        .then(response => {
          console.log(response.data);
          this.$router.push('/caregiver');
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>