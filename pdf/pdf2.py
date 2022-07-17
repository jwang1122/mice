"""
def cell(self, 
w=None, h=None, txt='', border=0, ln='DEPRECATED', 
align=Align.L, fill=False, link='', center='DEPRECATED', 
markdown=False, new_x=XPos.RIGHT, new_y=YPos.TOP)
"""

from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("helvetica")

pdf.cell(50, 10, 'Hello the world!', border=1, align="C")
pdf.cell(60, 10, 'How are you doing today', border=1)
pdf.cell(60, 10, 'How are you doing today', border=1)
pdf.cell(60, 10, 'How are you doing today', border=1)
pdf.ln()
pdf.set_text_color(255, 0, 0)
pdf.set_fill_color(255, 255, 0)
pdf.cell(60, 10, 'How are you doing today', border=1)
pdf.cell(60, 10, 'How are you doing today', border=1, fill=True)
pdf.cell(60, 10, 'How are you doing today', border=1)

pdf.output('cell.pdf')
