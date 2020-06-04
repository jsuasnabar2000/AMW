import {router} from './router/index.router.js'
window.addEventListener('hashchange', ()=>{
    router(window.location.hash);
})