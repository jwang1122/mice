SELECT DISTINCT cage FROM mice order by cage;

A01
A011
A02
A03
A04
A05
A06
A07
A08
A11
A12
A98
EA01
EA02
EA03
EA11
EA12
EA15+++
EA22
EA35
EB21
FA04
FA05
J01
J05
J08
J09
J10
J12
J13
J14
J15
J16
J17
J18
J19
J20
J22
J23
MN01
MN02
MN03
MN04
MN04+
MN05
MN06
MN07
MN08
MN09
MN10
MN11
MN12
MN13
MN14
MN15
MN16
MN17
MN18
R16
RA07
RB1
RB3
RB5
S13
W02
W03
W04
W05
W06
W08
W09
W10
W13
W14
W14?
W15
W16
W17
W18
W19
W21
W23
W25
W28
W29
W30
W32
W33
W34
W35
W36
W37
W38
W39
W40
W41
WB3
WB4

SELECT * FROM mice WHERE cage=='A01';
b5e9884a6e5544718f6bd5d55f58a0fe	A0190	M	-/-	12/3/2021	R	A0151	A0148	A01	17-05 CL	A0185	asm
be9dfcacc43a43a09a60a43e76c8efe5	A0189	M	-/-	2021-12-3	L	A0151	A0148	A01	17-05 CL	2022-07-04	asm
52db1a1e235441b4999fc60e1394be92	A0183a	M	+/+	11/9/2021	NH	A0151aaaa	A0148	A01	17-05 CL	A0189	ASM

SELECT * FROM cages where count<=0;
