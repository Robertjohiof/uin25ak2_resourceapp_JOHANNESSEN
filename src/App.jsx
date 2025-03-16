import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import { resources } from "./assets/ressurser.js";

export default function App() {
  const [categories, setCategories] = useState([]);

  // Henter unike kategorier fra ressursene når komponenten lastes
  useEffect(() => {
    setCategories([...new Set(resources.map(resource => resource.category.toLowerCase()))]);
  }, []);

  return (
    <Routes>
      {/* Sender brukeren til den første kategorien automatisk */}
      {categories.length > 0 && (
        <Route path="/" element={<Navigate to={`/${categories[0]}`} replace />} />
      )}
      {/* Lager en rute for hver kategori */}
      {categories.map((category) => (
        <Route
          key={category}
          path={`/${category}`}
          element={<Layout activeCategory={category} categories={categories}> 
                     <Resources category={category} />
                  </Layout>}
        />
      ))}
    </Routes>
  );
}
