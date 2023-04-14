from fpdf import FPDF

class MyPDF(FPDF):
    def multi_cell(self, w, h=None, txt='', border=0, align='L', fill=False, split_only=False, ln='DEPRECATED', max_line_height=None, markdown=False, print_sh=False, new_x=None, new_y=None):
        # If line height is not provided, use a default value
        if h is None:
            lh = self.get_string_width(txt)
            if not isinstance(lh, tuple):
                lh = (lh, )
            h = max(lh)

        super().multi_cell(w=w, h=h, txt=txt, border=border, align=align, fill=fill, split_only=split_only)

pdf = MyPDF()
pdf.add_page()
pdf.set_font("helvetica")

pdf.multi_cell(80, h=20, txt="""Hello the world! this is first line.""")
pdf.multi_cell(70, h=60, txt="""This is second line text.""")

pdf.output('pdf/multi_cell.pdf')
