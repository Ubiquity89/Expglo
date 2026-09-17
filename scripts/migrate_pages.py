import re, os

def html_to_jsx(html_str):
    # convert class to className
    jsx = re.sub(r'\bclass=', 'className=', html_str)
    # convert for= to htmlFor=
    jsx = re.sub(r'\bfor="', 'htmlFor="', jsx)
    # convert inline style="..." to style={{ ... }}
    def style_repl(match):
        st = match.group(1).strip()
        parts = [p.strip() for p in st.split(';') if p.strip()]
        obj_props = []
        for p in parts:
            if ':' in p:
                k, v = p.split(':', 1)
                k = k.strip()
                v = v.strip()
                # camelCase k
                k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                obj_props.append(f'{k_camel}: "{v}"')
        return 'style={{ ' + ', '.join(obj_props) + ' }}'

    jsx = re.sub(r'style="([^"]*)"', style_repl, jsx)
    # self-closing tags
    for tag in ['img', 'input', 'hr', 'br']:
        jsx = re.sub(rf'<({tag}[^>]*?)(?<!/)>', r'<\1 />', jsx)
    # replace internal links
    jsx = jsx.replace('href="index.html"', 'to="/"')
    jsx = jsx.replace('href="about.html"', 'to="/about"')
    jsx = jsx.replace('href="businesses.html"', 'to="/businesses"')
    jsx = jsx.replace('href="careers.html"', 'to="/careers"')
    jsx = jsx.replace('href="contact.html"', 'to="/contact"')
    jsx = jsx.replace('href="events.html"', 'to="/events"')
    jsx = jsx.replace('href="news.html"', 'to="/news"')
    jsx = jsx.replace('href="fund.html"', 'to="/fund"')
    jsx = jsx.replace('href="privacy.html"', 'to="/privacy"')
    jsx = jsx.replace('href="terms.html"', 'to="/terms"')
    jsx = jsx.replace('href="refund.html"', 'to="/refund"')
    jsx = jsx.replace('href="disclaimer.html"', 'to="/disclaimer"')
    jsx = jsx.replace('href="admin.html"', 'to="/admin"')

    return jsx

print("Migration utility loaded.")
