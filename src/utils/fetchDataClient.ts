import fetchData from "src/utils/fetchData";

const fs = {
  existsSync: (filename) => {
    return localStorage.getItem(filename) !== null;
  },
  readFileSync: (filename) => {
    return localStorage.getItem(filename);
  },
  writeFileSync: (filename, data) => {
    localStorage.setItem(filename, data);
  }
};

// Get cached data if it exists and is valid, otherwise fetch new data
async function getCacheData() {
  const cacheDuration = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
  const cacheFile = 'data.json';

    // Check if cache file exists locally
    if (fs.existsSync(cacheFile)) {
      const cacheData = JSON.parse(fs.readFileSync(cacheFile));
      const now = Date.now();

      // Check if cache data is still valid
      if (now - cacheData.timestamp < cacheDuration) {
        // Return cached data
        return cacheData.data;
      }
    }

  // If no valid cache data is found, return null
  return null;
}

// Save data to cache
async function saveCacheData(data) {
  const cacheFile = 'data.json';
  
  fs.writeFileSync(cacheFile, JSON.stringify({
    timestamp: Date.now(),
    data: data
  }));
}

export default fetchData(getCacheData, saveCacheData, window.fetch);
