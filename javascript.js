var albums = [];
  
    function createForm(){

      albums = JSON.parse(localStorage.getItem("myAlbums"));

        var a = document.getElementById("team").value;
        var art = document.getElementById("win").value;
        var gen = document.getElementById("loss").value;
        var r = document.getElementById("OR").value;
        var e = document.getElementById("DR").value;
        var d = document.getElementById("shoot").value;

      var add = {
        "team": a,
        "wins": art,
        "losses": gen,
        "offense rating": r,
        "defense rating": e,
        "shooting percentage": d
      }


      albums.push(add);
      console.log(albums);
      localStorage.setItem("myAlbums",JSON.stringify(albums));
    }

    function del() {
      albums = JSON.parse(localStorage.getItem("myAlbums"));
      albu = document.getElementById("a");
      albumName = albu.options[albu.selectedIndex];
      albums.splice(albu.selectedIndex-1,1);
      localStorage.setItem("myAlbums", JSON.stringify(albums));
      console.log(albums);
      console.log(albumName);
    }

    function up() {
      albums = JSON.parse(localStorage.getItem("myAlbums"));
      albu = document.getElementById("a");
      albumName = albu.options[albu.selectedIndex];
      albums.splice(albu.selectedIndex-1,1);

      var a = document.getElementById("team").value;
        var art = document.getElementById("win").value;
        var gen = document.getElementById("loss").value;
        var r = document.getElementById("OR").value;
        var e = document.getElementById("DR").value;
        var d = document.getElementById("shoot").value;

      var add = {
        "team": a,
        "wins": art,
        "losses": gen,
        "offense rating": r,
        "defense rating": e,
        "shooting percentage": d
      }


      albums.push(add);
      console.log(albums);
      localStorage.setItem("myAlbums",JSON.stringify(albums));
    }

    function ret() {
      albums = JSON.parse(localStorage.getItem("myAlbums"));
      var ret = '';
      for(var i = 0;i<albums.length;i++){

        ret = ret + JSON.stringify(albums[i],null,2) + "<br><br>";
      }
      document.getElementById("retrievePage").innerHTML=ret;
    }

<<<<<<< HEAD
    function getDataArray()
    {
      albums = JSON.parse(localStorage.getItem("myAlbums"));
      data = Array(2);
      for(var r = 0; r < albums.length; r++){
        for(var c = 0; c < albums[r].length; c++){
          if(c==0) {
            data.push(albums[r].getElementById("team"));
            document.write(albums[r].getElementById("team"));
          }
          if(c==1) {
            data.push(albums[r].getElementById("win"));
          }
          if(c==2) {
            data.push(albums[r].getElementById("loss"));
          }
          if(c==3) {
            data.push(albums[r].getElementById("OR"));
          }
          if(c==4) {
            data.push(albums[r].getElementById("DR"));
          }
          if(c==5) {
            data.push(albums[r].getElementById("shoot"));
          }
        }
      }
      document.write(JSON.stringify())
      document.write(data.toString());

    }
=======

>>>>>>> 4b0dfc02daf0547e38e8a5fbcc9739d65036ee53
