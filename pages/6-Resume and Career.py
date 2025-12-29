import streamlit as st

career = [
    "Resume",
    "Certifications",
    "LinkedIn",
    "Professional Courses",
    "Additional Master's Courses",
    "CNAM",
]

st.title("Career")
selected_item = st.selectbox("Choose a section", career)

if selected_item == "Resume":
    st.header("Resume ")
    st.markdown(
        f'<a href="https://drive.google.com/file/d/1zJzdpMalbKEZ1vZ39UEeZFcH2-XhPieW/view?usp=sharing">🌐 View Resume</a>',
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


elif selected_item == "Professional Courses":
    st.header("Professional Courses")

    courses = [
        "Coursera",
        "Cloud Guru",
        "CloudSkillsBoost",
        "Youtube Videos",
        "Surfaces Molle, Quéré",
        "Radiations, Le Treut",
        "Hydrodynamique",
        "Turbulence, Tabeling",
    ]  # TODO: Les cours, les vidéos, à un moment rajouter les meetups de training
    description_courses = [
        "Prepararing for Google Cloud Certification: CLoud Engineer",
        "Professional Data Engineer, GCP",
        "(1) Cloud Architect, (2) Data Engineer",
        "Various videos on Data Engineering, MLOPS, Cloud Computing",
        "Various courses on Udemy, OpenClassrooms...",
    ]

    for course, i, description in zip(
        courses, range(1, len(courses) + 1), description_courses
    ):
        st.write(f"{i} - {course}, {description}")

elif selected_item == "Additional Master's Courses":
    st.header("Additional Master's Courses")
    masters_courses = ["MVA", "MOCIS", "M1M2 Risques et environnements"]
    selected_course = st.selectbox("Choose a course", masters_courses)
    if selected_course == "MVA":
        st.title("MVA - Master Vision, Apprentissage et Données")
        st.header("List of audited courses")
        courses_mva = [
            "Advanced learning for text and graph data (Vazirgiannis)",
            "Statistiques en Grandes Dimensions et Apprentissage (A.Dalalyan)",
            "Kernel methods for machine learning (J.Mairal/J.P.Vert)",
            "Méthodes Stochastiques pour l'analyse d'images (A.Desolneux/B.Galerne)",
        ]
        for course, i in zip(courses_mva, range(1, len(courses_mva) + 1)):
            st.write(f"{i} - {course}")

    if selected_course == "MOCIS":
        st.title(
            "MOCIS - Master Mathématiques et Optimisation pour la Connaissance, l'Incertitude et la Simulation"
        )
        st.header("List of audited courses")
        courses_mocis = [
            "Coastal Hydrodynamics - A. Stegner, Y. Cuypers",
            "Energetics of the climate system - Hervé Le Treut",
            "Clouds, Aerosols and Precipitation - Hélène Chepfer",
            "Physical Oceanography - Oceanic circulation - Pascale Bouruet",
            "GFD-1 Geophysical Fluid Dynamics - Models and their main properties - Zeitlin",
        ]
        for course, i in zip(courses_mocis, range(1, len(courses_mocis) + 1)):
            st.write(f"{i} - {course}")

    if selected_course == "M1M2 Risques et environnements":
        st.title(
            "M1M2 Risques et Environnements - Master 1 et 2 Risques et Environnements"
        )
        st.header("List of audited courses")
        courses_m1m2 = ["Remote Sensing - Desa"]
        for course, i in zip(courses_m1m2, range(1, len(courses_m1m2) + 1)):
            st.write(f"{i} - {course}")

elif selected_item == "CNAM":
    st.header("CNAM: metrology and citizen science")
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
