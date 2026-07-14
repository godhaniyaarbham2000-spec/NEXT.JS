import Link from 'next/link';

export default function PhotosPage() {
  const photos = [
    { id: '1', title: 'Mountain Landscape' },
    { id: '2', title: 'City Skyline' },
    { id: '3', title: 'Ocean Waves' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map(photo => (
          // 9. YEH KYU HAI: Next.js link jo route intercept karega. Jab hum is link pe click karte hain,
          // toh Next.js intercept karke isey ek modal me khol deta hai.
          <Link key={photo.id} href={`/photos/${photo.id}`} className="block group">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-xl aspect-video relative overflow-hidden flex items-center justify-center">
              <img 
                src={`https://picsum.photos/seed/${photo.id}/600/400`} 
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <span className="font-medium text-lg text-white z-10 drop-shadow-md">{photo.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
