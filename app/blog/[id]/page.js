// app/blog/[id]/page.js
import Image from 'next/image';

// 1. generateMetadata function banayenge (Dynamic Metadata ke liye)
export async function generateMetadata({ params }) {
  const { id } = await params;
  
  try {
    // Ek achhi Products API use kar rahe hain
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();

    return {
      title: product.title || "Product Not Found", // Product ka naam
      description: product.description || "Description not available",
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.thumbnail],
        type: 'website',
      }
    };
  } catch (error) {
    return {
      title: "Error Loading Page"
    }
  }
}

// 2. Main Page Component
export default async function BlogPost({ params }) {
  const { id } = await params;
  
  // Page ke liye same product data fetch karenge
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  if (!product.title) {
    return <h1 style={{textAlign: "center", marginTop: "50px"}}>Product Not Found! (Try IDs 1 to 30)</h1>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        {product.thumbnail && (
          <Image 
            src={product.thumbnail} 
            alt={product.title} 
            width={300} 
            height={300}
            priority={true}
            style={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          />
        )}
        
        <div>
          <h1 style={{ color: '#2c3e50', fontSize: '32px', marginTop: 0 }}>{product.title}</h1>
          <h2 style={{ color: '#e67e22', fontSize: '24px' }}>${product.price}</h2>
          <p style={{ color: '#555', marginTop: '20px', lineHeight: '1.6', fontSize: '18px' }}>
            {product.description}
          </p>
          <span style={{ display: 'inline-block', backgroundColor: '#3498db', color: '#fff', padding: '5px 10px', borderRadius: '5px', marginTop: '10px' }}>
            Brand: {product.brand || 'Generic'}
          </span>
        </div>
      </div>
      
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e8f6f3', borderLeft: '5px solid #1abc9c', borderRadius: '0 8px 8px 0' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#16a085' }}>✨ Dynamic Metadata Test</h3>
        <p style={{ margin: 0, color: '#2c3e50' }}>
          Browser ke tab par check karein! Agar aap <b>/blog/1</b> par hain toh tab ka title 
          <b> "{product.title}" </b> aayega. Aur agar link kisi ko bhejenge toh ye image bhi sath jayegi (OpenGraph ke through)!
        </p>
      </div>
    </div>
  );
}
