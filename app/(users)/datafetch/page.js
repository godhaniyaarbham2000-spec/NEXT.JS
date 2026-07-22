import { db } from "@/config/db"; // db.js file se connection check karega

export const dynamic = 'force-dynamic';

const DataFetch = async () => {
  let usersList = [];
  let errorMsg = null;

  try {
    // Database se 'users' table ka saara data select karna
    const [rows] = await db.query("SELECT * FROM students");
    usersList = rows;
  } catch (error) {
    console.error("Database connection error:", error);
    errorMsg = "Database se connect karne me error aayi!";
  }

  return (
    <div className="p-4 md:p-10 font-sans max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">Users List from Database</h1>
      
      {errorMsg && <p className="text-red-500 font-bold mb-4">{errorMsg}</p>}

      {!errorMsg && usersList.length > 0 ? (
        <div className="overflow-auto max-h-[65vh] rounded-lg shadow-md border border-gray-200 dark:border-gray-700 relative">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 z-10 bg-blue-600 text-white text-left shadow-md text-sm md:text-base">
              <tr>
                <th className="p-2 md:p-3 border-b border-gray-200 dark:border-gray-700 font-semibold">Name</th>
                <th className="p-2 md:p-3 border-b border-gray-200 dark:border-gray-700 font-semibold">Email</th>
                <th className="p-2 md:p-3 border-b border-gray-200 dark:border-gray-700 font-semibold">Course</th>
                <th className="p-2 md:p-3 border-b border-gray-200 dark:border-gray-700 font-semibold">Age</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 text-xs md:text-base">
              {usersList.map((user) => (
                <tr key={user.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="p-2 md:p-3 border border-gray-200 dark:border-gray-700 break-all md:break-normal">{user.name}</td>
                  <td className="p-2 md:p-3 border border-gray-200 dark:border-gray-700 break-all md:break-normal">{user.email}</td>
                  <td className="p-2 md:p-3 border border-gray-200 dark:border-gray-700">{user.course}</td>
                  <td className="p-2 md:p-3 border border-gray-200 dark:border-gray-700">{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !errorMsg && (
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">No data found in the students table.</p>
            <p className="text-sm mt-2">Agar aapne Vercel par naya MySQL database lagaya hai, toh usme data add karein.</p>
          </div>
        )
      )}
    </div>
  );
};

export default DataFetch;