const fetchDetails = async ({ type, uuid }) => {
  try {
    const response = await fetch(`https://valorant-api.com/v1/${type}/${uuid}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchDetails;
