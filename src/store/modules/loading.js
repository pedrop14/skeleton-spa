// initial state
const state = {
	showLoading: true,
	text: 'Carregando...',
	height: 30,
	width: 30
}

// getters
const getters = {
	loadingState: state => state
}

// actions
const actions = {
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
}

// mutations
const mutations = {
  // setProducts (state, products) {
  //   state.all = products
  // },

  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }
}

export default {
	state,
	getters,
	actions,
	mutations
}