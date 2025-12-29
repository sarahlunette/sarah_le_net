import streamlit as st
import os
from github import Github, Auth
from dotenv import load_dotenv

load_dotenv()
GITHUB_TOKEN = st.secrets["GITHUB_TOKEN"]

hackathons = [
    "GeoHack AI",
    "FrugalAI",
    "Bat'Adapt",
    "SAM API",
    "Tsunamis Project",
    "AI Action Summit",
    "Women in Data Science",
    "Microsoft AI Agents - Emergency App",
    "Social Media for Resource Allocation in Emergency Crisis",
    "ESPF, Survival Projection of Railways in Climate Change",
    "Climate Relief to Resilience",
    "PyTorch Tsunamis",
    "LabLabAI",
    "Blackbox AI",
    "Les clés du Château de Versailles",
    "HackTheGap",
    "IteratexColumbia",
    "Manus",
]
repo_names = [
    "GeoAIHack_team_18",
    "FrugalAI",
    "bat",
    "sam_api",
    "Tsunamis_Project",
    "Doctolib_Hackaton",
    "WiDS-AI-Potter-Irrigation",
    "microsoft_ai_agents",
    "IBM_Hackaton",
    "ESPF",
    "resilience2reliefai",
    "pytorch_tsunamis",
    "Agent_Resilience",
    "easyimmo",
    "Vers-AI-lles",
    "HackTheGap",
    "Hackathon-Columbia",
    "navigating_through_crises",
]

st.title("Hackathons")
st.write(
    "The entirety of these hackathons are directed towards emergency crises and resilience or healthcare as well as help to development, or towards specific technologies: remote sensing, VIT, NLP, Embeddings, LLM and Agents."
)
selected_hackathons = st.selectbox("Choose a hackathon", hackathons)

for i in range(len(hackathons)):
    if selected_hackathons == hackathons[i]:
        st.link_button(
            "🌐 View on GitHub", "https://github.com/sarahlunette/" + repo_names[i]
        )
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
