import streamlit as st

st.title("Theater")
selected_year = st.selectbox(
    "Select a Year",
    [
        "Cours Florent Ateliers Jeunesse",
        "Henri IV First Year",
        "Henri IV Second Year",
        "Cours Florent Stage",
        "Tentative d'organisation d'une pièce à l'école Polytechnique",
        "First Year EVOE",
        "Second Year EVOE",
        "Espace Beaujon",
        "Paid Work",
    ],
)

if selected_year == "Cours Florent Ateliers Jeunesse":
    st.title("Cours Florent Ateliers Jeunes - 2 ans")
    st.header("Poèmes d'Aragon - Le Fou d'Elsa")

if selected_year == "Henri IV First Year":
    st.title("Henri IV First Year")
    st.header("Faut pas Payer - Dario Fo au théâtre Mouffetard")

if selected_year == "Henri IV Second Year":
    st.title("Henri IV Second Year")
    st.header("Le Roi se Meurt - Ionesco")

if selected_year == "Cours Florent Stage":
    st.title("Cours Florent Stage")
    st.header("Les Précieuses Ridicules - Molière")

if selected_year == "Tentative d'organisation d'une pièce à l'école Polytechnique":
    st.title("Barouffe à Chiogia - Carlo Goldoni")

if selected_year == "Espace Beaujon":
    st.title("Espace Beaujon")
    st.header("Terrasses - Laurent Gaudet - Jeux Isthmiques")
    st.header("Terrasses - Laurent Gaudet - Espace Beaujon")

if selected_year == "First Year EVOE":
    st.title("First Year")
    st.header("Antigona")

if selected_year == "Second Year EVOE":
    st.title("Second Year")
    st.header("Harry Potter")

elif selected_year == "Paid Work":
    st.title("Paid Work")
    st.header("O Magico de Oz - plataforma")
    st.write("Interventions in schools and festivals")
    st.header("Teatro de Marionetas")
    st.write("Street performances in Bélèm")
