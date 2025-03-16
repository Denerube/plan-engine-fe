import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        //pathmatch is nodig als je een lege path hebt
        pathMatch :'full',
        loadComponent : ()=> {
            return import('./pages/home/home.component').then(
                (m) => m.HomeComponent
            )
        }
    },
    {
        path: "eventpage",
        loadComponent : ()=>{
            return import("./pages/event-page/event-page.component").then(
                (m) => m.EventPageComponent
            )
        }
    }
];
