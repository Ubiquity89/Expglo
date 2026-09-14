# EXPGLO Full Multi-Page Website Generator
import os
from scripts.layout import get_head, get_header, get_footer

def render_page(title, desc, active, body_content, extra_scripts=""):
    return f"""<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
  {get_head(title, desc)}
</head>
<body class="bg-white text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-brand-gold selection:text-white">
  {get_header(active)}
  {body_content}
  {get_footer()}
  <script src="assets/js/data.js"></script>
  <script src="assets/js/main.js"></script>
  {extra_scripts}
</body>
</html>"""

def save(fname, content):
    with open(fname, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {fname}")

