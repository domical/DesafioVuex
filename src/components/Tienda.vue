<template>
    <div class="container text-center">
      <h1>Tienda 32 Bits</h1>
      <h6>Lista de juegos</h6>
      <table class="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in games" :key="game.codigo">
            <td>{{ game.codigo }}</td>
            <td>{{ game.nombre }}</td>
            <td>{{ game.stock }}</td>
            <td>{{ game.precio }}</td>
            <td class="acciones">
              <button @click="incrementar(game.codigo, 1)">+</button>
              <button @click="disminuir(game.codigo, 1)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  
  export default {
    name: 'Tienda',
    computed: {
      ...mapState(['games']), 
    },
    methods: {
      ...mapActions(['getGames', 'incrementarStock', 'disminuirStock']), 
      incrementar(codigo, cantidad) {
        this.incrementarStock({ codigo, cantidad });
      },
      disminuir(codigo, cantidad) {
        this.disminuirStock({ codigo, cantidad });
      },
    },
    mounted() {
      this.getGames(); 
    },
  };
  </script>
  
  <style scoped>
  table, th, td {
    border: 1px solid;
    border-collapse: collapse;
    background-color: violet;
    color: darkblue;
  }
  th, td {
    padding: 5px;   
  }
  </style>