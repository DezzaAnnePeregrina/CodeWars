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
7 kyu
Complementary DNA
210051789% of 16,78661,373 of 183,417JustyFY
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (43)
Discourse (423)
Translations
DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"*/


function DNAStrand(dna){
  let letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    let arr = [];
    for (let i=0; i < dna.length; i++) {
        arr[i] = letters[dna[i]];
    }
    return arr.join('');
}
