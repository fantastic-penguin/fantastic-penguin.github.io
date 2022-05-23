---
title: will compile code for foo
layout: base.njk
---

It begins.

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}

