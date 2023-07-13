<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/detail">Detail</router-link></li>
      </ul>
    </nav>

    <!-- Other content goes here -->
    <router-view></router-view>
  </div>
</template>

<style>
.navbar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 10px 0;

  .navbar-list {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;

    li {
      margin-right: 10px;

      a {
        color: #fff;
        text-decoration: none;
        padding: 5px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
