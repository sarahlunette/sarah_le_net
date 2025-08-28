import streamlit as st
import os
import base64
import urllib.parse
from github import Github
from dotenv import load_dotenv
from github import Auth
import base64

load_dotenv()
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

pages = [
    "Presentation",
    "Hackathons",
    "Articles",
    "Teaching",
    "Career",
    "Entrepreneurship",
    "CNAM: Metrology and Citizen Sciences",
    "La Jaune et La Rouge",
    "Trips",
    "Theater",
    "Photography",
]
st.sidebar.markdown("<h3 style='font-size:32px;'>PROJECTS</h3>", unsafe_allow_html=True)
sidebar = st.sidebar.radio("", pages)

p_articles = ["Interviews", "State-of-the-art", "Articles"]
p_entrepreneurship = ["The Bubble", "The Lab"]
p_trips = ["South America", "Sri Lanka", "Italy"]
p_theater = ["Workshops", "Plays", "Puppets"]


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
]

articles = [
    "Environment",
    "Data and Tech",
    "Entrepreneurship",
    "Events and discoveries",
]

teaching = ["Data Engineering", "MLOPS", "Data Science"]
trips = ["South America", "Greece"]
# career = ["Endeavor", "CV", "Certifications", "University Projects", "Portfolio"]
career = ["Resume", "Certifications", "LinkedIn"]
# entrepreneurship = ["The Bubble", "?"]
entrepreneurship = ["The Bubble", "TheLab AI", "TheLab Data"]

# Récupérer la liste des fichiers .txt
article_files = [f[:-4] for f in os.listdir("articles") if f.endswith(".txt")]

if sidebar == pages[0]:
    st.title("The Lab")
    st.header("by Sarah LE NET")
    st.markdown(
        "Inspired by passions and interests, I started writing this blog while working on a state-of-the-art of data in prevention of natural risks and crises response as well as GenAI in Healthcare. It turned out a lot of what has been done is valuable and I would love to present it to you."
    )

if sidebar == pages[1]:
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

import streamlit as st
import os
import streamlit.components.v1 as components

# Afficher une liste déroulante pour choisir un article
if sidebar == pages[2]:
    language = st.sidebar.selectbox("Choose a language", ["Français", "English"])
    if language == "Français":
        language = "French"
        article_files = [
            f.replace(".html", "").replace("(French_Version)", "").replace("_", " ")
            for f in os.listdir("articles")
            if f.endswith(".html") & f.replace(".html", "").endswith("(French_Version)")
        ]
    else:
        article_files = [
            f.replace(".html", "").replace("(English_Version)", "").replace("_", " ")
            for f in os.listdir("articles")
            if f.endswith(".html")
            & f.replace(".html", "").endswith("(English_Version)")
        ]

    selected_article = (
        st.sidebar.selectbox("Choose an article", article_files)
        .replace(" ", "_")
        .replace("(French_Version)", "")
        .replace("(English_Version)", "")
    )

    # Charger et afficher l'article HTML sélectionné
    with open(
        f"articles/{selected_article}({language}_Version).html", "r", encoding="utf-8"
    ) as file:
        html_content = file.read()

    st.title(selected_article.replace("_", " "))
    components.html(html_content, height=800, scrolling=True)

if sidebar == pages[3]:
    st.title("Teaching")
    media = st.sidebar.selectbox(
        "Choose a media", ["Data Workshops", "Writing", "Slides"]
    )
    if media == "Data Workshops":
        selected_video = st.sidebar.selectbox(
            "Choose a video",
            [
                "Principal Component Analysis",
                "Multibox Detection",
                "Multi-threading, multi-processing, and computing power/costs in ML",
            ],
            index=0,
        )

        if selected_video == "Principal Component Analysis":
            youtube_url = (
                "https://www.youtube.com/watch?v=n9GORRPxnC0&ab_channel=DataScientest"
            )
            st.header("Principal Component Analysis")
            st.video(youtube_url)
        elif selected_video == "Multibox Detection":
            youtube_url = (
                "https://www.youtube.com/watch?v=nK_z7bw3CZs&ab_channel=DataScientest"
            )
            st.header("Multibox Detection")
            st.video(youtube_url)
        else:
            youtube_url = (
                "https://www.youtube.com/watch?v=aO5xc_R0JKQ&ab_channel=DataScientest"
            )
            st.header(
                "Multi-threading, multi-processing, and computing power/costs in ML"
            )
            st.video(youtube_url)

if sidebar == pages[4]:
    st.title("Career")
    selected_item = st.selectbox("Choose a section", career)

    if selected_item == "Resume":
        st.header("Resume ")
        st.markdown(
            f'<a href="https://drive.google.com/file/d/1VUAQXaVh8yrQEIWdnX0VlJxuISXtasQJ/view?usp=sharing">🌐 View Certification</a>',
            unsafe_allow_html=True,
        )
        
    elif selected_item == "Certifications":
        st.header("Google Professional Data Engineer Certifications")
        st.markdown(
            f'<a href="https://www.credly.com/badges/2f8d4c7a-3611-442d-bb47-21746eb20a56">🌐 View Certification</a>',
            unsafe_allow_html=True,
        )

    elif selected_item == "LinkedIn":
        st.header("LinkedIn Profile")
        st.markdown(
            f'<a href="https://www.linkedin.com/in/sarah-le-net-13268944/">🌐 View LinkedIn Profile</a>',
            unsafe_allow_html=True,
        )
if sidebar == pages[5]:
    st.title("Entrepreneurship")
    selected_item = st.selectbox("Choose a project", entrepreneurship)

    if selected_item == "The Bubble":
        st.header("The Bubble, Incubator for Startups")
        st.markdown(
            f'<a href="https://thebubble.fr/">🌐 View The Bubble</a>',
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

    elif selected_item == "TheLab Data":
        st.header("TheLab Data, Data Acquisition")
        st.markdown(
            f'<a href="https://docs.google.com/document/d/1oN0aXKn18-BLT67qKn_HNoH7-VxB8cYJW8_n-93GwVg/edit?usp=sharing">🌐 DataCapture</a>',
            unsafe_allow_html=True,
        )
        st.image("images/the_lab.png", use_column_width=True)

if sidebar == pages[6]:
    st.title("CNAM")
    st.header("Slides (French Version)")
    st.markdown(
        f'<a href="https://docs.google.com/presentation/d/1F1t67TK6D-fCbuYQ6IoT_T6-wQ2aN2eTbr2cA3qLWPI/edit?usp=sharing">📄 Open presentation</a>',
        unsafe_allow_html=True,
    )

    st.header("Project Rendering (French Version)")
    st.markdown(
        f'<a href="https://docs.google.com/document/d/165F-R3qm1RqhEpT7p1xB6oqRg3C_9l8VB-Bz-cO7gXg/edit?tab=t.0">📄 Open rendering</a>',
        unsafe_allow_html=True,
    )

if sidebar == pages[7]:
    st.title("Articles from La Jaune et La Rouge, Polytechnique's Magazine")
    st.header("Storio, Energy Storage Company by X2010")
    st.markdown(
        f'<a href="https://www.lajauneetlarouge.com/il-manquait-une-technologie-dans-le-paysage-du-stockage-denergie-en-france-caroline-le-floch-gautier-maigret-jean-yves-stephan-et-julien-dumazert-tous-x10-et-cofondateurs-de/">📄 Article</a>',
        unsafe_allow_html=True,
    )
if sidebar == pages[8]:
    st.title("Trips")
    selected_trip = st.selectbox("Choose a trip", trips)

    if selected_trip == "South America":
        st.title("South America 2016/2017")
        st.header("Interviews with actors of social and environmental changes / In construction")

    elif selected_trip == "Greece 2017":
        st.title("Greece 2017")
        st.write("Greek Language and Culture / In construction")
        
if sidebar == pages[9]:
    selected_year = st.selectbox("Select a Year", ['First Year', 'Second Year'])

    if selected_year == "First Year":
        st.title("First Year")
        st.header("Antigona")

    elif selected_year == "Second Year":
        st.title("Second Year")
        st.header("Harry Potter")

if sidebar == pages[10]:

    image_urls = [
        (
            "https://lh3.googleusercontent.com/pw/AP1GczNRCNr1sm096q8jdQPG-gx9g_MDpRjLJWJknspSQRBgx3mYTdAm5KPJZ2wygHc8p5c3iohOAvZ8PqgdVoh4FjvrxYtIkK1ChW2KP0rU4NIDYsNkkziIa4wNJw3-NYCJeqBK5NzByXeGw5P6uf2nrRfRrQ=w2040-h1478-s-no-gm?authuser=0",
            "Stoa, Athina",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczMhkf9nN6_MmQIc3OCbAANEhmL1LwklY7oMTuQ-Yx9jh0953GrkNq-y6NJO1JiGYgWRjfKgx6aR5GqkP4MsxB2WEkoo9JK9b-q3PX7RVcoMjKNEBzPJwdqMcUgydsOK2INlNIETVOxBzB2aJTLM0SVXkw=w1112-h1478-s-no-gm?authuser=0",
            "Agio Georgious, Thessaloniki",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczPcjg1GIx7PoASOGAlzQ_XeRd9PXwofIuO3DNpGQBhRHbpPj1o35OoKcbx_lz1ruF5w4FVGaXFEOjjQ4bQkJk1WEjdBgwWNGrB2PVXdF04x2kz_TbSlU_FUvdoRw5E7pFLlSu9o3vbhRb84n1KuCUtTMQ=w1962-h1478-s-no-gm?authuser=0",
            "Antique theater, Athina",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczO_y8sjfF8INYFxUw7gvj4CxewCZQ6Qeq3i-3eNoG7pCWmPbAbGTcygJs8F7xKcJ-KO_Fs4rfL3HjtISdxNffq1mVbv71nnVjHCCHmF7vuSUUWEt_eO498byjUzC-qzV8_xsm1fiH2_7gXwV9CW-vu4DA=w1112-h1478-s-no-gm?authuser=0",
            "Statue",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczNzIRyCFb4qD0lu4autGqczk-njAwvSkcJBERB_KKQblkbPSU6aRFJWhMh05tCmR-4MnHlMDN1k3SkIysbyAScWpEnZqIVp2aSjxwTJNZQftsuYDuE6t85JrPZFzvj7jPmPSmUleFVmxt5sxBp5QsoKxw=w1112-h1478-s-no-gm?authuser=0",
            "Delphi",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczOfP1bG2zBPxHVTVzCPLxoe2J9IlxCCXhTaChWle2i67xbWriqHHELQ0iBu6ezczZ7R85uCjApmtQ7cItfXo4vW4hW1Ycjp96Tz7FG_cdOCkvr0apH0aEYC7kkRXADLv-5Tv47ZoWc3RnHoF_rhDUatsw=w1962-h1478-s-no-gm?authuser=0",
            "Ermass",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczMnw80r_tLtdtEsx2MsziCX7VDVjYywNaAKH6OsnhyRYLPVWOCb4LKqD9n9w_b6xTipjim38bXqhjKSY3APvmKEOR1zGubcxD60GDPbFXd7CncSeSiyzmuP-h_NUZwjMvLtbcTlq2os-e_PnGH4SMAVJA=w1112-h1478-s-no-gm?authuser=0",
            "Petrettini",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczMxHtXqYbumOOZpw9p1u7tN9M6YYVx2JoYYK9qu1Q9-gQ0bL5-BW6rkuiLpgaKz2GAUBSboP-e9s6YibyD2ZMJdnobNgEapUxBTsiZSb8DRa3GwuppwK8xvmi3XL59qhKu2lUTgeh5P5M_QvHwfrfNq5A=w1112-h1478-s-no-gm?authuser=0",
            "Petrettini",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczOBl2gfZrgbqNcRpAjYT_waQkDqn_WsvrQARGAn8xjhP5o_SxHUDrCekgiW7VTWFUbV2HaLoyOknYKsH7EIFuTwTaRBsZYVZGofkYSFpXQLdGvd3pTcPmZLMMDRh_izL5RPQ7AtnTjw9oO_I1wUYr0g-g=w1962-h1478-s-no-gm?authuser=0",
            "Boat",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczMjmgHHRXy57IfN-HXaDQ-vgJp3oSVJg25WJ1CuIBwtIQiJMlmzbout9asoC_mDukEqcJUEPlVUmQBodTdR3KifQGFsJ2pdXL3fB3L4KDYyFnU4j00toJSa-uvihFB2bBb826QaK-9mqwpcIrGrd3I35A=w1962-h1478-s-no-gm?authuser=0",
            "Synagogue Corfu",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczM6i6QVcp2K3FltezApohm3mMdtRHryXfvrgy3t5sb-EViYDhf_lgadlbLlMr9gokPd982SjSsD9qDxzOyf7vtlV21DnH-k1q80LXqlROYaKGyY28mJmswpVSyI2YOgaVZcGjvpHea_JWlHT28VKWfOfg=w1112-h1478-s-no-gm?authuser=0",
            "Ferry",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczPjKqgKGcQSS_i08_pWLlYPT5ApW3RzYPG23AhvnXpi6K4QPDGyy6QrwNS_khPaRrQXTf0IAtsHvwt5iibyFX9VanJR4IR8QJKN9e_Wv7DmNPojfkFTUHAO9-yf63k_EG70NV4dyyIoSqt0fKD8x0HR5g=w1962-h1478-s-no-gm?authuser=0",
            "Corfu town",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczO4E4pSVf_SELxEzNHYi15ann5ly3egOPpTbcQ_aAmgoRnhy3D7LtgfG0TS80rGoea9W1Kfc_D8q11n5iqdB7UiOV8E5hkUgsNamRN32cTqAIGyln62oZHfrnz6ccx4AkqsLXMWhO84GSpFYWj855tBVw=w1962-h1478-s-no-gm?authuser=0",
            "Ostuni",
        ),
        (
            "https://lh3.googleusercontent.com/pw/AP1GczMeZkBYKc9j2SFzndcOkawoDle2kxN2NwT9j6nO9lJLpnd4rtYXBF95OiJm6x9xmWGC8MUHJqKNxAURQbqXVu6KfML9PmbXZQTRBO-_r_Q0G4x90FX3wUzdAH8oDUBQerQvXD-P0TohPiWwzim12GlEBA=w1962-h1478-s-no-gm?authuser=0",
            "Ferry Bari",
        ),
    ]

    for image_url, caption in image_urls:
        print(image_url, caption)
        st.image(image_url, caption=caption)
