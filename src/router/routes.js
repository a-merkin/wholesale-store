import MainPage from "@/pages/MainPage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import IncidentPage from "@/pages/IncidentPage.vue";
import IncidentCardListPage from "@/pages/IncidentCardListPage.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
    meta: {
      title: "main",
    },
    children: [
      { path: "/incident/:id", name: "Incident", component: IncidentPage },
      {
        path: "/incident-list",
        name: "IncidentList",
        component: IncidentCardListPage,
      },
    ],
  },
];

export default routes;
