import Cookies from "js-cookie";

const deleteAgent = async (displayName) => {
  const token = Cookies.get("token");
  console.log(displayName);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_ADDRESS}/agents?displayName=${displayName}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default deleteAgent;
