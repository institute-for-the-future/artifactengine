# Artifact Engine

Inspired by [soulwire](https://github.com/soulwire)'s [mad-libs style random sentence generator](https://github.com/soulwire/WTFEngine), and remixed to be appropriate for all audiences who are interested in thinking about the future.

It's very simple to use and now allows you to populate it using either vanilla JavaScript objects, JSON files or direct feeds from Google spreadsheets.

## How to use it

To make your own, simply [clone](github-mac://openRepo/https://github.com/soulwire/WTFEngine) or [download](https://github.com/soulwire/WTFEngine/archive/master.zip) this repository and start populating the engine with your content.

You can populate it using one of three different methods. Each is controlled from [`main.js`](https://github.com/soulwire/WTFEngine/blob/master/scripts/main.js) (where you will find commented examples of each technique.)

1. JavaScript Object literal
2. A JSON file
3. A live feed from a Google spreadsheet

If you choose to use a Google spreadsheet, you must [publish it first](https://support.google.com/drive/answer/37579?hl=en) and be sure to manually republish it after editing if you want changes to propagate immediately, otherwise they will take around 15 minutes.

Here's an [example spreadsheet](https://docs.google.com/a/soulwire.co.uk/spreadsheet/ccc?key=0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc), which you can clone and use a base for your data source.

_**Note**: For local testing (when using loaded JSON or Google spreadsheet data), you'll need to serve the site from a local webserver. You can easily do this using tools like [SimpleHTTPServer](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python) for Python or [http-server](https://github.com/nodeapps/http-server) for Node._

## How it works

The process is very simple. The WTF Engine takes a sentence template and fills in different types of blanks with different types of words, much like the game [Mad Libs](http://en.wikipedia.org/wiki/Mad_Libs). You can nominate any amount of templates and as many different categories of words or phrases as you like.

For example, here is a basic corpus

    {
        template: [ "Big @color @animal", "Silly @animal with @color fur" ],
        animal: [ "dog", "cat", "rabbit" ],
        color: [ "red", "blue", "green", "yellow" ]
    };

As you can see, in a template you use the __@__ symbol, followed by the type of word you wish to use to tell the WTF Engine to pick a random word of that type from the corpus and insert it at that point.
