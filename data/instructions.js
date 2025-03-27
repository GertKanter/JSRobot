/*jshint esversion: 6 */
define(['mozart'], function (mozart) {
	var instructionData = mozart(function(prototype, _, _protected, __, __private) {
		prototype.en = [

//////////// LEVEL 1 /////////////////////////////////////////////////////////
`
<h1>Programmeerimisharjutus</h1>

K&auml;esolevat harjutust võib teha nii "oma peaga" kui proovida tehisaru (AI) abi kasutada.<br><br>

Tehisaru kasutamisel tuleks anda sellele sisendiks allpool kirjas olevat infot. Kõike infot ei ole tehisarul vaja, et osata abi pakkuda. See ongi &uuml;ks õpiväljund tehisaru rakendamise puhul: millist infot tuleb tehisarule anda, et ta oskaks p&auml;riselt aidata?<br /><br />

Tehisaru võib kasutada näiteks sellistel lehtedel:<br /><br />
<a href="https://chatgpt.com" target="_blank" class="learn-more">ChatGPT</a><br />
<a href="https://claude.ai" target="_blank" class="learn-more">Claude</a><br />
<a href="https://gemini.google.com" target="_blank" class="learn-more">Google Gemini</a><br />

<br />
Tehisaru korral püüa sellega dialoogi pidada, andes talle teada, mis juhtus näiteks, "proovisin sinu antud koodi, aga robot ei hakanud üldse liikuma. Kas ja millist lisainfot sul vaja oleks?" jne.

<br /><br />

<hr>

<h1>Tase 1: Sissejuhatus</h1> Piip-piip! JavaScript on väga populaarne veebis kasutatav skriptimiskeel. Peaaegu iga veebileht (ja loomulikult ka see!) kasutab JavaScripti, et dünaamiliselt sisu kuvada sinu brauseris. <br><br>

<h2>Konsooli vahekaart</h2> Enne kui hakkame koodi kirjutama, alustame põhitõdedest: konsooli kasutamisest. Konsool on tööriist, mida arendajad kasutavad, et testida, kas programm töötab õigesti. Seda kasutatakse programmi väljundi logimiseks ja sellega suhtlemiseks. <br><br>
<b>Konsooli vahekaardil</b> kirjuta tekstiväljale <code>5 + 8</code>, vajuta Enter ja vaata, mis juhtub.<br>

Esimene rida (<code>→ 5 + 8</code>) on sinu sisend,
ja teine rida (<code class="console-out">← 13</code>) on väljund, mille JavaScript sinu sisendi põhjal arvutas.
<br><br>

Proovime midagi huvitavamat. Käivita konsoolis <code>robot.info().x</code>. Väljundiks peaks olema näiteks <code class="console-out">← 80</code>, mis näitab roboti <b>x</b>-asukohta mängus.
<br><br>

Robotil on veel omadusi, proovi ka neid:
<code>robot.info().y</code> <code>robot.info().health</code> <code>robot.info().energy</code> <code>robot.info().width</code>
<br><br>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Console" target="_blank" class="learn-more">Loe rohkem konsooli kohta (inglise keeles)</a>
<br><br>

<h2>Skripti vahekaart</h2> Nüüd oskame suhelda konsooliga. Proovime panna roboti konsooliga rääkima. <br>
<b>Skripti vahekaardil</b> näed järgmist koodi:

<div class="code">function init(robot) { // siia kirjuta oma kood }
function loop(robot) {
// siia kirjuta oma kood
}</div>

Need on JavaScripti funktsioonid – just nendega hakkame robotit juhtima!<br>
Kahte kaldkriipsu (<code>//</code>) sisaldavad read on kommentaarid – need on mõeldud inimestele, et koodi paremini mõista. Programm neid ei loe ega kasuta.
<br><br>

Funktsioon <code>init(robot)</code> tähendab "initsialiseerima" ja see käivitatakse üks kord, kui programm algab.<br>
Funktsioon <code>loop(robot)</code> käivitatakse pidevalt seni, kuni programm töötab.
<br><br><br><br>

Muuda funktsiooni <code>init(robot)</code>, et see näeks välja selline:

<div class="code">function init(robot) { console.log("Robot alustab..."); }
function loop(robot) {
// siia kirjuta oma kood
}</div>

Klõpsa <b>K&auml;ivita-nuppu</b> lehe ülaservas ja ava <b>Konsooli vahekaart</b>.<br>
Sa peaksid nägema väljundit <code class="console-out">← Robot alustab...</code>.
<br>

Rida <code>console.log(<i>midagi</i>);</code> kuvab sulgude sees oleva teksti konsoolis.
Klõpsa <b>Restart-nuppu</b> lehe ülaservas, et tase lähtestada ja konsool puhastada.
<br><br><br><br>

Nüüd tee sama funktsiooniga <code>loop(robot)</code>, kood peaks välja nägema selline:

<div class="code">function init(robot) { console.log("Robot alustab..."); }
function loop(robot) {
console.log("Robot töötab...");
}</div>

Klõpsa <b>R&auml;ivita-nuppu</b> ja ava <b>Konsooli vahekaart</b> uuesti.<br>
Nüüd näed lisaks <code class="console-out">← Robot alustab...</code> väljundile ka <code class="console-out">← Robot töötab...</code> ikka ja jälle (kolm korda sekundis).
<br>

Vajuta <b>Pause-nuppu</b> ja see peaks peatuma.
Klõpsa <b>Restart-nuppu</b>, et konsool uuesti puhastada.
<br><br>

<h2>Roboti juhtimine</h2> Mängu eesmärk on jõuda iga taseme lõpus asuva lipuni. Robot võib saada kahjustada ja tal saab aku tühjaks, kui ta teeb erinevaid tegevusi. Kui robotil saab energia otsa või ta saab liiga palju kahju, kaotad taseme. <br><br>
Robot saab teha erinevaid <b>tegevusi:</b> <code>move</code>, <code>jump</code>, <code>shoot</code>, <code>turn</code> ja <code>wait</code>.
<br><br>

<code>move</code> tegevus vajab <b>arvu</b> vahemikus <b>-40</b> kuni <b>40</b>. Positiivne väärtus liigutab robotit paremale, negatiivne vasakule.<br>
<code>jump</code> tegevus vajab samuti <b>arvu</b> vahemikus <b>-10</b> kuni <b>10</b>. Positiivne väärtus paneb roboti hüppama paremale, negatiivne vasakule.
<br><br>

Robotit juhitakse nii, et määrame tema tegevuse järgmiselt:

<div class="code">function loop(robot) { robot.action = {type: 'move', amount: 40}; }</div>
See paneb roboti liikuma 40 pikslit paremale iga kord, kui <code>loop(robot)</code> funktsioon käivitatakse (kolm korda sekundis).<br>
Sisesta antud kood <b>Skripti vahekaardil</b> ja klõpsa <b>K&auml;ivita-nuppu</b>.
<br><br>

Tadaa!
`,


//////////// LEVEL 2 /////////////////////////////////////////////////////////
`
<h1>Tase 2: Sissejuhatus jätkub (& Muutujad)</h1>

<h2>HUD ja Omaduste vahekaart</h2>
Ekraani paremas ülanurgas näed kasulikku infot <b>HUD-is (Heads Up Display):</b><br>
Roboti elu ja energiat, kogutud münte ja hiire asukohta.<br>
See teeb mängimise mugavamaks.<br><br>
Samuti on olemas <b>Omaduste vahekaart</b>, mis näitab roboti üksikasjalikumat infot.<br>
Sul pole seda praegu vaja, aga on hea teada, et see eksisteerib!

<h2>Harjutusrežiim</h2>
<h3>Klaviatuuri juhtimine</h3>
Ekraani vasakus ülanurgas on nupp, mis näeb välja nagu klaviatuuri nooled, see lülitab sisse roboti <b>Klaviatuuri juhtimise</b>.<br>
Klõpsa seda, nüüd saad robotit klaviatuuriga juhtida. Vaikimisi juhtelemendid on:
	<table>
	<tr><td>
	Liigu vasakule
	</td><td>
	A
</td></tr><tr><td>
	Liigu paremale
	</td><td>
	D
</td></tr><tr><td>
	Hüppa
	</td><td>
	W
</td></tr><tr><td>
	Hüppa vasakule
	</td><td>
	Q
</td></tr><tr><td>
	Hüppa paremale
	</td><td>
	E
</td></tr><tr><td>
	Pööra ümber
	</td><td>
	T
</td></tr><tr><td>
	Lase relvast
	</td><td>
	G
</td></tr></table>
Pärast <b>Klaviatuuri juhtimise</b> sisselülitamist ilmub teade "Harjutusrežiim".<br>
<b>Harjutusrežiim</b> tähendab, et saad taset harjutada enne, kui kirjutad selle jaoks koodi.<br>
Mängu eesmärk on lahendada tasemed ainult <b>Skripti vahekaardis</b> kirjutatud koodi abil.<br><br>
Kui kasutad Klaviatuuri juhtimist, Konsooli vahekaarti või peatad skripti, sisened automaatselt Harjutusrežiimi.<br>
Kui oled harjutamise lõpetanud ja tahad taseme lahendada, käivita oma skript ja väldi Konsooli ning Klaviatuuri juhtimist.
<br><br>

<h3>Roboti juhtimine konsoolist</h3>
Konsooliga saad robotile käske saata, proovi neid:
	<table>
	<tr><td>
	<code>robot.move(<i>n</i>)</code>
	</td><td>
	Kus <b><i>n</i></b> on arv vahemikus <b>-40</b> kuni <b>40</b>.
	Robot liigub edasi või tagasi <b><i>n</i></b> pikslit.
</td></tr><tr><td>
	<code>robot.jump(<i>n</i>)</code>
	</td><td>
	Kus <b><i>n</i></b> on arv vahemikus <b>-10</b> kuni <b>10</b>.
	Robot hüppab edasi või tagasi kiirusega <b><i>n</i></b>.
</td></tr><tr><td>
	<code>robot.jump()</code>
	</td><td>
	Robot hüppab otse üles. Sama mis <b>robot.jump(0)</b>
</td></tr><tr><td>
	<code>robot.turn()</code>
	</td><td>
	Robot pöörab ümber. See ei mõjuta eelnevate käskude suunda, ainult <b>robot.shoot()</b>
</td></tr><tr><td>
	<code>robot.shoot()</code>
	</td><td>
	Robot laseb relvast!
</td></tr></table>

<h2>Klaviatuuri otseteed</h2>
	<table>
	<tr><td>
<b>Juhiste vahekaart: </b>
	</td><td>
	Ctrl + 1
</td></tr><tr><td>
<b>Skripti vahekaart: </b>
	</td><td>
	Ctrl + 2
</td></tr><tr><td>
<b>Konsooli vahekaart: </b>
	</td><td>
	Ctrl + 3
</td></tr><tr><td>
<b>Omaduste vahekaart: </b>
	</td><td>
	Ctrl + 4
</td></tr><tr><td>
<b>Klaviatuuri juhtimine: </b>
	</td><td>
	Ctrl + 5
</td></tr><tr><td>
<b>Käivita/Peata skript: </b>
	</td><td>
	Ctrl + Enter
</td></tr></table>
Kui kasutad Maci, kasuta Ctrl asemel Command-klahvi.

<h2>Andmetüübid</h2>
Andmetüübid on programmeerimiskeelte oluline osa. Kõige lihtsamaid andmetüüpe nimetatakse primitiivideks.<br>
JavaScripti primitiivid on:
	<table>
	<tr><td>
<b>Number</b>
	</td><td>
	Mingi arv (täisarv või murdarv, positiivne või negatiivne).<br>
	Näited: <code>12</code> <code>7.25</code> <code>0</code> <code>-10023</code>
</td></tr><tr><td>
	<b>String</b>
	</td><td>
	Täheread, mida ümbritsevad jutumärgid.<br>
	Näited: <code>'Ilutulestik!'</code> <code>"Summa: 25€"</code>
</td></tr><tr><td>
	<b>Boolean</b>
	</td><td>
	Väärtus saab olla kas <code>true</code> või <code>false</code>.
</td></tr><tr><td>
	<b>undefined</b>
	</td><td>
	Tähendab, et väärtust pole määratud.
</td></tr><tr><td>
	<b>null</b>
	</td><td>
	Erinevalt <b>undefined</b>-ist tähendab <b>null</b>, et puuduv väärtus on tahtlikult määratud.
</td></tr></table>

<h2>Muutujad</h2>
Muutuja on nimi, mis viitab väärtusele. Näiteks: <code>favoriteFood = 'Lasanje';</code>.<br>
Siin on muutuja <code>favoriteFood</code> väärtusega <code>'Lasanje'</code>.<br><br>
Muutuja väärtuseks võib olla mis tahes andmetüüp.<br>

JavaScriptis tuleb muutuja õigesti deklareerimiseks kasutada <code>var</code> märksõna:<br>
<code>var <i>muutuja</i> = <i>väärtus</i>;</code><br>
Kui muutuja on deklareeritud, aga pole väärtust määratud, on selle väärtus <code>undefined</code>.

<br><br>
<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable" target="_blank" class="learn-more">Lisateave muutujate kohta (inglise keeles)</a>

<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>
`,



//////////// LEVEL 3 /////////////////////////////////////////////////////////
`
<h1>Tase 3: Matemaatika ja juhtimisvoog</h1>

<h2>Matemaatika</h2>
<h3>Arvutamisoperaatorid</h3>
JavaScript toetab põhialuseid arvutuste teostamiseks: <code>+  -  *  /  %  **</code>.<br>
Liitmine, lahutamine, korrutamine, jagamine, moodul (jääk pärast jagamist) ja eksponentsiaalne tõstmine.<br><br>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank" class="learn-more">Loe rohkem arvutamisoperaatoritest</a>
<br><br>

<h3>Andmete määramise operaatorid</h3>
Programmeerimises on väga populaarsed järgmised toimingud: <code>i = i + 1;</code>, <code>m = m / 2;</code>.<br>
Seetõttu arendati välja lühem tähistus, need kaks väljendit saab ümber kirjutada järgmiselt: <code>i += 1;</code> ja <code>m /= 2;</code><br>
Need kaks toimingut <code>i += 1;</code> ja <code>i -= 1;</code> on programmeerimises tõenäoliselt kõige sagedamini kasutatavad, seetõttu lühendati neid veelgi <code>i++;</code> ja <code>i--;</code><br><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" target="_blank" class="learn-more">Loe rohkem andmete määramise operaatoritest</a>
<br><br>

<h3>Stringide ühendamine</h3>
Stringide lisamine ei ole päris matemaatika, kuid see on väga kasulik. Sa saad liita mitu stringi koos <code>+</code> operaatoriga:<br>
<code>"Robotid " + "on " + "lahedad" + '!'</code> ja see annab stringi <code>"Robotid on lahedad!"</code><br><br>
Numbrid saavad olla seotud stringidega, selge viis seda teha on kasutada <b>String()</b> konstruktorit.<br>
<code>String(47)</code> muudab numbri 47 stringiks "47". Ja siis saame teha stringide ühendamise tulemusega.<br>
<code>"Pakendis on " + String(47) + " kommipalle."</code><br><br>
Aga väga tihti on täiesti selge, mida me püüame teha, nii et järgnev töötab JavaScriptis sama hästi:<br>
<code>"Pakendis on " + 47 + " kommipalle."</code> Reegel on: numbri ja stringi liitmine muudab numbri esmalt stringiks.<br><br>
See teeb mõistlikuks, aga mõningatel juhtudel ei pruugi see olla nii kasulik kui tahaksime. Näiteks <code>"7" + 3</code> annab stringi <code>"73"</code>, mis ei pruugi olla see, mida ootasite, seega olge ettevaatlik.

<br><br>
<h3>Stringide teisendamine numbriteks</h3>
Hmmmm, mis juhtub, kui proovime lisamise asemel lahutada, näiteks <code>"7" - 3</code>. Proovige, peaksite saama <code>4</code>.<br>
See on huvitav, JavaScript teadis, et string "7" on tegelikult number peidetud kujul.<br>
Kuigi see on kasulik vastus ja JavaScript on väga nutikas, tahame vältida numbri ja stringi koos kasutamist sellisel viisil.<br>
Kui tead, et sul on string, mis sisaldab numbrit, teisenda see numbriks järgmiste funktsioonidega:<br>
<table>
<tr><td>
        <code>Number.parseInt()</code>
</td><td>
        Muudab täisarvu esindava stringi numbriks, ignoreerides kõik täiendavad märgid.<br>
        Kui kutsuda <code>Number.parseInt()</code> stringidel <code>"23"</code> <code>"7.25 liitrit"</code> <code>"1.995"</code> ja <code>"3 õuna."</code>
        <br>Annab <code class="console-out">&larr; 23</code>
        <code class="console-out">&larr; 7</code>
        <code class="console-out">&larr; 1</code>
        <code class="console-out">&larr; 3</code>

</td></tr><tr><td>
        <code>Number.parseFloat()</code>
</td><td>
        Muudab komakoha numbri esindava stringi numbriks, ignoreerides kõik täiendavad märgid.<br>
        Kui kutsuda <code>Number.parseFloat()</code> stringidel <code>"23"</code> <code>"7.25 liitrit"</code> <code>"1.995"</code> <code>"3 õuna."</code><br>
        Annab <code class="console-out">&larr; 23</code>
        <code class="console-out">&larr; 7.25</code>
        <code class="console-out">&larr; 1.995</code>
        <code class="console-out">&larr; 3</code>
</td></tr></table>

<br><br>
<h3>NaN</h3>
Mis juhtub, kui proovime teha midagi tobedat oma numbritega?<br>
Näiteks <code>'apelsin' - 4</code> <code>Number.parseInt('jalgpall');</code> <code>0 / 0</code> <code> (-1) ** 0.5</code><br>
Noh, me saame <code class="console-out">&larr; NaN</code>, mis tähistab <b>Ei ole arv</b>. <br><br>
<b>NaN</b> on huvitav, <code>typeof(NaN);</code> annab meile <code class="console-out">&larr; "number"</code>... Nii et Ei ole arv on tegelikult number.<br>
Eksisteerib sisseehitatud funktsioon NaN väärtuste testimiseks, <code>Number.isNaN()</code>.<br>

<h3>Lõpmatus</h3>
Mõned omadused <code>Lõpmatus</code> kohta:
        <table><tr><td>
<code>1 / 0</code>
        </td><td>
        <code class="console-out">&larr; Infinity</code>
        </td></tr><tr><td>
<code>1 / Infinity</code>
        </td><td>
        <code class="console-out">&larr; 0</code>
        </td></tr><tr><td>
<code>Infinity + 1</code>
        </td><td>
        <code class="console-out">&larr; Infinity</code>
        </td></tr><tr><td>
<code>10 ** 1000</code>
        </td><td>
        <code class="console-out">&larr; Infinity</code>
        </td></tr></table>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" class="learn-more">Loe rohkem Number objektist</a><br><br>

<h3>Täiendavad matemaatikafunktsioonid</h3>
        <table><tr><td>
<code>Math.round(<i>number</i>)</code>
        </td><td>
        Tagastab <i>number</i>, ümardatuna lähimale täisarvule.
        </td></tr><tr><td>
<code>Math.abs(<i>number</i>)</code>
        </td><td>
        Tagastab <i>number</i> absoluutväärtuse.
        </td></tr><tr><td>
<code>Math.sin(<i>number</i>)</code>
        </td><td>
        Tagastab <i>number</i> siini väärtuse.
        </td></tr><tr><td>
<code>Math.cos(<i>number</i>)</code>
        </td><td>
        Tagastab <i>number</i> koosiini väärtuse.
        </td></tr><tr><td>
<code>Math.sqrt(<i>number</i>)</code>
        </td><td>
        Tagastab <i>number</i> ruutjuure.
        </td></tr><tr><td>
<code>Math.pow(<i>base</i>, <i>exponent</i>)</code>
        </td><td>
        Tagastab <i>base</i> astendatud <i>exponent</i>-i astmeni.
        </td></tr><tr><td>
<code>Math.log(<i>number</i>)</code>
        </td><td>
        Tagastab <i>number</i> loogaritmi (natural log) väärtuse.
        </td></tr><tr><td>
<code>Math.min(<i>num1</i>, <i>num2</i>, ...)</code>
        </td><td>
        Tagastab väikseima numbri antud argumentide hulgast.
        </td></tr><tr><td>
<code>Math.max(<i>num1</i>, <i>num2</i>, ...)</code>
        </td><td>
        Tagastab suurima numbri antud argumentide hulgast.
        </td></tr><tr><td>
<code>Math.random()</code>
        </td><td>
        Tagastab juhusliku arvu vahemikus 0 kuni 1.
        </td></tr></table>
        
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" class="learn-more">Loe rohkem Math objekti kohta (inglise keeles)</a>

<h2>Boolean’id</h2>
Järgmised operaatorid tagastavad <code>true</code> või <code>false</code>, need on olulised juhtimisvoo (Control Flow) kasutamiseks, mis on selle taseme peamine mõiste.
<br><br>

<h3>Võrdlusoperaatorid</h3>
<table><tr><td>
<code><i>a</i> == <i>b</i></code>
</td><td>
Tagastab true, kui <i>a</i> ja <i>b</i> on väärtuselt võrdsed, vastasel juhul false.<br>
Pange tähele, et <i>a</i> ja <i>b</i> võivad olla erineva tüübiga, kuid ikkagi võrdsed.<br>
Näited:
<code>3.25 == 3.25</code> <code class="console-out">&larr; true</code> ,
<code>3 == "3"</code> <code class="console-out">&larr; true</code> ,
<code>12 == 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
<code><i>a</i> === <i>b</i></code>
</td><td>
Tagastab true, kui <i>a</i> ja <i>b</i> on väärtuselt ja tüübilt võrdsed, vastasel juhul false.<br>
Näited:
<code>3.25 === 3.25</code> <code class="console-out">&larr; true</code> ,
<code>3 === "3"</code> <code class="console-out">&larr; false</code> ,
<code>12 === 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
<code><i>a</i> != <i>b</i></code>
</td><td>
Tagastab true, kui <i>a</i> ja <i>b</i> ei ole väärtuselt võrdsed, sõltumata tüübist, vastasel juhul false.<br>
Näited:
<code>3.25 != 3.25</code> <code class="console-out">&larr; false</code> ,
<code>3 != "3"</code> <code class="console-out">&larr; false</code> ,
<code>12 != 0.2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
<code><i>a</i> !== <i>b</i></code>
</td><td>
Tagastab true, kui <i>a</i> ja <i>b</i> ei ole väärtuselt ega tüübilt võrdsed, vastasel juhul false.<br>
Näited:
<code>3.25 !== 3.25</code> <code class="console-out">&larr; false</code> ,
<code>3 !== "3"</code> <code class="console-out">&larr; true</code> ,
<code>12 !== 0.2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Võrdlusoperaatorid</h3>

<table><tr><td>
<code><i>a</i> < <i>b</i></code>
</td><td>
Tagastab true, kui <i>a</i> on väiksem kui <i>b</i>, vastasel juhul false.<br>
Näited:
<code>1 < 2</code> <code class="console-out">&larr; true</code> ,
<code>2 < 2</code> <code class="console-out">&larr; false</code> ,
<code>3 < 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
<code><i>a</i> <= <i>b</i></code>
</td><td>
Tagastab true, kui <i>a</i> on väiksem või võrdne <i>b</i>-ga, vastasel juhul false.<br>
Näited:
<code>1 <= 2</code> <code class="console-out">&larr; true</code> ,
<code>2 <= 2</code> <code class="console-out">&larr; true</code> ,
<code>3 <= 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
<code><i>a</i> > <i>b</i></code>
</td><td>
Tagastab true, kui <i>a</i> on suurem kui <i>b</i>, vastasel juhul false.<br>
Näited:
<code>1 > 2</code> <code class="console-out">&larr; false</code> ,
<code>2 > 2</code> <code class="console-out">&larr; false</code> ,
<code>3 > 2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
<code><i>a</i> >= <i>b</i></code>
</td><td>
Tagastab true, kui <i>a</i> on suurem või võrdne <i>b</i>-ga, vastasel juhul false.<br>
Näited:
<code>1 >= 2</code> <code class="console-out">&larr; false</code> ,
<code>2 >= 2</code> <code class="console-out">&larr; true</code> ,
<code>3 >= 2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Loogikaoperaatorid</h3>

<table><tr><td>
<code>!<i>a</i></code>
</td><td>
<b>MITTE</b> operaator, muudab true väärtuse false’ks ja vastupidi.<br>
Näited:
<code>!true</code> <code class="console-out">&larr; false</code> ,
<code>!false</code> <code class="console-out">&larr; true</code>

</td></tr><tr><td>
<code><i>a</i> && <i>b</i></code>
</td><td>
<b>JA</b> operaator, tagastab true, kui nii <i>a</i> kui <i>b</i> on true, vastasel juhul false.<br>
Näited:
<code>true && true</code> <code class="console-out">&larr; true</code> ,
<code>true && false</code> <code class="console-out">&larr; false</code> ,
<code>true && true</code> <code class="console-out">&larr; false</code>

</td></tr><tr><td>
<code><i>a</i> || <i>b</i></code>
</td><td>
<b>VÕI</b> operaator, tagastab true, kui kas <i>a</i> või <i>b</i> on true, vastasel juhul false.<br>
Näited:
<code>true || true</code> <code class="console-out">&larr; true</code> ,
<code>true || false</code> <code class="console-out">&larr; true</code> ,
<code>true || true</code> <code class="console-out">&larr; false</code>

</td></tr></table>

<h3>Falsed väärtused</h3>
False väärtus on väärtus, mis käitub kui <code>false</code>.
JavaScriptis on kuus "false" väärtust:<br>
<ol><li>
<code>false</code> loomulikult<br>
        </li><li>
<code>0</code> ja <code>-0</code><br>
        </li><li>
<code>""</code> või <code>''</code> tühi string<br>
        </li><li>
<code>NaN</code> ehk mitte arv<br>
        </li><li>
<code>undefined</code><br>
        </li><li>
<code>null</code><br>
        </li></ol>

Proovi järgmisi käske, asendades falsed väärtused ja vaata, kuidas need käituvad nagu false:<br><br>
<code>!(<i>value</i>)</code><br>
<code><i>value</i> && true</code><br>
<code><i>value</i> || false</code><br><br>
Proovi neid tavaliste numbrite ja stringidega ja vaata, kuidas käitumine muutub.

<br><br><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank" class="learn-more">Õpi rohkem loogikaoperaatorite ja falsed väärtuste kohta</a><br><br>


<h2>Juhtimisvoog</h2>
<h3>If-Else</h3>
Juhtimisvoo laused võimaldavad programmil täita erinevat koodi olenevalt tingimusest.<br>
Kui teatud tingimus on täidetud, täidetakse üks kooditükk; kui see pole täidetud, täidetakse teine kooditükk.<br>
<br>
Järgmine kood on <b>if-else</b> lause näide:
<div class="code">var rollsOfToiletPaper = 5;
if (rollsOfToiletPaper <= 1) {
        console.log("Mul on vaja rohkem tualettpaberit osta!");
} else if (rollsOfToiletPaper > 50){
        console.log("Miks ma ostsin nii palju tualettpaberit??");
} else {
        console.log("Kõik on korras.");
}</div>
See programm peaks olema lihtne mõista:<br>
Kui <code>rollsOfToiletPaper</code> väärtus on väiksem või võrdne 1, siis täidetakse esimene plokk.<br>
Kui see on suurem kui 50, siis täidetakse teine plokk.<br>
Muidu täidetakse viimane plokk.<br><br>
<b>Märkus:</b> Kood, mis on kirjutatud krüpteeritud kaaridesse, nimetatakse <b>plokiks</b>.<br><br>

Et anda täpsem määratlus, siis <code>if</code> võtmesõna järel on alati tingimus, mis on paigutatud sulgudesse <code>(<i>condition</i>)</code>, pärast tingimust tuleb koodiplokk <code>{ <i>do something here</i> }</code>.<br>
Võimalusel saab paigutada <code>else if</code>, mis käitub samamoodi nagu <code>if</code>, või lihtsalt <code>else</code>, mis ei vaja tingimust, vaid ainult ploki.
<br>
Kui esimene tingimus on täidetud, siis täidetakse sellele järgnevad plokid, kuid kõiki muid <code>else</code> plokke ignoreeritakse.

<br><br>
<h3>Switch</h3>
Mõnikord peame kirjutama selliseid programme nagu see:
<div class="code">var letter = 'C';
if (letter === 'A') {
        console.log('A nagu Aligator');
} else if (letter === 'B') {
        console.log('B nagu Beaver');
} else if (letter === 'C') {
        console.log('C nagu Kameleon');
} else if (letter === 'D') {
        console.log('D nagu Nõudepesumasin');
} else if (letter === 'E') {
        console.log('E nagu Elevant');
} else {
        console.log('Toetamata täht, proovi uuesti');
}</div>

Seda on tülikas ja raske lugeda, palju mugavam ja atraktiivsem viis sama programmi kirjutamiseks on <code>switch</code> lause:
<div class="code">var letter = 'C';
switch (letter) {
        case 'A':
                console.log('A nagu Aligator');
                break;
        case 'B':
                console.log('B nagu Beaver');
                break
        case 'C':
                console.log('C nagu Kameleon');
                break;
        case 'D':
                console.log('D nagu Nõudepesumasin');
                break;
        case 'E':
                console.log('E nagu Elevant');
                break;
        default:
                console.log('Toetamata täht, proovi uuesti');
}</div>

<h3>Tingimusoperaator (või ternary operaator)</h3>
<code><i>tingimus</i> ? <i>lausung1</i> : <i>lausung2</i>;</code><br><br>
Kui <i>tingimus</i> on true, täidetakse <i>lausung1</i>, vastasel juhul <i>lausung2</i>.<br>
Arvesta järgmise koodiga:
<div class="code">var milkExpired = false;
if (milkExpired) {
    console.log("Piim on hapuks läinud!");
} else {
    console.log("Piim on värske!");
}</div>

Me võime teha sama koodiga <b>tingimusoperaatorit</b>:
<div class="code">var milkExpired = false;
milkExpired ? console.log("Piim on hapuks läinud!") : console.log("Piim on värske!");</div>

<h2>Aeg mängu taset mängida</h2>
On üsna selge, et robot peab hüppama, proovi seda välja, mine <b>Konsooli vahekaardile</b> ja kirjuta sisse:<br>
<code>robot.jump(10);</code> See on kaugus, mille robot suudab hüpata.
<br><br>
Proovi vaheldumisi hüpata ja edasi liikuda: <code>robot.move(40);</code>
<br>
Muide, kui tekstisisend on konsoolis valitud, kasuta üles- ja allanooleklahve, et liikuda oma täidetud käskude ajaloos edasi ja tagasi.
<br><br>
Kui saad, proovi oma lahendust kirjutada <b>Script vahekaardile</b>.<br><br>

Üks asi, mida meeles pidada: kui deklareerid muutuja <code>function init()</code> sees, siis see ei ole saadaval <code>function loop()</code> sees. Selle selgitus tuleb hilisemates tasemetes.<br>
Praegu, kui tahad luua muutuja ja sellele hiljem ligi pääseda, loo omadus <b>robot</b> objektil nagu see:<br>
        <code>robot.myNewProperty = "mõni väärtus";</code>

        Palju õnne!<br><br>
Kui oled juba mõnda aega proovinud ja ei saa ikka hakkama, siis:<br>

        <br><br>
        <a id="showSolution" class="show-solution">Kuva lahendus</a>
        <br><br>

        <div id="solution">
<div class="code">function init(robot) {
        robot.jumpNext = true;
}
`,





//////////// LEVEL 4 /////////////////////////////////////////////////////////
`
<h1>Tase 4</h1>

N&uuml;&uuml;d võiks kasutada tehisaru abi (nt <a href="https://chatgpt.com/" target="_blank" class="learn-more">ChatGPT</a>), et &uuml;lesannet lahendada:<br /><br />

Tehisarule oleks vaja selgitada, et roboti asukoht tasemel on k&auml;ttesaadav info.<br /><br />

Roboti asukoha kohta saab k&uuml;sida informatsiooni nii: <code>robot.info().x</code>



Kui tehisaru kuidagi hakkama ei saa, siis v&otilde;id allolevat nuppu vajutada, et lahendust n&auml;ha.
	<br><br>
	<a id="showSolution" class="show-solution">N&auml;ita lahendust</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	if (400 < robot.info().x  && robot.info().x < 500) {
		robot.action = {type: 'jump', amount: 10};
	} else {
		robot.action = {type: 'move', amount: 40};
	}
}</div>
</div>
`,




//////////// LEVEL 5 /////////////////////////////////////////////////////////
`
<h1>Level 5</h1>

	<br><br>
	<a id="showSolution" class="show-solution">N&auml;ita lahendust</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	let robotX = robot.info().x;
	let landmarks = [360, 500, 560, 760];
  
  	robot.action = {type: 'move', amount: 40};
 	if (landmarks[0] < robotX && robotX < landmarks[1] ||
		 landmarks[2] < robotX && robotX < landmarks[3]) {
      	robot.action = {type: 'jump', amount: 10};
	}
}</div>
	</div>
`,




//////////// LEVEL 6 /////////////////////////////////////////////////////////
`
<h1>Level 6</h1>

Vihje: roboti m&uuml;ntide arvu saab teada nii: <code>robot.info().coins</code>

	<br><br>
	<a id="showSolution" class="show-solution">N&auml;ita lahendust</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins % 2 == 1) {
		robot.action.amount = -40;
	}
}</div>
	</div>
`,





//////////// LEVEL 7 /////////////////////////////////////////////////////////
`
<h1>Level 7</h1>

Vihje: kollased seinad viivad j&auml;rgmisele tasemele!

	<br><br>
	<a id="showSolution" class="show-solution">N&auml;ita lahendust</a>
	<br><br>
	<div id="solution">
<div class="code">function init(robot) {
	robot.oldCoins = 0;
	robot.oldEnergy = 100;
}

function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins > robot.oldCoins ||
		 robot.info().energy > robot.oldEnergy) {
		robot.action = {type: 'jump', amount: 10};
	}
	robot.oldCoins = robot.info().coins;
	robot.oldEnergy = robot.info().energy;
} </div>
	</div>
`,




//////////// LEVEL 8 /////////////////////////////////////////////////////////
`
<h1>Level 8</h1>

Kas tehisaru suudab seda lahendada? Kuidas seda arusaadavalt sellele &uuml;ldse kirjeldada?

	<br><br>
	<a id="showSolution" class="show-solution">N&auml;ita lahendust</a>
	<br><br>
	<div id="solution">
<div class="code">function init(robot) {
	robot.iterationsAfterCoin = 0;
}

function loop(robot) {
	if (robot.iterationsAfterCoin > 4) {
		robot.action = {type: 'jump', amount: 10};
	}
	if (robot.info().coins > 0) {
		robot.iterationsAfterCoin++;
	}
}</div>
	</div>
`,




//////////// LEVEL 9 /////////////////////////////////////////////////////////
`
<h1>Level 9</h1>

	<br><br>
	<a id="showSolution" class="show-solution">N&auml;ita lahendust</a>
	<br><br>
	<div id="solution">
<code>action-queue:</code>
<div class="code">module.exports = {
  	queue: [],
  	push: function(item, t){
		t = t || 1;
    	for (let i = 0; i < t; i++) {
			this.queue.push(item);
      }
	},
	pop: function(){
     	if(this.empty()){
			return null;
		}
     	return this.queue.splice(0, 1)[0];
	},
	peek: function(){
     	if(this.empty()){
			return null;
		}
     	return this.queue[0];
	},
	clear: function(){
		this.queue = [];
	},
	size: function(){
		return this.queue.length;
	},
	empty: function(){
		return (this.size() === 0);
	},
	log: function(){console.log(this.queue);}
};</div>

<br><br>
<code>level-9:</code>
<div class="code">function init(robot) {
	robot.actionQueue = require('action-queue');
  	robot.actionQueue.push({type: 'shoot'}, 12);
  	robot.actionQueue.push({type: 'move', amount: 40}, 4);
  	robot.actionQueue.push({type: 'jump', amount: 10});
  	robot.actionQueue.push({type: 'wait'}, 5);
  	robot.actionQueue.push({type: 'jump'});
  	robot.actionQueue.push({type: 'move', amount: 40}, 6);
}

function loop(robot) {
  	if (!robot.actionQueue.empty()) {
		robot.action = robot.actionQueue.pop();
   }
}</div>
	</div>
`,





//////////// LEVEL 10 /////////////////////////////////////////////////////////
`
<h1>Level 10</h1>

	<br><br>
	<a id="showSolution" class="show-solution">N&auml;ita lahendust</a>
	<br><br>
	<div id="solution">
<code>find:</code>
<div class="code">module.exports = {
  	closestNext:
    	function(x, y, items){
			let minDistance = null;
      		let closest = null;
    		for (let i = 0; i < items.length; i++) {
              	if (items[i].x <= x) continue;
            	let distance = Math.abs(x - items[i].x) + Math.abs(y - items[i].y);
              	if (minDistance == null ||
                    distance < minDistance) {
                	minDistance = distance;
                  	closest = items[i];
				}
        	}
        	return closest;
		}
};</div>
<code>level-10:</code>
<div class="code">function loop(robot) {
  	let onLift = false;
  	robot.on('collide', function(e){
    	if (e.with.t == 'lift') {
	  		onLift = true;
        }
    });
  
  	let closestNextLift = require('find').closestNext(robot.info().x,
                                                      robot.info().y,
                                                      Game.lifts);
  	if (closestNextLift == null) {
      	robot.action = {type: 'move', amount: 20};
    } else {
      	let xDist = closestNextLift.x - robot.info().x;
		let yDist = closestNextLift.y - robot.info().y;
      	if (onLift) {
      		if (robot.info().y > 90) {
      			robot.action = {type: 'wait'};
        	} else {
      			robot.action = {type: 'move', amount: 20};
            }
        } else if (xDist > 80 || yDist > 10) {
			robot.action = {type: 'move', amount: 20};
       	}
	}
}</div>
	</div>
`,


			];

	});
	return instructionData;
});



