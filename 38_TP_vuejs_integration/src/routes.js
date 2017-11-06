/*jshint esversion: 6*/

import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Company from "./components/pages/Company.vue";
import Admin from "./components/pages/Admin.vue";
import Shop from "./components/pages/Shop.vue";
import PageNotFound from "./components/pages/NotFound.vue";

export const routes = [
    {
        path: '/', label: "Accueil", name: "home",
        component: Home
    },
    {
        path: '/about', label: "About", name: "about",
        component: About, children: [
            {
                path: "company", label: "company", name:"company",
                component: Company
            }
        ]
    },
    {
        path: '/shop', label: "Shop", name: "shop",
        component: Shop
    },
    {
        path: '/admin', label: "Admin", name: "admin",
        component: Admin
    },
    {
        path: "*", label: "404", name:"404",
        component: PageNotFound
    }
];
