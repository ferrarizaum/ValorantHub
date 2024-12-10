const createUser = async (body) => {
  console.log(body);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_ADDRESS}/user`,
      {
        method: "POST",
        headers: {
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

export default createUser;
