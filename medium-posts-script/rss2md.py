# Taken from https://gist.github.com/rebornix/5363138.

import feedparser
from markdownify import markdownify as md

rss_url = "https://medium.com/feed/civicactions/tagged/Accessibility"

feed = feedparser.parse( rss_url )
items = feed["items"]
for item in items:
  time = item[ "published_parsed" ]
  title = item[ "title" ]
  author = item[ "author" ].replace(' ', '-').lower()
  fileName = str(time.tm_year) + '-' + str(time.tm_mon) + '-' + str(time.tm_mday) + '-' + title.replace(' ', '-').replace(':', '').replace('&', '').lower() + '.md'
  fileName = fileName.replace('/', '')
  f = open('_posts/' + fileName, 'w')
  value = md(item["content"][0]['value'])
  f.write('---\nlayout: post\ntitle: "' + title + '"\ndate: ' + str(time.tm_year) + '-' + str(time.tm_mon) + '-' + str(time.tm_mday) + ' 08:00:00 -0800\nauthor: ' + author + '\n---\n')
  f.write(value)
