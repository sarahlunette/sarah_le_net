import streamlit as st
import os
import streamlit.components.v1 as components

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
