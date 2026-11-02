const STORAGE_KEY = "taller-pic-productos";

export function loadProducts() {
  const savedProducts = localStorage.getItem(STORAGE_KEY);
  if (savedProducts === null) {
    return [];
  }

  const products = JSON.parse(savedProducts);
  if (!Array.isArray(products)) {
    throw new Error("Los productos guardados deben estar en una lista.");
  }

  return products;
}

export function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
