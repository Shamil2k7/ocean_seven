import { notFound } from "next/navigation";
import productsData from "@/data/products.json";
import ProductDetailView from "@/components/ProductDetailView";

export function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found | Ocean Seven Seafood Trading Company",
    };
  }

  return {
    title: `${product.name} - ${product.category} | Ocean Seven Seafood Trading Company`,
    description: `${product.description} Sourced and distributed by Ocean Seven Seafood Trading Company in Jeddah, Saudi Arabia.`,
    openGraph: {
      title: `${product.name} | Ocean Seven Seafood Trading`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductDetailView
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
