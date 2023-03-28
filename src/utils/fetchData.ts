// Get cached data or fetch new data and save to cache
function fetchData(getCacheData: () => Promise<any>, saveCacheData: (data: any) => void, fetch: (any) => Promise<any>) {
  const fetchNewData = async () => {
    const apiKey = process.env.NYT_API_KEY;
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${apiKey}`);
    const data = await response.json();
    return data;
  }

  const getData = async () => {
    let data = await getCacheData();
    if (!data) {
      data = await fetchNewData();
      await saveCacheData(data);
    }
    return data;
  }

  return getData;
}

export default fetchData;
