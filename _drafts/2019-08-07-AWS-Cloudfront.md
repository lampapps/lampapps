---
layout: post
title: "Configuring AWS CLoudfront"
metadesc: ""
date: 2019-08-07 12:00:00 -0500
author: LampApps
category: misc
tags: [Hosting]
image: images/website-design.jpg
---

![Building a Small Business Website]({{site.url}}/{{ page.image }} "Building A Small Business Website")

Configure AWS Cloudfront to serve to serve your website with SSL and gZip


<!--more-->

### Requirements
1. a AWS account
2. Route 53 configured for your Domain Name

### Steps

#### Certificate manager
1. Click Request a Certificate
2. Request a public certificate
3. enter your naked domain and domain anme will www. prefix
4. Choose DNS validation, click review
5. Click Conform and Request
6. Expand the resulting box under each Domain and click Create record in Route 53
7. Continue



#### Cloudfront
1. Click Create Distribution
2. This example will create a web distribution, so click Get Started under that option.
3. Enter the fields required, any field not discussed below should be left as the default
  * Origin Domain Name: select the bucket that has your website files
  * Origin path can be left blank if the bucket is the root of your website
  * Origin ID self populated, accept this default
  * Do not restrict bucket access (check No)
  * Check Yes for Compress Objects Automatically
  * Depending on where you are located you will want to select the appropriate Price class
  * Enter your naked domain name and with www. prefix for Alternate Domain Names. ie: example.com, www.example.com
  * Select Custom SSL Certificate, choose the certificate your create and validated
  * Enter the Default Root Object, ie: index.html
  * you can setup logging id desired
  * Click Create Distribution

#### Route 53
1. Edit the the A records to point to eh cludfront Distribution
2. Create AAAA records and also point to the CLoudfront Distribution
