// AllProductsPage.js
import React, { useState, useEffect } from "react";

const categories = [
    'Tất cả', 'Sản phẩm từ thịt', 'Sản phẩm từ thực vật', 'Snack', 'Cơm cháy', 'Nước'
];

const allProducts = new Array(20).fill(0).map((_, i) => ({
  name: "Bánh tráng phơi sương",
  price: 20000,
  image: "/banhtrang.jpg",
  category: "Bánh tráng"
}));

export default function AllProductsPage() {
  const [category, setCategory] = useState("Tất cả");
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filtered = allProducts
    .filter(p => (category === "Tất cả" || p.category === category))
    .filter(p => p.price >= priceRange.min && p.price <= priceRange.max)
    .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentProducts = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => setCurrentPage(1), [category, priceRange, sortOrder]);

  return (
    <div className="flex gap-4 p-4 bg-[#ffe5e5] min-h-screen">
      {/* Category Filter */}
      <div className="bg-[#ffc7c7] w-48 p-4 rounded-xl text-white font-bold">
        <div className="text-lg mb-4">Tất cả sản phẩm</div>
        {categories.map((cat) => (
          <div
            key={cat}
            className={`cursor-pointer text-black font-medium hover:underline ${
              category === cat ? "text-red-600 font-bold" : ""
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Price Filter */}
        <div className="bg-[#ffc7c7] rounded-xl p-4 text-black font-medium mb-4">
          <div className="mb-2">
            <span className="font-bold">Lọc theo giá:</span>
            <label className="ml-2">
              <input
                type="radio"
                name="sort"
                value="asc"
                checked={sortOrder === "asc"}
                onChange={() => setSortOrder("asc")}
              />
              Giá từ thấp đến cao
            </label>
            <label className="ml-2">
              <input
                type="radio"
                name="sort"
                value="desc"
                checked={sortOrder === "desc"}
                onChange={() => setSortOrder("desc")}
              />
              Giá từ cao đến thấp
            </label>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Chọn khoảng giá:</span>
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
              className="w-16 border rounded p-1"
            />
            <span>-</span>
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
              className="w-16 border rounded p-1"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-4">
          {currentProducts.map((p, idx) => (
            <div key={idx} className="bg-[#ffe5e5] p-2 rounded-lg text-center">
              <img src={p.image} alt={p.name} className="w-full h-32 object-cover mb-2 rounded-md" />
              <div className="font-bold text-black">{p.name}</div>
              <div className="text-red-600 font-bold">{p.price}đ</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-2">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="bg-red-500 text-white px-3 py-1 rounded-full">
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-full ${currentPage === i + 1 ? "bg-red-500 text-white" : "bg-white border"}`}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="bg-red-500 text-white px-3 py-1 rounded-full">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
