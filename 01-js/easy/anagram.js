/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  boolean flag = true;
    if(str1.length != str2.length){
        return false;
    }else{
        for(int i=0; i<str1.length; i++){
            for(int j=i; j<str1.length; j++){
                if(str1[i] != str2[j]){
                    return false;
                }
            }
        }
    }

}

module.exports = isAnagram;
