import streamlit as st
import os
from github import Github, Auth
from dotenv import load_dotenv
import requests
from fpdf import FPDF
from github.Auth import Login as GithubLogin
import re

load_dotenv()
GITHUB_TOKEN = st.secrets('GITHUB_TOKEN')

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


    # =========================
    # CONFIG
    # =========================
    st.set_page_config(page_title="ResilienceGPT", layout="wide")

    API_URL = st.secrets('API_URL')

    # ⚠️ For demo only — move to st.secrets in production
    ADMIN_USERNAME = st.secrets("ADMIN_USERNAME")
    ADMIN_PASSWORD = st.secrets("ADMIN_Password")

    GITHUB_USERNAME = "sarahlunette"
    GITHUB_REPO = "TheLab_resilienceai"


    # =========================
    # AUTH STATE
    # =========================
    if "authenticated" not in st.session_state:
        st.session_state.authenticated = False


    # =========================
    # HEADER
    # =========================
    st.header("🧪 TheLab AI — ResilienceAI")

    st.markdown(
        '<a href="https://docs.google.com/document/d/1PavXYrLPB_1cIbeF82kskaSMMAiSQI0z7zIxVIzwB_g/edit?usp=drive_link">🌐 AI for planification (French)</a>',
        unsafe_allow_html=True,
    )

    st.markdown(
        '<a href="https://docs.google.com/document/d/1Y58MhDJ2axgbhHyfjSfwgX6mGUmfpbFl9bLjDX6Vg-E/edit?usp=sharing">🌐 Presentation (French)</a>',
        unsafe_allow_html=True,
    )

    st.link_button(
        "🌐 View on GitHub",
        f"https://github.com/{GITHUB_USERNAME}/{GITHUB_REPO}",
    )


    # =========================
    # ADMIN LOGIN
    # =========================
    with st.expander("🔐 Admin access", expanded=not st.session_state.authenticated):
        username = st.text_input("Admin username")
        password = st.text_input("Password", type="password")

        if st.button("Login"):
            if username == ADMIN_USERNAME and password == ADMIN_PASSWORD:
                st.session_state.authenticated = True
                st.success("✅ Admin authenticated")
            else:
                st.error("❌ Invalid credentials")


    # =========================
    # README FROM GITHUB
    # =========================
    st.markdown("---")
    st.markdown("## 📄 Project README")

    try:
        if GITHUB_TOKEN:
            auth = GithubLogin(GITHUB_USERNAME, GITHUB_TOKEN)
            gh = Github(auth=auth)
        else:
            gh = Github()

        repo = gh.get_repo(f"{GITHUB_USERNAME}/{GITHUB_REPO}")
        readme_file = repo.get_readme()
        readme_content = readme_file.decoded_content.decode("utf-8")
        st.markdown(readme_content, unsafe_allow_html=True)

    except Exception as e:
        st.warning(f"Could not load README: {e}")


    # =========================
    # CHATBOT
    # =========================
    st.markdown("---")
    st.title("🧠 ResilienceGPT — RAG Chatbot")

    if "messages" not in st.session_state:
        st.session_state.messages = []


    def clean_llm_markdown(text: str) -> str:
        text = text.replace("\\n", "\n").replace("\\t", "    ").strip('"')
        text = re.sub(r"\n\s+(\- |\* |\d+\. |#)", r"\n\1", text)
        text = re.sub(r"\n\s*(#{1,6})\s*", r"\n\1 ", text)
        text = re.sub(r"\n{3,}", "\n\n", text)
        return text.strip()


    def generate_pdf_from_markdown(markdown_text, output_path):
        pdf = FPDF()
        pdf.add_page()
        pdf.set_auto_page_break(auto=True, margin=15)
        pdf.set_font("Arial", size=12)
        for line in markdown_text.split("\n"):
            pdf.multi_cell(0, 5, line)
        pdf.output(output_path)


    # Display chat history
    for role, message in st.session_state.messages:
        with st.chat_message(role):
            st.markdown(message)


    # =========================
    # INPUT (ADMIN ONLY)
    # =========================
    if not st.session_state.authenticated:
        st.info("🔐 Admin access required to call the model.")
        st.chat_input("Admin login required", disabled=True)
    else:
        user_input = st.chat_input("Pose une question…")

        if user_input:
            st.session_state.messages.append(("user", user_input))
            with st.chat_message("user"):
                st.markdown(user_input)

            try:
                response = requests.post(API_URL, json={"question": user_input})
                response.raise_for_status()
                data = response.json()
            except Exception as e:
                st.error(f"❌ API error: {e}")
                st.stop()

            answer = clean_llm_markdown(data["answer"])
            st.session_state.messages.append(("assistant", answer))

            with st.chat_message("assistant"):
                st.markdown(answer)


    # =========================
    # PDF EXPORT
    # =========================
    if st.session_state.messages:
        if st.button("📥 Export conversation to PDF"):
            full_md = ""
            for role, msg in st.session_state.messages:
                full_md += f"### {role.capitalize()}\n{msg}\n\n"

            output_file = "conversation.pdf"
            generate_pdf_from_markdown(full_md, output_file)

            with open(output_file, "rb") as f:
                st.download_button(
                    "📄 Download PDF",
                    f,
                    file_name="conversation.pdf",
                    mime="application/pdf",
                )


elif selected_item == "TheLab Data":
    st.header("TheLab Data, Data Acquisition")
    st.markdown(
        f'<a href="https://docs.google.com/document/d/1oN0aXKn18-BLT67qKn_HNoH7-VxB8cYJW8_n-93GwVg/edit?usp=sharing">🌐 DataCapture</a>',
        unsafe_allow_html=True,
    )
