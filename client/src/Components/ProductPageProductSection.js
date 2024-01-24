// import React from "react";
// import ShareSharpIcon from "@mui/icons-material/ShareSharp";
// import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
// import { NavLink } from "react-router-dom";
// export const ProductPageProductSection = (props) => {
//   const { url, heading, description } = props;
//   return (
//     <div className="product-section-main-container">
//       <div className="left-image-section">
//         <div className="image-container">
//           <img
//             src={url}
//             alt="Dices"
//             className="product-image"
//           />
//         </div>
//         <div className="description-under-image">
//           <h2>{heading}</h2>
//           <p>
//             {description}
//           </p>
//         </div>
//       </div>
//       <div className="right-details-section">
//         <div class="price-box">
//           <div class="heading">Price</div>
//           <div class="icons">
//             <ShareSharpIcon fontSize="small" />
//             <FavoriteBorderSharpIcon fontSize="small" />
//           </div>
//           <div class="description">Dice for ludo</div>
//           <p className="address">Karachi,Pakistan</p>
//           <div class="footer">Day</div>
//         </div>
//         <div className="seller-info">
//           <p className="seller-description">seller-description</p>
//           <div className="seller-image-name-date">
//             <img
//               alt="seller-image"
//               className="seller-image"
//               src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=594&q=80"
//             ></img>
//             <div className="seller-name-date">
//               <h3 className="jamshaid">Jamshaid</h3>
//               <h6 className="jamsaid-date">Member since Nov 2021</h6>
//             </div>
//           </div>
//           <NavLink className="ChatPage-Nav" to="/ChatPage">
//             <button className="chat-with-seller">Chat with Seller</button>
//           </NavLink>
//         </div>
//         <div className="location-container">
//           <div className="location-des">
//             <h3 className="posted-in">Posted in</h3>
//             <h5 className="location-address">Johar Town, Lahore</h5>
//           </div>
//           <div className="location-map">
//             <img
//               className="map"
//               alt="map"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsl2Md55t3J8WV4pZA9KBmyzHOG-0SZ185hN3Ubg_9t59OhBohpU74cyZzkJN4uW3aOE&usqp=CAU"
//             ></img>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





import React from "react";
import { useEffect } from "react";
import { updateDescriptionFunc, updateTitleFunc } from "../api";
import { useState } from "react";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { NavLink } from "react-router-dom";
export const ProductPageProductSection = ({ title, description, imgurl, id, fetchAds }) => {



  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleTitleUpdate = () => {
    setIsEditingTitle(true);
  };

  const handleDescriptionUpdate = () => {
    setIsEditingDescription(true);
  };

  const handleSaveTitle = async() => {
    // Save the updated title and exit editing mode
    await updateTitleFunc(id, newTitle);
    console.log(newTitle);
    await fetchAds();
    setIsEditingTitle(false);
  };

  const handleSaveDescription = async() => {
    // Save the updated description and exit editing mode
    await updateDescriptionFunc(id, newDescription);
    await fetchAds();
    setIsEditingDescription(false);
  };


  useEffect(() => {
    setNewTitle(title);
  }, [title]);


  return (
    <div className="product-section-main-container">
      <div className="left-image-section">
        <div className="image-container">
          <img
            src={imgurl}
            alt="Dices"
            className="product-image"
          />
        </div>
        <div className="description-under-image">
        {isEditingTitle ? (
            <div>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button onClick={handleSaveTitle}>Save</button>
            </div>
          ) : (
            <div>
              <h2>{newTitle}</h2>
              <button onClick={handleTitleUpdate}>Update Title</button>
            </div>
          )}
          {isEditingDescription ? (
            <div>
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button onClick={handleSaveDescription}>Save</button>
            </div>
          ) : (
            <div>
              <p>{newDescription}</p>
              <button onClick={handleDescriptionUpdate}>Update Description</button>
            </div>
          )}
        </div>
      </div>
      <div className="right-details-section">
        <div class="price-box">
          <div class="heading">Price</div>
          <div class="icons">
            <ShareSharpIcon fontSize="small" />
            <FavoriteBorderSharpIcon fontSize="small" />
          </div>
          <div class="description">Dice for ludo</div>
          <p className="address">Karachi,Pakistan</p>
          <div class="footer">Day</div>
        </div>
        <div className="seller-info">
          <p className="seller-description">seller-description</p>
          <div className="seller-image-name-date">
            <img
              alt="seller-image"
              className="seller-image"
              src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=594&q=80"
            ></img>
            <div className="seller-name-date">
              <h3 className="jamshaid">Jamshaid</h3>
              <h6 className="jamsaid-date">Member since Nov 2021</h6>
            </div>
          </div>
          <NavLink className="ChatPage-Nav" to="/ChatPage">
            <button className="chat-with-seller">Chat with Seller</button>
          </NavLink>
        </div>
        <div className="location-container">
          <div className="location-des">
            <h3 className="posted-in">Posted in</h3>
            <h5 className="location-address">Johar Town, Lahore</h5>
          </div>
          <div className="location-map">
            <img
              className="map"
              alt="map"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsl2Md55t3J8WV4pZA9KBmyzHOG-0SZ185hN3Ubg_9t59OhBohpU74cyZzkJN4uW3aOE&usqp=CAU"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};









//retrn area before adding upadte title and update desription.

// return (
//   <div className="product-section-main-container">
//     <div className="left-image-section">
//       <div className="image-container">
//         <img
//           src={imgurl}
//           alt="Dices"
//           className="product-image"
//         />
//       </div>
//       <div className="description-under-image">
//         <h2>{title}</h2>
//         <Button>Update Title</Button>
//         <p>
//           {description}
//         </p>
//         <Button>Update Description</Button>
//       </div>
//     </div>
//     <div className="right-details-section">
//       <div class="price-box">
//         <div class="heading">Price</div>
//         <div class="icons">
//           <ShareSharpIcon fontSize="small" />
//           <FavoriteBorderSharpIcon fontSize="small" />
//         </div>
//         <div class="description">Dice for ludo</div>
//         <p className="address">Karachi,Pakistan</p>
//         <div class="footer">Day</div>
//       </div>
//       <div className="seller-info">
//         <p className="seller-description">seller-description</p>
//         <div className="seller-image-name-date">
//           <img
//             alt="seller-image"
//             className="seller-image"
//             src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=594&q=80"
//           ></img>
//           <div className="seller-name-date">
//             <h3 className="jamshaid">Jamshaid</h3>
//             <h6 className="jamsaid-date">Member since Nov 2021</h6>
//           </div>
//         </div>
//         <NavLink className="ChatPage-Nav" to="/ChatPage">
//           <button className="chat-with-seller">Chat with Seller</button>
//         </NavLink>
//       </div>
//       <div className="location-container">
//         <div className="location-des">
//           <h3 className="posted-in">Posted in</h3>
//           <h5 className="location-address">Johar Town, Lahore</h5>
//         </div>
//         <div className="location-map">
//           <img
//             className="map"
//             alt="map"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsl2Md55t3J8WV4pZA9KBmyzHOG-0SZ185hN3Ubg_9t59OhBohpU74cyZzkJN4uW3aOE&usqp=CAU"
//           ></img>
//         </div>
//       </div>
//     </div>
//   </div>
// );