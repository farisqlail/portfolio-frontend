<template>
    <Navbar/>

     <div class="container">
        <section id="blog">
            <div class="blogs" v-for="(blog, index) in blogs.data" :key="index">
                <h3>
                    {{ blog.title }}
                </h3>
                <p>
                  {{ blog.deskripsi }}
                </p>
                
                <a href="{{ blog.link }}" target="blank">Lihat Selengkapnya</a>
                <br><br>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'
import Navbar from "../../components/Navbar.vue";

export default {
  components: { Navbar },
    setup() {
        //reactive state
        let blogs = ref([]);
        
        onMounted(() => {
            //get data from api
            axios.get('http://localhost:8000/api/blog')
            .then((result) => {
                blogs.value = result.data
            }).catch((err) => {
                console.log(err.response)
            });
        });

        return {
            blogs,
            Navbar
        }
    },
    mounted() {
        document.title = 'Blog | Faris Rizqilail'
    },
};
</script>