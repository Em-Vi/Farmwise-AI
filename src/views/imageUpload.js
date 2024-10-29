import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './imageUpload.css';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error("Error making prediction");
      }

      const result = await response.json();
      navigate('/predicted', { state: result.prediction });
    } catch (error) {
      console.error("Error: ", error);
      alert("Failed to get prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-upload-container">
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <img
            className="image-preview"
            src={URL.createObjectURL(selectedImage)} 
            alt="Selected"
          />
        </div>
      )}
      <button className="upload-button" onClick={handleUpload} disabled={loading}>
        {loading ? "Predicting" : "Predict"}
      </button>   
      
    </div>
  );
};

export default ImageUpload;
