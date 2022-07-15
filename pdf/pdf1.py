"""
def text(self, x, y, txt='')
"""

from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("helvetica")

pdf.text(80, 20, "Hello, the python fpdf2 tools!")
pdf.text(80, 40, "Hello the world!")

pdf.output('text.pdf')
