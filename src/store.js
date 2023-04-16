import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    customers: [
      {
        name: "Иванов Иван Иванович",
        inn: "1232131231",
        kpp: "12313123123",
        ogrn: "123123213",
      },
      {
        name: "Кеков Кек Кекович",
        inn: "1232131231",
        kpp: "12313123123",
        ogrn: "123123213",
      },
      {
        name: "Карабас Барабас Барабасов",
        inn: "1232131231",
        kpp: "12313123123",
        ogrn: "123123213",
      },
      {
        name: "Акакий Акак Акакиевич",
        inn: "1232131231",
        kpp: "12313123123",
        ogrn: "123123213",
      },
    ],
    purchases: [
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
    ],
  }),
  actions: {
    addPurchase(purchase) {
      this.purchases.push(purchase);
    },
    changePurchase() {},
    deletePurchase(index) {
      this.purchases.splice(index, 1);
    },

    addCustomer(customer) {
      this.customers.push(customer);
    },
    changeCustomer() {},
    deleteCustomer(index) {
      this.customer.splice(index, 1);
    },
  },
});

