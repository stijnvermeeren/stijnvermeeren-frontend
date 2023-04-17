<template>
  <img src="/images/stijn/stijn.jpg" alt="Foto van Stijn" class="foto" />

  <h2>Over Stijn</h2>

  <p>Mijn naam is Stijn Vermeeren. Ik ben <stijn-age /> jaar oud.</p>
  <p>Ik ben opgegroeid in <nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Aarschot,+Belgium&ie=UTF8&ll=51.018506,4.831924&spn=0.165435,0.466919&z=11&om=1">Aarschot</nuxt-link>, Vlaams-Brabant. Sinds 2013 woon ik in Zürich, Zwitserland. In mijn <nuxt-link to="/bio">ludieke biografie</nuxt-link> kan je meer over mij lezen.</p>

  <h3>Data scientist en softwareontwikkelaar</h3>

  <p>Van 2013 tot 2022 werkte ik als <em>Head of AI</em> voor <nuxt-link to="https://www.starmind.ai/">Starmind</nuxt-link> in Zürich.</p>

  <h3>Wiskundige</h3>

  <p>Ik heb een Bachelor in de Wiskunde van de <nuxt-link to="http://www.kuleuven.be/">Katholieke Universiteit Leuven</nuxt-link>, een <nuxt-link to="http://www.maths.cam.ac.uk/postgrad/casm/">Certificate of Advanced Study in Mathematics</nuxt-link> (<em>Part III</em>) van de University of Cambridge en een doctoraat in wiskundige logica van de <nuxt-link to="http://www.maths.leeds.ac.uk/pure/logic/group.html">University of Leeds</nuxt-link>. Op mijn <nuxt-link to="/wiskunde">wiskundepagina</nuxt-link> vind je meer information over mijn onderzoek.</p>

  <p>In 2015 won ik een eerste prijs bij de <nuxt-link to="https://www.vwo.be">Vlaamse Wiskunde Olympiade</nuxt-link> en een eervolle vermelding bij de <nuxt-link to="http://www.imo-official.org/participant_r.aspx?id=8605">International Mathematical Olympiad in Mexico</nuxt-link>. Ik hou me nog steeds graag bezig met wiskundige problemen en competities zoals <nuxt-link to="http://www.research.ibm.com/ponder/">IBM Ponder This</nuxt-link>, de Nederlandse <nuxt-link to="https://www.aivd.nl/onderwerpen/aivd-kerstpuzzel">AIVD Kerstpuzzel</nuxt-link> en de Belgische <nuxt-link to="https://beldefnews.mil.be/de-eindejaarspuzzel-extreme-hersengymnastiek/">Eindejaarspuzzel van Defensie</nuxt-link>.</p>

  <h3>Polyglot</h3>

  <ul>
    <li>Mijn moedertaal is <strong>Nederlands</strong>.</li>
    <li lang="en">I speak <strong><nuxt-link to="/info">English</nuxt-link></strong> fluently.</li>
    <li lang="de">Ich spreche auch <strong><nuxt-link to="/info/deutsch">Deutsch</nuxt-link></strong> (und au es bitzeli Mundart).</li>
    <li lang="it">Ciao! Parlo <strong><nuxt-link to="/info/italiano">italiano</nuxt-link></strong>.</li>
    <li lang="es">Estoy aprendiendo <strong><nuxt-link to="/info/espanol">español</nuxt-link></strong>.</li>
    <li lang="no">Jeg snakker <strong><nuxt-link to="/info/norsk">norsk</nuxt-link></strong>.</li>
    <li lang="cs">Nemluvím <strong><nuxt-link to="/info/cesky">česky</nuxt-link></strong>.</li>
  </ul>

  <h3>Bergwandelaar en alpinist</h3>

  <p>Ik was een actief lid van de <nuxt-link to="http://www.luuhc.com/">Leeds University Union Hiking Club</nuxt-link> van 2009 tot 2013. Sinds ik in Zwitserland woon, ben ik zoveel mogelijk in de Alpen onderweg. Ik hou van uitdagende alpine wandeltochten met eenvoudige klimpassages en van via ferrata. Ik probeer ook meer ervaring te verzamelen met bergbeklimmen en skitoeren. Ik schrijf gedetailleerde <nuxt-link to="http://Stijn.hikr.org/">berichten op Hikr</nuxt-link> over veel van mijn bergtochten.</p>

  <h3>Go-speler</h3>

  <p>Ik speel en bestudeer het bordspel <nuxt-link to="https://online-go.com/learn-to-play-go">Go</nuxt-link> sinds 2010. In 2016 nam ik voor het eerst deel in een officieel toernooi. Nu heb ik een <nuxt-link to="http://www.europeangodatabase.eu/EGD/Player_Card.php?&key=18074815">EGF-rating</nuxt-link> van 2-kyu. Af en toe ga ik naar de <nuxt-link to="http://http://zurich.swissgo.org/">Zürich Go Club</nuxt-link>.</p>

  <h3>Profielen op het internet</h3>

  <div class="profiles">
    <ul class="list-unstyled">
      <li><social-link link="http://ch.linkedin.com/in/stijnvermeeren/" title="LinkedIn" image="linkedin.png" /></li>
      <li><social-link link="https://www.xing.com/profile/Stijn_Vermeeren" title="XING" image="XING.png" /></li>
      <li><social-link link="http://www.facebook.com/stijnvermeeren" title="Facebook" image="facebook.png" /></li>
      <li><social-link link="http://www.icheckmovies.com/profiles/stijnvermeeren/" title="iCheckMovies" image="icheckmovies.png" /></li>
      <li><social-link link="http://www.hikr.org/user/Stijn" title="Hikr" image="hikr.png" /></li>
      <li><social-link link="http://www.walkhighlands.co.uk/blogs/Stijn" title="WalkHighlands" image="walkhighlands.png" /></li>
      <li><social-link link="http://duolingo.com/#/stijnvermeeren" title="Duolingo" image="duolingo.png" /></li>
      <li><social-link link="https://lichess.org/@/stijnvermeeren" title="Lichess" image="lichess.png" /></li>
      <li><social-link link="https://my.flightradar24.com/stijnvermeeren" title="myFlightradar24" image="myflightradar24.png" /></li>
    </ul>
  </div>
</template>

<script setup>
useMeta({
  title: 'Over Stijn',
  lang: 'nl'
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
