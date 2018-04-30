<template>
  <nav>
      <div class="nav-wrapper green">
          <div class="container">
            <router-link to="/" class="brand-logo">
              Elderly Manager
            </router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/elderly">Idosos</router-link></li>
                <li><router-link to="/">Visitas</router-link></li>
                <li><router-link to="/">Cuidadores</router-link></li>
            </ul>
          </div>
      </div>
  </nav>
</template>
