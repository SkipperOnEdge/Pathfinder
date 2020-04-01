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
        "offenseRating": r,
        "defenseRating": e,
        "shootingPercentage": d
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


