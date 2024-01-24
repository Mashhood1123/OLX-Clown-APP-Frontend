// import React from "react";
// import { Header } from "../Components/Header";
// import { Footer } from "../Components/Footer";
// import { ProductPageProductSection } from "../Components/ProductPageProductSection";
// import { useParams } from "react-router-dom";
// import { cardData } from "../utility/constants";
// // import { LoginComponent } from "../Components/LoginComponent";
// export const ProductPage = () => {
//   const params = useParams();
//   const data = cardData.find((el) => el.id === Number(params.id));

//   return (
//     <div className="product-page-main-container">
//       <Header />
//       <ProductPageProductSection {...data} />
//       <Footer />
//       {/* <LoginComponent/> */}
//     </div>
//   );
// };

import React, { useEffect } from "react";
import { useState } from "react";
import { fetchAllAds } from "../api";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { ProductPageProductSection } from "../Components/ProductPageProductSection";
import { useParams } from "react-router-dom";
import { cardData } from "../utility/constants";
// import { LoginComponent } from "../Components/LoginComponent";
export const ProductPage = () => {
  const [data, setData] = useState([]);

  const [paramData, setParamData] = useState(null);

  const params = useParams();
  // console.log (data);
  // console.log (params.id);

  // const paramData = data.find((el) => el._id===params.id);   this was done by me before adding 2nd useEffect

  console.log(paramData);

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

  useEffect(() => {
    const product = data.find((el) => el._id === params.id);
    setParamData(product);
  }, [data, params.id]);

  return (
    <div className="product-page-main-container">
      <Header />
      {/* {data.map((obj) => (
        <ProductPageProductSection
          title={obj.title}
          description={obj.description}
          imgurl={obj.imgurl}
          id={obj._id}
        />
      ))} */}

      {paramData ? (
        <ProductPageProductSection
          fetchAds={fetchAds}
          title={paramData.title}
          description={paramData.description}
          imgurl={paramData.imgurl}
          id={paramData._id}
        />
      ) : (
        <p>Product not found</p>
      )}

      <Footer />
      {/* <LoginComponent/> */}
    </div>
  );
};
