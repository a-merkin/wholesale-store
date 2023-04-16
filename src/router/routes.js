import CustomerListPage from "@/pages/CustomerListPage.vue";
import PurchaseListPage from "@/pages/PurchaseListPage.vue";
import MainPage from "@/pages/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
    children: [
      {
        path: "/customer-list",
        name: "CustomerList",
        component: CustomerListPage,
      },
      {
        path: "/purchase-list",
        name: "PurchaseList",
        component: PurchaseListPage,
      },
    ],
  },
];

export default routes;

