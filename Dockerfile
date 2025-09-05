FROM python:3.11-slim

# Installer les dépendances
WORKDIR .
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier ton app
COPY . .

# Lancer streamlit
CMD ["streamlit", "run", "demo.py", "--server.port=8501", "--server.address=0.0.0.0"]