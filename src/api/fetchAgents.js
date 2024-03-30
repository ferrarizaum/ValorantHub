/*
https://valorant-api.com/v1/agents/
https://valorant-api.com/v1/maps/
https://valorant-api.com/v1/weapons
https://valorant-api.com/v1/weapons/skins

p
*/

const fetchAgents = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents/");
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

export default fetchAgents;
