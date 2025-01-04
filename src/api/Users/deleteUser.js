import Cookies from "js-cookie";

const deleteUser = async (displayName) => {
  const token = Cookies.get("token");
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_ADDRESS}/user?userName=${displayName}`,
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

export default deleteUser;
