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

## Editing The Sourcecode

### Development Environment
This website comprises mostly HTML, CSS, and Javascript code. I
personally love the open source IDE 'Atom' with all the community
supported packages, but of course you're welcome to use whatever
you'd like.

### Website Overview

TODO

### Adding a New Content Section

To add a section of content to the website, first open `index.html`
in your favourite code editor. Next, create a new `div` element within
the `#content` element tag, and give it the following attribute:
`class="section"`. Then, add your new content within this  tag. The
`class="section"` attribute ensures that this new content will have a
link in the header at the top of the site.

Next, assign the element an ID by giving your new `div` tag a `name`
attribute. This should look like `name="Your Name Here"`. Generally,
the name will look best if it's only 1 word, but the website works
just as well with more. Note that `name` is not normally an attribute
associated with `div` elements, and in this case it is used only by
`main.js` to create the link to this section at the top of the page.

Finally, do not assign an `id` attribute, as this will be done
automatically by `main.js`.

Remember, if parts of this document are hard to follow, look to the
existing sections as examples and hopefully that'll clear things up!

#### Add a Section Checklist

1. Add a `div` element within `div#content`.
2. Add the `section` class to that new element.
3. Give your new element a name attribute.
4. Do not give your new element an `id` attribute.


### Removing a Content Section

Open `index.html` in your favourite IDE or code editor and search
(`CMD+F` or whatever the Windows keyboard shortcut is) for the name
of the element you'd like to delete. Once you've found it, delete the
entire `div.section` element containing that content.

Make sure that the `div` tag containing the text you'd like to delete
is deleted also. If it is not, a link to the non-existent section will
continue to appear at the top of the page.

#### Remove a Section Checklist

1. Find the section you'd like to delete.
2. Delete the content, _as well as the enclosing_ `div` _element!_.


### Adding a Page

_Coming soon...._

## Deploying (Making the Content Public)

_To be determined..._

#### Deployment Checklist



## Editing This Document (README.txt)
