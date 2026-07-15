import { Suspense } from 'react';
import ProductReviews from '../../../components/ProductReviews'; // We will create this

export default function StreamingDemoPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>Topic 05: React Suspense Streaming</h2>
      <p>Is page mein kuch hissa fast load hoga, aur kuch hissa slow (API delay ke baad).</p>

      <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
        {/* Fast Section - Instant */}
        <div style={{ width: '40%', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
          <h2>📱 iPhone 16 Pro</h2>
          <p>Ye data STATIC hai. Page ke load hote hi turant dikh gaya!</p>
          <img src="https://via.placeholder.com/300x200?text=Product+Image" alt="product" style={{ width: '100%', borderRadius: '10px' }} />
        </div>

        {/* Slow Section - Wrapped in Suspense */}
        <div style={{ width: '50%' }}>
          <h3>User Reviews (Slow API)</h3>
          
          <Suspense fallback={<ReviewsSkeleton />}>
             {/* Ye component 3 second baad load hoga */}
             <ProductReviews />
          </Suspense>

        </div>
      </div>
    </div>
  );
}

// Skeleton component (Jo loading ke time dikhega)
function ReviewsSkeleton() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f1f2f6', borderRadius: '10px' }}>
      <h3 style={{ color: '#888' }}>⏳ Loading reviews... Please wait.</h3>
      <div style={{ height: '60px', backgroundColor: '#dfe4ea', borderRadius: '5px', marginBottom: '10px', animation: 'pulse 1.5s infinite' }}></div>
      <div style={{ height: '60px', backgroundColor: '#dfe4ea', borderRadius: '5px', marginBottom: '10px', animation: 'pulse 1.5s infinite' }}></div>
    </div>
  );
}
