export async function getAllProducts() {
  const response = await fetch('http://localhost:8000/products');
  const data = await response.json();

  const products = [];

  for (const key in data) {
    products.push({
      id: key,
      ...data[key],
    });
  }

  return products;
}

export async function getFeaturedProducts() {
  const allProducts = await getAllProducts();

  return allProducts.filter((product) => product.isFeatured);
}

export async function getProductById(id) {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.id === id);
}

export async function getFilteredProducts(filteredData) {
  const { price, catagory } = filteredData;

  const allProducts = await getAllProducts();

  return allProducts.filter(
    (product) => product.price <= price && product.value === catagory
  );
}
