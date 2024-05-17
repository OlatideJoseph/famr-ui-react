import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['logo.jpeg'],
  manifest:{
    name:"Lasustech Admission Recommender",
    short_name:"Admission Recommender",
    description:"An application that tells students if they're eligible for admission.",
    icons:[{
      src: '/logo.jpeg',
      sizes:'192x192',
      type:'image/jpeg',
      purpose:'favicon'
    },
    {
      src:'/logo.jpeg',
      sizes:'512x512',
      type:'image/jpeg',
      purpose:'favicon'
    },
    {
      src: '/logo.jpeg',
      sizes:'180x180',
      type:'image/jpeg',
      purpose:'apple touch icon',
    },
    {
      src: '/logo.jpeg',
      sizes:'512x512',
      type:'image/jpeg',
      purpose:'any maskable',
    }
  ],
  theme_color:'#0dcaf0',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
