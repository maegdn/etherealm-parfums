// app/page.tsx
import { client } from "@/lib/apolloClient";
import { GET_PRODUCTS } from "@/lib/queries";

export default async function Home() {
  const { data } = await client.query({ query: GET_PRODUCTS });

  console.log("📦 Shopify response data:", data);

  const products = data?.products?.edges || [];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nos produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(({ node }: any) => (
          <div key={node.id} className="border rounded p-4 shadow">
            <img
              src={node.images.edges[0]?.node.url}
              alt={node.images.edges[0]?.node.altText || node.title}
              className="w-full h-auto object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{node.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
