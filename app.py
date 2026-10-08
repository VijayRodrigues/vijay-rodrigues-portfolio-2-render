from flask import Flask, render_template, send_from_directory
from pathlib import Path

app = Flask(__name__, static_folder="static", template_folder="templates")

BASE_DIR = Path(__file__).resolve().parent

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/robots.txt")
def robots():
    return send_from_directory(BASE_DIR, "robots.txt", mimetype="text/plain")

@app.route("/sitemap.xml")
def sitemap():
    return send_from_directory(BASE_DIR, "sitemap.xml", mimetype="application/xml")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
