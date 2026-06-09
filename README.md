# 🚢 MarineEye: AI-Powered Maritime Surveillance & Ship Detection System

## 📖 Project Description

MarineEye is an end-to-end AI-powered maritime surveillance platform that automatically detects, monitors, and analyzes vessels from satellite, aerial, and maritime imagery.

The system combines **Deep Learning**, **Computer Vision**, **Maritime Intelligence**, and **Interactive Analytics** to transform raw images into actionable insights for maritime authorities, coast guards, port operators, and surveillance teams.

At its core, MarineEye uses a fine-tuned **Faster R-CNN** model to detect ships with high accuracy. Beyond object detection, the system performs vessel localization, collision-risk analysis, traffic monitoring, and intelligent alert generation through both a professional React dashboard and a Streamlit-based demonstration interface.

Unlike traditional object detection systems that simply identify objects, MarineEye converts detections into maritime intelligence by analyzing vessel positions, proximity relationships, traffic density, and potential safety risks.

---

# 🎯 Project Objectives

* Detect ships automatically from maritime imagery.
* Localize vessels using precise bounding boxes.
* Estimate vessel size and position.
* Monitor maritime traffic patterns.
* Identify potential collision risks.
* Provide real-time intelligence through dashboards.
* Generate visual analytics and alerts.

---

# 🚀 Key Features

## 🚢 AI Ship Detection

* Faster R-CNN based vessel detection.
* High-accuracy localization.
* Confidence score prediction.
* Bounding box visualization.

## 📍 Vessel Intelligence

* Vessel center calculation.
* Area estimation.
* Position tracking.
* Detection confidence analysis.

## ⚠️ Collision Risk Detection

* Calculates distance between vessels.
* Detects proximity violations.
* Generates risk alerts.
* Highlights potential collision zones.

## 📊 Maritime Traffic Analytics

* Vessel density monitoring.
* Traffic trend analysis.
* Activity visualization.
* Detection statistics.

## 🚨 Alert Management

* Proximity alerts.
* Risk notifications.
* System status alerts.
* Maritime safety warnings.

## 🎨 Professional Dashboard

* Interactive visualizations.
* Real-time monitoring.
* Downloadable detection outputs.
* Dynamic threshold tuning.

---

# 🏗️ System Architecture

```text
Maritime Image
      │
      ▼
Image Preprocessing
      │
      ▼
Faster R-CNN Model
      │
      ▼
Ship Detection
      │
 ┌────┴────┐
 ▼         ▼
Collision  Vessel
Analysis Intelligence
     │
     ▼
Alerts & Analytics
     │
     ▼
Dashboard Visualization
```

---

# 🧠 AI Model Architecture

## Detection Model

**Faster R-CNN**

The model follows a two-stage object detection approach:

### Stage 1: Region Proposal Network (RPN)

Identifies image regions that potentially contain ships.

### Stage 2: Classification & Localization

Classifies proposed regions and predicts accurate bounding boxes.

---

## Backbone Network

**ResNet-50 + Feature Pyramid Network (FPN)**

Advantages:

* High detection accuracy
* Multi-scale object detection
* Strong localization performance
* Robust maritime object recognition

---

# 🔄 How the Project Was Built

## Phase 1: Data Collection

* Collected maritime images.
* Gathered satellite and aerial ship imagery.
* Prepared vessel datasets.

## Phase 2: Annotation

Images were annotated using Pascal VOC XML format.

Each ship was labeled with:

* xmin
* ymin
* xmax
* ymax

coordinates representing vessel boundaries.

## Phase 3: Dataset Processing

A custom dataset pipeline was implemented to:

* Load images.
* Parse XML annotations.
* Convert data into PyTorch tensors.
* Prepare training batches.

## Phase 4: Model Training

The Faster R-CNN model was fine-tuned on the maritime dataset.

Training process:

```text
Dataset
   │
   ▼
DataLoader
   │
   ▼
Faster R-CNN
   │
   ▼
Loss Calculation
   │
   ▼
Backpropagation
   │
   ▼
Weight Update
```

## Phase 5: Inference Pipeline

```text
Input Image
      │
      ▼
Preprocessing
      │
      ▼
Model Prediction
      │
      ▼
Non-Maximum Suppression
      │
      ▼
Ship Detection Results
```

## Phase 6: Dashboard Development

Built using:

* Streamlit
* FastAPI
* React
* Plotly
* OpenCV
* Pandas

to visualize and analyze vessel intelligence.

---

# 📊 Dashboard Modules

## 📊 Dashboard

Displays:

* Active vessels
* Daily detections
* Risk statistics
* System health
* Model performance metrics

## 🔍 Live Detection

Provides:

* Image upload support
* Vessel detection
* Confidence visualization
* Vessel information panels
* Detection export functionality

## 📈 Traffic Analysis

Provides:

* Hourly vessel density
* Traffic monitoring
* Vessel size distribution
* Confidence score analysis

## ⚠️ Alerts

Provides:

* Collision warnings
* Risk notifications
* Security alerts
* System events

---

# 📂 Project Structure

```text
MarineEye/
│
├── backend/
│   ├── main.py
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   ├── package.json
│   └── ...
│
├── model/
│   ├── dataset.py
│   ├── train.py
│   ├── inference.py
│   └── faster_rcnn.py
│
├── outputs/
│   └── ship_model.pth
│
├── test_inputs/
│
├── app.py
│
├── requirements.txt
│
└── README.md
```

---

# 💻 Technology Stack

| Category            | Technology   |
| ------------------- | ------------ |
| Language            | Python       |
| Backend             | FastAPI      |
| Frontend            | React + Vite |
| Dashboard           | Streamlit    |
| Deep Learning       | PyTorch      |
| Object Detection    | Faster R-CNN |
| Computer Vision     | OpenCV       |
| Visualization       | Plotly       |
| Data Analysis       | Pandas       |
| Numerical Computing | NumPy        |

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/b-paramesh/MarineEye.git

cd MarineEye
```

## Create Virtual Environment

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv

source venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 🏋️ Train the Model

Prepare dataset:

```text
dataset/
├── images/
└── annotations/
```

Start training:

```bash
python model/train.py
```

Generated model:

```text
outputs/ship_model.pth
```

---

# 🔍 Run Inference

```bash
python model/inference.py
```

The model will:

* Load trained weights.
* Detect ships.
* Generate bounding boxes.
* Save annotated output images.

---

# ⚡ Run FastAPI Backend

Navigate to backend folder:

```bash
cd backend
```

Start server:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

API Documentation:

```text
http://localhost:8000/docs
```

---

# 🎨 Run React Frontend

Navigate to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

Production build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

# 🚢 Run Streamlit Dashboard

The Streamlit dashboard provides a lightweight alternative to the full React + FastAPI architecture.

From the project root:

```bash
streamlit run app.py
```

Dashboard URL:

```text
http://localhost:8501
```

---

# 🚀 Quick Start (Complete System)

Open three terminals.

### Terminal 1 – Backend

```bash
cd backend

uvicorn main:app --reload
```

### Terminal 2 – Frontend

```bash
cd frontend

npm install

npm run dev
```

### Terminal 3 – Optional Model Training

```bash
python model/train.py
```

Access:

```text
Frontend : http://localhost:5173

Backend  : http://localhost:8000

Swagger  : http://localhost:8000/docs
```

---

# 🚢 Quick Start (Streamlit Demo)

```bash
streamlit run app.py
```

Access:

```text
http://localhost:8501
```

---

# 🚀 Future Enhancements

* Real-Time Video Detection
* AIS Integration
* Vessel Classification
* Route Prediction
* Multi-Camera Monitoring
* Cloud Deployment
* Automated Reporting
* Docker Support

---

# 👨‍💻 Author

**Paramesh B**

Machine Learning Engineer | AI Developer | Computer Vision Enthusiast

GitHub:
https://github.com/b-paramesh

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🛠️ Contribute to improvements

📢 Share it with others
