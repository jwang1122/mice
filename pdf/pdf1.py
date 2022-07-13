from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial")

pdf.text(80, 20, txt="Hello, the python fpdf2 tools!")

pdf.output('text.pdf')