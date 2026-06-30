const Loading = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      {/* CSS Hourglass Animation */}
      <div className="lds-hourglass"></div>
      
      <h2 className="mt-8 text-xl font-semibold text-gray-700 animate-pulse">
        Loading Data...
      </h2>
    </div>
  );
};

export default Loading;