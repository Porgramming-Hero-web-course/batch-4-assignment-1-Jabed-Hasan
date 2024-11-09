function countWordOccurrences(sentence: string, word: string): number {
    // Convert both the sentence and the word to lowercase for case-insensitive comparison
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
  
    // Split the sentence into an array of words
    const words = lowerSentence.split(' ');
  
    let count = 0;
  
    // Use a simple for loop to iterate over each word
    for (let i = 0; i < words.length; i++) {
      if (words[i] === lowerWord) {
        count++;
      }
    }
  
    return count;
  }
  
  // Sample Input:
  console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1
  