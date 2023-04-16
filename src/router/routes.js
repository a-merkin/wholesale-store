import CustomerListPage from "@/pages/CustomerListPage.vue";
import PurchaseListPage from "@/pages/PurchaseListPage.vue";
import PurchasePage from "@/pages/PurchasePage.vue";
import CustomerPage from "@/pages/CustomerPage.vue";
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
      { path: "/purchase/:id", name: "Purchase", component: PurchasePage },
      { path: "/customer/:id", name: "Customer", component: CustomerPage },
    ],
  },
];

export default routes;

