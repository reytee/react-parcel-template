import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/**
 * project initialize
 */
(function Project(nameRoot: string): void
{   
   let container = document.getElementById(nameRoot)

   // if container is null, set auto create new container
   if (!container) {
      container = document.createElement('div')
      container.id = nameRoot
      
      document.body.appendChild(container)
   };

   const root = createRoot(container)

   root.render(
      <StrictMode>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </StrictMode>
   );

})('root')
