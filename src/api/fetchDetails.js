const fetchDetails = async ({ type, uuid }) => {
  console.log(type);
  console.log(uuid);

  try {
    const response = await fetch(`https://valorant-api.com/v1/${type}/${uuid}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchDetails;
