<template>
 <!-- Page Wrapper -->
  <div id="wrapper">
    <Sidebar />
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <Navbar />

      <!-- Main Content -->
      <div id="content">

        <!-- Begin Page Content -->
        <div class="container-fluid">
          
        </div>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
          <span>Copyright &copy; {{ date("Y") }}</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded bg-primary" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

</template>

<script>
import './include/Header.vue'
import './include/Footer.vue'	
import Navbar from './include/Navbar.vue'
// import Sidebar from './include/Sidebar.vue'

export default {
    components: {
        Navbar,
        Sidebar
    },
}
</script>