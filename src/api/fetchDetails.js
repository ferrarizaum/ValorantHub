import Cookies from "js-cookie";

const fetchDetails = async ({ type, uuid }) => {
  const token = Cookies.get("token");
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_ADDRESS}/${type}/${uuid}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchDetails;
