# 🚢 MarineEye: AI-Powered Maritime Surveillance & Ship Detection System

## 📖 Project Description

MarineEye is an advanced Computer Vision and Maritime Intelligence system designed to automatically detect, monitor, and analyze vessels from maritime, aerial, and satellite imagery.

The system leverages a fine-tuned Faster R-CNN deep learning model to identify ships, generate precise bounding boxes, estimate vessel locations, and provide actionable maritime insights through an interactive dashboard.

Unlike traditional object detection projects that only identify objects, MarineEye transforms detections into intelligence by analyzing vessel positions, proximity relationships, traffic density, and potential collision risks.

The platform combines Artificial Intelligence, Computer Vision, and Data Analytics to assist maritime authorities, port operators, coast guards, and surveillance teams in monitoring vessel activities more efficiently.

---

## 🎯 Project Objectives

* Automatically detect ships from images.
* Localize vessels using bounding boxes.
* Estimate vessel size and position.
* Analyze maritime traffic patterns.
* Identify potential collision risks.
* Visualize results through a professional dashboard.
* Generate real-time maritime intelligence.

---

## 🚀 Key Features

### 🚢 Ship Detection

* Faster R-CNN based vessel detection.
* High-accuracy ship localization.
* Confidence score prediction.
* Bounding box visualization.

### ⚠️ Collision Risk Analysis

* Calculates distance between vessels.
* Detects closely positioned ships.
* Generates proximity alerts.

### 📊 Maritime Traffic Analytics

* Vessel density monitoring.
* Traffic trend visualization.
* Detection confidence analysis.
* Vessel size distribution analytics.

### 🎨 Interactive Dashboard

* Real-time detection interface.
* Image upload support.
* Downloadable detection results.
* Interactive charts and statistics.

---

## 🏗️ How the System Works

### Step 1: Image Input

The user uploads a maritime image or selects a sample image from the test dataset.

### Step 2: Image Processing

The image is preprocessed and converted into a format compatible with PyTorch.

### Step 3: AI Detection

The Faster R-CNN model detects ships and predicts:

* Bounding Boxes
* Confidence Scores
* Vessel Locations

### Step 4: Intelligence Generation

The system calculates:

* Vessel Centers
* Vessel Areas
* Distances Between Ships
* Potential Collision Risks

### Step 5: Visualization

Results are displayed through an interactive Streamlit dashboard with charts, alerts, and downloadable outputs.

---

## 🧠 Model Architecture

### Detection Model

Faster R-CNN

### Backbone

ResNet-50 + Feature Pyramid Network (FPN)

### Why Faster R-CNN?

* Excellent object localization.
* Strong performance on small and large vessels.
* High detection accuracy.
* Suitable for maritime surveillance applications.

---

## 📂 Project Structure

```text
MarineEye/
│
├── app.py
│
├── model/
│   ├── faster_rcnn.py
│   ├── train.py
│   ├── inference.py
│   └── dataset.py
│
├── outputs/
│   └── ship_model.pth
│
├── test_inputs/
│
├── requirements.txt
│
└── README.md
```

---

## 📊 Dashboard Modules

### 📊 Dashboard

Displays:

* Active vessels
* Detection statistics
* System health metrics
* Performance analytics

### 🔍 Live Detection

Provides:

* Image upload
* Ship detection
* Vessel details
* Export functionality

### 📈 Traffic Analysis

Provides:

* Vessel density trends
* Traffic monitoring
* Detection confidence distribution

### ⚠️ Alerts

Provides:

* Collision warnings
* Risk notifications
* Security alerts

---

## 💻 Technology Stack

| Category             | Technology   |
| -------------------- | ------------ |
| Programming Language | Python       |
| Deep Learning        | PyTorch      |
| Object Detection     | Faster R-CNN |
| Computer Vision      | OpenCV       |
| Dashboard            | Streamlit    |
| Visualization        | Plotly       |
| Data Analysis        | Pandas       |
| Numerical Computing  | NumPy        |

---

# ⚙️ Setup & Run Commands

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

### Linux/Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 🏋️ Train Model

```bash
python model/train.py
```

Trained model will be saved as:

```text
outputs/ship_model.pth
```

---

# 🔍 Run Inference

```bash
python model/inference.py
```

---

# 🌐 Launch Dashboard

```bash
streamlit run app.py
```

Open:

```text
http://localhost:8501
```

---

## 👨‍💻 Author

Paramesh B

Machine Learning Engineer | Computer Vision Developer

GitHub: https://github.com/b-paramesh

---

⭐ If you found this project useful, consider starring the repository.
