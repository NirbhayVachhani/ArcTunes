# ADR - Database Storage
**Status:** Proposed  

## Context
To ensure a seamless experience in our music streaming app, a reliable database storage solution is essential for handling user data, playlists, and song information. The setup must support real-time data synchronization and offline caching.

## Decision
We will use Firebase Firestore for cloud storage and AsyncStorage for local caching.

## Rationale
- **Real-Time Sync:** Firestore allows users to see updates instantly across devices.
- **Offline Access:** Firestore's offline persistence enables data access without an internet connection.
- **Integration:** Firebase integrates well with React Native, providing built-in security features.

### Pros:
- **Scalability:** Firebase can grow with our user base.
- **Enhanced User Experience:** Offline access allows enjoyment of downloaded music.

### Challenges:
- **Cost:** Pricing may become a concern as usage increases.
- **Local Storage Limitations:** AsyncStorage may not be sufficient for larger datasets, requiring a more robust solution.
