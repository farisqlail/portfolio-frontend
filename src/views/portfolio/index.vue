<template>
    <Navbar/>

     <div class="container">
        <section id="blog">
            <div class="portfolio" v-for="(portfolio, index) in portfolios.data" :key="index">
                <h3>
                    {{ portfolio.title }}
                </h3>
                <p>
                  {{ portfolio.deskripsi }}
                </p>
                
                <a href="{{ portfolio.link }}" target="blank">Lihat Selengkapnya</a>
                <br><br>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'
import Navbar from '../../components/Navbar.vue';

export default {
    components: { Navbar },
    setup() {

        let portfolios = ref([]);

        onMounted(() => {
            axios.get('http://127.0.0.1:8000/api/portfolio')
            .then((result) => {
                portfolios.value = result.data
            }).catch((err) => {
                console.log(err.response)
            });
        });

        return {
            portfolios,
            Navbar
        }
    },
    mounted (){
        document.title = 'Portfolio | Faris Rizqilail'
    },
}
</script>