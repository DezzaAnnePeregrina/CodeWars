/*

Home
Report home for your next assignment
TRAINING
Practice
Complete challenging Kata to earn honor and ranks. Re-train to hone technique
Freestyle Sparring
Take turns remixing and refactoring others code through Kumite
CAREER
Opportunities
Find your next career challenge – powered by Qualified Jobs
COMMUNITY
Leaderboards
Achieve honor and move up the global leaderboards
Chat
Join our Discord server and chat with your fellow code warriors
Discussions
View our Github Discussions board to discuss general Codewars topics
ABOUT
Docs
Learn about all of the different aspects of Codewars
DezzaAnnePeregrina Avatar
8 kyu
DNA to RNA Conversion
74318591% of 7,38435,154 of 99,587torret
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (8)
Discourse (205)
Translations
DESCRIPTION:
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.*/


function DNAtoRNA(dna) {
  return dna.replace(/[T]/gi,'U')
}
