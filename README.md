# Vijay Rodrigues Portfolio

Static portfolio served through a small Flask application for Render deployment.

## Structure

```text
.
├── app.py
├── requirements.txt
├── render.yaml
├── robots.txt
├── sitemap.xml
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    └── assets/
        ├── images, logos, favicon
        └── CV
```

## Run locally

```bash
pip install -r requirements.txt
python app.py
```

Then open `http://localhost:5000`.

## Render

Connect the GitHub repository to Render as a Web Service. Render can use the included `render.yaml`, or use:

- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`

The site assets are referenced through Flask's `static` path so the reorganized folder structure works correctly.
