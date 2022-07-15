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

pdf.cell(0, 20, 'Hello the world!')

pdf.output('cell.pdf')