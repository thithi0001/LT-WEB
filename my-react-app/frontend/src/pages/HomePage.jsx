import ProductSlider from '../components/ProductSlider';
import ProductSection from '../components/ProductSection';
import '../assets/css/HomePage.css';

const mockProducts = Array(4).fill({
  name: 'Bánh tráng phơi sương',
  price: '20.000',
  image: '/sample-product.png',
});

function HomePage() {
  return (
    <>
      <main className="home-content">
        <ProductSlider image="/sample-product.png" />
        <ProductSection title="Khuyến mãi" products={mockProducts} />
        <ProductSection title="Hàng mới" products={mockProducts} />
        <ProductSection title="Ăn vặt healthy" products={mockProducts} />
      </main>
    </>
  );
}

export default HomePage;
