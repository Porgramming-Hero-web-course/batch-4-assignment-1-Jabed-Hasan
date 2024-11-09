function countWordOccurrences(sentence: string, word: string): number {
    
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
  
    
    const words = lowerSentence.split(' ');
  
    let count = 0;
  

    for (let i = 0; i < words.length; i++) {
      if (words[i] === lowerWord) {
        count++;
      }
    }
   console.log(count)
    return count;
  }
  
  // Sample Input:
  countWordOccurrences("I love typescript", "typescript"); 
  