import fetchData from "src/utils/fetchData";

const admin = require('firebase-admin');
const fetch: (any) => Promise<any> = require('node-fetch');

// Get cached data if it exists and is valid, otherwise fetch new data
async function getCacheData() {
  const cacheDuration = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
  let cacheData;

  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });

  // Check if cache data exists in Cloud Firestore
  const db = admin.firestore();
  const cacheRef = db.collection('cache').doc('nytData');
  const cacheDoc = await cacheRef.get();
  if (cacheDoc.exists) {
    cacheData = cacheDoc.data();
    const now = Date.now();

    // Check if cache data is still valid
    if (now - cacheData.timestamp.toMillis() < cacheDuration) {
      // Return cached data
      return cacheData.data;
    }
  }

  // If no valid cache data is found, return null
  return null;
}

// Save data to cache
async function saveCacheData(data) {
  const db = admin.firestore();
  const cacheRef = db.collection('cache').doc('nytData');
  await cacheRef.set({
    timestamp: admin.firestore.Timestamp.now(),
    data: data
  });
}

export default fetchData(getCacheData, saveCacheData, fetch);
