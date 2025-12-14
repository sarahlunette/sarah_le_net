# Sarah Le Net - The Lab

## Overview

Welcome to **The Lab**, a personal portfolio and blog by Sarah Le Net. This Streamlit-based web application showcases a diverse range of interests, projects, and experiences spanning data science, AI, environmental resilience, hackathons, entrepreneurship, and more. Inspired by passions for nature, physics, and technology, this platform serves as a hub for sharing insights, articles, and achievements.

The application is built with Streamlit and integrates with GitHub to dynamically display project READMEs and other content. It covers topics from AI in disaster preparedness to personal journeys across South America and professional milestones in data engineering and MLOps.

## Features

### Main Sections
- **Presentation**: Introduction to Sarah Le Net's journey and motivations.
- **Hackathons**: Showcase of participation in various hackathons focused on AI, emergency crises, and environmental issues (e.g., GeoHack AI, FrugalAI, Microsoft AI Agents).
- **Articles**: Collection of articles in French and English on topics like environment, data/tech, entrepreneurship, and events. Includes interviews and state-of-the-art reviews.
- **Teaching**: Educational content including videos on data science topics (PCA, Multibox Detection, MLOps) and workshops.
- **Career**: Resume, certifications (e.g., Google Professional Data Engineer), and LinkedIn profile.
- **Entrepreneurship**: Projects like "The Bubble" coworking space and "TheLab AI" for resilience AI.
- **Additional Master's Courses**: Audited courses from MVA, MOCIS, and M1M2 Risques et Environnements.
- **CNAM**: Metrology and Citizen Sciences project presentation.
- **La Jaune et La Rouge**: Articles from Polytechnique's magazine on startups and innovations.
- **Trips**: Personal travel experiences, including South America and Greece.
- **Theater**: Involvement in plays, workshops, and puppetry from youth to professional work.
- **Photography**: Gallery of images from travels (e.g., Greece, Italy).
- **Courses**: Online courses from platforms like Coursera, Cloud Guru, and Udemy on cloud computing, data engineering, and more.
- **Events**: Participation in tech and data events (e.g., Climate House, DataKind, VivaTech).
- **X-Urgence Ecologique**: Involvement in ecological emergency initiatives.

### Technical Highlights
- Dynamic GitHub integration for displaying project READMEs.
- Multi-language support for articles (French/English).
- Embedded videos and links to external resources.
- Responsive design via Streamlit.

## Project Structure

```
sarah_le_net/
├── .DS_Store
├── .gitignore
├── demo.py                    # Main Streamlit application
├── Dockerfile                 # Docker configuration for containerization
├── latest.txt                 # Notes on recent tech events and blockchain in healthcare
├── portfolio.txt              # Summary of hackathons, interviews, and personal projects
├── README.md                  # This file
├── requirements.txt           # Python dependencies
├── tips.txt                   # Tips on free API deployment options
├── articles/                  # Folder containing HTML articles and text files
│   ├── .DS_Store
│   ├── Califrais_(French_Version).html
│   ├── Chatgpt_HRO(French_Version).html
│   ├── Chatgpt_ICS_(French_Version).html
│   ├── Contexte et parties prenantes pour un outil d’IA en résilience.docx
│   ├── EcoAct_(French_Version).html
│   ├── HighWind_(French_Version).html
│   ├── HighWind.txt
│   ├── Post_Baobab_(English_Version).html
│   ├── review_of_GPU_deployment_tools.txt
│   ├── Solène_de_Baobab_Tech_(French_Version).html
│   ├── Tech_accross_years.html
│   └── Week_04_28.txt
├── CNAM/                      # CNAM project files
│   └── projet_expoped.pdf
├── images/                    # Images for resume and gallery
│   ├── .DS_Store
│   ├── resume.jpg
│   └── resume.pdf
└── pages/                     # Streamlit pages (for multi-page structure)
    └── 1-Presentation.py
```

## Installation

### Prerequisites
- Python 3.11 or higher
- GitHub Personal Access Token (for accessing private repos if needed)

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/sarahlunette/sarah_le_net.git
   cd sarah_le_net
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your GitHub token:
     ```
     GITHUB_TOKEN=your_github_personal_access_token_here
     ```

4. Run the application:
   ```bash
   streamlit run demo.py
   ```

   The app will be available at `http://localhost:8501`.

### Docker Setup
1. Build the Docker image:
   ```bash
   docker build -t sarah-le-net .
   ```

2. Run the container:
   ```bash
   docker run -p 8501:8501 sarah-le-net
   ```

   Access the app at `http://localhost:8501`.

## Usage

- Navigate through the sidebar to explore different sections.
- For hackathons and entrepreneurship projects, click links to view GitHub repositories and external presentations.
- Articles are displayed in HTML format; select language preference where available.
- Videos and images are embedded directly in the app.

## Dependencies

- `PyGithub`: For GitHub API interactions.
- `python-dotenv`: For environment variable management.
- `streamlit`: Web app framework.
- `pandas`: Data manipulation (if used in articles).
- `numpy`: Numerical computations (if used).

See `requirements.txt` for full list.

## Contributing

Contributions are welcome! If you'd like to add new sections, fix bugs, or improve the content:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make changes and commit: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

For major changes, please open an issue first to discuss.

## License

This project is open-source. Please check for any specific licensing in individual files or contact the author.

## Author

**Sarah Le Net**  
- LinkedIn: [Sarah Le Net](https://www.linkedin.com/in/sarah-le-net-13268944/)  
- GitHub: [sarahlunette](https://github.com/sarahlunette)  
- Email: [Contact via LinkedIn or GitHub]

Inspired by a journey from Columbia University to global adventures, this portfolio reflects a commitment to using data and AI for good, particularly in environmental and humanitarian contexts.

## Acknowledgments

- Thanks to all hackathon organizers, mentors, and collaborators.
- Special appreciation for the open-source community and tools like Streamlit and GitHub.
- Images and content sourced from personal experiences and public domains where applicable.
