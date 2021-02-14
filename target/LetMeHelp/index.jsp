<!DOCTYPE html>
<html>
<meta charset="UTF-8">
  <head>
    <title>LetMeHelp!</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #horizontal{
      }
      .rightPanel{
        height: 100%;
      }
      .map {
        height: 75%;
        width: 80%;
        position:absolute;
      }
      .legend {
        font-family: Arial, sans-serif;
        background: #fff;
        padding: 10px;
        margin: 10px;
        border: 3px solid #000;
        border-collapse: collapse;
        top: 10%;
      }
      .legend h3 {
        margin-top: 10%;
      }
      .cbox {
        font-size: 70%;
        font-weight: bold;
        color: #ffe680;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="head" style="height:5%;background-color: #443F99;color:white;font-size:30px;   box-shadow:  0 10px 10px -10px black;z-index: 2;position:relative">
     <div style="margin-left: 30px"> Let Me Help!</div>
    </div>
    <div id="horizontal" class="aParent" style="height:75%;background-color: #443F99">
       <div class="rightPanel" style="float: right;width: 80%">
          <div class="map" ></div>
          <div class="legend"></div>
       </div>
      <div class="leftPanel" style="float: left;height:100%;width: 20%;box-shadow:  0 10px 10px 10px black;z-index: 2;position:relative">
      </div>
    </div>
    <div id="footer" style="height:20%;background-color: #443F99 ;box-shadow:  0 10px 10px 10px black;z-index: 2;position:relative">
      <button type="button" onClick="disableFloodLayer()">Desactivar zonas inundables</button>
    </div>
    <div id="color-definitions" style="display: none;">#67001f,#a11228,#c53f3d,#df755d,#f5a987,#fcd3bc,#f9ece5,#e8f0f4,#c7e0ed,#97c7df,#5ba2cb,#337eb8,#1b5a9b,#053061</div>
    <div id="labels" style="display: none;">-10000,-8000,-6000,-4000,-2000,0,2000,4000,6000,8000,10000,12000,14000,16000</div>
    <div id="color-definitions-alternate" style="display: none;">#fff5f0,#ffebe2,#fee1d4,#fdd1be,#fcbfa7,#fcad90,#fc997a,#fc8666,#fb7353,#f85f43,#f34935,#e93529,#d82422,#c7171c,#b51318,#a10e15,#840711,#67000d</div>
    <div id="labels-alternate" style="display: none;">0,1,2,4,6,8,10,50,100,200,500,1000,1500,2000,2500,5000,10000,> 10000</div>
    <script src="map.js" charset="UTF-8"></script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxydKN7Yt54JNmVw9opg9EcibCghjetgw&callback=initMap">
    </script>
  </body>
</html>
