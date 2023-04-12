<!DOCTYPE html>
<html>
  <head>
    <title>proyecto final</title>
    <style>
      .center-buttons {
        text-align-last: center;
      }
      .not-display {
        display: none;
      }
      .btnNext {
        display: flex;
        justify-content: center;
      }
      .btnRepeat {
        display: flex;
        justify-content: center;
      }
      #btnNext {
        display: none;
      }
      #btnRepeat {
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="center-buttons">
      <input type="button" id="btnRed" name="btnRed" value="Red" />
      <input type="button" id="btnBlue" name="btnBlue" value="Blue" />
      <input type="button" id="btnOrange" name="btnOrange" value="Orange" />
      <input type="button" id="btnPurple" name="btnPurple" value="Purple" />
      <input type="button" id="btnYellow" name="btnYellow" value="Yellow" />
    </div>
    <br />
    <div id="statusBar" class="center-buttons">
      <input type="text" id="txtStatus" name="txtStatus" readonly size="5" />
    </div>
    <br />
    <div id="play-Element" class="center-buttons">
      <input type="button" id="btnPlay" name="btnPlay" value="Play" onclick="cambiar()" />
    </div>

    <div id="Next-Element" class="btnNext">
      <input type="button" id="btnNext" name="btnNext" value="Siguiente" />
    </div>

    <div id="repeat-Element" class="btnRepeat">
      <input type="button" id="btnRepeat" name="btnRepeat" value="Repite" />
    </div>
    <p id="msgBox"></p>

    <script>
      function cambiar() {
        var r = (document.getElementById("btnPlay").style.display = "none");
        var s = (document.getElementById("btnNext").style.display = "block");

        if (r == "none") {
          s = (document.getElementById("btnNext").style.display = "block");

          onclick = "cambiar()";
        }
      }

      document.getElementById("btnNext").addEventListener("click", random);

      let currentButtonIndex = 0;
      const buttons = [
        document.getElementById("btnRed"),
        document.getElementById("btnBlue"),
        document.getElementById("btnOrange"),
        document.getElementById("btnPurple"),
        document.getElementById("btnYellow"),
      ];

      const colors = ["Red", "Blue", "Orange", "Purple", "Yellow"];
      const generatedColors = [];

      function random() {
        if (currentButtonIndex < buttons.length) {
          let currentColor = buttons[currentButtonIndex].style.backgroundColor;
          let newColorIndex;

          do {
            newColorIndex = Math.floor(Math.random() * colors.length);
          } while (colors[newColorIndex] === currentColor);

          buttons[currentButtonIndex].style.backgroundColor = colors[newColorIndex];
          generatedColors.push(colors[newColorIndex]);
          currentButtonIndex++;
        } else {
          document.getElementById("btnNext").style.display = "none";
          document.getElementById("btnRepeat").style.display = "block";
        }
      }

      document.getElementById("btnRepeat").addEventListener("click", function () {
        currentButtonIndex = 0;

        for (let i = 0; i < buttons.length; i++) {
          buttons[i].style.backgroundColor = generatedColors[i];
        }

        document.getElementById("btnRepeat").style.display = "none";
        document.getElementById("btnNext").style.display = "block";
      });

      var Colores = [];
      var index = 1;
      const coloresMaxLength = 5;

      document.getElementById("btnNext").addEventListener("click", function () {
        if (index <= 5) {
          Colores[index] = document.getElementById("statusBar").value;
          document.getElementById("txtStatus").value = index + 1 + "/" + coloresMaxLength;
          document.getElementById("txtStatus").value = index + "/" + coloresMaxLength;

          index = index + 1;
        }
      });
    </script>
  </body>
</html>

