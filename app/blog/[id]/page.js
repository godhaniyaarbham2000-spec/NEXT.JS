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
    <div className="p-5 md:p-10 max-w-4xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {product.thumbnail && (
          <div className="w-full md:w-auto flex justify-center">
            <Image 
              src={product.thumbnail} 
              alt={product.title} 
              width={300} 
              height={300}
              priority={true}
              className="rounded-xl shadow-md object-cover w-full max-w-[300px] md:max-w-none"
            />
          </div>
        )}
        
        <div className="flex-1 w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800 m-0">{product.title}</h1>
          <h2 className="text-xl md:text-2xl text-orange-500 mt-2 font-semibold">${product.price}</h2>
          <p className="text-gray-600 mt-4 leading-relaxed text-base md:text-lg">
            {product.description}
          </p>
          <span className="inline-block bg-blue-500 text-white px-3 py-1.5 rounded-md mt-4 text-sm font-medium shadow-sm">
            Brand: {product.brand || 'Generic'}
          </span>
        </div>
      </div>
      
      <div className="mt-10 p-5 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg shadow-sm">
        <h3 className="m-0 mb-2 text-teal-700 text-lg font-bold">✨ Dynamic Metadata Test</h3>
        <p className="m-0 text-slate-800 text-sm md:text-base leading-relaxed">
          Browser ke tab par check karein! Agar aap <b>/blog/1</b> par hain toh tab ka title 
          <b> &quot;{product.title}&quot; </b> aayega. Aur agar link kisi ko bhejenge toh ye image bhi sath jayegi (OpenGraph ke through)!
        </p>
      </div>
    </div>
  );
}
