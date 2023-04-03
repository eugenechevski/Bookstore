import fetchData from "src/utils/fetchData";
import data from 'src/data.json'

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
  return data.data;
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
