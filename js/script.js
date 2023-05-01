function init(){
    function buttonClick(){
      var textbox = document.getElementById('entryinput');
      document.getElementById('textoutput').innerHTML = textbox.value;
      alert("Alex Duong: " + textbox.value);
    }
    document.getElementById('entrybutton').addEventListener('click', buttonClick);
    }
  window.addEventListener('load', init);