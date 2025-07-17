<template>
  <div class="app">
    <h1>Vue Blog App</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: teal;
}
</style>