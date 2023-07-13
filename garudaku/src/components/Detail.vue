<template>
  <div>
    <h1>Detail Page</h1>
    <p>Detail ID: {{ $route.params.id }}</p>
    <router-link to="/">Go to Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>
