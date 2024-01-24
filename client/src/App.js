import React, { useEffect, useState } from "react";
import "./olx.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { MainPageBody } from "./Components/MainPageBody";
import { fetchAllAds } from "./api";
function App() {
  const [data, setData] = useState([]);

  const fetchAds = async () => {
    try {
      const response = await fetchAllAds();
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div className="App">
      <Header />
      {data.map((obj) => (
        <MainPageBody
          // fetchAds={obj.fetchAds}
          fetchAds={fetchAds}
          title={obj.title}
          description={obj.description}
          imgurl={obj.imgurl}
          id={obj._id}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
