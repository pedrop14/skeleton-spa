<template>
    <div id="edit-elderly">
        <h5>{{name}}</h5>
        <div class="row">
            <form @submit.prevent="updateElderly" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label class= "active">Nome</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="date" maxlength="10" v-model="date_born" required>
                        <label class= "active">Data de Nascimento</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="cpf" required>
                        <label class= "active">Cpf</label>
                    </div>
                </div>
                <div class="row">
                     <div class="input-field col s12">
                        <select v-model="sex">
                        <option value="NI" disabled selected>Escolha uma opção</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        </select>
                        <label class= "active">Sexo</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="answerable.name" required type="text">
                        <label class= "active">Nome do Responsável</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.relation" required>
                        <label class= "active">Grau de Parentesco</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.cpf" required>
                        <label class= "active">Cpf do Responsável</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="date" maxlength="10" v-model="answerable.date_born" required>
                        <label class= "active">Data de Nascimento</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="tel" v-model="answerable.contact.tel" required maxlength="15">
                        <label class= "active">Telefone</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.contact.email" required>
                        <label class= "active">E-mail</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.address.street" required>
                        <label class= "active">Logradouro</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="answerable.address.number" type="text" required>
                        <label class= "active">Número</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.address.zip" required pattern="[0-9]{5}-[0-9]{3}"> 
                        <label class= "active">CEP</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="caregiver.name" required>
                        <label class= "active">Nome do Cuidador</label>
                    </div>
                </div>
                <button type="submit" class="btn orange">Atualizar</button>
                <router-link to="/elderly" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div> 
</template>

<script>
import axios from "axios";
export default {
  name: "edit-elderly",
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
      M.updateTextFields();
      $("select").formSelect();
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
        .get("http://localhost:3000/caregiver/{}".replace("{}", this.id))
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
    updateElderly() {
      axios
        .put(
          "http://localhost:3000/caregiver/{}".replace("{}", this.id),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          {
            name: this.name,
            date_born: this.date_born,
            cpf: this.cpf,
            sex: this.sex,
            answerable: this.answerable,
            caregiver: this.caregiver
          }
        )
        .then(response => {
          this.$router.push("/elderly");
          console.log(response);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>