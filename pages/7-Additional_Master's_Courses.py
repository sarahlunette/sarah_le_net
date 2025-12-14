import streamlit as st

masters_courses = ["MVA", "MOCIS", "M1M2 Risques et environnements"]

st.title("Additional Master's courses")
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
