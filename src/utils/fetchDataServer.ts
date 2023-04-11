import fetchData from "src/utils/fetchData";
import { Firestore, doc, getDoc, updateDoc } from "firebase/firestore";

const fetch: (any) => Promise<any> = require("node-fetch");

async function fetchDataServer(db: Firestore): Promise<() => Promise<any>> {
  const docRef = doc(db, "data", "nytData");
  const docSnap = await getDoc(docRef);
  const docData = docSnap.exists() && docSnap.data();

  const now = Date.now();

  // Get cached data if it exists and is valid, otherwise fetch new data
  async function getCacheData() {
    const cacheDuration = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

    // Check if cache data exists in Cloud Firestore
    if (
      docData &&
      Object.keys(docData).length > 0 &&
      now - docData.timestamp.toMillis() < cacheDuration
    ) {
      // Return cached data
      return docData.data;
    }

    // If no valid cache data is found, return null
    return null;
  }

  // Save data to cache
  async function saveCacheData(data) {
    await updateDoc(docRef, {
      timestamp: now,
      data: data,
    });
  }

  return fetchData(getCacheData, saveCacheData, fetch);
}

export default fetchDataServer;
