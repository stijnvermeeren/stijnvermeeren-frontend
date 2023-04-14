<template>
  <h2>Mathematics</h2>

  <p>From October 2009 to April 2013, I worked on a Ph.D in <nuxt-link to="http://www.maths.leeds.ac.uk/pure/logic/group.html">Mathematical Logic at the University of Leeds</nuxt-link>.</p>
  <p>My supervisors were the late <nuxt-link to="http://www1.maths.leeds.ac.uk/~pmt6sbc/">S. Barry Cooper</nuxt-link> (<nuxt-link to="https://www.theguardian.com/education/2015/nov/17/barry-cooper-obituary">obituary</nuxt-link>) and <nuxt-link to="http://aemlewis.co.uk/">Andy Lewis</nuxt-link>.</p>

  <h3>Computability theory and algorithmic randomness</h3>

  <p>The topic of my thesis was computability theory, and more specifically algorithmic randomness.</p>
  <p>I've written a <nuxt-link to="/mathematics/randomness">quick introduction to algorithmic randomness</nuxt-link> for this website.</p>
  <p>My full thesis is titled "<a href="download/mathematics/Vermeeren_S_Mathematics_PhD_2013.pdf">Notions and applications of algorithmic randomness</a>" (pdf, 801 kB).</p>


  <h3>Papers and other mathematical downloads:</h3>

  <ul>
    <li>
      <strong><a href="download/mathematics/totalinjectionstrategy.pdf">A new total injection betting strategy</a></strong> (September 2011) is my paper in which I give a direct construction of a partial computably random sequence which is not total injection random.<br />
      I presented an <a href="download/mathematics/totalinjectionstrategy_cie.pdf">earlier version</a> of the paper at the conference <nuxt-link to="http://cie2011.fmi.uni-sofia.bg/">CiE 2011</nuxt-link> in Sofia, Bulgaria.
    </li>
    <li>
      <strong>The Angel Problem</strong> was the subject of a couple of talks that I gave. Here are the slides:
      <ul>
        <li><a href="download/mathematics/angel_slides2011.pdf"><em>Mathematical Excursions</em> talk (University of Leeds, 2 February 2011)</a></li>
        <li><a href="download/mathematics/angel_slides.pdf"><em>Pure Postgraduate seminar</em> (University of Leeds, 4 February 2010</a></li>
      </ul>
    </li>
    <li>
      <strong>Problem 10 of the 2010 LIMO mathematics competition</strong> ask you to prove that certain matrices are nilpotent. The model solutions use the Cayley-Hamilton theorem. I give a purely combinatorial solution:
      <ul>
        <li><a href="download/mathematics/limo10english.pdf">A combinatorial solution to LIMO 2010 question 10</a></li>
        <li><a href="download/mathematics/limo10.pdf">Een combinatorische oplossing voor vraag 10 van de LIMO 2010</a> (Dutch)</li>
      </ul>
    </li>
    <li>
      <strong><a href="download/mathematics/nets.pdf">Sequences and nets in topology</a></strong> is an expository article in which I show how sequences might fail to characterize topological properties such as openness, continuity and compactness correctly. Moreover, I define nets and show how they succeed where sequences fail.
    </li>
    <li>
      In <strong><a href="download/mathematics/embeddings.pdf">Embeddings into the countable atomless Boolean algebra</a></strong> I prove that every countable distributive lattice embeds into the lattice of computable subsets of the natural numbers. This is a well known result, but a proof is nowhere to be found. I give a proof and explain some related mathematics.
    </li>
    <li>
      <strong><a href="download/mathematics/essay.pdf">Realizability Toposes</a></strong> is the essay I wrote as part of Certificate of Advanced Study in Mathematics, commonly known as <em>Part III</em>, at the University of Cambridge in 2009.
    </li>
  </ul>
</template>

<script setup>
  useHead({
    title: 'Mathematics'
  })

  definePageMeta({
    activeMenuLink: '/projects'
  })
</script>
