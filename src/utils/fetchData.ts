/**
 * The module that fetches data from the NYT API.
 * Also, it caches the data in the browser's local storage.
 *
 * @module src/utils/fetchData
 * @returns {Promise} Promise that resolves to the data from the NYT API
 */

const fs = {
  existsSync: (filename) => {
    return localStorage.getItem(filename) !== null;
  },
  readFileSync: (filename) => {
    return localStorage.getItem(filename);
  },
  writeFileSync: (filename, data) => {
    localStorage.setItem(filename, data);
  },
};

/**
 * Saves the data to the local storage
 *
 * @param data The data to be saved
 */
const saveCacheData = async (data: NYTData) => {
  const cacheFile = "data.json";

  fs.writeFileSync(
    cacheFile,
    JSON.stringify({
      timestamp: Date.now(),
      data: data,
    })
  );
};

/**
 * Obtain the cached data from the local storage
 *
 * @returns {CachedData | null} The cached data or null if no data is found
 */
const getCacheData = () => {
  let data: CachedData | null = null;

  if (fs.existsSync("data.json")) {
    data = JSON.parse(fs.readFileSync("data.json"));
  }

  // If no valid cache data is found, return null
  return data;
};

/**
 * Checks if the cached data is current
 *
 * @param data The cached data
 * @returns {boolean} True if the cached data is current, false otherwise
 */
const isDataCurrent = (data: CachedData) => {
  const cacheDuration = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

  // Check if cache data exists in Cloud Firestore
  if (data && Date.now() - data.timestamp < cacheDuration) {
    // Return cached data
    return true;
  }

  return false;
};

/**
 * Fetches new data from the NYT API
 *
 * @returns {Promise} Promise that resolves to the data from the NYT API
 */
const fetchNewData = async (): Promise<NYTData> => {
  const apiKey = process.env.NYT_API_KEY;
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${apiKey}`
  );
  const data = await response.json();
  return data;
};

/**
 * Main function that checks the cache and fetches new data if needed
 *
 * @returns {Promise} Promise that resolves to the data from the NYT API
 */
const fetchData = async (): Promise<NYTData> => {
  let data: CachedData | null | NYTData = await getCacheData();

  // If no valid cache data is found, fetch new data
  if (!data || !isDataCurrent(data)) {
    data = await fetchNewData();
    await saveCacheData(data);
  } else { // Otherwise, use the cached data
    data = data.data;
  }
  return data as NYTData;
};

export default fetchData;
