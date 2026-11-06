# Discover Sorsogon — Flask Website

A tourism website for Sorsogon Province using Flask, HTML, CSS, and JavaScript.

## Project structure

```text
sorsogon_tourism_website/
├── app.py
├── requirements.txt
├── templates/
│   └── layout.html
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── README.txt
```

## Run the website

1. Install Python 3.
2. Open this project folder in VS Code.
3. Open the VS Code terminal.
4. (Recommended) Create and activate a virtual environment:

   Windows:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

5. Install Flask:
   ```bash
   pip install -r requirements.txt
   ```

6. Start the Flask development server:
   ```bash
   python app.py
   ```

7. Open this address in your browser:
   `http://127.0.0.1:5000`

## Main files

- `app.py` — Flask application and home route.
- `templates/layout.html` — website HTML template.
- `static/css/style.css` — website styles.
- `static/js/script.js` — interactive features.

## Included website features

- Tourist destinations with search, category filters and detail pop-ups
- Sorsogon Province municipality directory and public LGU contact channels
- Accommodation directory with map and booking-search links
- Personal activity calendar
- Demo login/register profile interface
- Culture, food, experiences and travel tips
- Responsive layout for desktop and mobile

## Important notes

- Login/register is a front-end demonstration only. It does not securely authenticate users or store passwords. Do not enter a real password.
- Calendar plans and demo visitor profile are stored in the current browser using localStorage.
- Most municipal email addresses are general LGU contact channels, not confirmed direct tourism-officer addresses. Verify contact details with the LGU before travelling.
- Hotel rates and availability can change. Contact accommodation providers directly.
- Images load from online sources and need an internet connection.
- This is an independent tourism guide, not an official government website.
