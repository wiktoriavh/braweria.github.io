"use strict";

var optionA = document.getElementById("a");
var optionB = document.getElementById("b");
var optionC = document.getElementById("c");
var text = document.getElementById("content");
var items = document.getElementById("items");
var path = document.getElementById("path");
var inventar = document.getElementById("inventar");
var bag = document.getElementById("bag");
var egg = document.getElementById("egg");
var water = document.getElementById("water");
var mushroom = document.getElementById("mushroom");
var treesap = document.getElementById("treesap");
var appState = {
  path: "beginning",
  items: {
    bag: false,
    mushroom: false,
    water: false,
    treesap: false,
    egg: false
  }
};

function checkItems() {
  if (appState.items.bag === true) {
    inventar.classList.add("active");
    bag.classList.add("active");
  } else {
    inventar.classList.remove("active");
    bag.classList.remove("active");
  }

  if (appState.items.water === true) {
    water.classList.add("active");
  } else {
    water.classList.remove("active");
  }

  if (appState.items.mushroom === true) {
    mushroom.classList.add("active");
  } else {
    mushroom.classList.remove("active");
  }

  if (appState.items.egg === true) {
    egg.classList.add("active");
  } else {
    egg.classList.remove("active");
  }

  if (appState.items.treesap === true) {
    treesap.classList.add("active");
  } else {
    treesap.classList.remove("active");
  }
}

var tatzelwurmHasEgg = false; // Hat der Tatzelwurm ihr Ei bekommen?

var stueppPlayTime = false; // Hat man mit dem Stüpp Junges gespielt?

var undineSinging = false; // Hat man die Quest für Udine gemacht?

optionA.innerHTML = "Ansprechen";
optionB.classList.add("hide");
optionC.innerHTML = "Ignorieren";
optionA.addEventListener("click", function () {
  console.table(appState.path);
  checkItems(); // Moved tiered conditional statements to a switch statement.

  switch (appState.path) {
    case "beginning":
      // Ansprechen
      text.innerHTML = "Der Dilldapp dreht sich zum Mädchen um und fängt an zu erzählen: 'Oh du meine Güte! I-Ich soll für das Fest eine große Mahlzeit kochen, doch für die wichtigste Speise habe ich drei Zutaten vergessen. Was soll ich denn nur machen? Ich habe keine Zeit die Zutaten zu suchen...'";
      optionA.innerHTML = "Hilfe anbieten";
      optionC.innerHTML = "Ignorieren";
      optionC.classList.remove("hide");
      appState.path = "speakDilladapp";
      break;

    case "speakDilladapp":
      // Hilfe anbieten
      text.innerHTML = "'Oh, was für eine Freude! Vielen Dank!' Mit einem erfreutem Gesicht spingt der Dilladapp auf und ab und drückt Marie eine Tasche in die Hand. 'Hier, nimm das. Fülle das mit den Zutaten.' Und während Marie sich die Tasche umschnallt, erklärt der Dilladapp wo man die Zutaten finden kann: 'Ich brauche einen schwarzen Pilz in der Form eines Eies, den findest du im Sumpf. Als nächstes brauche ich das magische Wasse, welches in der nähe eines Teiches mit einem kleinem Wasserfall ist. Und als letztes brauche ich Baumharz, den von den besonders dicken Bäumen!'", optionA.innerHTML = "Zum Sumpf gehen";
      optionB.innerHTML = "Zum magischen Teich gehen";
      optionB.classList.remove("hide");
      optionC.innerHTML = "Zu den Bäumen gehen";
      optionC.classList.remove("hide");
      appState.path = "helpDilladapp";
      appState.items.bag = true;
      break;
    //
    // SUMPF 
    //

    case "NoMushroomNoWater":
    case "NoMushroomHasWater":
    case "NoMushroomNoTreesap":
    case "NoMushroomHasTreesap":
    case "helpDilladapp":
      // Auswahl zwischen [Sumpf], Teich und Bäume
      text.innerHTML = "Marie und Luna stampfen durch den sumpfigen Teil des Waldes und suchen nach dem Pilz. Als Luna anfängt zu bellen und etwas Ei-artiges gefunden haben. Als Marie es aufgehoben hat, merkte sie, dass es ein echtes Ei ist. 'Es scheint wohl verlassen zu sein.'";
      optionA.innerHTML = "Die Mutter finden";
      optionB.classList.add("hide");
      optionC.innerHTML = "Das Ei in Ruhe lassen";
      optionC.classList.remove("hide");
      appState.path = "swamp";
      appState.items.egg = true;
      appState.items.bag = true;
      break;

    case "swamp":
      // Im Sumpf [Mutter finden] oder Ei in Ruhe lassen
      text.innerHTML = "Luna schnupperte am Ei und versuchte die Fährte aufzunehmen. Während die beiden also nach der Mutter suchten, treffen sie plötzlich auf einen sehr aufgewühlten Tatzelwurm.'";
      optionA.innerHTML = "Ansprechen";
      optionB.classList.add("hide");
      optionC.innerHTML = "Vermeiden";
      optionC.classList.remove("hide");
      appState.path = "findMother";
      appState.items.mushroom = true;
      appState.items.egg = true;
      tatzelwurmHasEgg = true;
      break;

    case "findMother":
      // Treffen Tatzelwurm, [Ansprechen] oder Ignorieren
      text.innerHTML = "'Hallo, Frau Tatzelwurm. Ist alles in Ordnung?' fragte Marie. Der Tatzelwurm dreht sich um und erzählt schluchzend: 'Nein, ich habe vergessen wo ich mein Ei gelegt habe und kann es nicht mehr wieder finden!' Marie holte daraufhin das Ei aus der Tasche und hielte es hoch. 'Ist es dieses hier?' Überglücklich ihr Ei wiederzufinden, nimmt sie es sofort in die Arme. 'Oh, danke! Wie kann ich dir danken?' Daraufhin erzählte Marie, dass sie auf der Suche nach den Pilzen war. Der Tatzelwurm wusste wo man welche finden kann, und zeigt ihr den Weg.";

      if (appState.items.water === false && appState.items.treesap === false) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.innerHTML = "Zu den Bäumen gehen";
        appState.path = "NoWaterNoTreesap";
      } else if (appState.items.water === true && appState.items.treesap === false) {
        optionA.innerHTML = "Zu den Bäumen gehen";
        optionC.classList.add("hide");
        appState.path = "HasWaterNoTreesap";
      } else if (appState.items.water === false && appState.items.treesap === true) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.classList.add("hide");
        appState.path = "NoWaterHasTreesap";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "hasAll";
      }

      optionB.classList.add("hide");
      appState.items.egg = false;
      break;
    //
    // TEICH
    //

    case "NoMushroomHasWater":
    case "NoMushroomNoWater":
    case "NoWaterHasTreesap":
    case "NoWaterNoTreesap":
    case "helpDilladapp":
      // Auswahl zwischen Sumpf, [Teich] und Bäume
      text.innerHTML = "Dem frischem Wind hinterher marschieren die beiden zum Wasser und finden schon bald den Teich. Als sie dabei sind das Wasser aufzusammeln, hören sie ein rascheln im Gebisch.";
      optionA.innerHTML = "Hier bleiben und warten";
      optionB.classList.add("hide");
      optionC.innerHTML = "Verstecken gehen";
      optionC.classList.remove("hide");
      appState.path = "pond";
      break;

    case "pond":
      text.innerHTML = "Aus dem Gebüsch kommt eine Undine, die bedrückt ausschaut, und sich dann am Teich hinsaß. 'Was ist denn los?', fragte Marie und setzte sich neben die Undine. 'Meine Partnerin ist verschwunde und ich weiß nicht, wo sie sein könnte. Ich mache mir sorgen und wünschte sie wäre hier mit mir zu singen.'";
      optionA.innerHTML = "Anbieten mit ihr zu singen";
      optionB.classList.add("hide");
      optionC.innerHTML = "Das Wasser nehmen und gehen";
      optionC.classList.remove("hide");
      appState.path = "undine";
      undineSinging = true;
      break;

    case "undine":
      // wenn man mit ihr singt
      text.innerHTML = "Die Undine lächelte und war einverstanden. Zusammen haben sie ein paar Lieder gesungen, bevor sie sich bedankt hat für die Geselschaft. 'Das hat mir gut getan. Ich gehe wieder auf die Suche.' Somit verabschiedete sich die Undine und Marie hat das Wasser eingesmmelt.";

      if (appState.items.mushroom === false && appState.items.treesap === false) {
        optionA.innerHTML = "Zum Sumpf gehen";
        optionC.classList.add("active");
        optionC.innerHTML = "Zu den Bäumen gehen";
        appState.path = "NoMushroomNoTreesap";
      } else if (appState.items.mushroom === true && appState.items.treesap === false) {
        optionA.innerHTML = "Zu den Bäumen gehen";
        optionC.classList.add("hide");
        appState.path = "HasMushroomNoTreesap";
      } else if (appState.items.mushroom === false && appState.items.treesap === true) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.classList.add("hide");
        appState.path = "NoMushroomHasTreesap";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "HasAll";
      }

      optionB.classList.add("hide");
      appState.items.water = true;
      break;

    case "hideWater":
      text.innerHTML = "'Puh, fasst geschafft!' erfreute sich Marie und Luna bellte auf.";

      if (appState.items.mushroom === false && appState.items.treesap === false) {
        optionA.innerHTML = "Zum Sumpf gehen";
        optionC.classList.add("active");
        optionC.innerHTML = "Zu den Bäumen gehen";
        appState.path = "NoMushroomNoTreesap";
      } else if (appState.items.mushroom === true && appState.items.treesap === false) {
        optionA.innerHTML = "Zu den Bäumen gehen";
        optionC.classList.add("hide");
        appState.path = "HasMushroomNoTreesap";
      } else if (appState.items.mushroom === false && appState.items.treesap === true) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.classList.add("hide");
        appState.path = "NoMushroomHasTreesap";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "HasAll";
      }

      optionB.classList.add("hide");
      break;
    //
    // BÄUME
    //

    case "trees":
      // wenn man mit ihr singt
      text.innerHTML = "Als Marie sich umgedreht hat, hat sie einen Stüpp junges gesehen, welches sehr verspielt ist. Es wedelte mit dem Schwanz und wirkte erfreut die beiden zu sehen. 'Lass uns spielen!' rufte es.";
      optionA.innerHTML = "Mit dem Stüpp Junges spielen";
      optionB.classList.add("hide");
      optionC.innerHTML = "Ablehnen";
      optionC.classList.remove("hide");
      appState.path = "speakStuepp";
      stueppPlayTime = true;
      break;

    case "speakStuepp":
      text.innerHTML = "Zusammen mit dem Stüpp Junges hat Marie und Luna verstecken und fangen gespielt. Nach einer Weile wurde Marie erschöpft und setzte sich hin. Das Stüpp Junges kam zu ihr wieder. 'Danke, dass du mit mir gespielt hast! Was suchst du eigentlich in diesem Teil des Waldes?' Somit erzählte Marie, dass sie nach Bamharz suchte für den Dilladapp. Das Stüpp Junges sprang auf und meinte, er wisse wo man welches finden könnte und helfte ihr dabei. 'Danke, für deine Hilfe!', bedankte sich Marie und führte ihre Aufgabe fort.";

      if (appState.items.mushroom === false && appState.items.water === false) {
        optionA.innerHTML = "Zum Sumpf gehen";
        optionC.innerHTML = "Zu Teich gehen";
        appState.path = "NoMushroomNoWater";
      } else if (appState.items.mushroom === true && appState.items.water === false) {
        optionA.innerHTML = "Zu Teich gehen";
        optionC.classList.add("hide");
        appState.path = "HasMushroomNoWater";
      } else if (appState.items.mushroom === false && appState.items.water === true) {
        optionA.innerHTML = "Zum Sumpf gehen";
        optionC.classList.add("hide");
        appState.path = "NoMushroomHasWater";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "HasAll";
      }

      optionB.classList.add("hide");
      appState.items.treesap = true;
      break;

    case "HasMushroomNoTreesap":
    case "NoMushroomNoTreesap":
    case "HasWaterNoTreesap":
    case "NoWaterNoTreesap":
    case "helpDilladapp":
      // Auswahl zwischen Sumpf, Teich und [Bäume]
      text.innerHTML = "Mit Luna vorran, suchten die beiden die dicksten Bäumen im Wald, als plötzlich etwas auf sie gesprungen ist mit scharfen Krallen!";
      optionA.innerHTML = "Kreatur runter werfen";
      optionB.classList.add("hide");
      optionC.innerHTML = "Wegrennen";
      optionC.classList.remove("hide");
      appState.path = "trees";
      break;
    //
    // ENDE
    //

    case "end":
      // Ende erreicht, Reset?
      text.innerHTML = "Marie geht mit ihrem Hund Luna in den magischen Wald spazieren. Dort trifft sie auf einen Dilldapp. Der Dilldapp geht auf und ab und wirkt leicht verzweifelt.";
      optionA.innerHTML = "Ansprechen";
      optionB.classList.add("hide");
      optionC.innerHTML = "Ignorieren";
      optionC.classList.remove("hide");
      appState.path = "beginning";
      appState.items.mushroom = false;
      appState.items.egg = false;
      appState.items.water = false;
      appState.items.bag = false;
      appState.items.treesap = false;
      break;
    //
    // MISSION ABGEBEN
    //

    case "HasAll":
      text.innerHTML = "Beim Dilladapp angekommen, hat Marie all die Zutaten abgegeben. 'Vielen Dank für deine Hilfe! Nun wird das Fest ein voller erfolg. Komm doch vorbei.'";
      optionA.innerHTML = "Zum Fest gehen";
      optionB.classList.add("hide");
      optionC.classList.add("hide");
      appState.path = "party";
      break;

    case "party":
      if (stueppPlayTime === true) {
        text.innerHTML = "Beim Fest angekommen, ging Marie durch die Menge. Dort hat sie das Stüpp Junges wieder gesehen, wie es glücklich mit seiner Familie am spielen war.";
      } else {
        text.innerHTML = "Beim Fest angekommen, ging Marie durch die Menge. Dort hat sie das Stüpp Junges wieder gesehen, jedoch saß es alleine in der Ecke.";
      }

      optionA.innerHTML = "Weiter gehen";
      optionB.classList.add("hide");
      optionC.classList.add("hide");
      appState.path = "partyStuepp";
      break;

    case "partyStuepp":
      if (tatzelwurmHasEgg === true) {
        text.innerHTML = "Sie ging weiter und nam sich etwas vom buffet. Dort sah sie den Tatzelwurm von vorhin, und ihr geschlüftes Kind auf dem Kopf.";
      } else {
        text.innerHTML = "Am Buffet angekommen, nahm sie sich etwas zu essen. Aus ihrem Augenwinkel sah sie den Tatzelwurm wieder, welche am weinen war und von anderen getröstet worden ist.";
      }

      optionA.innerHTML = "Weiter gehen";
      optionB.classList.add("hide");
      optionC.classList.add("hide");
      appState.path = "partyTatzel";
      break;

    case "partyTatzel":
      if (undineSinging === true) {
        text.innerHTML = "Es gab sogar Musik. Die Undine war am singen, zusammen mit ihrer Partnerin! Die beiden sehen wie ein glückliches Paar aus.";
      } else {
        text.innerHTML = "Es gab eine Bühne, jedoch spielte niemand Musik auf ihr.";
      }

      optionA.innerHTML = "Weiter gehen";
      optionB.classList.add("hide");
      optionC.classList.add("hide");
      appState.path = "partyUndine";
      break;

    case "partyUndine":
      if (undineSinging === true && tatzelwurmHasEgg === true && stueppPlayTime === true) {
        text.innerHTML = "Glücklich mit dem Tag, und wie sie freude anderen bereiten konnte, ging sie zurück nachhause zu ihrer eigenen Familie.";
      } else {
        text.innerHTML = "Es wurde spät und die ging mit Luna zurück nachhause. Während beide unterwegs waren, fragten sie sich, ob sie etwas anders hätten machen können.";
      }

      optionA.innerHTML = "Erneut probieren?";
      optionB.classList.add("hide");
      optionC.classList.add("hide");
      appState.path = "end";
      break;
  }
}); // Option A

optionB.addEventListener("click", function () {
  console.table(appState.path);
  checkItems();

  switch (appState.path) {
    case "helpDilladapp":
      // Auswahl zwischen Sumpf, [Teich] und Bäume
      text.innerHTML = "Dem frischem Wind hinterher marschieren die beiden zum Wasser und finden schon bald den Teich. Als sie dabei sind das Wasser aufzusammeln, hören sie ein rascheln im Gebisch.";
      optionA.innerHTML = "Hier bleiben und warten";
      optionB.classList.add("hide");
      optionC.innerHTML = "Verstecken gehen";
      optionC.classList.remove("hide");
      appState.path = "pond";
      break;
  }
});
optionC.addEventListener("click", function () {
  console.table(appState.path);
  checkItems();

  switch (appState.path) {
    case "beginning":
      // ignorieren
      text.innerHTML = "Unwohl mit der Situation, hat sie sich entschieden den Dilldapp nicht anzusprechen und den Spaziergang fortzusetzen. Ohne weiteren Erreignissen kam sie wieder zuhause an und spielte mit ihrem Hund, Luna.";
      optionA.innerHTML = "Erneut probieren?";
      appState.path = "end";
      optionC.classList.add("hide");
      break;

    case "speakDilladapp":
      // ignorieren
      text.innerHTML = "'Ich hoffe, du findest noch deine Zutaten!', sagte Marie und führte ihr Spaziergang mit Luna fort, bis sie wieder zuhause war und mit Luna gekuschelt hat.", optionA.innerHTML = "Erneut probieren?";
      appState.path = "end";
      optionC.classList.add("hide");
      appState.items.bag = false;
      break;
    //
    // SUMPF 
    //

    case "swamp":
      // Im Sumpf Mutter finden oder [Ei in Ruhe lassen]
      text.innerHTML = "'Wem auch immer das Ei gehört, es ist besser, wenn ich es hier lasse', dachte sich Marie und ging mit Luna weiter auf die Suche. Nach einer gefühlten Ewigkeit konnten sie auch endlich den Pilz finden und in einpacken.";

      if (appState.items.water === false && appState.items.treesap === false) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.innerHTML = "Zu den Bäumen gehen";
        appState.path = "NoWaterNoTreesap";
      } else if (appState.items.water === true && appState.items.treesap === false) {
        optionA.innerHTML = "Zu den Bäumen gehen";
        optionC.classList.add("hide");
        appState.path = "HasWaterNoTreesap";
      } else if (appState.items.water === false && appState.items.treesap === true) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.classList.add("hide");
        appState.path = "NoWaterHasTreesap";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "HasAll";
      }

      optionB.classList.add("hide");
      appState.items.mushroom = true;
      break;

    case "findMother":
      // Treffen Tatzelwurm, Ansprechen oder [Ignorieren]
      text.innerHTML = "Sie gehen lieber auf Nummer sicher und meiden den Tatzelwurm. Die Mutter konnten sie nicht finden, aber dafür die Pilze, die der Dilladapp braucht!";

      if (appState.items.water === false && appState.items.treesap === false) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.innerHTML = "Zu den Bäumen gehen";
        appState.path = "NoWaterNoTreesap";
      } else if (appState.items.water === true && appState.items.treesap === false) {
        optionA.innerHTML = "Zu den Bäumen gehen";
        optionC.classList.add("hide");
        appState.path = "HasWaterNoTreesap";
      } else if (appState.items.water === false && appState.items.treesap === true) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.classList.add("hide");
        appState.path = "NoWaterHasTreesap";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "HasAll";
      }

      optionB.classList.add("hide");
      appState.items.mushroom = true;
      break;
    //
    // TEICH
    //

    case "NoMushroomNoWater":
    case "NoWaterHasTreesap":
    case "NoWaterNoTreesap":
      // Auswahl zwischen Sumpf, [Teich] und Bäume
      text.innerHTML = "Dem frischem Wind hinterher marschieren die beiden zum Wasser und finden schon bald den Teich. Als sie dabei sind das Wasser aufzusammeln, hören sie ein rascheln im Gebisch.";
      optionA.innerHTML = "Hier bleiben und warten";
      optionB.classList.add("hide");
      optionC.innerHTML = "Verstecken gehen";
      optionC.classList.remove("hide");
      appState.path = "pond";
      break;

    case "NoWaterNoTreesap":
    case "pond":
    case "NoMushroomNoWater":
      text.innerHTML = "Schnell sprang Marie in ein anderes Gebüsch und hat Luna hinterher gezogen. 'Was machen wir denn jetzt?' fragte sie. Sie verharrten dort für eine Weile und merken, dass die Kreatur die erschienen ist nicht so schnell verschwinden wird. Sie suchte also nach Alternativen";
      optionA.innerHTML = "Dem kleinem Wasserpfad folgen und Wasser so aufsammeln";
      optionB.classList.add("hide");
      optionC.classList.add("hide");
      appState.path = "hideWater";
      appState.items.water = true;
      break;

    case "undine":
      // wenn man NICHT mit ihr singt
      text.innerHTML = "Unangenehm mit der Situation, hat Marie das Wasser eingesammelt und lies die Undine alleine";

      if (appState.items.mushroom === false && appState.items.treesap === false) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.innerHTML = "Zu den Bäumen gehen";
        appState.path = "NoMushroomNoTreesap";
      } else if (appState.items.mushroom === true && appState.items.treesap === false) {
        optionA.innerHTML = "Zu den Bäumen gehen";
        optionC.classList.add("hide");
        appState.path = "HasMushroomNoTreesap";
      } else if (appState.items.mushroom === false && appState.items.treesap === true) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.classList.add("hide");
        appState.path = "NoMushroomHasTreesap";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "HasAll";
      }

      optionB.classList.add("hide");
      appState.items.water = true;
      break;

    case "HasMushroomNoTreesap":
    case "NoMushroomNoTreesap":
    case "HasWaterNoTreesap":
    case "NoWaterNoTreesap":
    case "helpDilladapp":
      // Auswahl zwischen Sumpf, Teich und [Bäume]
      text.innerHTML = "Mit Luna vorran, suchten die beiden die dicksten Bäumen im Wald, als plötzlich etwas auf sie gesprungen ist mit scharfen Krallen!";
      optionA.innerHTML = "Kreatur runter werfen";
      optionB.classList.add("hide");
      optionC.innerHTML = "Wegrennen";
      optionC.classList.remove("hide");
      appState.path = "trees";
      break;
    //
    // BÄUME
    //

    case "helpDilladapp":
      // Auswahl zwischen Sumpf, Teich und [Bäume]
      text.innerHTML = "Mit Luna vorran, suchten die beiden die dicksten Bäumen im Wald, als plötzlich etwas auf sie gesprungen ist mit scharfen Krallen!";
      optionA.innerHTML = "Kreatur runter werfen";
      optionB.classList.add("hide");
      optionC.innerHTML = "Wegrennen";
      optionC.classList.remove("hide");
      appState.path = "trees";
      break;

    case "speakStuepp":
      // Auswahl zwischen Sumpf, Teich und [Bäume]
      text.innerHTML = "Angst vor den scharfen Krallen, hat Marie höfflich abgelehnt und ist weiter gegangen. Luna fing an zu bellen, da sie den Baumharz gefunden hat. Schnell sammelten sie diesen ein um weiter zu marschieren.";

      if (appState.items.mushroom === false && appState.items.water === false) {
        optionA.innerHTML = "Zum Sumpf gehen";
        optionC.innerHTML = "Zum Teich gehen";
        appState.path = "NoMushroomNoWater";
      } else if (appState.items.mushroom === true && appState.items.water === false) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.classList.add("hide");
        appState.path = "HasMushroomNoWater";
      } else if (appState.items.mushroom === false && appState.items.water === true) {
        optionA.innerHTML = "Zum Sumpf gehen";
        optionC.classList.add("hide");
        appState.path = "NoMushroomHasWater";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "HasAll";
      }

      optionB.classList.add("hide");
      appState.items.treesap = true;
      break;

    case "trees":
      text.innerHTML = "Beide liefen durch die Gebüsche und das Gewächs, bis sie weit genug entfernt waren. Dabei stolperten sie auf einen Baum, welcher leicht aufgekratzt war und das Harz am trieffen hatte. Schnell sammelten sie dies ein und gingen weiter.";

      if (appState.items.mushroom === false && appState.items.water === false) {
        optionA.innerHTML = "Zum Sumpf gehen";
        optionC.innerHTML = "Zum Teich gehen";
        appState.path = "NoMushroomNoWater";
      } else if (appState.items.mushroom === true && appState.items.water === false) {
        optionA.innerHTML = "Zum Teich gehen";
        optionC.classList.add("hide");
        appState.path = "HasMushroomNoWater";
      } else if (appState.items.mushroom === false && appState.items.water === true) {
        optionA.innerHTML = "Zum Sumpf gehen";
        optionC.classList.add("hide");
        appState.path = "NoMushroomHasWater";
      } else {
        optionA.innerHTML = "Zurück zum Dilladapp gehen";
        optionC.classList.add("hide");
        appState.path = "HasAll";
      }

      optionB.classList.add("hide");
      appState.items.treesap = true;
      break;
    //
    // ENDE
    //

    case "end":
      text.innerHTML = "Marie geht mit ihrem Hund Luna in den magischen Wald spazieren. Dort trifft sie auf einen Dilldapp. Der Dilldapp geht auf und ab und wirkt leicht verzweifelt.";
      optionA.innerHTML = "Ansprechen";
      optionC.innerHTML = "Ignorieren";
      optionC.classList.remove("hide");
      appState.path = "beginning";
      appState.items.mushroom = false;
      appState.items.egg = false;
      appState.items.water = false;
      appState.items.bag = false;
      appState.items.treesap = false;
      break;
  }
});