// i was bored so I added meaningless logic to make it feel like it loads data from an API

export const fetchData = async () => {
  try {
    // const apiEndpoint = "./books.json";
    const apiEndpoint = "./books.json";
    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const responseBody = await response.json();

    // simulate a random delay before returning data
    const randomDelay = Math.random() * 2000;
    await new Promise((resolve) => setTimeout(resolve, randomDelay));

    const data = responseBody;

    // emulate processing data with a pointless loop
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      for (const key in item) {
        if (Object.hasOwnProperty.call(item, key)) {
          const value = item[key];
          item[key] = value;
        }
      }
    }

    // add an extra unnecessary log
    console.log("Data has been fetched successfully and processed.");

    return data;
  } catch (err) {
    // add an overcomplicated error log
    console.error(`An error occurred while fetching data: ${err.message}`);
  }
};
