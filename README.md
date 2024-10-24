# Plant Disease Detection System

This project was developed as part of the Smart India Hackathon. It is a web-based application that predicts plant diseases from uploaded leaf images using a deep learning model. The system is designed to assist farmers and agriculturists in identifying diseases in various crops and providing information on how to manage or treat them.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Model Details](#model-details)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Overview

Plant diseases can have a significant impact on crop yield and quality. Early detection of these diseases can help mitigate their effects. This system allows users to upload an image of a plant leaf, and it predicts the type of disease (if any) using a deep learning model trained on various plant diseases. Along with the prediction, the system provides information on how to prevent or treat the disease.

## Features

- Upload images of plant leaves for disease prediction.
- Deep learning-based model for high accuracy in disease detection.
- Detailed information about each disease, including causes and preventive measures.
- Simple and intuitive user interface.
- Responsive design that works across devices.

## Technologies Used

- **Backend**: Flask
- **Frontend**: React.js
- **Deep Learning Model**: PyTorch, ResNet9
- **Image Processing**: Pillow, torchvision
- **Data**: Custom dataset of plant leaf diseases
- **Other**: Flask-CORS, HTML/CSS

## Installation

### Prerequisites

- Python 3.8 or above
- Node.js
- pip (Python package installer)

### Clone the Repository

```bash
git clone https://github.com/your-username/plant-disease-detection.git
cd plant-disease-detection
```

### Backend Setup

1. Install Python dependencies:

```bash
pip install -r backend/requirements.txt
```

2. Run the Flask backend:

```bash
cd backend
python app.py
```

### Frontend Setup

1. Navigate to the `frontend` folder:

```bash
cd frontend
```

2. Install Node.js dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

## Usage

1. Open the application in your web browser at `http://localhost:3000`.
2. Select an image of a plant leaf to upload.
3. Click the "Predict" button to get the disease prediction.
4. View the result on the prediction page, which includes the disease name, cause, and prevention/treatment steps.

## Model Details

The plant disease detection model is based on the ResNet9 architecture. It was trained on a dataset containing multiple classes of plant diseases, including:

- Apple scab
- Bacterial spot
- Early blight
- Powdery mildew
- Tomato Yellow Leaf Curl Virus
- And many more...

The model uses image preprocessing techniques such as resizing and normalization, followed by classification into disease categories.

## Screenshots

*Include screenshots here to show how the app looks and functions.*

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push the changes to your branch (`git push origin feature-branch`).
5. Open a pull request.

## Acknowledgements

- Inspiration for this project came from the GitHub account [AnMol12499](https://github.com/AnMol12499).
- The frontend template was adapted from [Creative-Tim](https://www.creative-tim.com/).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
