<template>
    <div class="new-visit">
        <h4 v-if="name_elderly">Registrar Visita para {{name_elderly}}</h4>
        <h4 v-else>Registrar Visita {{selected}}</h4>
        <div class="row">
            <form @submit.prevent="saveVisit" class="col s12">
                <div class="row">
                     <div class="input-field col s12">
                        <input type="text" v-model="name_elderly" required>
                        <label>Nome do idoso</label>
                    </div>
                </div>
                <div class="row">
                     <div class="input-field col s12">
                        <input type="text" v-model="name_visitant" required>
                        <label>Nome do visitante</label>
                    </div>
                </div>
                 <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="cpf" required>
                        <label>CPF do vistante</label>
                    </div>
                </div>
                <button type="submit" class="btn">Salvar</button>
                <router-link to="/visit" class="btn grey">Cancelar</router-link>
            </form>
        </div>
       
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "new-visit",
  data() {
    return {
      name_elderly: null,
      cpf: null,
      name_visitant: null
    };
  },
  methods: {
      nextroute (){
          this.$router.push("/visit");
      },
      saveVisit(){
          axios
        .post("http://localhost:3000/visit", {
          elderly_name: this.name_elderly,
          cpf: this.cpf,
          visitant_name: this.name_visitant
        })
        .then(function(response) {
          console.log("Visit added");
        })
        .catch(error => {
          console.error("Error adding visit: ", error);
        });
      this.nextroute();
      }
  }
};
</script>
