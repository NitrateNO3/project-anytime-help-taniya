# -*- coding: utf-8 -*-
"""Privacy Policy markdown -> the static HTML rendered by app/privacy/page.tsx.

The markdown document is the source of truth. After editing it, run from the
project root:  python scripts/build-legal.py
"""
import io, json, re, html

SRC = 'Anytime-Help-Privacy-Policy-v1.0.md'
OUT = 'app/privacy/content.ts'
EXPORT = 'privacyHtml'

lines = io.open(SRC, encoding='utf-8').read().split('\n')
# The page header renders the document title, so start below it.
start = next(i for i, l in enumerate(lines) if l.startswith('# ANYTIME HELP — PRIVACY POLICY'))
body = lines[start + 1:]

LINK = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')


def inline(s):
    s = html.escape(s, quote=False)

    # Markdown links become anchors first and are parked as sentinels, so the
    # placeholder and bare-email passes below cannot chew through them.
    links = []

    def park(m):
        links.append('<a href="%s">%s</a>' % (m.group(2), m.group(1)))
        return '\x00%d\x00' % (len(links) - 1)

    s = LINK.sub(park, s)

    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'\*(.+?)\*', r'<em>\1</em>', s)
    # every remaining [BRACKETED] item is a placeholder nobody has filled in yet
    s = re.sub(r'\[([^\]]+)\]', r'<mark class="legal-todo">[\1]</mark>', s)
    s = re.sub(r'([\w.+-]+@[\w-]+\.[\w.]+)', r'<a href="mailto:\1">\1</a>', s)

    return re.sub(r'\x00(\d+)\x00', lambda m: links[int(m.group(1))], s)


def render(block, out):
    """block: list of markdown lines already stripped of any '> ' prefix."""
    i = 0
    while i < len(block):
        line = block[i].rstrip()
        if not line.strip() or line.strip() == '---':
            i += 1
            continue
        m = re.match(r'^(#{1,6}) (.*)$', line)
        if m:
            level = min(len(m.group(1)) + 1, 4)    # sections h2, subsections h3, the rest h4
            out.append('<h%d>%s</h%d>' % (level, inline(m.group(2)), level))
            i += 1
            continue
        if line.startswith('|'):                   # table
            rows = []
            while i < len(block) and block[i].startswith('|'):
                rows.append([c.strip() for c in block[i].strip().strip('|').split('|')])
                i += 1
            head, sep, rest = rows[0], rows[1], rows[2:]
            assert set(''.join(sep)) <= set('-: '), sep
            out.append('<div class="legal-table"><table><thead><tr>'
                       + ''.join('<th>%s</th>' % inline(c) for c in head)
                       + '</tr></thead><tbody>'
                       + ''.join('<tr>' + ''.join('<td>%s</td>' % inline(c) for c in r) + '</tr>' for r in rest)
                       + '</tbody></table></div>')
            continue
        if re.match(r'^[-*] ', line):              # bullet list
            items = []
            while i < len(block) and re.match(r'^[-*] ', block[i]):
                items.append(block[i][2:].strip())
                i += 1
            out.append('<ul>' + ''.join('<li>%s</li>' % inline(it) for it in items) + '</ul>')
            continue
        out.append('<p>%s</p>' % inline(line))
        i += 1


out = []
i = 0
while i < len(body):
    if body[i].startswith('>'):                    # callout
        quote = []
        while i < len(body) and body[i].startswith('>'):
            quote.append(re.sub(r'^> ?', '', body[i]))
            i += 1
        inner = []
        render(quote, inner)
        out.append('<aside class="legal-callout">' + ''.join(inner) + '</aside>')
        continue
    j = i
    while j < len(body) and not body[j].startswith('>'):
        j += 1
    render(body[i:j], out)
    i = j

doc = ''.join(out)
# Nothing unfilled may reach the published policy — a [BRACKETED] item left in
# the source would render highlighted with nothing on the page explaining it.
assert '<mark' not in doc, 'unfilled placeholder in ' + SRC
assert '<h2>' in doc and '\x00' not in doc
io.open(OUT, 'w', encoding='utf-8', newline='\n').write(
    '/**\n'
    ' * Privacy Policy — %s converted to HTML verbatim.\n'
    ' * Edit the source document and run scripts/build-legal.py — never this file.\n'
    ' */\n'
    'export const %s = ' % (SRC, EXPORT) + json.dumps(doc, ensure_ascii=False) + ';\n')
print('h2:', doc.count('<h2>'), 'h3:', doc.count('<h3>'), 'h4:', doc.count('<h4>'),
      'links:', doc.count('<a '), 'placeholders:', doc.count('<mark'), 'bytes:', len(doc))
