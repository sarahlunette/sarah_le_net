import streamlit as st

career = ["Resume", "Certifications", "LinkedIn"]

st.title("Career")
selected_item = st.selectbox("Choose a section", career)

if selected_item == "Resume":
    st.header("Resume ")
    st.markdown(
        f'<a href="https://drive.google.com/file/d/1zJzdpMalbKEZ1vZ39UEeZFcH2-XhPieW/view?usp=sharing">🌐 View Certification</a>',
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
