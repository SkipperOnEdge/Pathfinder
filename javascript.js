var albums = [];
  

    function createAlbum(){

      albums = JSON.parse(localStorage.getItem("myAlbums"));

        var a = document.getElementById("album").value;
        var art = document.getElementById("artist").value;
        var gen = document.getElementById("genre").value;
        var r = document.getElementById("release").value;

      var add = {
        "album": a,
        "artist": art,
        "genre": gen,
        "release": r
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

      var a = document.getElementById("album").value;
        var art = document.getElementById("artist").value;
        var gen = document.getElementById("genre").value;
        var r = document.getElementById("release").value;

      var add = {
        "album": a,
        "artist": art,
        "genre": gen,
        "release": r
      }

      
      albums.push(add);
      console.log(albums);
      localStorage.setItem("myAlbums",JSON.stringify(albums));
    }

    function ret() {
      albums = JSON.parse(localStorage.getItem("myAlbums"));
      
      for(var i = 0;i<albums.length;i++){

        document.write(JSON.stringify(albums[i],null,2));
        document.write("<br><br>");
      }
    }