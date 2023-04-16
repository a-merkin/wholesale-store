import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    customers: [
      {
        id: 1,
        name: "Иванов Иван Иванович",
        inn: "1232131231",
        kpp: "12313123123",
        ogrn: "123123213",
        purchases: [],
      },
      {
        id: 2,
        name: "Кеков Кек Кекович",
        inn: "1232131231",
        kpp: "12313123123",
        ogrn: "123123213",
        purchases: [4],
      },
      {
        id: 3,
        name: "Карабас Барабас Барабасов",
        inn: "1232131231",
        kpp: "12313123123",
        ogrn: "123123213",
        purchases: [2],
      },
      {
        id: 4,
        name: "Акакий Акак Акакиевич",
        inn: "1232131231",
        kpp: "12313123123",
        ogrn: "123123213",
        purchases: [0, 3],
      },
    ],
    purchases: [
      {
        id: 1,
        date: "01.01.2023",
        name: "Гречка",
        code: "21232",
        count: "4444",
        price: "12333",
      },
      {
        id: 2,
        date: "03.01.2023",
        name: "Макароны",
        code: "11211",
        count: "241",
        price: "12333",
      },
      {
        id: 3,
        date: "06.01.2023",
        name: "Паштет",
        code: "31241",
        count: "100",
        price: "10000",
      },
      {
        id: 4,
        date: "11.01.2023",
        name: "Колбаса",
        code: "41251",
        count: "10",
        price: "900",
      },
      {
        id: 5,
        date: "19.01.2023",
        name: "Апельсины",
        code: "41951",
        count: "10",
        price: "770",
      },
    ],
  }),
  actions: {
    createPurchase(purchase) {
      this.purchases.push(purchase);
    },
    changePurchase(id, purchase) {
      this.purchases[id] = purchase;
    },
    deletePurchase(index) {
      this.purchases.splice(index, 1);
    },

    createCustomer(customer) {
      this.customers.push(customer);
    },
    changeCustomer(id, customer) {
      this.customers[id] = customer;
    },
    deleteCustomer(index) {
      this.customers.splice(index, 1);
    },

    getPurchaseById(id) {
      return this.purchases[id];
    },
    getCustomerById(id) {
      return this.customers[id];
    },
  },
});

