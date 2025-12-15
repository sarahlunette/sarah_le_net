import streamlit as st
import os
from github import Github, Auth
from dotenv import load_dotenv

load_dotenv()
GITHUB_TOKEN = "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"

entrepreneurship = ["The Bubble", "TheLab AI", "TheLab Data"]

st.title("Entrepreneurship")
selected_item = st.selectbox("Choose a project", entrepreneurship)

if selected_item == "The Bubble":
    st.header("The Bubble, Coworking Space with Daycare")
    selection = st.selectbox(
        "Choose a program",
        ["Sista", "LFA Funds", "Grandes Ecoles Au Féminin", "Empow'Her"],
    )

    if selection == "Sista":
        st.header("Sista Incubator Interviews")
        st.markdown(
            f'<a href="https://drive.google.com/file/d/1C9PNTzMqSl9ZqF5N2ZHRPkrnrEZRUBDr/view?usp=sharing">🌐 Presentation Video</a>',
            unsafe_allow_html=True,
        )

    if selection == "LFA Funds":
        st.header("LFA Funds Interviews - Passed")
        st.markdown(
            f'<a href="https://docs.google.com/presentation/d/1QVvzZKSw53ftSpOCNvsqHaUnoTFsip1PPyLWAmdAhw4/edit?usp=sharing">🌐 Presentation Slides First Interview</a>',
            unsafe_allow_html=True,
        )
        st.markdown(
            f'<a href="https://drive.google.com/file/d/1MTj82NeF25V7NCvF5KBWLG0mBv5gaYf6/view?usp=sharing">🌐 Presentation Slides Second Interview</a>',
            unsafe_allow_html=True,
        )

    if selection == "Grandes Ecoles Au Féminin":
        st.header("Concours Startup Grandes Ecoles Au Féminin")
        st.markdown(
            f'<a href="https://www.gefstartup.com/">🌐 Grandes Ecoles Au Féminin</a>',
            unsafe_allow_html=True,
        )

    if selection == "Empow'Her":
        st.header("Business Plan and Definition of the Project Workshop")
        st.markdown(
            f'<a href="https://empow-her.com/">🌐 Empow\'Her Website</a>',
            unsafe_allow_html=True,
        )

elif selected_item == "TheLab AI":
    st.header("TheLab AI, resilienceAI")
    st.markdown(
        f'<a href="https://docs.google.com/document/d/1PavXYrLPB_1cIbeF82kskaSMMAiSQI0z7zIxVIzwB_g/edit?usp=drive_link">🌐 AI for planification (French)</a>',
        unsafe_allow_html=True,
    )
    st.markdown(
        f'<a href="https://docs.google.com/document/d/1Y58MhDJ2axgbhHyfjSfwgX6mGUmfpbFl9bLjDX6Vg-E/edit?usp=sharing">🌐 Presentation (French)</a>',
        unsafe_allow_html=True,
    )
    st.link_button(
        "🌐 View on GitHub",
        "https://github.com/sarahlunette/" + "TheLab_resilienceai",
    )
    auth = Auth.Login("sarahlunette", GITHUB_TOKEN)

    # Initialize GitHub client (no token needed for public repos)
    g = Github(auth=auth)
    repo = g.get_repo("sarahlunette/" "TheLab_resilienceai")

    # Get README.md content
    readme_file = repo.get_readme()
    readme_content = readme_file.decoded_content.decode()

    # Render as Markdown
    st.markdown("# 📄 README")
    st.markdown(readme_content, unsafe_allow_html=True)

elif selected_item == "TheLab Data":
    st.header("TheLab Data, Data Acquisition")
    st.markdown(
        f'<a href="https://docs.google.com/document/d/1oN0aXKn18-BLT67qKn_HNoH7-VxB8cYJW8_n-93GwVg/edit?usp=sharing">🌐 DataCapture</a>',
        unsafe_allow_html=True,
    )
