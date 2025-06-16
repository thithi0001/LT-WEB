import ProductFilterSidebar from '../components/ProductFilterSidebar';
import PriceFilter from '../components/PriceFilter';
import ProductList from '../components/ProductList';
import '../assets/css/AllProductsPage.css';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function AllProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filterParams, setFilterParams] = useState({});

//   const fetchProducts = async (params = {}) => {
//     setLoading(true);
//     try {
//       const query = new URLSearchParams();

//       // Xử lý lọc theo khoảng giá
//       if (params.min) query.append('price_gte', params.min);
//       if (params.max) query.append('price_lte', params.max);

//       // Xử lý sắp xếp
//       if (params.sort && params.order) {
//         query.append('_sort', params.sort);
//         query.append('_order', params.order);
//       }

//       const res = await axios.get(`http://localhost:3000/products?${query.toString()}`);
//       setProducts(res.data);
//     } catch (err) {
//       console.error('Lỗi khi gọi API sản phẩm:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get('http://localhost:3000/categories');
//       setCategories(res.data);
//     } catch (err) {
//       console.error('Lỗi khi lấy categories:', err);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchProducts(filterParams);
//   }, [filterParams]);



function PromotionPage() {
  const mockProducts = Array(12).fill({
    name: 'Bánh tráng phơi sương',
    price: '20.000',
    image: '/sample-product.png',
  });

  const categories = [
    'Tất cả', 'Bò', 'Heo', 'Cá + Mực + Tôm', 'Chế biến sẵn', 'Khô',
    'Cơm cháy', 'Chà bông', 'Bánh tráng', 'Trái cây sấy', 'Gia vị',
    'Me', 'Mứt + Xí muội', 'Trà + nước', 'Hạt', 'Rong biển'
  ];

  return (
    <div className="all-products-page">
      <div className="product-container">
        <div className="sidebar">
          <ProductFilterSidebar categories={categories} />
        </div>
        <div className="main-content">
          <PriceFilter
            onSort={(order) => {
              // order === 'asc' hoặc 'desc'
              const sorted = [...products].sort((a, b) =>
                order === 'asc' ? a.price - b.price : b.price - a.price
              );
              setProducts(sorted);
            }}
            onRangeFilter={(min, max) => {
              const filtered = products.filter(p =>
                (!min || p.price >= Number(min)) &&
                (!max || p.price <= Number(max))
              );
              setProducts(filtered);
            }}
          />
          <ProductList
            products={mockProducts}
            currentPage={1}
            totalPages={5}
            onPageChange={(page) => setCurrentPage(page)}
          />
          {/* <div className="main-content">
            <PriceFilter onFilter={setFilterParams} />
            {loading ? <p>Đang tải...</p> : (
              <ProductList
                products={products}
                currentPage={1}
                totalPages={1}
                onPageChange={() => {}}
              />
            )} */}
        </div>
      </div>
    </div>
  );
}

export default PromotionPage;
