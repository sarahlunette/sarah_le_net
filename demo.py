import streamlit as st
import os
import base64
import urllib.parse
from github import Github
from dotenv import load_dotenv
from github import Auth

load_dotenv()
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

pages = ['Presentation', 'Hackathons', 'Articles', 'Teaching', 'Career', 'Entrepreneurship', 'CNAM: Metrology and Citizen Sciences', 'Trips', 'Theater', 'Photography']

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
article_files = [f for f in os.listdir("articles") if f.endswith(".txt")]

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


# Afficher une liste déroulante pour choisir un article
if sidebar==pages[2]:
    selected_article = st.selectbox("Choose an article", article_files)

    # Charger et afficher l'article sélectionné
    with open(f"articles/{selected_article}", "r", encoding="utf-8") as file:
        content = file.read()

    st.title(selected_article.replace('.txt', '').replace('_', ' '))
    st.write(content)

if sidebar==pages[5]:
    st.title('CNAM')
    st.header('Slides (French Version)')
    st.markdown(f'<a href="https://docs.google.com/presentation/d/1F1t67TK6D-fCbuYQ6IoT_T6-wQ2aN2eTbr2cA3qLWPI/edit?usp=sharing">📄 Open presentation</a>', unsafe_allow_html=True)
    
    st.header('Project Rendering (French Version)')
    st.markdown(f'<a href="https://docs.google.com/document/d/165F-R3qm1RqhEpT7p1xB6oqRg3C_9l8VB-Bz-cO7gXg/edit?tab=t.0">📄 Open rendering</a>', unsafe_allow_html=True)

