import streamlit as st
import os
import streamlit.components.v1 as components

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

events = st.sidebar.radio("Choose an event", ["datacraft"])
if events == "datacraft":
    with open(f"events/{events}.html", "r", encoding="utf-8") as file:
        html_content = file.read()
    st.title(events.replace("_", " "))
    components.html(html_content, height=800, scrolling=True)
