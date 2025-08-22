import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'Dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'), // Lazy loading en el componente
        
        children: [// Rutas hijas para el Dashboard
            {
                path: 'Trending',
                loadComponent: () => import('./gifs/pages/trending-page/trending-page'), // Lazy loading en el componente
            },

            {
                path: 'Search',
                loadComponent: () => import('./gifs/pages/search-page/search-page'), // Lazy loading en el componente
            },
            {
                path: '**',
                redirectTo: 'Trending', // Redirige a Trending si la ruta no coincide   
            },

        ]
    
    },

    

    {
        path: '**',
        redirectTo: 'Dashboard', // Redirige a Dashboard si la ruta no coincide
    }
];
