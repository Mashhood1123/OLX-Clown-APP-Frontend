import React, { useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { createAd } from "../api";

export const Addad = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setImgurl] = useState("");

  const[usererr, setUsererr]= useState(false);

  const[descriptionerr, setDescriptionerr]= useState(false);

  const titleChange = (e) => {
    let titleInput = e.target.value;
    if(titleInput.length===0){
      setUsererr(true);
    }else{
      setUsererr(false);
    }
    setTitle(e.target.value);
  };

  const descriptionChange = (e) => {
    let descriptionInput = e.target.value;
    if(descriptionInput.length<5){
      setDescriptionerr(true);
    }else{
      setDescriptionerr(false);
    }
    setDescription(e.target.value);
  };

  const imgurlChange = (e) => {
    setImgurl(e.target.value);
  };

  const sendAdData = async () => {
    console.log(description);
    // const data = { title, description, imgurl };
    // if(!data){
    //   createAd(false)
    // };
    try {
      if(!title || !description || !imgurl) return null;
      await createAd({ title, description, imgurl });
    } catch (error) {
      console.log("Error:", error.message)
    }
    
  };

  return (
    <div className="Ad-Add-Container">
      <Header />
      <div className="Add-Ad-Form">
        <p className="Add-paragraphs">Add Title</p>
        <input
          value={title}
          className="Add-Title"
          onChange={titleChange}
          placeholder="Add your Ad Title"
        /><br/>{usererr?<span className="error">Add Title</span>:""}
        <p className="Add-paragraphs">Add Description</p>
        <input
          value={description}
          className="Add-Description"
          onChange={descriptionChange}
          placeholder="Add your Ad Description"
        /><br/>{descriptionerr?<span className="error">Description should be more than 5 letters</span>:""}
        <p className="Add-paragraphs">Add Image URL</p>
        <input
          value={imgurl}
          className="Add-Image-URL"
          onChange={imgurlChange}
          placeholder="Add your Ad Image URL"
        />
        <button disabled={!title || !description || !imgurl}  className="AdButton" onClick={sendAdData}>
          Ad Add
        </button>
      </div>
      <Footer />
    </div>
  );
};
