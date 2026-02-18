<template>
  <section class="two-col-section site-footer">
    <div class="site-footer-copy">
      <p>Produtos são feitos <br />por pessoas, para pessoas.</p>
      <p>© andré oliveira 2026</p>
    </div>

    <div class="predinhos-double">
      <PredinhosArt />
      <PredinhosArt class="predinhos-double__extra" aria-hidden="true" />
    </div>
  </section>
</template>

<style scoped>
.site-footer {
  padding-bottom: 0;
}

.site-footer-copy {
  display: grid;
  gap: var(--space-16);
}

.site-footer-copy p {
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  margin: 0;
}

.predinhos-double {
  margin-top: var(--space-64);
}

.predinhos-double__extra {
  display: none;
}

@media (min-width: 900px) {
  .predinhos-double {
    align-items: end;
    display: grid;
    gap: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 0;
  }

  .predinhos-double__extra {
    display: block;
  }

  .site-footer-copy{
    margin-bottom: var(--space-32);
  }
}
</style>
