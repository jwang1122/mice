from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial")

pdf.text(0, 0, "Hello, the python fpdf2 tools!")

pdf.output('test.pdf')