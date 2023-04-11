import CustomerPage from "@/pages/CustomerPage.vue";
import PurchasePage from "@/pages/PurchasePage.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
    children: [
      { path: "/customer-list", name: "CustomerList", component: CustomerPage },
      {
        path: "/purchase-list",
        name: "PurchaseList",
        component: PurchasePage,
      },
    ],
  },
];

export default routes;
