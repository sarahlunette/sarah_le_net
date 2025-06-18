import streamlit as st
import os
import base64
import threading
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn

st.title('Sarah LE NET blogpost')
pages = ['Natural Risks Prevention and Emergency Crisis', 'Health', 'Hackathons', 'Articles and Reposts', 'Teaching', 'Trips', 'Theater', 'Career', 'Entrepreneurship', 'Photography', 'CNAM']
sidebar = st.sidebar.selectbox("Projects", pages)

p_interest = ['Interviews', 'State-of-the-art', 'Articles']

hackathons = ['GeoHack AI', 'FrugalAI', "Bat'Adapt",
             'AI Action Summit',
             'Women in Data Science', 
             'Microsoft AI Agents - Emergency App', 
             'Social Media for Resource Allocation in Emergency Crisis', 
             'ESPF, Survival Projection of Railways in Climate Change', 
             'Climate Relief to Resilience']

articles = ['Environment', 'Data and Tech', 'Entrepreneurship', 'Events and discoveries']

teaching = ['Data Engineering', 'MLOPS', 'Data Science']
trips = ['South America', 'Greece']
career = ['Endeavor', 'CV', 'Certifications', 'University Projects', 'Portfolio']
entrepreneurship = ['The Bubble', '?']

# Récupérer la liste des fichiers .txt
article_files = [f for f in os.listdir("articles") if f.endswith(".txt")]

# Afficher une liste déroulante pour choisir un article
if sidebar==pages[3]:
    selected_article = st.selectbox("Choose an article", article_files)

    # Charger et afficher l'article sélectionné
    with open(f"articles/{selected_article}", "r", encoding="utf-8") as file:
        content = file.read()

    st.title(selected_article.replace('.txt', '').replace('_', ' '))
    st.write(content)

if sidebar==pages[2]:
    selected_hackathons = st.selectbox("Choose a hackathon", hackathons)

if sidebar==pages[10]:
    st.title('CNAM')
    # Path where your PDF is located
    pdf_dir = "CNAM"
    pdf_file = "projet_expoped.pdf"

    app = FastAPI()

    # Mount static files directory so FastAPI serves them over HTTP
    app.mount("/static", StaticFiles(directory=pdf_dir), name="static")

    def run_api():
        uvicorn.run(app, host="127.0.0.1", port=8000, log_level="error")

    # Start FastAPI in background thread (only once)
    if 'api_thread' not in st.session_state:
        thread = threading.Thread(target=run_api, daemon=True)
        thread.start()
        st.session_state.api_thread = thread

    # Streamlit UI
    pdf_url = f"http://127.0.0.1:8000/static/{pdf_file}"

    st.markdown(f'<iframe src="{pdf_url}" width="700" height="900"></iframe>', unsafe_allow_html=True)

