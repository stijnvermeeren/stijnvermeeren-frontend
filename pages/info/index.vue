<template>
  <v-img src="/images/stijn/stijn.jpg" alt="Photo of Stijn" class="float-right mx-3" style="max-width: 30%;" width="400" />

  <h2>About Stijn</h2>

  <p>My name is Stijn Vermeeren <em>(<nuxt-link to="myname">how to pronounce my name</nuxt-link>)</em>. I am <stijn-age /> years old.</p>
  <p>I am originally from <nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Aarschot,+Belgium&ie=UTF8&ll=51.018506,4.831924&spn=0.165435,0.466919&z=11&om=1">Aarschot</nuxt-link>, Belgium. Since 2013, I live in Zürich, Switzerland.</p>

  <h3>Data Scientist and Software Engineer</h3>

  <p>From 2013 until 2022, I worked as <em>Head of AI</em> for <nuxt-link to="https://www.starmind.ai/">Starmind</nuxt-link> in Zürich, Switzerland. My work involved data science (in particular natural language processing, recommender systems, full text search) and software engineering in Scala and Python.</p>

  <p>I am currently on a sabbatical until April 2023, travelling Europe and Latin America.</p>

  <p>You can <a href="/files/cv/CV-Stijn_Vermeeren.pdf">view/download my CV as a PDF file</a>.</p>

  <h3>Mathematician</h3>

  <p>I have a Bachelor in Mathematics from the <nuxt-link to="http://www.kuleuven.be/">Katholieke Universiteit Leuven</nuxt-link>, a <nuxt-link to="http://www.maths.cam.ac.uk/postgrad/casm/">Certificate of Advanced Study in Mathematics</nuxt-link> (<em>Part III</em>) from the University of Cambridge and a PhD in Mathematical Logic from the <nuxt-link to="http://www.maths.leeds.ac.uk/pure/logic/group.html">University of Leeds</nuxt-link>. On the <nuxt-link to="mathematics">mathematics page</nuxt-link> you can find more information on my research.</p>

  <p>In 2015, I won a First Prize at the <nuxt-link to="https://www.vwo.be">Vlaamse Wiskunde Olympiade</nuxt-link> and a Honourable Mention at the <nuxt-link to="http://www.imo-official.org/participant_r.aspx?id=8605">International Mathematical Olympiad in Mexico</nuxt-link>. I still enjoy different kinds of problem solving competitions such as <nuxt-link to="http://www.research.ibm.com/ponder/">IBM Ponder This</nuxt-link> and the <nuxt-link to="https://www.aivd.nl/publicaties/publicaties/2016/12/12/kerstpuzzel-2016">NBV Kerstpuzzel</nuxt-link>.</p>

  <h3>Polyglot</h3>

  <ul>
    <li lang="nl">
      Mijn moedertaal is <strong><nuxt-link to="info/nederlands">Nederlands</nuxt-link></strong>.<br />
      Speciaal voor de Nederlandstaligen heb ik een <nuxt-link to="bio">(ludieke) biografie</nuxt-link> geschreven.
    </li>
    <li>As you have already noticed, I speak <strong>English</strong>.</li>
    <li lang="de">Ich spreche auch <strong><nuxt-link to="info/deutsch">Deutsch</nuxt-link></strong> (und au es bitzeli Mundart).</li>
    <li lang="it">Ciao! Parlo <strong><nuxt-link to="info/italiano">italiano</nuxt-link></strong>.</li>
    <li lang="es">Estoy aprendiendo <strong><nuxt-link to="info/espanol">español</nuxt-link></strong>.</li>
    <li lang="no">Jeg snakker <strong><nuxt-link to="info/norsk">norsk</nuxt-link></strong>.</li>
    <li lang="cs">Nemluvím <strong><nuxt-link to="info/cesky">česky</nuxt-link></strong>.</li>
  </ul>

  <h3>Hiker and mountaineer</h3>

  <p>I was active in the <nuxt-link to="http://www.luuhc.com/">Leeds University Union Hiking Club</nuxt-link> from 2009 to 2013. Since moving to Switzerland, I head into the Alps as often as possible. I like to do challenging alpine hikes and scambles, as well as via ferrata. I am also trying to get more experience in mountaineering and ski touring. I used to write detailed <nuxt-link to="http://Stijn.hikr.org/">reports on Hikr</nuxt-link> for many of my hikes.</p>

  <h3>Go player</h3>

  <p>I have been studying and playing the board game of <nuxt-link to="https://online-go.com/learn-to-play-go">Go</nuxt-link> since 2010. After participating in my first official tournament in 2016, I'm now <nuxt-link to="http://www.europeangodatabase.eu/EGD/Player_Card.php?&key=18074815">officially ranked</nuxt-link> as a 2 yku (EGF).</p>

  <h3>Profiles on the internet</h3>

  <div class="profiles">
    <ul class="list-unstyled">
      <li><social-link link="http://ch.linkedin.com/in/stijnvermeeren/" title="LinkedIn" image="linkedin.png" /></li>
      <li><social-link link="https://www.xing.com/profile/Stijn_Vermeeren" title="XING" image="XING.png" /></li>
      <li><social-link link="https://github.com/stijnvermeeren" title="Github" image="github.png" /></li>
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
  title: 'About Stijn'
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
