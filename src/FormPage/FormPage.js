import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function FormPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    author: "",
    location: "",
    description: "",
    image: null,
  });

  const updateData = (e, name) => {
    const { value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }))
  }

  const updateFile = (e) => {
    const imageFile = e.target.files[0];
    setFormData((data) => ({
      ...data,
      image: imageFile
    }))
  }


  const submitForm = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("author", formData.author);
    formDataObj.append("location", formData.location);
    formDataObj.append("description", formData.description);
    formDataObj.append("image", formData.image);

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/post`, {
      method: "post",
      body: formDataObj,
    });

    const data = await response.json();
    navigate("/posts");
  };

  return (
    <>
      <NavBar />
      <div className="my-form">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="formFile"></label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              capture="image/*"
              name="image"
              onChange={(e) => {
                updateFile(e);
              }}
            />
          </div>
          <div className="my-input-wrapper">
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label htmlFor="authorName"></label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="authorName"
                  placeholder="Author"
                  className="form-control"
                  value={formData.author}
                  onChange={(e) => {
                    updateData(e, 'author');
                  }}
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label htmlFor="location"></label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => updateData(e, 'location')}
                />
              </div>
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="discription"></label>
            </div>
            <div className="col-auto description-inp-box">
              <input
                type="text"
                id="discription"
                placeholder="Description"
                className="form-control"
                value={formData.description}
                onChange={(e) => updateData(e, 'description')}
              />
            </div>
          </div>
          <div className="my-btn-box">
            <button type="submit" className="btn btn-light btn">
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default FormPage;
