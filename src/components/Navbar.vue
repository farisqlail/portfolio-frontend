<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">Faris Rizqilail</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse flex-row-reverse"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link"
              >Beranda</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'blog' }" class="nav-link"
              >Blogs</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'portfolios' }" class="nav-link"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'contact' }" class="nav-link"
              >Contact</router-link
            >
          </li>
          <li class="nav-item" style="margin-top: -10px">
            <button class="icon" onclick="setDarkMode()" id="darkBtn">
              🌑
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    mounted() {
         if (localStorage.getItem('theme') == 'dark') {
            setDarkMode(true);
        }

        function setDarkMode() {
            let emoticon = '';
            let isDark = document.body.classList.toggle('darkmode');

            if (isDark) {
                emoticon = '🌞';
                localStorage.setItem('theme', 'dark');
            } else {
                emoticon = '🌑';
                localStorage.removeItem('theme');
            }
            document.getElementById('darkBtn').innerHTML = emoticon;
        }
    }
}
</script>