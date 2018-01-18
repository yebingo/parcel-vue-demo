<template>
<div class="index">
    <view-title>{{msg}}</view-title>
    <router-link to="/card" tag="a">to card web</router-link>
    <router-link to="/city" tag="a">to city web</router-link>
    <footer>by {{name}}</footer>
</div>
</template>

<script>
import './index.scss';
import store from '../../store/index';
import viewTitle from '../../components/view-title';
export default {
    data() {
        return {
            msg: 'hello parcel',
        };
    },
    computed: {
        name() {
            return store.state.name;
        },
    },
    components: {
        'view-title': viewTitle,
    },
}
</script>
