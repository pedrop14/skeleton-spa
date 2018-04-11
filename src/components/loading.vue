<template lang="html">
	<div>
		<div class="loading animated fadeIn" v-if="loading.showLoading">
			{{loading.text}}
			<!-- <img src="../assets/img/loading.gif" :height="height" :width="width"> {{text}} -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'loading',
	props: {
		loading: {
			type: Object,
			require: true
		}
	},
	data () {
		return {
		}
	},
	mounted() {
	},
	methods: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
	display: block;
}
</style>