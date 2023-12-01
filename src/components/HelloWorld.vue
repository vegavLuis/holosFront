<script setup>
import { reactive, ref, watch } from "vue";
import { data } from "../helpers/index";
import Formulario from "./Formulario.vue";

const datos = reactive({
  fecha: "",
});

const btnVisible = ref();
const respuesta = ref([]);

const enviar = () => {
  respuesta.value.push(data.find((ele) => ele.fecha == datos.fecha));
  btnVisible.value = true;
};

const volverDisponible = () => {
  btnVisible.value = false;
  Object.assign(datos, {
    fecha: "",
  });
  respuesta.value = [];
  resultado.value = [];
};
</script>

<template>
  <div>
    <v-row no-gutters>
      <v-col cols="6" md="6">
        <div class="principal d-flex align-center justify-center">
          <Formulario
            @enviar="enviar"
            v-model:fecha="datos.fecha"
            :disa="btnVisible"
          />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div v-for="item in respuesta" class="segundo pa-16">
          <h2 class="text-start">{{ item.fecha }}</h2>
          <v-card v-for="ita in item.personalDisponible" class="pa-6 ma-6">
            <p>ID: {{ ita.id }}</p>
            <p>NOMBRE: {{ ita.nombre }}</p>
            <p>HORARIO: {{ ita.horario }}</p>
          </v-card>
          <v-btn @click="volverDisponible"> Volver </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.principal {
  background-color: #1976d2;
  color: white;
  height: 100vh;
}
.segundo {
  background-color: #e0e0e0;
  color: black;
  height: 100vh;
}
</style>
