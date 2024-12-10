import Cookies from "js-cookie";

const createWeapon = async (body) => {
  const token = Cookies.get("token");
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_ADDRESS}/weapon`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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

export default createWeapon;
