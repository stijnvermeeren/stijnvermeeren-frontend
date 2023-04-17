<template>
  <h2>Wiskunde</h2>

  <p>Tussen oktober 2009 en april 2013 voltooide ik mijn doctoraat in de <nuxt-link to="https://logic.leeds.ac.uk/">wiskundige logica aan de University of Leeds</nuxt-link>.</p>
  <p>Mijn promotoren waren wijlen <nuxt-link to="https://en.wikipedia.org/wiki/S._Barry_Cooper">S. Barry Cooper</nuxt-link> en <nuxt-link to="https://lewis-pye.com/">Andy Lewis</nuxt-link>.</p>

  <h3>Berekenbaarheidstheorie en algorithmic randomness</h3>

  <p>Het onderwerp van mijn doctoraatsthesis was berekenbaarheidstheorie (<em>computability theory</em>), meer bepaald <em>algorithmic randomness</em>.</p>
  <p>Ik heb een <nuxt-link to="/wiskunde/randomness">korte introductie tot algorithmic randomness</nuxt-link> geschreven voor deze website.</p>
  <p>Mijn thesis is getiteld "<a href="/files/mathematics/Vermeeren_S_Mathematics_PhD_2013.pdf">Notions and applications of algorithmic randomness</a>" (pdf, 801 kB).</p>

  <h3>Artikels en wiskundige downloads:</h3>

  <ul>
    <li>
      <strong><a href="/files/mathematics/totalinjectionstrategy.pdf">A new total injection betting strategy</a></strong> (september 2011, Engels) is een paper waarin ik een een directe constructie geef van een <em>partial computably random</em> rij die niet <em>total injection random</em> is.<br />
      Een <a href="/files/mathematics/totalinjectionstrategy_cie.pdf">eerdere versie</a> presenteerde ik op de conferentie <nuxt-link to="http://cie2011.fmi.uni-sofia.bg/">CiE 2011</nuxt-link> in Sofia, Bulgarije.
    </li>
    <li>
      <strong>The Angel Problem</strong> was het onderwerp van enkele presentaties die ik gegeven heb. Hier zijn de slides:
      <ul>
        <li><a href="/files/mathematics/angel_slides2011.pdf"><em>Mathematical Excursions</em> presentatie (University of Leeds, 2 februari 2011)</a> (Engels)</li>
        <li><a href="/files/mathematics/angel_slides.pdf"><em>Pure Postgraduate seminar</em> (University of Leeds, 4 februari 2010</a> (Engels)</li>
      </ul>
    </li>
    <li>
      <strong>Probleem 10 van de LIMO 2010 wiskundecompetitie</strong> vraagt om te bewijzen dat bepaalde matrices nilpotent zijn. De modeloplossing gebruikt de stelling van Cayley-Hamilton. Ik geef een puur combinatorische oplossing:
      <ul>
        <li><a href="/files/mathematics/limo10.pdf">Een combinatorische oplossing voor vraag 10 van de LIMO 2010</a></li>
        <li><a href="/files/mathematics/limo10english.pdf">A combinatorial solution to LIMO 2010 question 10</a> (Engels)</li>
      </ul>
    </li>
    <li>
      In <strong><a href="/files/mathematics/nets.pdf">Sequences and nets in topology</a></strong> (Engels) leg ik uit hoe convergentie van rijen soms faalt bij het beschrijven van topologische eigenschappen zoals open-zijn, continuïteit en compactheid. Verder toon ik hoe netten daar wel in slagen.
    </li>
    <li>
      In <strong><a href="/files/mathematics/embeddings.pdf">Embeddings into the countable atomless Boolean algebra</a></strong> (Engels) bewijs ik dat elke aftelbare distributieve tralie ingebed kan worden de tralie van berekenbare deelverzamelingen van de natuurlijke getallen. Dit is een resultaat dat in de berekenbaarheidstheorie vaak gebruikt wordt, maar een overzichtelijk bewijs is elders nergens te vinden.
    </li>
    <li>
      <strong><a href="/files/mathematics/essay.pdf">Realizability Toposes</a></strong> (Engels) was mijn essay, geschreven voor het behalen van een <em>Certificate of Advanced Study in Mathematics</em> ("<em>Part III</em>") aan de University of Cambridge in 2009.
    </li>
  </ul>
</template>

<script setup>
  useMeta({
    title: 'Wiskunde',
    lang: 'nl'
  })

  definePageMeta({
    activeMenuLink: '/projects'
  })
</script>
