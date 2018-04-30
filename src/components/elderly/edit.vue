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
import db from "../db/firebaseInit";
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
  beforeRouteEnter: (to, from, next) => {
    db
      .collection("elderly")
      .where("id", "==", to.params._id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.name = doc.data().name;
            vm.id = doc.data().id;
            vm.date_born = doc.data().date_born;
            vm.cpf = doc.data().cpf;
            vm.sex = doc.data().sex;
            vm.answerable.name = doc.data().answerable.name;
            vm.answerable.date_born = doc.data().answerable.date_born;
            vm.answerable.relation = doc.data().answerable.relation;
            vm.answerable.cpf = doc.data().answerable.cpf;
            vm.answerable.address.street = doc.data().answerable.address.street;
            vm.answerable.address.number = doc.data().answerable.address.number;
            vm.answerable.address.zip = doc.data().answerable.address.zip;
            vm.answerable.contact.tel = doc.data().answerable.contact.tel;
            vm.answerable.contact.email = doc.data().answerable.contact.email;
            vm.caregiver.id = doc.data().caregiver.id;
            vm.caregiver.name = doc.data().caregiver.name;
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
            this.name = doc.data().name;
            this.id = doc.data().id;
            this.date_born = doc.data().date_born;
            this.cpf = doc.data().cpf;
            this.sex = doc.data().sex;
            this.answerable.name = doc.data().answerable.name;
            this.answerable.date_born = doc.data().answerable.date_born;
            this.answerable.relation = doc.data().answerable.relation;
            this.answerable.cpf = doc.data().answerable.cpf;
            this.answerable.address.street = doc.data().answerable.address.street;
            this.answerable.address.number = doc.data().answerable.address.number;
            this.answerable.address.zip = doc.data().answerable.address.zip;
            this.answerable.contact.tel = doc.data().answerable.contact.tel;
            this.answerable.contact.email = doc.data().answerable.contact.email;
            this.caregiver.id = doc.data().caregiver.id;
            this.caregiver.name = doc.data().caregiver.name;
          });
        });
    },
    updateElderly() {
      db
        .collection("elderly")
        .where("id", "==", this.$route.params._id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                name: this.name,
                id: this.id,
                date_born: this.date_born,
                cpf: this.cpf,
                sex: this.sex,
                answerable: this.answerable,
                caregiver: this.caregiver
              })
              .then(() => {
                this.$router.push({
                  name: "look-elderly",
                  params: { _id: this.id }
                });
              });
          });
        });
    }
  }
};
/*
$(document).ready(function() {
  M.updateTextFields();
  $("select").formSelect();
});
*/
</script>