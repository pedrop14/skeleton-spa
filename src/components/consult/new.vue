<template>
  	<div class="container" id="todo">
        <section class="panel">	
            <input v-model="new_recomendation" @keyup.enter="addRec" placeholder="Insira uma recomendação" autofocus class="text-input">
            <button @click="clearList">Clear List</button>
        </section>
        <section>
            <ul>
                <li v-for="rec in recomendations" v-bind:key="rec.id">
                    <label>{{ rec.text }}</label>
                    <button @click="removeRec(rec)">X</button>
                </li>
            </ul>
        </section>
	</div>
</template>

<script>
import vue from 'vue'
vue.directive("auto-focus", {
  bind: function() {
    Vue.nextTick(
      function() {
        this.el.focus();
      }.bind(this)
    );
  }
});
import md5 from "md5";
export default {
  name: "new-conult",
  data: {
      new_recomendation: "",
      recomendations: [{
          text:"Teste",
          id: "453"
      }],
      id: null,
      name: null,
      doctors: []
  },
  methods: {
    addRec() {
      var recomendation = this.new_recomendation.trim();
      if (recomendation) {
        this.recomendations.push({
          text: recomendation,
          id: md5(recomendation)
        });
        this.new_recomendation = null;
      }
    },

    removeRec(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
  }
};
</script>
