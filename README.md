## About
	A random password generator written in node.js, optimist is required in the example test.js

## Usage 
	node test.js 
		[--count n]
		[--len m]
		[--sets groups]
		[--lchars lower_case_chars]
		[--uchars upper_case_chars]
		[--nums numeric_chars]
		[--puns punctuation_chars]
		[--exclude exclude_chars]
		[--sep separator_string]

		option defaults:
		n: 1
		m: 8
		groups: lun
			available options:
				l:lowercase chars
				u:uppercase chars
				n:numbers
				p:punctuations
		lower_case_chars: abcdefghijklmnopqrstuvwxyz
		upper_case_cahrs: ABCDEFGHIJKLMNOPQRSTUVWXYZ
		numeric_chars: 01234567890
		punctuation_chars: !"#$%&'()*+-./:;<=>?@[\\]^-`{|}~
		exclude: '' (blank)
		sep: '\n'

## Examples

	node test.js 
	pHfvOiR9

	node test.js --len 10
	ze1YEss5Wc

	node test.js --count 3
	F7lxBIV1
	iMxBTDMN
	CyrQH1pB

	node test.js --sets n --len 6 --count 5
	201535
	521572
	621002
	401485
	084974

	node test.js --sets lunp --len 12
	1}t6kxhlU$%X

	node test.js --sets n --len 4 --count 5 --sep ':'
	8992:4065:0825:1191:8712

	node test.js --lchars abcdefg --uchars UVWXYZ --exclude oO0
	62deXZc1

	node test.js --puns '?%#!' --count 6 --sets lunp
	2Tr0UA%P
	tIR6#Z3%
	2bHuJAdj
	cf1XR35b
	1xK9i#Jd
	5%rhEsxs

## Known issue
	Output is not exactly expected if the separator is one of the followings:
		'-', ' ', '\n'	
