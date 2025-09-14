import React, { useState } from "react";

// Sample local images (replace with your actual assets)
import f1 from "../assets/f1.jpeg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpeg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import f6 from "../assets/f6.jpg";
import f7 from "../assets/f7.jpg";
import f8 from "../assets/f8.jpg";
import f9 from "../assets/f9.jpg";
import f10 from "../assets/f10.jpg";

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  unit: string;
  seller: User;
  image?: string;
  description?: string;
  rating?: number; // Added rating field
}

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Fresh Tomatoes", category: "Vegetables", price: 50, quantity: 20, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f1, description: "Juicy red tomatoes, perfect for salads and curries.", rating: 4 },
    { id: 2, name: "Golden Potatoes", category: "Vegetables", price: 30, quantity: 50, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f2, description: "Farm-fresh potatoes, ideal for fries and gravies.", rating: 5 },
    { id: 3, name: "Sweet Mangoes", category: "Fruits", price: 120, quantity: 15, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f3, description: "Ripe, juicy mangoes with a natural sweetness.", rating: 5 },
    { id: 4, name: "Organic Wheat", category: "Grains", price: 40, quantity: 100, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f4, description: "High-quality wheat grains for healthy flour.", rating: 4 },
    { id: 5, name: "Bananas", category: "Fruits", price: 60, quantity: 30, unit: "Dozen", seller: { id: 1, name: "Ramesh Kumar" }, image: f5, description: "Fresh yellow bananas full of energy.", rating: 3 },
    { id: 6, name: "Carrots", category: "Vegetables", price: 45, quantity: 25, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f6, description: "Crunchy carrots rich in Vitamin A.", rating: 4 },
    { id: 7, name: "Green Grapes", category: "Fruits", price: 90, quantity: 18, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f7, description: "Seedless green grapes, sweet and tangy.", rating: 5 },
    { id: 8, name: "Brown Rice", category: "Grains", price: 70, quantity: 80, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f8, description: "Nutritious brown rice for a healthy diet.", rating: 4 },
    { id: 9, name: "Onions", category: "Vegetables", price: 40, quantity: 60, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f9, description: "Fresh red onions for daily cooking.", rating: 4 },
    { id: 10, name: "Apples", category: "Fruits", price: 150, quantity: 25, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, image: f10, description: "Crisp red apples full of flavor.", rating: 5 },
  ]);

  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    name: "",
    category: "",
    price: 0,
    quantity: 0,
    unit: "",
    seller: { id: 1, name: "Ramesh Kumar" },
    image: "",
    description: "",
    rating: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setNewProduct({ ...newProduct, image: fileURL });
    }
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category) {
      alert("Please fill in required fields.");
      return;
    }
    const newId = products.length + 1;
    setProducts([...products, { ...newProduct, id: newId, rating: Number(newProduct.rating) }]);
    setShowForm(false);
    setNewProduct({
      id: 0,
      name: "",
      category: "",
      price: 0,
      quantity: 0,
      unit: "",
      seller: { id: 1, name: "Ramesh Kumar" },
      image: "",
      description: "",
      rating: 0,
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🌾 My Products</h2>
        <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-64 shadow-sm"
          />
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            ➕ Add Product
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              {product.image ? (
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
              <p className="text-sm text-gray-600">Available: {product.quantity} {product.unit}</p>
              <p className="text-sm text-gray-600">Seller: {product.seller.name}</p>
              {/* Rating */}
              <p className="text-yellow-500 mt-2">
                {"⭐".repeat(product.rating || 0)} <span className="text-gray-500">({product.rating})</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding product */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] p-6 overflow-auto">
            <h3 className="text-xl font-semibold mb-4">➕ Add New Product</h3>

            <div className="space-y-3">
              <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500" />
              <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500" />
              <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500" />
              <input type="number" name="quantity" placeholder="Quantity" value={newProduct.quantity} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500" />
              <input type="text" name="unit" placeholder="Unit (e.g., KG, Dozen)" value={newProduct.unit} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500" />
              <input type="number" name="rating" placeholder="Rating (1-5)" value={newProduct.rating} onChange={handleChange} min={1} max={5} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500" />
              <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500" />

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                    Choose File
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  {newProduct.image && (
                    <span className="text-sm text-gray-600">{newProduct.image.split("/").pop()} ✅</span>
                  )}
                </div>

                {newProduct.image && (
                  <img src={newProduct.image} alt="Preview" className="mt-3 max-h-64 w-full object-cover rounded-md border" />
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Cancel</button>
              <button onClick={handleAddProduct} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Save Product</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
