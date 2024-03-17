async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
}
  
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// async function deleteSentence(eleRef) {
//     const sentence = $(eleRef).html();
//     const letters = sentence.split("");
//     let i = 0;
//     while(letters.length > 0) {
//       await waitForMs(50);
//       letters.pop();
//       $(eleRef).html(letters.join(""));
//     }
// }

$(document).ready(async function() {
    await typeSentence("Welcome to EDUCAFE where you can be notified of meetings hosted by your favorite lecturers.", "#sentence");
    await waitForMs(100);
    // deleteSentence("#sentence");
  });