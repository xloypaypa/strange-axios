<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>{{$store.getters.getMessage()}}</h1>
        <h1>{{$store.getters.getMsg2()}}</h1>
    </div>
</template>

<script>
    import axios from 'axios'
    import store from './store/store'

    export default {
        name: 'app',
        created: function () {
            store.commit("updateMessage", "loading");
            axios.get("http://127.0.0.1:8080/hello")
                .then(function (responds) {
                    store.dispatch("updateAllMessage", responds.data);
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
