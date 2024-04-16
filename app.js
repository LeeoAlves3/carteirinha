const app = Vue.createApp({
    data() {
        return {
            dados: {
                nome: '',
                curso: '',
                instituicao: '',
                matricula: ''
            }
        };
    }
});

app.mount('#app');
