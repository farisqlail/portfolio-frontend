<template>
     <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">Faris Rizqilail</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <!-- <a class="nav-link {{'Beranda' == request()->segment(1) ? 'active' : ''}}" aria-current="page" href="{{ url('home') }}">Beranda</a> -->
                        <router-link :to="{ name: 'home' }" class="nav-link">Beranda</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link {{'blog' == request()->segment(1) ? 'active' : ''}}" href="{{ route('blog.index') }}">Blog</a> -->
                        <router-link :to="{ name: 'blog' }" class="nav-link">Blogs</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{'portfolio' == request()->segment(1) ? 'active' : ''}}" href="{{ route('porto.index') }}">Portfolio</a>
                    </li>
                    <li class="nav-item"> 
                        <a class="nav-link {{'kontak' == request()->segment(1) ? 'active' : ''}}" href="{{ url('/kontak') }}">Kontak</a>
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