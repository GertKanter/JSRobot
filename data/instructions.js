/*jshint esversion: 6 */
define(['mozart'], function (mozart) {
	var instructionData = mozart(function(prototype, _, _protected, __, __private) {
		prototype.en = [

//////////// LEVEL 1 /////////////////////////////////////////////////////////
`
<h1>Tase 1: Sissejuhatus</h1> Piip-piip! JavaScript on väga populaarne veebis kasutatav skriptimiskeel. Peaaegu iga veebileht (ja loomulikult ka see!) kasutab JavaScripti, et dünaamiliselt sisu kuvada sinu brauseris. <br><br> <h2>Konsooli vahekaart</h2> Enne kui hakkame koodi kirjutama, alustame põhitõdedest: konsooli kasutamisest. Konsool on tööriist, mida arendajad kasutavad, et testida, kas programm töötab õigesti. Seda kasutatakse programmi väljundi logimiseks ja sellega suhtlemiseks. <br><br>
<b>Konsooli vahekaardil</b> kirjuta tekstiväljale <code>5 + 8</code>, vajuta Enter ja vaata, mis juhtub.<br>

Esimene rida (<code>→ 5 + 8</code>) on sinu sisend,
ja teine rida (<code class="console-out">← 13</code>) on väljund, mille JavaScript sinu sisendi põhjal arvutas.
<br><br>

Proovime midagi huvitavamat. Käivita konsoolis <code>robot.info().x</code>. Väljundiks peaks olema näiteks <code class="console-out">← 80</code>, mis näitab roboti <b>x</b>-asukohta mängus.
<br><br>

Robotil on veel omadusi, proovi ka neid:
<code>robot.info().y</code> <code>robot.info().health</code> <code>robot.info().energy</code> <code>robot.info().width</code>
<br><br>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Console" target="_blank" class="learn-more">Loe rohkem konsooli kohta</a>
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

Klõpsa <b>Run-nuppu</b> lehe ülaservas ja ava <b>Konsooli vahekaart</b>.<br>
Sa peaksid nägema väljundit <code class="console-out">← Robot alustab...</code>.
<br>

Rida <code>console.log(<i>midagi</i>);</code> kuvab sulgude sees oleva teksti konsoolis.
Klõpsa <b>Reset-nuppu</b> lehe ülaservas, et tase lähtestada ja konsool puhastada.
<br><br><br><br>

Nüüd tee sama funktsiooniga <code>loop(robot)</code>, kood peaks välja nägema selline:

<div class="code">function init(robot) { console.log("Robot alustab..."); }
function loop(robot) {
console.log("Robot töötab...");
}</div>

Klõpsa <b>Run-nuppu</b> ja ava <b>Konsooli vahekaart</b> uuesti.<br>
Nüüd näed lisaks <code class="console-out">← Robot alustab...</code> väljundile ka <code class="console-out">← Robot töötab...</code> ikka ja jälle (kolm korda sekundis).
<br>

Vajuta <b>Pause-nuppu</b> ja see peaks peatuma.
Klõpsa <b>Reset-nuppu</b>, et konsool uuesti puhastada.
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
Sisesta antud kood <b>Skripti vahekaardil</b> ja klõpsa <b>Run-nuppu</b>.
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
	Näited: <code>'Tulevärgid!'</code> <code>"Summa: 25€"</code>
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
<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable" target="_blank" class="learn-more">Lisateave muutujate kohta</a>

<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>
`,



//////////// LEVEL 3 /////////////////////////////////////////////////////////
`
<h1>Level 3: Math and Control Flow</h1>

<h2>Math</h2>
<h3>Arithmetic Operators</h3>
JavaScript supports the basic arithmetic operations: <code>+  -  *  /  %  **</code>.<br>
Addition, subtraction, multiplication, division, modulo (remainder after division), and exponential.<br><br>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank" class="learn-more">Learn More About Arithmetic Operators</a>
<br><br>	

<h3>Assignment Operators</h3>
As it turns out, in programming the following operations are exceedingly popular: <code>i = i + 1;</code>, <code>m = m / 2;</code>.<br>
So a shorthand notation was developed, the previous two expressions can be rewritten as: <code>i += 1;</code> and <code>m /= 2;</code><br>
The two operations <code>i += 1;</code> and <code>i -= 1;</code> are probably the most often used in programming, so they were shortened even further to <code>i++;</code> and <code>i--;</code><br><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" target="_blank" class="learn-more">Learn More About Assignment Operators</a>
<br><br>	

<h3>String Concatenation</h3>
Adding strings isn't quite math, but it's very useful. You can add multiple strings together with the <code>+</code> operator:<br>
<code>"Robots " + "are " + "cool" + '!'</code> and this gives the string <code>"Robots are cool!"</code><br><br>
Numbers can be added to strings, the explicit way to do this is using the <b>String()</b> constructor.<br>
<code>String(47)</code> turns the number 47 into the string "47". And then we can perform string concatenation with the result.<br>
<code>"There are " + String(47) + " jellybeans in this packet."</code><br><br>
But very often it's quite obvious what we're trying to do, so the following works just as well in JavaScript:<br>
<code>"There are " + 47 + " jellybeans in this packet."</code> The rule is: adding a number and a string together first converts the number to a string.<br><br>
So this makes sense, but in some cases it's not as helpful as we'd like. Take for example <code>"7" + 3</code> this gives the string <code>"73"</code> which might not be what you expected so take care.

	<br><br>
<h3>Parsing Strings to Numbers</h3>
Hmmmm, what happens if instead of adding we tried to subtract, so say <code>"7" - 3</code>. Try it, you should get <code>4</code>.<br>
Well, this is interesting, JavaScript knew that the string "7" was actually a number in disguise.<br>
Now although this is a useful answer, and JavaScript is a very smart cookie, we want to avoid using number and strings together like this.<br>
If you know that you have a string that contains a number, convert it to number data type using one of the following functions:<br>
<table>
<tr><td>
	<code>Number.parseInt()</code>
</td><td>
	Converts a string representing an integer to a number, ignores any extra characters.<br>
	Calling <code>Number.parseInt()</code> on <code>"23"</code> <code>"7.25 litres"</code> <code>"1.995"</code> and <code>"3 apples."</code>
	<br>Gives <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7</code>
	<code class="console-out">&larr; 1</code>
	<code class="console-out">&larr; 3</code>

</td></tr><tr><td>
	<code>Number.parseInt()</code>
</td><td>
	Converts a string representing a floating point number to a number, ignores any extra characters.<br>
	Calling <code>Number.parseFloat()</code> on <code>"23"</code> <code>"7.25 litres"</code> <code>"1.995"</code> <code>"3 apples."</code><br>
	Gives <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7.25</code>
	<code class="console-out">&larr; 1.995</code>
	<code class="console-out">&larr; 3</code>
</td></tr></table>

<br><br>
<h3>NaN</h3>
So what happens when we try and do something silly with our numbers?<br>
For example <code>'orange' - 4</code> <code>Number.parseInt('football');</code> <code>0 / 0</code> <code> (-1) ** 0.5</code><br>
Well, we get a <code class="console-out">&larr; NaN</code>, which stands for <b>Not a Number</b>. <br><br>
<b>NaN</b> is interesting, <code>typeof(NaN);</code> gives us <code class="console-out">&larr; "number"</code>... So Not a Number is in fact a number.<br>
There's a built-in function for testing for NaN values, <code>Number.isNaN()</code>.<br>

<h3>Infinity</h3>
Some properties of <code>Infinity</code>:
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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" class="learn-more">Learn More About the Number Object</a><br><br>

<h3>Advanced Math Functions</h3>
	<table><tr><td>
<code>Math.round(<i>number</i>)</code> 
	</td><td>
	Returns <i>number</i> rounded to the nearest integer.
	</td></tr><tr><td>
<code>Math.abs(<i>number</i>)</code> 
	</td><td>
	Returns the absolute value of <i>number</i>.
	</td></tr><tr><td>
<code>Math.sin(<i>number</i>)</code> 
	</td><td>
	Returns the sine of <i>number</i>.
	</td></tr><tr><td>
<code>Math.cos(<i>number</i>)</code> 
	</td><td>
	Returns the cosine of <i>number</i>.
	</td></tr><tr><td>
<code>Math.sqrt(<i>number</i>)</code> 
	</td><td>
	Returns the square root of <i>number</i>.
	</td></tr><tr><td>
<code>Math.pow(<i>base</i>, <i>exponent</i>)</code> 
	</td><td>
	Returns <i>base</i> to the <i>exponent</i> power.
	</td></tr><tr><td>
<code>Math.log(<i>number</i>)</code> 
	</td><td>
	Returns the natural logarithm ln() of <i>number</i>.
	</td></tr><tr><td>
<code>Math.max(<i>x</i>, <i>y</i>, ...)</code> 
	</td><td>
	Returns the largest of the numbers passed in.<br><code>Math.min(<i>x</i>, <i>y</i>, ...)</code> returns the smallest.
	</td></tr></table>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" class="learn-more">Learn More About Math Functions</a><br><br>

<h2>Booleans</h2>
The following operators return <code>true</code> or <code>false</code>, these will be essential to make use of Control Flow which is the main concept of this level.
<br><br>

	<h3>Equality Operators</h3>
<table><tr><td>
	<code><i>a</i> == <i>b</i></code>
</td><td>
	Returns true if <i>a</i> and <i>b</i> are equal in value, false otherwise.<br>
	Note that <i>a</i> and <i>b</i> can have different types and still be equal.<br>
	Examples:
	<code>3.25 == 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 == "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 == 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> === <i>b</i></code>
</td><td>
	Returns true if <i>a</i> and <i>b</i> are equal in value <b>and have the same type</b>, false otherwise.<br>
	Examples:
	<code>3.25 === 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 === "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 === 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> != <i>b</i></code>
</td><td>
	Returns true if <i>a</i> and <i>b</i> are not equal in value, regardless of type, false otherwise.<br>
	Examples:
	<code>3.25 != 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 != "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 != 0.2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> !== <i>b</i></code>
</td><td>
	Returns true if <i>a</i> and <i>b</i> are either not equal in value or type, false otherwise.<br>
	Examples:
	<code>3.25 !== 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 !== "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 !== 0.2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Comparison Operators</h3>
	
<table><tr><td>
	<code><i>a</i> < <i>b</i></code>
</td><td>
	Returns true if <i>a</i> is less than <i>b</i>, false otherwise.<br>
	Examples: 
	<code>1 < 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 < 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 < 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> <= <i>b</i></code>
</td><td>
	Returns true if <i>a</i> is less than or equal to <i>b</i>, false otherwise.<br>
	Examples: 
	<code>1 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 <= 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> > <i>b</i></code>
</td><td>
	Returns true if <i>a</i> is greater than <i>b</i>, false otherwise.<br>
	Examples: 
	<code>1 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 > 2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> >= <i>b</i></code>
</td><td>
	Returns true if <i>a</i> is greater than or equal to <i>b</i>, false otherwise.<br>
	Examples: 
	<code>1 >= 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 >= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 >= 2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Logical Operators</h3>
	
<table><tr><td>
	<code>!<i>a</i></code>
</td><td>
	The <b>NOT</b> operator, flips true to false and vice versa.<br>
	Examples: 
	<code>!true</code> <code class="console-out">&larr; false</code> , 
	<code>!false</code> <code class="console-out">&larr; true</code>

</td></tr><tr><td>
	<code><i>a</i> && <i>b</i></code>
</td><td>
	The <b>AND</b> operator, returns true if both <i>a</i> and <i>b</i> are true, and false if either of them is false.<br>
	Examples: 
	<code>true && true</code> <code class="console-out">&larr; true</code> , 
	<code>true && false</code> <code class="console-out">&larr; false</code> , 
	<code>true && true</code> <code class="console-out">&larr; false</code>

</td></tr><tr><td>
	<code><i>a</i> || <i>b</i></code>
</td><td>
	The <b>OR</b> operator, returns true if both <i>a</i> and <i>b</i> are true, and false if either of them is false.<br>
	Examples: 
	<code>true || true</code> <code class="console-out">&larr; true</code> , 
	<code>true || false</code> <code class="console-out">&larr; true</code> , 
	<code>true || true</code> <code class="console-out">&larr; false</code>

</td></tr></table>

<h3>Falsy Values</h3>
A falsy value is one that acts as if it were <code>false</code>.
In JavaScript there are six "falsy" values:<br>
<ol><li>
<code>false</code> obviously<br>
	</li><li>
<code>0</code> and <code>-0</code><br>
	</li><li>
<code>""</code> or <code>''</code> the empty string<br>
	</li><li>
<code>NaN</code> i.e. Not a Number<br>
	</li><li>
<code>undefined</code><br>
	</li><li>
<code>null</code><br>
	</li></ol>

Try out the following commands with falsy values substituted in to see how they act like false:<br><br>
	<code>!(<i>value</i>)</code><br>
	<code><i>value</i> && true</code><br>
	<code><i>value</i> || false</code><br><br>
Then try them with regular numbers and strings and see how the behaviour changes.

<br><br><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank" class="learn-more">Learn More About Logical Operators and Falsy Values</a><br><br>


<h2>Control Flow</h2>
<h3>If-Else</h3>
Control flow statements allow a program to execute different code based on a condition.<br>
If a certain condition is true, one piece of code is executed; if it's false another piece of code is executed.<br>
<br>
The following code is an example of an <b>if-else</b> statement:
<div class="code">var rollsOfToiletPaper = 5;
if (rollsOfToiletPaper <= 1) {
	console.log("I need to buy more toilet paper!");
} else if (rollsOfToiletPaper > 50){
	console.log("Why did I buy this much toilet paper??");
} else {
	console.log("All good.");
}</div>
This program should be easy to understand:<br>
If the value of <code>rollsOfToiletPaper</code> is less than or equal to 1, the code inside the first pair of curly braces is executed.<br> If it's greater than 50, the code between the second pair of curly braces is executed.<br>
Otherwise the codein the last set of braces is executed.<br><br>
<b>Note:</b> Code that's written between curly braces is called a <b>block</b> of code.
<br><br>

To give a more formal definition, the <code>if</code> keyword is always followed by condition inside a pair of parentheses <code>(<i>condition</i>)</code>, after the condition we place a block of code <code>{ <i>do something here</i> }</code>.<br>
Optionally, afterwards we can place an <code>else if</code> which behaves the same as an <code>if</code> or just an <code>else</code> which doesn't take a condition, just a block.
<br>
Once the first condition is met the block following it is executed, the blocks for all the other <code>else</code> statements are ignored.

	<br><br>
<h3>Switch</h3>
Sometimes we have to write programs like this:
<div class="code">var letter = 'C';
if (letter === 'A') {
	console.log('A for Aligator');
} else if (letter === 'B') {
	console.log('B for Beaver');
} else if (letter === 'C') {
	console.log('C for Chameleon');
} else if (letter === 'D') {
	console.log('D for Dishwasher');
} else if (letter === 'E') {
	console.log('E for Elephant');
} else {
	console.log('Unsupported letter, please try again');
}</div>

It gets tedious and difficult to read, a much more convenient and appealing way of writing the same program is with a <code>switch</code> statement:
<div class="code">var letter = 'C';
switch (letter) {
	case 'A':
		console.log('A for Aligator');
		break;
	case 'B':
		console.log('B for Beaver');
		break
	case 'C':
		console.log('C for Chameleon');
		break;
	case 'D':
		console.log('D for Dishwasher');
		break;
	case 'E':
		console.log('E for Elephant');
		break;
	default:
		console.log('Unsupported letter, please try again');
}</div>

<h3>Conditional Operator (or the Ternary Operator)</h3>
<code><i>condition</i> ? <i>statement1</i> : <i>statement2</i>;</code><br><br>
If <i>condition</i> evaluates to true then <i>statement1</i> is executed, otherwise <i>statement2</i> is executed.<br>
Consider the following code:
<div class="code">var milkExpired = false;
if (milkExpired) {
	console.log("I'm not having breakfast today :(");
} else {
	console.log("Cereal time!");
}</div>

Using the conditional operator, it can be shortened to:
<div class="code">var milkExpired = false;
milkExpired ? console.log("I'm not having breakfast today.") : console.log("Cereal time!");
</div>
Actually it can be shortened even further:
<div class="code">var milkExpired = false;
console.log( milkExpired ? "I'm not having breakfast today." : "Cereal time!");
</div>

<h2>Time to Play The Level</h2>
It's pretty obvious the robot will have to jump, try it out, go to the <b>Console Tab</b> and type in:<br>
<code>robot.jump(10);</code> That's the furthest forward the robot can jump.
<br><br>
Try to alternate between jumping and moving forward? <code>robot.move(40);</code>
<br>
By the way, when the text input is selected in the console, use the up and down keys to go back and forth in your executed commands history.
<br><br>
If you can, try to write your solution in the <b>Script Tab</b>.<br><br>

One thing to keep in mind, if you declare a variable inside <code>function init()</code>,
it will not be available in <code>function loop()</code>, the explanation behind this will come in later levels.<br>
For now, if you want to create a variable and access it later, create a property on the <b>robot</b> object like this:<br>
	<code>robot.myNewProperty = "some value";</code>
	
	Good luck!<br><br>
If you've been trying for a while and just can't work it out then:<br>

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>

	<div id="solution">
<div class="code">function init(robot) {
	robot.jumpNext = true;
}

function loop(robot) {
	if (robot.jumpNext) {
		robot.action = {type: 'jump', amount: 10};
		robot.jumpNext = false;
	} else {
		robot.action = {type: 'move', amount: 40};
		robot.jumpNext = true;
	}
}</div>
</div>
`,





//////////// LEVEL 4 /////////////////////////////////////////////////////////
`
<h1>Level 4</h1>

<h3>I haven't written the instructions for this level yet :(</h3>
<h3>If you would like to help out tweet me <a href="https://twitter.com/reaalkhalil/">@reaalkhalil</a></h3>

<!--
	keyboard control
	function name(){}
	var name = function(){}
	parameters
	return
	declaration vs expression
	arrow
	built-in functions: String, Number, Math, [links to Mozilla]
-->


	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
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
	<a id="showSolution" class="show-solution">Show Solution</a>
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

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
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

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
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

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
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
	<a id="showSolution" class="show-solution">Show Solution</a>
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
	<a id="showSolution" class="show-solution">Show Solution</a>
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



