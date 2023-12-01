<script setup>
const emit = defineEmits(["update:fecha", "enviar"]);
const props = defineProps({
  fecha: {
    type: String,
  },
  disa: {
    type: Boolean,
  },
});
const validar = () => {
  if (Object.values(props).includes("")) {
    return console.log("todos son obligatorios");
  } else {
    emit("enviar");
  }
};
</script>
<template>
  <!-- {{ props.fecha }} -->
  <v-form @submit.prevent="validar">
    <input
      type="date"
      @input="$emit('update:fecha', $event.target.value)"
      :value="fecha"
    />
    <!-- </input> -->
    <v-btn block class="mt-4" type="submit" :disabled="disa"
      >Disponibilidad</v-btn
    >
  </v-form>
</template>
<style scoped></style>
