import streamlit as st

st.title("Teaching")
media = st.sidebar.selectbox("Choose a media", ["Data Workshops", "Writing", "Slides"])
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
        st.header("Multi-threading, multi-processing, and computing power/costs in ML")
        st.video(youtube_url)
