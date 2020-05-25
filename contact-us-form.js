function showHideSuggestionForm () {
  var x = document.getElementById('suggestionform');

   if(document.getElementById('troublefinding').checked)
   {
       document.getElementById('suggestionform').style.display='block'; }
  else {
          document.getElementById('suggestionform').style.display='none'; }
}
