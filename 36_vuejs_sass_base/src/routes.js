/*jshint esversion: 6*/

import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Company from "./components/pages/Company.vue";
import PageNotFound from "./components/pages/NotFound.vue";

export const routes = [
    {
        path: '/', label: "Accueil", name: "home",
        component: Home
    },
    {
        path: '/about/:lang', label: "About", name: "about",
        component: About, children: [
            {
                path: "company", label: "company", name:"company",
                component: Company
            }
        ]
    },
    {
        path: "*", label: "404", name:"404",
        component: PageNotFound
    }
];
