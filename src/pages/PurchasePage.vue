<template>
  <div>
    <el-table :data="purchases">
      <el-table-column prop="code" label="Код" />
      <el-table-column prop="name" label="Название" />
      <el-table-column prop="count" label="Количество" />
      <el-table-column prop="price" label="Сумма сделки" />
      <el-table-column prop="date" label="Дата" />
    </el-table>
  </div>
</template>

<script setup>
const purchases = [
  {
    date: "01.01.2023",
    name: "Гречка",
    code: "21232",
    count: "4444",
    price: "12333",
  },
  {
    date: "03.01.2023",
    name: "Макароны",
    code: "11211",
    count: "241",
    price: "12333",
  },
  {
    date: "06.01.2023",
    name: "Паштет",
    code: "31241",
    count: "100",
    price: "10000",
  },
  {
    date: "11.01.2023",
    name: "Колбаса",
    code: "41251",
    count: "10",
    price: "900",
  },
  {},
];
</script>

<style lang="scss" scoped></style>

