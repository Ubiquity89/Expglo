import re, os

def get_body(filename):
    with open(f"archive/{filename}", encoding="utf-8") as f:
        content = f.read()
    
    h_idx = content.find("</header>")
    f_idx = content.find("<footer")
    if h_idx != -1 and f_idx != -1:
        body = content[h_idx + 9 : f_idx].strip()
    else:
        body = content
    return body

def clean_jsx(html_str):
    jsx = html_str
    jsx = re.sub(r'\bclass=', 'className=', jsx)
    jsx = re.sub(r'\bfor="', 'htmlFor="', jsx)
    
    # inline style
    def style_repl(match):
        st = match.group(1).strip()
        parts = [p.strip() for p in st.split(';') if p.strip()]
        obj_props = []
        for p in parts:
            if ':' in p:
                k, v = p.split(':', 1)
                k = k.strip()
                v = v.strip().replace('"', '\\"')
                k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                obj_props.append(f'{k_camel}: "{v}"')
        return 'style={{ ' + ', '.join(obj_props) + ' }}'
        
    jsx = re.sub(r'style="([^"]*)"', style_repl, jsx)
    
    # self-closing tags
    for tag in ['img', 'input', 'hr', 'br']:
        jsx = re.sub(rf'<({tag}[^>]*?)(?<!/)>', r'<\1 />', jsx)
        
    # fix netlify badge or scripts if any
    jsx = re.sub(r'<script[\s\S]*?</script>', '', jsx)
    jsx = re.sub(r'<div id="nl-badge-frame"[\s\S]*?</div>', '', jsx)
    jsx = re.sub(r'&lt;[\s\S]*?&gt;', '', jsx)
    
    # replace internal links with Link to=...
    link_map = {
        'href="index.html"': 'to="/"',
        'href="/index.html"': 'to="/"',
        'href="/"': 'to="/"',
        'href="about.html"': 'to="/about"',
        'href="/about"': 'to="/about"',
        'href="businesses.html"': 'to="/businesses"',
        'href="/businesses"': 'to="/businesses"',
        'href="businesses.html#school"': 'to="/businesses#school"',
        'href="/businesses#school"': 'to="/businesses#school"',
        'href="/startup-school"': 'to="/businesses#school"',
        'href="businesses.html#sutrasync"': 'to="/businesses#sutrasync"',
        'href="/businesses#sutrasync"': 'to="/businesses#sutrasync"',
        'href="careers.html"': 'to="/careers"',
        'href="/careers"': 'to="/careers"',
        'href="contact.html"': 'to="/contact"',
        'href="/contact"': 'to="/contact"',
        'href="contact.html?type=partner"': 'to="/contact?type=partner"',
        'href="/contact?type=partner"': 'to="/contact?type=partner"',
        'href="/contact?type=labs"': 'to="/contact?type=labs"',
        'href="events.html"': 'to="/events"',
        'href="/events"': 'to="/events"',
        'href="news.html"': 'to="/news"',
        'href="/news"': 'to="/news"',
        'href="fund.html"': 'to="/fund"',
        'href="/fund"': 'to="/fund"',
        'href="privacy.html"': 'to="/privacy"',
        'href="/privacy"': 'to="/privacy"',
        'href="terms.html"': 'to="/terms"',
        'href="/terms"': 'to="/terms"',
        'href="refund.html"': 'to="/refund"',
        'href="/refund"': 'to="/refund"',
        'href="disclaimer.html"': 'to="/disclaimer"',
        'href="/disclaimer"': 'to="/disclaimer"',
        'href="admin.html"': 'to="/admin"',
        'href="/admin"': 'to="/admin"'
    }
    for k, v in link_map.items():
        # change <a ... to <Link ... if internal
        pass
    
    return jsx

# Process About
about_body = clean_jsx(get_body("about.html"))
about_jsx = f'''import React, {{ useEffect }} from "react";
import {{ Link }} from "react-router-dom";
import {{ motion }} from "framer-motion";
import {{ fadeUp }} from "../utils/animations";
import PartnershipCTA from "../components/Home/PartnershipCTA";

export default function AboutPage() {{
  useEffect(() => {{
    document.title = "About Us | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }}, []);

  return (
    <main>
      {about_body}
      <PartnershipCTA />
    </main>
  );
}}
'''
with open("src/pages/AboutPage.jsx", "w", encoding="utf-8") as f:
    f.write(about_jsx)
print("Generated src/pages/AboutPage.jsx")

# Process Privacy
privacy_body = clean_jsx(get_body("privacy.html"))
privacy_jsx = f'''import React, {{ useEffect }} from "react";
import {{ Link }} from "react-router-dom";

export default function PrivacyPage() {{
  useEffect(() => {{
    document.title = "Privacy Policy | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }}, []);

  return (
    <main>
      {privacy_body}
    </main>
  );
}}
'''
with open("src/pages/PrivacyPage.jsx", "w", encoding="utf-8") as f:
    f.write(privacy_jsx)
print("Generated src/pages/PrivacyPage.jsx")

# Process Terms
terms_body = clean_jsx(get_body("terms.html"))
terms_jsx = f'''import React, {{ useEffect }} from "react";
import {{ Link }} from "react-router-dom";

export default function TermsPage() {{
  useEffect(() => {{
    document.title = "Terms & Conditions | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }}, []);

  return (
    <main>
      {terms_body}
    </main>
  );
}}
'''
with open("src/pages/TermsPage.jsx", "w", encoding="utf-8") as f:
    f.write(terms_jsx)
print("Generated src/pages/TermsPage.jsx")

# Process Refund
refund_body = clean_jsx(get_body("refund.html"))
refund_jsx = f'''import React, {{ useEffect }} from "react";
import {{ Link }} from "react-router-dom";

export default function RefundPage() {{
  useEffect(() => {{
    document.title = "Refund Policy | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }}, []);

  return (
    <main>
      {refund_body}
    </main>
  );
}}
'''
with open("src/pages/RefundPage.jsx", "w", encoding="utf-8") as f:
    f.write(refund_jsx)
print("Generated src/pages/RefundPage.jsx")

# Process Disclaimer
disclaimer_body = clean_jsx(get_body("disclaimer.html"))
disclaimer_jsx = f'''import React, {{ useEffect }} from "react";
import {{ Link }} from "react-router-dom";

export default function DisclaimerPage() {{
  useEffect(() => {{
    document.title = "Disclaimer | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }}, []);

  return (
    <main>
      {disclaimer_body}
    </main>
  );
}}
'''
with open("src/pages/DisclaimerPage.jsx", "w", encoding="utf-8") as f:
    f.write(disclaimer_jsx)
print("Generated src/pages/DisclaimerPage.jsx")
