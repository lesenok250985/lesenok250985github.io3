 window.onload = function(){
        document.getElementById('add').onclick = startKomm;
    }
       function startKomm(){
        var text = document.getElementById('txt').value;
        var komm = document.createElement('p');
        var newText = document.createTextNode(text);
         
        komm.appendChild(newText);
         

        document.getElementById('komments').appendChild(komm);

        return true;

       }

