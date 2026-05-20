# kisaan_bazar
🚀 Kisaan Bazar Setup Guide

Follow the steps below to fork, clone, and run the Kisaan Bazar project on your local machine.

1. Fork the Repository

First, fork the GitHub repository to your own GitHub account.

Repository Link

Kisaan Bazar GitHub Repository

2. Clone the Forked Repository
Open your forked repository on GitHub.
Click the Code button.
Select the HTTPS tab.
Copy the repository URL.

Run the following command in your Ubuntu/Linux terminal:
```
git clone https://github.com/your-username/kisaan_bazar.git
```
3. Navigate to the Project Directory
```
cd kisaan_bazar
```
4. Create a Virtual Environment
```
python3 -m venv .venv
```
5. Activate the Virtual Environment
```
source .venv/bin/activate
```
6. Install Required Dependencies
```
pip install -r requirements.txt
```
Note: If your project uses requirement.txt, rename it to requirements.txt for consistency.

7. Run the Application
```
python3 app.py
```
8. Open the Application

After the server starts, open your browser and visit:
```
http://127.0.0.1:5000
📁 Project Structure
kisaan_bazar/
│── app.py
│── requirements.txt
│── templates/
│── static/
│── .venv/
└── README.md
```
🛠️ Tech Stack
Python 3
Flask
HTML, CSS, JavaScript , vue
Bootstrap
🤝 Contributing
Fork the repository
Create a new branch
Make your changes
Commit your changes
Push to your fork
Create a Pull Request
📌 Useful Git Commands
git checkout -b feature-name
git add .
git commit -m "Add new feature"
git push origin feature-name
🌱 About Kisaan Bazar

Kisaan Bazar is a platform that connects local farmers directly with nearby customers, helping eliminate middlemen and ensuring fair prices for both farmers and consumers.