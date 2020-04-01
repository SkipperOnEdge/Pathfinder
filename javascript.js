var teamList = [];
  
    function createForm(){

      teamList = JSON.parse(localStorage.getItem("myTeams"));

      if(teamList === null)
        teamList = [];

  
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


      teamList.push(add);
      console.log(teamList);
      localStorage.setItem("myTeams",JSON.stringify(teamList));
    }

    function del() {
      teamList = JSON.parse(localStorage.getItem("myTeams"));
      tea = document.getElementById("a");
      te = tea.options[tea.selectedIndex];
      teamList.splice(tea.selectedIndex-1,1);
      localStorage.setItem("myTeams", JSON.stringify(teamList));
      console.log(teamList);
      console.log(te);
    }

    function up() {

      teamList = JSON.parse(localStorage.getItem("myTeams"));
      tea = document.getElementById("a");
      te = tea.options[tea.selectedIndex];
      teamList.splice(tea.selectedIndex-1,1);

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
      teamList.push(add);
      console.log(teamList);
      localStorage.setItem("myTeams",JSON.stringify(teamList));
    }
    function ret() {
      teamList = JSON.parse(localStorage.getItem("myTeams"));
      var ret = '';
      for(var i = 0;i<teamList.length;i++){

        ret = ret + JSON.stringify(teamList[i],null,2) + "<br><br>";}
      document.getElementById("retrievePage").innerHTML=ret; }
    function getDataArray(){
      teamList = JSON.parse(localStorage.getItem("myTeams"));
      data = Array(2);
      for(var r = 0; r < teamList.length; r++){
        for(var c = 0; c < teamList[r].length; c++){
          if(c==0) {
            data.push(teamList[r].getElementById("team"));
            document.write(teamList[r].getElementById("team"));}
          if(c==1) {
            data.push(teamList[r].getElementById("win"));}
          if(c==2) {
            data.push(teamList[r].getElementById("loss"));}
          if(c==3) {
            data.push(teamList[r].getElementById("OR"));}
          if(c==4) {
            data.push(teamList[r].getElementById("DR"));}
          if(c==5) {
            data.push(teamList[r].getElementById("shoot"));}
        }
      }
      document.write(JSON.stringify())
      document.write(data.toString());
    }
