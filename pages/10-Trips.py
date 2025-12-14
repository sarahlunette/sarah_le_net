import streamlit as st

trips = ["South America", "Greece"]

st.title("Trips")
selected_trip = st.selectbox("Choose a trip", trips)

if selected_trip == "South America":
    st.title("South America 2016/2017")
    st.header(
        "Interviews with actors of social and environmental changes / In construction"
    )

elif selected_trip == "Greece":
    st.title("Greece 2017")
