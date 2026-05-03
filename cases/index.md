---
layout: default
title: Case Studies
description: In-depth looks at data science and ML projects.
permalink: /cases/
---

<div class="listing-header">
  <h1>Case Studies</h1>
  <p>Deep dives into data science and machine learning projects — from problem definition to deployment.</p>
</div>

<section style="padding-top: 0;">
  <div class="cards-grid">
    {% for case in site.cases %}
    <article class="post-card">
      <div class="post-card-meta">{{ case.date | date: "%B %d, %Y" }} &bull; {{ case.category }}</div>
      <h3><a href="{{ case.url }}">{{ case.title }}</a></h3>
      {% if case.summary %}
      <p>{{ case.summary }}</p>
      {% endif %}
      {% if case.tech_stack %}
      <div class="project-tags" style="margin-top: 1rem;">
        {% for tech in case.tech_stack %}<span class="tag">{{ tech }}</span>{% endfor %}
      </div>
      {% endif %}
      <a href="{{ case.url }}" class="read-more" style="margin-top: 1rem; display: inline-block;">Read case study &rarr;</a>
    </article>
    {% endfor %}
  </div>
</section>