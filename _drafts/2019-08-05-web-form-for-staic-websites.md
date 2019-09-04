---
layout: post
title:  "Web Form for Static Web Sites"
metadesc: ""
date:   2019-08-05 12:00:00 -0500
author: LampApps
category: misc	
tags: [Hosting, Tools]
image: images/website-design.jpg
---

![Building a Small Business Website]({{site.url}}/{{ page.image }} "Building A Small Business Website")

Building a form for a static web site hosted on AWS S3 using Lambada, Node.js, SES, Serverless framework, and Google reCAPTCHA.


<!--more-->

### Requirements

You will need to setup an account or install the following:

1. [Amazon Web Service][aws] account
2. [Node.js][node] installed on your computer
3. [Serverless][sls] CLI installed on your computer
4. [Google reCAPTCHA][recap] account

### Optional
	
In this post I incorporate [Jekyll] [jekyll] static website generator. Hosting is at AWS S3 but it could be any hosting provider.

### Credit

[Rishabh Joshi][joshi]


[joshi] https://www.rishabh.me/
[jekyll] https://jekyllrb.com/
[aws]: https://aws.amazon.com
[node]: https://nodejs.org/en/download/package-manager/
[sls]: https://serverless.com/
[recap]: https://www.google.com/recaptcha/intro/v3.html