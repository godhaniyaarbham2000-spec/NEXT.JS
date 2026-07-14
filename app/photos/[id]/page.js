export default async function PhotoPage({ params }) {
  // 10. YEH KYU HAI: Full Standalone Page.
  // Yeh page tab chalega jab user click karne ke bajaaye directly link (localhost:3000/photos/1) kholega, ya page ko refresh (F5) karega.
  const { id } = await params;

  return (
    <div className="max-w-3xl mx-auto py-10 w-full">
      <h1 className="text-3xl font-bold mb-6">Full Page View</h1>
      <div className="bg-gray-200 dark:bg-gray-800 rounded-xl aspect-video relative overflow-hidden flex items-center justify-center mb-6">
        <img 
          src={`https://picsum.photos/seed/${id}/1200/800`} 
          alt={`Photo ${id}`}
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <span className="font-medium text-2xl text-white z-10 drop-shadow-md bg-black/50 px-4 py-2 rounded">Photo {id}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        You are seeing this because you either refreshed the page, or visited the URL directly. 
        This is NOT the modal view.
      </p>
    </div>
  );
}
