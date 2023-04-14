<template>
  <h2>Korte inleiding tot <em>algorithmic randomness</em></h2>

  <blockquote class="citaat"><p>[De theorie van berekening] probeert te begrijpen waarom, en op welke manier, sommige problemen gemakkelijk zijn, en andere moeilijk. Dit gaat niet over hoe snel onze computers zijn, evenmin als astronomie de studie van telescopen is. Dit gaat over de <em>wiskundige structuur</em> van problemen, en hoe deze structuren ons helpen om de problemen op te lossen, of juist in de weg zitten om tot een oplossing te komen. Dit, op zijn beurt, leidt tot vragen over de wiskundige bewijsbaarheid, en zelfs over intelligentie en creativiteit.</p><p class="source"> --  Christopher Moore and Stephan Mertens - "<nuxt-link to="http://www.amazon.com/Nature-Computation-Cristopher-Moore/dp/0199233217/ref=sr_1_1?s=books&ie=UTF8&qid=1317310896&sr=1-1">The Nature of Computation</nuxt-link>" (2011)</p></blockquote>

  <p>De grondslagen van <strong>berekenbaarheidstheorie</strong> (<em>computability theory</em>) werden gelegd in de jaren 1930, door onder andere Alonzo Church, John Barkley Rosser, Stephen Kleene en vooral Alan Turing, wiens 100ste geboortejaar in 2012 gevierd wordt als het <nuxt-link to="http://www.turingcentenary.eu/">Alan Turing Year</nuxt-link>. Zij realiseerden zich dat het mogelijk is om het intuïtieve begrip van "berekening" in een robuuste wiskundige definitie te gieten, onafhankelijk van welke hardware of programmeertaal er ook gebruikt wordt om de berekening te verwezenlijken. Hiermee kon men beginnen te bouwen aan een theorie van berekenbare en onberekenbare verzamelingen en functies. En de berekenbaarheidstheorie kijkt meestal meer naar het onberekenbare dan naar het berekenbare. Inderdaad: zodra je weet dat een iets berekenbaar is, is het vooral nog interessant voor informatici, die de efficiëntie en het geheugengebruik zullen besturen van de algoritmes die het probleem oplossen. Berekenbaarheidstheoristen zijn echter niet zo geïnteresseerd in efficiëntie en geheugengebruik. Zij onderzoeken liever de rijke en elegantie theorie van onberekenbare functies. Zo houdt het bijvoorbeeld niet op bij het begrip <em>onberekenbaarheid</em>; men kan verschillende graden van onberekenbaarheid definiëren, waarbij de ene onberekenbare functie <em>verder van berekenbaarheid</em> kan zijn dan de andere.</p>

  <p>Zelfs bestudeer ik vooral <strong>algorithmic randomness</strong>, een deelgebied van de berekenbaarheidstheorie. Randomness wordt hier gebruikt in een andere betekenis dan in de statistiek. In de statistiek spreekt men over stochastische variabelen en processen, maar men heeft geen begrip van randomness voor een rij van uitkomsten. Beschouw bijvoorbeeld het herhaaldelijk opwerpen van een eerlijke munt, waarbij we de uitkomst "kop" als 0 en de uitkomst "munt" als 1 noteren. Twee mogelijk rijen van uitkomsten zijn:</p>
  <div class="text-center">0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1...</div>
  <p>en</p>
  <div class="text-center">0 0 1 0 1 1 1 0 0 1 1 0 1 0 1 1 1 1 0 1 0 0 1 1...</div>
  <p>Voor de statisticus zijn deze twee rijen even waarschijnlijk. We zien echter onmiddellijk dat de eerste rij er heel regelmatig (niet-random) uitziet, terwijl de tweede rij wel vrij random lijkt. Algorithmic randomness biedt een oplossing voor deze paradox. In algorithmic randomness gebruikt men berekenbaarheidstheorie om te definiëren wat men juist als regelmatigheid in zulk een rij kan beschouwen, en welke rijen werkelijk random zijn.</p>

  <p>Merk op dat randomness veel sterker is dan onberekenbaarheid. Je kan gemakkelijk een rij construeren waarvan de bits met oneven posities onberekenbaar zijn, terwijl er op de even posities steeds een 0 staat, wat een heel sterke regelmatigheid is, zodat de rij zeker niet random kan zijn.</p>

  <p>Door de vele subtiele manieren waarin een rij een regelmatigheid kan hebben, duurde het tot in de jaren 1960 eer de eerste degelijke definitie van algorithmic randomness werd gegeven, door Per Martin-Löf. In de daaropvolgende decennia werden er veel nieuwe definities voorgesteld, vanuit zeer verschillende invalshoeken, zoals maattheorie, martingales, Kolmogorov-complexiteit, berekenbare analyse en ergodische theorie. Sommige benaderingen leidden tot equivalentie definities, maar andere niet. Zo zijn er nu veel verschillende noties van randomness, zoals Martin-Löf randomness, computable randomness en Schnorr randomness. Dit zijn allemaal redelijke definities van randomness, maar de ene is sterker dan de andere. De studie van de relatieve sterkte en van de eigenschappen van deze noties staat centraal in algorithmic randomness, en heeft over de laatste jaren steeds meer aandacht gekregen.</p>

  <p><nuxt-link to="/wiskunde">Terug naar mijn wiskundepagina</nuxt-link>.</p>

  <h3>Meer lezen:</h3>
  <ul>
    <li>S. Barry Cooper - "<nuxt-link to="http://www.amazon.com/Computability-Theory-Chapman-Hall-Mathematics/dp/1584882379">Computability Theory</nuxt-link>" (2003)</li>
    <li>André Nies - "<nuxt-link to="http://www.amazon.com/Computability-Randomness-Oxford-Logic-Guides/dp/0199230765/ref=sr_1_1?s=books&ie=UTF8&qid=1317310920&sr=1-1">Computability and Randomness</nuxt-link>" (2009)</li>
    <li>Rodney G. Downey and Denis R. Hirschfeldt - "<nuxt-link to="http://www.amazon.com/Algorithmic-Randomness-Complexity-Applications-Computability/dp/0387955674/ref=sr_1_3?s=books&ie=UTF8&qid=1317310920&sr=1-3">Algorithmic Randomness and Complexity</nuxt-link> (2010)</li>
  </ul>
</template>

<script setup>
useHead({
  title: 'Algorithmic randomness',
  htmlAttrs: {
    lang: 'nl'
  }
})

definePageMeta({
  activeMenuLink: 'projects'
})
</script>