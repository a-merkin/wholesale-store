<template>
  <el-container style="width: 100%; height: 100%">
    <el-header style="--el-header-height: 80px; width: 100%; padding: 0px"
      ><AppHeader
    /></el-header>
    <el-container>
      <el-aside style="width: 200px"><AppSidebar /></el-aside>
      <el-main style="padding: 0 30px"><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>

