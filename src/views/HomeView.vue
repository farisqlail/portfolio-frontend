<template>
  <main>
    <Navbar />

    <div class="container">
      <section id="home">
        <h2>Hallo, Saya Faris Rizqilail</h2>
        <p>
          Salam kenal, saya web developer, designer, illustrator, dan sedang
          belajar menulis blog di Medium
        </p>
      </section>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import css from "@/assets/base.css";
export default {
  components: { Navbar },
  
  mounted() {
    document.title = 'Faris Rizqilail'
  },
}
</script>