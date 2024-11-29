import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      games: [] 
    };
  },
  mutations: {
    setGames(state, games) { 
      state.games = games;
    },
    updateStock(state, { codigo, cantidad }) {
      const game = state.games.find(g => g.codigo === codigo); 
      if (game) {
        game.stock = String(parseInt(game.stock) + cantidad);
      }
    }
  },
  actions: {
    async getGames({ commit }) { 
      try {
        const response = await axios.get('/juegos.json'); 
        commit("setGames", response.data); 
      } catch (error) {
        console.error("Error al obtener los juegos:", error);
      }
    },
    incrementarStock({ commit }, { codigo, cantidad }) {
      commit("updateStock", { codigo, cantidad });
    },
    disminuirStock({ commit }, { codigo, cantidad }) {
      commit("updateStock", { codigo, cantidad: -cantidad });
    }
  },
  modules: {
    // Aquí puedes agregar módulos adicionales si los necesitas
  }
});

export default store;