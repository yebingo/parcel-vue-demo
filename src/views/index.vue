<template>
<div class="index">
    <h1>haha</h1>
    <router-link to="/card" tag="div">{{name}}</router-link>
    <router-link to="/city" tag="div">to city web</router-link>
</div>
</template>

<script>
import store from '../store/index';
export default {
    data() {
        return {
            msg: 'hello parcel',
        };
    },
    computed: {
        name: () => {
            return store.state.firstData;
        },
    },
}
</script>

<style scoped>
.index{
    font-size: 24px;
}
</style>
