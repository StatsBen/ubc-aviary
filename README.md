# UBC Aviary
The UBC Aviary's public web page source code.

_Author:_ Ben Clark - Mar. 2018

_Contact:_ ben.clark456@gmail.com

## Introduction

The Aviary is a roped climbing gym at UBC. Originally built in 2014,
it was managed by the Varsity Outdoor Club until a new club called
The Aviary was founded in 2017 to take over the increasing
responsibilities of managing it.

The Aviary's website is built to provide info about the gym to the
public, and to facilitate some online tasks like waiver signing and
bookings that would otherwise be very time consuming for monitors.

If you're the new Communications Coordinator, congratulations!
Hopefully this guide can answer any questions you may have about the
website, but if it doesn't please feel free to email myself (Ben Clark
email above). If I can't answer your question, contact Corey Kelly.
He generally knows everything about the Aviary always.

## Website Overview

TODO

### Typography
This site is using the 'Oxygen' font offered through Google Fonts.
A link to this font is found in a `link` element in the site's
`head`.


## Editing The Sourcecode

### Development Environment
This website comprises mostly HTML, CSS, and Javascript code. I
personally love the open source IDE 'Atom' with all the community
supported packages, but of course you're welcome to use whatever
you'd like.


### Adding a New Content Section

To add a section of content to the website, first open `index.html`
in your favourite code editor. Next, create a new `div` element within
the `#content` element, and give it the following attribute:
`class="section"`. Then, add your new content within this  tag.

The `class="section"` attribute ensures that `main.js` will generate
a link to this content in the site's header.

Next, give the section a name by giving your new `div` tag a `name`
attribute. This should look like `name="Your Name Here"`.

Generally, the name will look best if it's only 1 word, but the
website works just as well with more. Note that `name` is not normally
an attribute associated with `div` elements, and in this case it is used only by
`main.js` to create the link to this section at the top of the page.

Finally, do not assign an `id` attribute, as this will be done
automatically by `main.js`.

Remember, if parts of this document are hard to follow, look to the
existing sections in the `index.html` file as examples and hopefully
that'll clear things up!

#### Add a Section Checklist

1. Add a `div` element within `div#content`.
2. Add the `class="section"` attribute to your new element.
3. Give your new element a name attribute (`name="New Name"`).
4. _Do not_ give your new element an `id` attribute.


### Removing a Content Section

Open the `index.html` file in your favourite IDE or code editor and
search (`CMD+F` or whatever the Windows keyboard shortcut is) for the
name of the section you'd like to delete. The name will probably
appear within some sort of header tag (e.g. `<h2>Section Name<h2>`),
or in the `name` attribute of a `div` tag (e.g.
`<div class="section" name="Section Name">`).

Once you've found it, delete the entire `div` element containing that
content. Make sure that the `div` tag containing the text you'd like
to delete is deleted also. If it is not, a link to the non-existent
section will continue to appear at the top of the page.

#### Remove a Section Checklist

1. Find the section you'd like to delete.
2. Delete the content, _as well as the enclosing_ `div` _element!_.


### Adding a Page

_Coming soon...._

## Deploying (Making the Content Public)

_To be determined..._

#### Deployment Checklist



## Editing This Document (README.txt)
