<template>
    <div id="new-caregiver">
        <h5>Novo cuidador</h5>
        <div class="row">
            <form @submit.prevent="saveCaregiver" class="col s12">
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
                        <input type="tel" v-model="contact.tel" required maxlength="15">
                        <label>Telefone</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="contact.email" required>
                        <label>E-mail</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="address.street" required>
                        <label>Logradouro</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="address.number" type="text" required>
                        <label>Número</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="address.zip" required pattern="[0-9]{5}-[0-9]{3}"> 
                        <label>CEP</label>
                    </div>
                </div>
                <button type="submit" class="btn">Salvar</button>
                <router-link to="/caregiver" class="btn grey">Cancelar</router-link>
            </form>
        </div>
    </div> 
</template>

<script>
import axios from "axios";
export default {
  name: "new-caregiver",
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
  created() {
    $(document).ready(function() {
      M.updateTextFields();
      $("select").formSelect();
    });
  },
  methods: {
    nextroute() {
      this.$router.push("/caregiver");
    },
    saveCaregiver() {
      axios
        .post("http://localhost:3000/caregiver", {
          name: this.name,
          date_born: this.date_born,
          cpf: this.cpf,
          sex: this.sex,
          address: {
            street: this.address.street,
            number: this.address.number,
            zip: this.address.zip
          },
          contact: {
            tel: this.contact.tel,
            email: this.contact.email
          }
        })
        .then(function(response) {
          console.log("Caregiver added");
        })
        .catch(error => {
          console.error("Error adding caregiver: ", error);
        });
        this.nextroute()
    }
  }
};
</script>