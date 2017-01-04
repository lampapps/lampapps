---
layout: post
title:  "Edit a HTML Website Template"
metadesc: "Learn the basics to editing a website template"
date:   2016-12-28 12:00:00 -0500
author: LampApps
category: Quick-Start
tags: [Design]
---

![Editing your Website Content]({{site.url}}/images/edit-html-template.jpg "Editing your Website Content")

Once you have selected and downloaded your template to a folder on your computer you will need to edit the content. You will be replacing the example text and images with your own. You will need to understand a little HTML to do this. But with the right text editor and some patience it will be easy to do. I have found the hardest part is to write good content for a website. You need original content (don't copy from another site). Your content should be focused on your services or products. Select two or three key words or phrases. Right them down and use them naturally in the context of your web pages. Don't stuff them in or over use them.

This article will focus on replacing the "filler" content that came with a website template with your own content.

<!--more-->

{% include seriesmenu.html %}

### Select a Great Text Editor

This is really important. The text editor must have syntax highlighting and spell check. Syntax highlighting will color the code to match it's functionality. You will then be able to easily pick out the content you need to edit from the code that should not be touched. I can recommend two [text editors][texteditors]. Atom and Sublime Text.

### Give You Template a Home on Your Computer

Place the downloaded template in a folder on your computer. Don't bury it too deep, you will access it frequently. If you template downloaded as a compressed file such as zip or gz you will need to unzip them and move them into the folder. Do not edit the files while still zipped. You should now see your files and folders within the folder you created for your template. Look for the `index.html` file. This is web page that will open by default when someone visits your site. Double click on it and it should open in your default web browser such as Internet Explorer or Chrome. A static website does not need a server to run. So if everything is set "out of the box" you will see your template as it will appear online. Make sure you have an Internet connection, as the template may need that to work properly.

> Perform frequent backups. Periodically make a copy of the template folder you are working in. When you make a mistake and edit the wrong thing you can go back and see what you did.

### Edit Meta Data

With your favorite text editor, open the `index.html` file so you can see the HTML code. Now in the other half of your screen open your web browser with the same file open. Compare the two. You will easily see what text you need to change on the page and what is HTMl that should be left alone.

Not all the content you need to change is displayed in the browser, however. But it is important to edit this data so that your website performs well. Here is some meta data that appears between the `<head>` tags. Can you pick out what to edit?

{% highlight html %}
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Web Page - Appears at the top of the browser</title>
    <meta name="description" content="This should describe the contents of the page.">
    <link rel="stylesheet" href="http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css">
</head>
{% endhighlight %}

If you selected to edit between the `<title>` tags and the content in the description meta tag you are correct.

The title tag provides the text that appears all the way at the top of the browser, or in the tabs if your browser has tabs. The description is very important as it will be visible in search engine results.

### Editing Content in the Body of the Page

Text that appears on the screen is generally book ended by `<p>`, `<h1>`, or other HTML tags that format the text. For example, you may see something like `<h1>Heading Text at Top of Page</h1>`.  You can safely edit the text between the `<h1>` and `</h1>`. Never edit the text inside the tags themselves. For example, don't change anything between the the angle brackets `<...>` in this tag: `<div style="font-align:left;">`.

Here is an example of HTML. Can you pick out what to edit?

{% highlight html %}
<div class="row">
    <div class="medium-6 columns medium-push-6">
        <img class="thumbnail" alt="Short descrition of image" src="/images/exmpleimage.jpg">
    </div>
    <div class="medium-6 columns medium-pull-6">
        <h2>A Simple Web Page</h2>
        <p>This is a simple one page example of how modern web pages are made.</p>
    </div>
</div>
{% endhighlight %}

If you selected to edit `A Simple Web Page` and `This is a simple one page example of how modern web pages are made.` You are correct. You will also learn you can edit the description of the image after the `alt`. That does not appear in the browser, but helps with search engine results and other concerns.

### HTML Comments

Good developers will put comments in the HTML code to help you understand what is going on. Those comments are bracketed like this: `<!-- example comment -->`.

You can add comments if you like, or just enjoy the ones provided to you.

{% highlight html %}
    <!-- Start Top Navigation Bar -->
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">Example</li>
          <li><a href="http://foundation.zurb.com/">Foundation Framework</a></li>
          <li><a href="/link2.html">Link 2</a></li>
        </ul>
      </div>
    </div>
    <!-- End Top Navigation Bar -->
{% endhighlight %}

### Add Your Images

This is a topic for a separate, more in depth article. But to get you started until I can post it; here are the basic steps:

1. Find appropriate images to replace those in the template. Color, size and copyright issues apply here.
2. Resize and optimize the image to fit your website. Make it fit. Don't put a 600 x 300 pixel image into a 200 x 100 pixel spot. Use an image editing tool to reduce it's dimensions. Don't upload an image that is 5 megabytes (MB) in file size, or even .5 MB. Optimize it to reduce it's file size. Most images should be under 100 kilobytes. Many will be half that. This is important for your web pages to load quickly.
3. Rename the image the exact name of the image you are replacing and place it into the same folder, removing the old image. If you can't use the exact same name, for example, you need a .jpg where a .png image was used before; you must find the image title in the HTML and edit it to match the image name.

You will find tools to help you with images [here][graphics].

### Link Multiple Web Pages

Edit all the web pages that you need, renaming each HTML file with a meaningfully title (no spaces allowed, use dashes). For example: `landscaping.html` or `owners-manuals.html`.

Now look for your menu structure on each page you will use in your website. It may look like this:

{% highlight html %}
    <!-- Start Top Navigation Bar -->
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">Home</li>
          <li><a href="/hosting.html">Hosting</a></li>
          <li><a href="/seo.html">SEO</a></li>
          <li><a href="/development.html">Web Development</a></li>
          <li><a href="/marketing.html">Marketing</a></li>
        </ul>
      </div>
    </div>
    <!-- End Top Navigation Bar -->
{% endhighlight %}

Edit the navigation menu so that each page links to the other. You will have to swap the [a tag][atag] out so that the page the user is on is not linking to itself. The above example would be for the HOME page, while the example below would be for the SEO page.

{% highlight html %}
    <!-- Start Top Navigation Bar -->
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li><a href="/index.html">Home</li>
          <li><a href="/hosting.html">Hosting</a></li>
          <li class="menu-text">SEO</li>
          <li><a href="/development.html">Web Development</a></li>
          <li><a href="/marketing.html">Marketing</a></li>
        </ul>
      </div>
    </div>
    <!-- End Top Navigation Bar -->
{% endhighlight %}


Again, this is an example. your template may vary on the HTML that is used to render the navigational menus.

### Get More Help

A great reference for understanding HTML (and other web technologies) is [w3schools][w3schools]. You will find examples and an explanation for many of your questions.

Next step is to [upload and test][upload] your website.

I would love to hear from you. Please leave your comments below. You can also share this post on Facebook and Twitter.  

[texteditors]: /resources.html#Development
[w3schools]: http://www.w3schools.com/html/default.asp
[graphics]: /resources.html#Graphics
[upload]: {% post_url 2016-12-29-Upload-Your-Website %}
[atag]: http://www.w3schools.com/tags/att_a_href.asp
