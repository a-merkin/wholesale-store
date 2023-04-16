<template>
  <div>
    <el-table :data="customers">
      <el-table-column prop="name" label="Имя" />
      <el-table-column prop="inn" label="ИНН" />
      <el-table-column prop="kpp" label="КПП" />
      <el-table-column prop="ogrn" label="ОГРН" />
      <el-table-column fixed="right" width="180">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="changeRow(scope.$index)"
          >
            Изменить
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            Удалить
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const changeRow = () => {};

const deleteRow = (index) => {
  customers.value.splice(index, 1);
};
</script>

<style lang="scss" scoped></style>

