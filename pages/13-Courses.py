import streamlit as st

courses = [
    "Coursera",
    "Cloud Guru",
    "CloudSkillsBoost",
    "Youtube Videos",
    "Surfaces Molle, Quéré",
    "Radiations, Le Treut",
    "Hydrodynamique",
    "Turbulence, Tabeling",
]  # TODO: Les cours, les vidéos, à un moment rajouter les meetups
description_courses = [
    "Prepararing for Google Cloud Certification: CLoud Engineer",
    "Professional Data Engineer, GCP",
    "(1) Cloud Architect, (2) Data Engineer",
    "Various videos on Data Engineering, MLOPS, Cloud Computing",
    "Various courses on Udemy, OpenClassrooms...",
]

st.title("Courses")
for course, i, description in zip(
    courses, range(1, len(courses) + 1), description_courses
):
    st.write(f"{i} - {course}, {description}")
