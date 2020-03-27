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

    function float2dollar(value){
        return "U$ "+(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    function renderChart(data, labels) {
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'This week',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                return float2dollar(value);
                            }
                        }
                    }]
                }
            },
        });
    }

    $("#renderBtn").click(
        function () {
            data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
            labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            renderChart(data, labels);
        }
    );
