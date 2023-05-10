import Header from './component/Header';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './component/Footer';

function App() {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);
  const productData = useSelector((state) => state.product);
  const navigate = useNavigate();
  localStorage.setItem('token', userToken);
  useEffect(() => {
    const token = localStorage.getItem('token',userToken);
  
    if (token) {
      (async () => {
        try {
          const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const resData = await res.json();
          console.log(resData);
          dispatch(setDataProduct(resData));
        } catch (error) {
          console.error(error);
          // xử lý lỗi ở đây, ví dụ hiển thị thông báo lỗi cho người dùng
        }
      })();
    } else {
      navigate('/login');
    }
  }, [ navigate, dispatch]);



  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
