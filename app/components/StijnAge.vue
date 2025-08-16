<template>
  <span>{{age}}</span>
</template>

<script setup lang="ts">
function getAge() {
  const today = new Date();
  const birthDate = new Date("1987-06-29");
  const yearDifference = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    return yearDifference - 1;
  } else {
    return yearDifference;
  }
}

const age = getAge();
</script>