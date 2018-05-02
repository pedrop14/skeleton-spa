<template>
    <div id="new-elderly">
        <h5>Novo idoso</h5>
        <div class="row">
            <form @submit.prevent="saveElderly" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label>Nome</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="date" maxlength="10" v-model="date_born" required>
                        <label>Data de Nascimento</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="cpf" required>
                        <label>Cpf</label>
                    </div>
                </div>
                <div class="row">
                     <div class="input-field col s12">
                        <select v-model="sex">
                        <option value="NI" disabled selected>Escolha uma opção</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        </select>
                        <label>Sexo</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="answerable.name" required type="text">
                        <label>Nome do Responsável</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.relation" required>
                        <label>Grau de Parentesco</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.cpf" required>
                        <label>Cpf do Responsável</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="date" maxlength="10" v-model="answerable.date_born" required>
                        <label>Data de Nascimento</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="tel" v-model="answerable.contact.tel" required maxlength="15">
                        <label>Telefone</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.contact.email" required>
                        <label>E-mail</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.address.street" required>
                        <label>Logradouro</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="answerable.address.number" type="text" required>
                        <label>Número</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="answerable.address.zip" required pattern="[0-9]{5}-[0-9]{3}"> 
                        <label>CEP</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="caregiver.name" required>
                        <label>Nome do Cuidador</label>
                    </div>
                </div>
                <button type="submit" class="btn">Salvar</button>
                <router-link to="/elderly" class="btn grey">Cancelar</router-link>
            </form>
        </div>
    </div> 
</template>

<script>
import axios from "axios";
export default {
  name: "new-elderly",
  data() {
    return {
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
  methods: {
    nextroute() {
      this.$router.push("/elderly");
    },
    saveElderly() {
      axios
        .post("http://localhost:3000/elderly", {
          name: this.name,
          date_born: this.date_born,
          sex: this.sex,
          cpf: this.cpf,
          answerable: {
            name: this.answerable.name,
            date_born: this.answerable.date_born,
            relation: this.answerable.relation,
            cpf: this.answerable.cpf,
            address: {
              street: this.answerable.address.street,
              number: this.answerable.address.number,
              zip: this.answerable.address.zip
            },
            contact: {
              tel: this.answerable.contact.tel,
              email: this.answerable.contact.email
            }
          },
          caregiver: {
            name: this.caregiver.name,
            id: this.caregiver.id
          }
        })
        .then(function(response) {
          console.log("Elderly added");
        })
        .catch(error => {
          console.error("Error adding elderly: ", error);
        });
      this.nextroute();
    }
  }
};
</script>