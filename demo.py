import streamlit as st
import os
import base64
import urllib.parse
from github import Github
from dotenv import load_dotenv
from github import Auth

load_dotenv()
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

pages = ['Presentation', 'Hackathons', 'Articles', 'Teaching', 'Career', 'Entrepreneurship', 'CNAM: Metrology and Citizen Sciences', 'La Jaune et La Rouge','Trips', 'Theater', 'Photography']
st.sidebar.markdown(
    "<h3 style='font-size:32px;'>PROJECTS</h3>", 
    unsafe_allow_html=True
)
sidebar = st.sidebar.radio("", pages)

p_articles = ['Interviews', 'State-of-the-art', 'Articles']
p_entrepreneurship = ['The Bubble', 'The Lab']
p_trips = ['South America', 'Sri Lanka', 'Italy']
p_theater = ['Workshops', 'Plays', 'Puppets']


hackathons = ['GeoHack AI', 'FrugalAI', "Bat'Adapt", 'SAM API',
             'Tsunamis Project',
             'AI Action Summit',
             'Women in Data Science', 
             'Microsoft AI Agents - Emergency App', 
             'Social Media for Resource Allocation in Emergency Crisis', 
             'ESPF, Survival Projection of Railways in Climate Change', 
             'Climate Relief to Resilience',
             'PyTorch Tsunamis']
repo_names = ['GeoAIHack_team_18', 'FrugalAI', 'bat', 'sam_api',
              'Tsunamis_Project',
              'Doctolib_Hackaton',
              'WiDS-AI-Potter-Irrigation',
              'microsoft_ai_agents',
              'IBM_Hackaton',
              'ESPF',
              'resilience2reliefai',
              'pytorch_tsunamis']

articles = ['Environment', 'Data and Tech', 'Entrepreneurship', 'Events and discoveries']

teaching = ['Data Engineering', 'MLOPS', 'Data Science']
trips = ['South America', 'Greece']
career = ['Endeavor', 'CV', 'Certifications', 'University Projects', 'Portfolio']
entrepreneurship = ['The Bubble', '?']

# Récupérer la liste des fichiers .txt
article_files = [f[:-4] for f in os.listdir("articles") if f.endswith(".txt")]

if sidebar==pages[0]:
    st.title('The Lab')
    st.header('by Sarah LE NET')
    st.markdown('Inspired by passions and interests, I started writing this blog while working on a state-of-the-art of data in prevention of natural risks and crises response as well as GenAI in Healthcare. It turned out a lot of what has been done is valuable and I would love to present it to you.')

if sidebar == pages[1]:
    selected_hackathons = st.selectbox("Choose a hackathon", hackathons)

    for i in range(len(hackathons)):
        if selected_hackathons == hackathons[i]:
            st.link_button("🌐 View on GitHub", "https://github.com/sarahlunette/" + repo_names[i])
            auth = Auth.Login("sarahlunette", GITHUB_TOKEN)

            # Initialize GitHub client (no token needed for public repos)
            g = Github(auth=auth)
            repo = g.get_repo("sarahlunette/" + repo_names[i])

            # Get README.md content
            readme_file = repo.get_readme()
            readme_content = readme_file.decoded_content.decode()

            # Render as Markdown
            st.markdown("# 📄 README")
            st.markdown(readme_content, unsafe_allow_html=True)

import streamlit as st
import os
import streamlit.components.v1 as components

# Afficher une liste déroulante pour choisir un article
if sidebar == pages[2]:
    language = st.sidebar.selectbox("Choose a language", ["Français", "English"])
    if language == "Français":
        language = "French"
        article_files = [f.replace(".html", "").replace("(French_Version)", "").replace("_", " ") for f in os.listdir("articles") if f.endswith(".html") & f.replace(".html", "").endswith("(French_Version)")]
    else:
        article_files = [f.replace(".html", "").replace("(English_Version)", "").replace("_", " ") for f in os.listdir("articles") if f.endswith(".html") & f.replace(".html", "").endswith("(English_Version)")]

    selected_article = st.sidebar.selectbox("Choose an article", article_files).replace(" ", "_").replace("(French_Version)", "").replace("(English_Version)", "")

    # Charger et afficher l'article HTML sélectionné
    with open(f"articles/{selected_article}({language}_Version).html", "r", encoding="utf-8") as file:
        html_content = file.read()

    st.title(selected_article.replace('_', ' '))
    components.html(html_content, height=800, scrolling=True)

if sidebar == pages[3]:
    st.title('Teaching')
    media = st.sidebar.selectbox("Choose a media", ["Data Workshops", "Writing", "Slides"])
    if media == "Data Workshops":
        selected_video = st.sidebar.selectbox("Choose a video", ["Principal Component Analysis", "Multibox Detection", "Multi-threading, multi-processing, and computing power/costs in ML"], index=0)
        
        if selected_video == "Principal Component Analysis":
            youtube_url = "https://www.youtube.com/watch?v=n9GORRPxnC0&ab_channel=DataScientest"
            st.header('Principal Component Analysis')
            st.video(youtube_url)
        elif selected_video == "Multibox Detection":
            youtube_url = "https://www.youtube.com/watch?v=nK_z7bw3CZs&ab_channel=DataScientest"
            st.header('Multibox Detection')
            st.video(youtube_url)
        else:
            youtube_url = "https://www.youtube.com/watch?v=aO5xc_R0JKQ&ab_channel=DataScientest"
            st.header('Multi-threading, multi-processing, and computing power/costs in ML')
            st.video(youtube_url)

if sidebar==pages[6]:
    st.title('CNAM')
    st.header('Slides (French Version)')
    st.markdown(f'<a href="https://docs.google.com/presentation/d/1F1t67TK6D-fCbuYQ6IoT_T6-wQ2aN2eTbr2cA3qLWPI/edit?usp=sharing">📄 Open presentation</a>', unsafe_allow_html=True)
    
    st.header('Project Rendering (French Version)')
    st.markdown(f'<a href="https://docs.google.com/document/d/165F-R3qm1RqhEpT7p1xB6oqRg3C_9l8VB-Bz-cO7gXg/edit?tab=t.0">📄 Open rendering</a>', unsafe_allow_html=True)

if sidebar==pages[7]:
    st.title("Articles from La Jaune et La Rouge, Polytechnique's Magazine")
    st.header('Storio, Energy Storage Company by X2010')
    st.markdown(f'<a href="https://www.lajauneetlarouge.com/il-manquait-une-technologie-dans-le-paysage-du-stockage-denergie-en-france-caroline-le-floch-gautier-maigret-jean-yves-stephan-et-julien-dumazert-tous-x10-et-cofondateurs-de/">📄 Open presentation</a>', unsafe_allow_html=True)
