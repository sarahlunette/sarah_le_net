import streamlit as st
import os
st.title('Sarah LE NET blogpost')
pages = ['Natural Risks Prevention and Emergency Crisis', 'Health', 'Hackatons', 'Articles and Reposts', 'Teaching', 'Trips', 'Theater', 'Career', 'Entrepreneurship', 'Photography']
p_interest = ['Interviews', 'State-of-the-art', 'Articles']

hackatons = ['GeoHack AI', 'FrugalAI', "Bat'Adapt",
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
selected_article = st.sidebar.selectbox("Choisir un article", article_files)

# Charger et afficher l'article sélectionné
with open(f"articles/{selected_article}", "r", encoding="utf-8") as file:
    content = file.read()

st.title(selected_article.replace('.txt', '').replace('_', ' '))
st.write(content)

# Chemin vers ton fichier PDF
pdf_path = "CNAM/"Projet Expo'ped""

# Ouvrir le fichier PDF et l'encoder en base64
import base64
with open(pdf_path, "rb") as f:
    base64_pdf = base64.b64encode(f.read()).decode('utf-8')

# Afficher dans une iframe HTML
pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="700" height="1000" type="application/pdf"></iframe>'
st.components.v1.html(pdf_display, height=1000)


