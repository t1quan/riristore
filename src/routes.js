import Home from './pages/Home';
import Products from './pages/Products';
import DetailProducts from './pages/DetailProducts';

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/products/:productId', component: DetailProducts },
];

export { routes };