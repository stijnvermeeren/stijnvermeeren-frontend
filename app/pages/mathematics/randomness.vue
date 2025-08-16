<template>
  <h2>Short introduction to algorithmic randomness</h2>

  <blockquote class="citaat"><p>[The theory of computation] tries to understand why, and how, some problems are easy while others are hard. This isn't a question of how fast our computers are, any more than astronomy is the study of telescopes. It is a question about the <em>mathematical structures</em> of problems, and how these structures help us solve problems or frustrate our attempts to do so. This leads us, in turn, to questions about the nature of mathematical proof, and even of intelligence and creativity.</p><p class="source"> --  Christopher Moore and Stephan Mertens - "<nuxt-link to="http://www.amazon.com/Nature-Computation-Cristopher-Moore/dp/0199233217/ref=sr_1_1?s=books&ie=UTF8&qid=1317310896&sr=1-1">The Nature of Computation</nuxt-link>" (2011)</p></blockquote>

  <p>The foundations of <strong>computability theory</strong> were laid in the 1930s, by people like Alonzo Church, John Barkley Rosser, Stephen Kleene and (most notably) Alan Turing, whose centenary was be celebrated with the <nuxt-link to="http://www.turingcentenary.eu/">Alan Turing Year</nuxt-link> in 2012. They realized that it is possible to define the intuitive concept of "computation" in a mathematical way, independent of whatever hardware or programming language is used to do the computation. This enabled them to build a theory of computable and incomputable sets and functions. Computability theory usually focusses more on the incomputable than on the computable. Indeed, once you know something is computable, it remains of interest mostly to computer scientists, who will study the efficiency and memory requirements of the algorithms that solve the problem. Efficiency and memory requirements are however things that computability theorists hardly care about. They are more interested in the wide and elegant theory that of incomputable functions. For example, it doesn't just stop at the concept of <em>incomputability</em>: one can define different degrees of incomputability, where one incomputable functions can be <em>further from being computable</em> than another.</p>

  <p>Personally, I'm mostly studying one topic in computability theory which is called <strong>algorithmic randomness</strong>. Algorithmic randomness is different from statistical randomness. A statistician is able to speak about the randomness of a process or of a variable, but doesn't have a notion of randomness for a sequence of outcomes. For example, consider a series of fair coin tosses, where we denote the outcome "heads" as 0 and "tails" as 1. Then two possible sequences of outcomes are</p>
  <p class="text-center">0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1...</p>
  <p>and</p>
  <p class="text-center">0 0 1 0 1 1 1 0 0 1 1 0 1 0 1 1 1 1 0 1 0 0 1 1...</p>
  <p>For the statistician, these two particular sequences are equally likely, as are indeed any two sequences of outcomes. However, we instantly recognize the first sequence as begin very regular (non-random), whereas the second sequence seems quite random. Algorithmic randomness solves this paradox. In algorithmic randomness, computability theory is used to come up with definitions of what exactly can be considered a regularity in such a sequence, and which sequences are truly random.</p>

  <p>Note that randomness is much stronger than incomputability. We can easily construct a sequence which is incomputable in the digits with odd positions, but has 0's on all even positions, thereby making it obviously non-random.</p>

  <p>Due to the many subtle ways in which a sequence can have a regularity, it took until the 1960s before the first robust definition of algorithmic randomness was given, by Per Martin-Löf. In the following decades, many more definitions of randomness were obtained, using a wide range of different tools, such as measure theory, martingales, Kolmogorov complexity, computable analysis and ergodic theory. Some of these approaches turned out the give equivalent definitions, but other did not. This led to different notions of randomness, such as Martin-Löf randomness, computable randomness and Schnorr randomness. All of them are reasonable randomness notions, but some are stronger than others. The study of the relative strength and the properties of these notions, has received an increasing amount of attention over the past years.</p>

  <p><nuxt-link to="/mathematics">Back to my mathematics page</nuxt-link>.</p>

  <h3>Further reading:</h3>
  <ul>
    <li>S. Barry Cooper - "<nuxt-link to="http://www.amazon.com/Computability-Theory-Chapman-Hall-Mathematics/dp/1584882379">Computability Theory</nuxt-link>" (2003)</li>
    <li>André Nies - "<nuxt-link to="http://www.amazon.com/Computability-Randomness-Oxford-Logic-Guides/dp/0199230765/ref=sr_1_1?s=books&ie=UTF8&qid=1317310920&sr=1-1">Computability and Randomness</nuxt-link>" (2009)</li>
    <li>Rodney G. Downey and Denis R. Hirschfeldt - "<nuxt-link to="http://www.amazon.com/Algorithmic-Randomness-Complexity-Applications-Computability/dp/0387955674/ref=sr_1_3?s=books&ie=UTF8&qid=1317310920&sr=1-3">Algorithmic Randomness and Complexity</nuxt-link>> (2010)</li>
  </ul>
</template>

<script setup lang="ts">
useMeta({
  title: 'Algorithmic randomness'
})

definePageMeta({
  activeMenuLink: '/projects'
})
</script>