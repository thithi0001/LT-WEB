import { Router } from 'express';
import { 
  getProducts,
  searchProducts,
  getProductsByCategory,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct  
} from '../controllers/productController.js';
const productRouter = Router();

// lấy danh sách sản phẩm
productRouter.get('/', getProducts);

// lấy các sản phẩm có chứa từ khóa
productRouter.get('/search', searchProducts);

// lấy các sản phẩm có cùng loại
productRouter.get('/category/:id', getProductsByCategory);

// lọc các sản phẩm theo các tiêu chí


// lấy sản phẩm
productRouter.get('/:id', getProduct);

// tạo sản phẩm mới - chỉ có admin
productRouter.post('/', createProduct);

// cập nhật sản phẩm - chỉ có admin
productRouter.put('/:id', updateProduct);

// xóa sản phẩm - chỉ có admin
productRouter.delete('/:id', deleteProduct);

export default productRouter;