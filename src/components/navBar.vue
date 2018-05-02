<template>
  <nav>
      <div class="nav-wrapper cyan lighten-2">
          <div class="container">
            <router-link to="/" class="brand-logo">
              Lar de Idosos
            </router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/elderly">Idosos</router-link></li>
                <li><router-link to="/visit">Visitas</router-link></li>
                <li><router-link to="/caregiver">Cuidadores</router-link></li>
            </ul>
          </div>
      </div>
  </nav>
</template>
