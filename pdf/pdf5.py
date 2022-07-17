import matplotlib.pyplot as plt
from fpdf import FPDF

import matplotlib.pyplot as plt
from fpdf import FPDF
genos = '+/+', '+/-', '-/-'
sizes = 69,69,69

labels = tuple(map(lambda l: f"Geno {l}", genos))
explode = 0, 0.1, 0  # only "explode" the 2nd slice (i.e. 'Hogs')
fig1, ax1 = plt.subplots()
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=90)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.savefig('geno.png')

pdf = FPDF()
pdf.add_page()
pdf.set_font('helvetica', size=36)
pdf.cell(0, 10, txt="Mice Geno Distribution", align="C")
pdf.set_font('helvetica', size=18)
pdf.ln()
for geno in genos:
    pdf.cell(50, 20, border=1, txt=geno, align="C")
pdf.ln()
for size in sizes:
    pdf.cell(50, 20, border=1, txt=f"{size}", align="C")

pdf.image('geno.png', x=0, y=100, w=0, h=0, type='', link='')
pdf.output('geno.pdf')
