# -*- coding: utf-8 -*-
"""Part C of the legal draft -> the static HTML rendered by app/terms/page.tsx.

The markdown document is the source of truth. After editing it, run from the
project root:  python scripts/build-terms.py
"""
import io, json, re, html

SRC = 'Anytime-Help-Terms-Privacy-Draft-v0.1_1.md'
lines = io.open(SRC, encoding='utf-8').read().split('\n')

start = next(i for i, l in enumerate(lines) if l.startswith('# ANYTIME HELP — RESIDENT TERMS'))
end = next(i for i, l in enumerate(lines) if l.startswith('*End of resident-facing document.*'))
body = lines[start + 1:end]

def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'\*(.+?)\*', r'<em>\1</em>', s)
    # every [BRACKETED] item is an unfilled placeholder or a drafting note
    s = re.sub(r'\[([^\]]+)\]', r'<mark class="legal-todo">[\1]</mark>', s)
    s = re.sub(r'([\w.+-]+@[\w-]+\.[\w.]+)', r'<a href="mailto:\1">\1</a>', s)
    return s

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
            level = 2 if len(m.group(1)) <= 2 else 3   # PART headings h2, clauses h3
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
        if line.startswith('- '):                  # bullet list
            items = []
            while i < len(block) and block[i].startswith('- '):
                items.append(block[i][2:].strip())
                i += 1
            out.append('<ul>' + ''.join('<li>%s</li>' % inline(it) for it in items) + '</ul>')
            continue
        out.append('<p>%s</p>' % inline(line))
        i += 1

out = []
i = 0
while i < len(body):
    if body[i].startswith('>'):                    # callout: emergency notice, arbitration note
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
assert '<mark' in doc and '<table>' in doc and 'legal-callout' in doc
io.open('app/terms/content.ts', 'w', encoding='utf-8', newline='\n').write(
    '/**\n'
    ' * Resident Terms & Conditions — Part C of Anytime-Help-Terms-Privacy-Draft-v0.1_1.md,\n'
    ' * converted to HTML verbatim. Every [BRACKETED] item is an unfilled placeholder from\n'
    ' * that draft and renders highlighted; the draft is not for production until they are\n'
    ' * filled in. Edit the source document and run scripts/build-terms.py — never this file.\n'
    ' */\n'
    'export const termsHtml = ' + json.dumps(doc, ensure_ascii=False) + ';\n')
print('sections:', doc.count('<h3>'), 'tables:', doc.count('<table>'), 'placeholders:', doc.count('<mark'), 'bytes:', len(doc))
