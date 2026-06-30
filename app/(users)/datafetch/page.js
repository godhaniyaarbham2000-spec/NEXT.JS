import { db } from "@/config/db"; // db.js file se connection check karega

const DataFetch = async () => {
  let usersList = [];
  let errorMsg = null;

  try {
    // Database se 'users' table ka saara data select karna
    const [rows] = await db.query("SELECT * FROM products");
    usersList = rows;
  } catch (error) {
    console.error("Database connection error:", error);
    errorMsg = "Database se connect karne me error aayi!";
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#2563eb", marginBottom: "20px" }}>Users List from Database</h1>
      
      {errorMsg && <p style={{ color: "red", fontWeight: "bold" }}>{errorMsg}</p>}

      {!errorMsg && usersList.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <thead>
            <tr style={{ backgroundColor: "#2563eb", color: "white", textAlign: "left" }}>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>ID</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Product Name</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Price</th>
                  <th style={{ padding: "12px", border: "1px solid #ddd" }}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{user.id}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{user.product_name}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{user.price}</td>
                       <td style={{ padding: "12px", border: "1px solid #ddd" }}>{user.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataFetch;