import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const COLLECTION_NAME = "your_collection";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 NEW loading state
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // 👈 Done checking auth
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out.");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) return <div>Loading...</div>; // 👈 Wait until auth is ready
  if (!user) return <div>Please log in to view this page.</div>;

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Welcome, {user?.email}</h2>
      <button onClick={handleLogout}>Logout</button>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default Admin;

