import matplotlib.pyplot as plt
from fpdf import FPDF

labels = ('Geno +/+', 'Geno +/-', 'Geno -/-')
sizes = [25, 30, 45]
explode = (0, 0.1, 0)  # only "explode" the 2nd slice (i.e. 'Hogs')

fig1, ax1 = plt.subplots()
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=0)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.savefig('geno.png')

pdf=FPDF()
pdf.add_page()

pdf.image('geno.png', x=0, y=10, w=0, h=0,type='',link='')
pdf.output('geno.pdf')