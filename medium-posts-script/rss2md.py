# Taken from https://gist.github.com/rebornix/5363138.

import feedparser
import html2text

rss_url = "https://medium.com/feed/civicactions/tagged/Accessibility"

feed = feedparser.parse(rss_url)
items = feed["items"]
for item in items:
    time = item["published_parsed"]
    title = item["title"]
    author = item["author"].replace(' ', '-').lower()
    fileName = str(time.tm_year) + '-' + str(time.tm_mon) + '-' + str(time.tm_mday) + '-' + title.replace(' ', '-').replace(':', '').replace('&', '').lower() + '.md'
    fileName = fileName.replace('/', '')

    with open('_posts/' + fileName, 'w') as f:
        content = html2text.html2text(item["content"][0]['value'])
        f.write('---\nlayout: post\ntitle: "' + title + '"\ndate: ' + str(time.tm_year) + '-' + str(
            time.tm_mon) + '-' + str(time.tm_mday) + ' 08:00:00 -0800\nauthor: ' + author + '\n---\n')
        f.write(content)
