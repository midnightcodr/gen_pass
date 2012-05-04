## About
	A random password generator written in node.js, optimist is required in the example test.js

## Usage 
	node test.js [--count n] [--len m] [--sets groups] [--sep separator_string]
		n: defaults to 1
		m: defaults to 8
		sets: defaults to lun
			available options:
				l:lowercase chars
				u:uppercase chars
				n:numbers
				p:punctuations

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

## Known issue
	Output is not exactly expected if the separator is on of the followings:
		'-', ' ', '\n'	
