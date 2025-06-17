import streamlit as st
import os
import base64

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
    # Chemin vers ton fichier PDF
    pdf_path = "CNAM/projet_expoped.pdf"


    # Ouvrir le fichier PDF et l'encoder en base64
    with open(pdf_path, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode('utf-8')

    # Afficher dans une iframe HTML
    pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="700" height="1000" type="application/pdf"></iframe>'
    st.components.v1.html(pdf_display, height=1000)


