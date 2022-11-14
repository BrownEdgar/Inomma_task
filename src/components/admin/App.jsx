
import React from 'react'
import AdminLayout from './adminLayaut/AdminLayout'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './AddProduct'
import AllProducts from './AllProducts'



export default function App() {
  return (
    <AdminLayout>
      <Routes>


        <Route path="/admin" element={<AddProduct />} />
        <Route path="/admin/products" element={<AllProducts />} />



      </Routes>
    </AdminLayout>
  )
}
