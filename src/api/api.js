export async function fetchPeopleData(searchInput) {
  const apiUrl =
    searchInput.trim() !== ""
      ? `http://swapi.dev/api/people/?search=${encodeURIComponent(searchInput)}`
      : `http://swapi.dev/api/people`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching people data:", error.message);
    return null;
  }
}

export async function fetchStarshipsData(searchInput) {
  const apiUrl =
    searchInput.trim() !== ""
      ? `http://swapi.dev/api/starships/?search=${encodeURIComponent(
          searchInput
        )}`
      : `http://swapi.dev/api/starships`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching spaceships data:", error.message);
    return null;
  }
}
