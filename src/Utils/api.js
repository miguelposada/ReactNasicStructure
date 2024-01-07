const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw Error("");
  } catch (error) {
    console.error("Error Fetching data", error);
    throw error;
  }
};

const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    }
    throw Error("NEtwork response was not ok");
  } catch (error) {
    console.error("Error posting data", error);
    throw error;
  }
};

export { fetchData, postData };
