<template>
    <div>
        <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="post-heading">
                            <h1><strong>{{ mensaje }}</strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'TipoAdministrador',
    computed: {
        mensaje() {
            return this.$route.path === '/administrador/simple' ? 
            'Bienvenido a la página de Administración' : 
            'Esta página de administración está en construcción. Intente como administrador simple';
        }
    },
}
</script>