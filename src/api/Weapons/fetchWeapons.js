const fetchWeapons = async () => {
  try {
    const response = await fetch(
      "https://b09e-138-97-132-206.ngrok-free.app/api/weapons",
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
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

export default fetchWeapons;
