<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'app',
        data: function () {
            return {
                message: "",
            };
        },
        created: function () {
            const self = this;
            axios.get("http://127.0.0.1:8080/hello")
                .then(function (responds) {
                    self.message = responds.data;
                })
                .catch(error => window.console.log(error));
            window.console.log("finished");
        }
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
</style>
