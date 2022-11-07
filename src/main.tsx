import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


/**
 * project initialize
 */
(function Main(nameRoot: string): void
{
   let container: HTMLElement|null
   {
      container = document.getElementById(nameRoot)

      // if container is null, set auto add container
      if (!container) {
         container = document.createElement('div')
         container.id = nameRoot

         document.body.appendChild(container)
      };
   }

   // create root element and pushing to index.html
   const root = createRoot(container)

   // render
   root.render(
      <StrictMode>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </StrictMode>
   );

})('root')
