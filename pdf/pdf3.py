from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("helvetica")

pdf.multi_cell(80, txt="""def multi_cell(self, w, h=None, txt='', border=0, align=Align.J, fill=False, split_only=False, link='', ln='DEPRECATED', max_line_height=None, markdown=False, print_sh=False, new_x=XPos.RIGHT, new_y=YPos.NEXT)""")
pdf.multi_cell(70, h=-60, txt="""def multi_cell(self, w, h=None, txt='', border=0, align=Align.J, fill=False, split_only=False, link='', ln='DEPRECATED', max_line_height=None, markdown=False, print_sh=False, new_x=XPos.RIGHT, new_y=YPos.NEXT)""")

pdf.output('multi_cell.pdf')
