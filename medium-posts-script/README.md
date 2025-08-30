# Download CivicActions Medium Accessibility Posts

Use the script `rss2md.py` to download CivicActions medium accessibility posts using https://medium.com/feed/civicactions/tagged/Accessibility and save them as posts in this site.

Install python dependencies:

```bash
pip3 install -r medium-posts-scripts/requirements.txt
```

Then run the script to save the posts in the `_posts` directory.

```bash
python3 medium-posts-script/rss2md.py
```

Submit the changes as pull request and make any manual fixes as needed.
