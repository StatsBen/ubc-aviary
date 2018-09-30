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

### Section by Section:

Looking at the website from top to bottom you'll find:

- *Ribbon of Links*: These links are generated dynamically when the
page loads in a user's web browser (so don't go looking for it in
the source code). The `generateLinksFromSectionElements` function in
`main.js` and the functions it calls are what generate the links, so
if you're having trouble with them, start there!

- *Banner Image*: There's nothing strange going on here, just some
plain ol', vanilla HTML and CSS. Note, however, that the styles
controlling how this image is rendered are uniquely associated with
the element's ID (`header-image`), and you can find these styles in
the `header-and-links.css` file.

- *Twitter Embed*: OK, this is the one part of the website that's
still a little jenky... But basically it's just an embedded Twitter
feed where the number of Tweets is limited to 1, and the element is
contained by a `div` element, the styling for which you can find in
the `box-model.css` file. How the Tweets are generated based on RGP
check-in's is still a mystery for me. Ask Corey for details!

- *Content Sections*:

### Typography
This site is using the 'Oxygen' font offered through Google Fonts for headers,
and 'Raleway' for the body, links, and lists (also through Google Fonts).
A link to this font is found in a `link` element in the site's
`head`.

### Brand Colours
As far as I can tell, the Aviary Logo is a stylish flying carabiner, and the
colours used in the logo are a sort of slate blue (`#3883BA`), and a bright
yellow (`#E3DC07`). Also note the variations on 'Aviary Blue' that can be
found in the document called 'blue-colour-palette.html' in the
'other resources' directory.


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

_currently, this website is only really designed to run as a single page._

## Deploying (Making the Content Public)

Once you've made some edits to the website's source code, it's time to let the
world see your beautiful work! Currently, this is done using Google's Firebase
service. In general, Firebase is used to host complicated, dynamic, responsive
web apps, but we're just using some of its simplest features to host a static
website. We do this partly because it's an extremely affordable way to host a
website of this size (you're charged for what you use in Firebase), and also
because it allows us to quickly and conveniently deploy new changes with an
easy one-liner in the command line!

#### Deployment Checklist

1. First thing's first, *test your changes!!* Open up the `index.html` file
in a browser on your computer, and make sure that:
   - the site appears as it should visually,
   - the command line in your browser's web development tools reports no errors,
   - and give everything a quick proof-read out loud to catch errors :) (pro-tip).
2. Once you've made sure your changes work, use Git to commit your changes with
a useful message (this will probably look like `git commit -m "your message
here"` in the command line). Then, push these changes to the remote repository,
and ensure that no errors have been reported in the process. If errors are
produced in this process, resolve them before continuing. 
3. If the site runs as intended, and any Git errors are resolved, you're ready
to deploy to Firebase! Open a command line, navigate to the `ubc-aviary`
repository, and run `firebase deploy`. You may be prompted to log in during
this process. At any rate, once this command executes, your changes are live!

## Editing This Document (README.txt)

_Also, also coming soon...._
