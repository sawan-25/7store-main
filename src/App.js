
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import DeveloperInfo from './Components/DeveloperInfo';
import Cart from './Components/Cart';
import ProductDetailPage from './Components/ProductDetailPage';


function App() {

  // const {categoryList} = useFetchProducts();

  const router = createBrowserRouter([
    {
      path:'/',
      element: <><Header/><Home/></>
    },
    {
      path:'/developer',
      element : <><Header/><DeveloperInfo/></>
    },
    {
      path:'/cart',
      element :<><Header/><Cart/></>
    },
    {
      path :'/product/:productId',
      element: <><Header/><ProductDetailPage/></>  
    }
  ])

  
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
