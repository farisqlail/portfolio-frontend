<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <Sidebar />
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
          
        <Navbar />
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->
          <div
            class="d-sm-flex align-items-center justify-content-between mb-4"
          >
            <h1 class="h3 mb-0 text-gray-800">Create Blog</h1>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
</template>

<script>
import Navbar from "../../components/NavbarAdmin.vue";
import Sidebar from "../../components/SidebarAdmin.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>