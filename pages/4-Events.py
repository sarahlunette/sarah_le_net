import streamlit as st

events = [
    "Climate House",
    "DataKind",
    "DataForGood",
    "Women in Tech",
    "Databrunch",
    "GenAI Collective",
    "AI Tinkerers",
    "Dust",
    "X-IA",
    "Google",
    "Women in Climate",
    "Columbia University Maison Française",
    "datacraft",
    "42",
    "Columbia University Online",
    "VivaTech",
    "AdoptAI",
    "Open Source Conference",
    "Wats4U",
]

st.title("Events")
for event, i in zip(events, range(1, len(events) + 1)):
    st.write(f"{i} - {event}")
