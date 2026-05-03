---
layout: default
title: Blog
description: Thoughts on data science, machine learning, and AI engineering.
permalink: /blog/
---

<div class="listing-header">
  <h1>Blog</h1>
  <p>Thoughts on data science, machine learning, and the occasional deep dive into things I'm learning.</p>
</div>

<section style="padding-top: 0;">
  <div class="cards-grid">
    {% for post in site.posts %}
    <article class="post-card">
      <div class="post-card-meta">{{ post.date | date: "%B %d, %Y" }}</div>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      {% if post.excerpt %}
      <p>{{ post.excerpt }}</p>
      {% endif %}
      {% if post.tags %}
      <div class="project-tags" style="margin-top: 1rem;">
        {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
      </div>
      {% endif %}
      <a href="{{ post.url }}" class="read-more" style="margin-top: 1rem; display: inline-block;">Read more &rarr;</a>
    </article>
    {% endfor %}
  </div>
</section>