const createWeapon = async (/*token*/ body) => {
  //console.log(token);
  try {
    const response = await fetch(
      "https://b09e-138-97-132-206.ngrok-free.app/api/weapons",
      {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "true",
          //Authorization: `Bearer ${token}`,
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
