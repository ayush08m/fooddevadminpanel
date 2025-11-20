import React from "react";
import "./AddFoodData.css";
// firebase imports
import { db, storage } from "../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddFoodData = () => {
  const [foodName, setFoodName] = React.useState("");
  const [foodPrice, setFoodPrice] = React.useState("");
  const [foodImage, setFoodImage] = React.useState("");
  const [foodDescription, setFoodDescription] = React.useState("");
  const [foodCategory, setFoodCategory] = React.useState("");
  const [restraurantName, setRestraurantName] = React.useState("");
  const [restraurantAddress, setRestraurantAddress] = React.useState('');
  const [restraurantPhoneNo, setRestraurantPhoneNo] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const foodData = {
      foodName,
      foodPrice,
      foodImage,
      foodDescription,
      foodCategory,
      restraurantPhoneNo,
      restraurantName,
      restraurantAddress
    
    };
    // console.log(foodData);
    try {
      const docRef = await addDoc(collection(db, "FoodData"), foodData);
      alert("Data Added Sucessfully ", docRef.id);
    } catch (error) {
      alert("Error adding document: ", error);
    }
  };
  return (
    <div className="form-outer">
      <h1>Add Food Data</h1>
      <form className="form-inner">
        <label>Food Name</label>
        <input
          type="text"
          placeholder="Enter Food Name"
          name="food_name"
          onChange={(e) => {
            setFoodName(e.target.value);
          }}
        />
        <br />
        <label>Food Description</label>
        <input
          type="text"
          placeholder="Enter Food Description"
          name="food_description"
          onChange={(e) => {
            setFoodDescription(e.target.value);
          }}
        />
        <br />
        <label>Food Price</label>
        <input
          type="text"
          placeholder="Enter Food Price"
          name="food_price"
          onChange={(e) => {
            setFoodPrice(e.target.value);
          }}
        />
        <br />
        <label>Food Category</label>
        <input
          type="text"
          placeholder="Enter Food Category (Veg/Non-Veg)"
          name="food_category"
          onChange={(e) => {
            setFoodCategory(e.target.value);
          }}
        />
        <br />
        <label>Food Image URL</label>
        <input
          type="text"
          placeholder="Enter Food Image URL(Web Url)"
          name="food_image"
          onChange={(e) => {
            setFoodImage(e.target.value);
          }}
        />
        <br />
        <label>Restraurant Name</label>
        <input
          type="text"
          placeholder="Enter Restraurant Address"
          name="restraurant_name"
          onChange={(e) => {
            setRestraurantName(e.target.value);
          }}
        />
        <br />
        <label>Restraurant Address</label>
        <input
          type="text"
          placeholder="Enter Restraurant Address"
          name="restraurant_name"
          onChange={(e) => {
            setRestraurantAddress(e.target.value);
          }}
        />
        <br />
        <label>Restraurant Phone No.</label>
        <input
          type="text"
          placeholder="Enter Restraurant Number"
          name="restraurant_number"
          onChange={(e) => {
            setRestraurantPhoneNo(e.target.value);
          }}
        />
        <br />
        <button onClick={handleSubmit} type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoodData;
