<template>
    <img :src="logoUrl" :alt="appName">
</template>
  
<script>
import axios from 'axios';

const appName = import.meta.env.VITE_APP_NAME;

export default {
    data() {
        return {
            logoUrl: null,
        };
    },
    mounted() {
        axios.get('/upload-image')
            .then(response => {
                this.logoUrl = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },
};
</script>
  