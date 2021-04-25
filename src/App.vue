<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'inicio'}">portada</router-link></li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'sobremi'}">sobre mí</router-link></li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'contacto'}">contacto</router-link></li>
                    <li class="nav-item" role="presentation"><router-link to="/post/1">último post</router-link></li>
                </ul>
        </div>
        </div>
    </nav>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
