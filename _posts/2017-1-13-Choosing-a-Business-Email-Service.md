---
layout: post
title:  "Choosing a Business Email Service"
metadesc: "Choose the best email service for you small business. Google's G Suite is my recommendation, but there are other choices."
date:   2017-01-13 13:00:00 -0500
author: LampApps
category: Quick-Start
tags: [Email]
image: images/email.jpg
tfeatures:
  - title: "Maximum number of users"
    GSuite: Unlimited
    RackSpace: Unlimited
    Zoho: 25 Users
  - title: "Storage"
    GSuite: 30 MB per user
    RackSpace: 25 MB per user
    Zoho: 5 GB per User
  - title: "Attachment size limit"
    GSuite: 25 MB
    RackSpace: 50 MB
    Zoho: 20 MB
  - title: "Uptime Guarantee"
    GSuite: 99.9%
    RackSpace: 100%
    Zoho: 99.99%
  - title: "Cost"
    GSuite: $5 per user
    RackSpace: $2 per user (minimum of 5 Users)
    Zoho: $0
cfeatures:
  - title: "Administrative control over all users"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "Mail, Calender, and Contacts"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "Create, edit and share spreadsheets"
    GSuite: ok
    RackSpace: 
    Zoho: ok
  - title: "Create, edit and share documents"
    GSuite: ok
    RackSpace: 
    Zoho: ok
  - title: "Create, edit and share slide shows"
    GSuite: ok
    RackSpace: 
    Zoho: ok
  - title: "Voice and video chat"
    GSuite: ok
    RackSpace: 
    Zoho:
  - title: "Custom email address (you@yourcompany.com)"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "Email Aliases"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "24/7 phone support"
    GSuite: ok
    RackSpace: ok
    Zoho: 
  - title: "Single Sign On (SSO)"
    GSuite: ok
    RackSpace: 
    Zoho: 
  - title: "IMAP and POP mail support"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "Migrate data"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "No Ads"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "Junk email filtering and virus blocking"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "Mailing Lists"
    GSuite: ok
    RackSpace: ok
    Zoho:
  - title: "AutoReply, Forwarding, and Filtering"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
  - title: "Email retention policies"
    GSuite: ok
    RackSpace: 
    Zoho:
  - title: "Mobile Ready"
    GSuite: ok
    RackSpace: ok
    Zoho: ok
---

![Setup Business Email with G Suite]({{ site.url }}/{{ page.image }} "Setup Business Email with G Suite")

The Email service you choose must be reliable and easy to manage or you risk missing out on business opportunities. Hosting your email at the same service as your website may appear to be easier, but I have learned that this is not a good idea. The resources required to effectively run email these days are so large that it will impact the website when these two are running together in a [shared hosting][hostingarticle] environment. You want the best of both worlds. I have found the best hosting services and best email services don't come together as one single service. It is best to choose the best, even for small businesses. 

Lets first discuss a few details you need to know about how email works. A basic understanding of email will help you choose the best option for your small business.

<!--more-->

{% include seriesmenu.html %}

### Why Can't I just use a Free Service Like Gmail or Yahoo?

I often see small businesses using a free email address. For example `mybusinessname@gmail.com`. When I see this, especially when I see AOL.com being used, I know it is a very small business and question why they did not properly setup their web presence to enhance their first impression on the customer. I generally skip over these businesses if I have a choice. Using your domain name for email will provide a professional appearance and instill trust in your clients.

### What is an Email Service?

Don't confuse an email service with an email client. An email service is the server that sends and receives your email. Popular email services include [G Suite][gsuite], Gmail, Outlook.com, Yahoo, [Rackspace][rackspace], and [Zoho][zoho]. You interact with these services by using an email client. An email client can be downloaded or web based. Popular email clients that are downloaded to your computer include Outlook, Mac Mail, and [Thunderbird][tbird]. These can be configured to work with just about any email service. For example, I can use Thunderbird to read and send email through Gmail.

Most, if not all, email services provide a web based email client to allow you to send and receive email. Gmail and Yahoo do this. "Gmail" has become synonymous with the service and client they provide. But it is two separate things closely intertwined. 

### What is Exchange Service?

Microsoft Exchange Server is a mail server and calendaring server developed by Microsoft. It is an enterprise level email application that provides tight integration with Microsoft products including Outlook. There is a much higher level of technical expertise required to setup and maintain this service. It is also more expensive. The comparison and review I provide is for standard email services and G Suite.

### So What Email Service is Best for My Business?

This depends on what you need and what your budget will allow. In all cases you need a highly reliable service that is easy to support and use. This includes handling Spam and virus protection. Google [G Suite][gsuite] has reputation for being the Gold Standard for this. But others do an excellent job as well. Lets compare some features of three email services. 

#### Feature Comparison

<div class="Table">
  <div class="Table-row Table-header">
  	<div class="Table-row-item u-Flex-grow2">&nbsp;</div>
    <div class="Table-row-item">G Suite Basic</div>
    <div class="Table-row-item">Rackspace Email</div>
    <div class="Table-row-item">Zoho Mail Free Plan</div>
  </div>
    {% for feature in page.tfeatures %}
  <div class="Table-row">  
      <div class="Table-row-item u-Flex-grow2" data-header=""><strong>{{ feature.title }}</strong></div>
      <div class="Table-row-item" data-header="G Suite Basic">{{ feature.GSuite }}</div>
      <div class="Table-row-item" data-header="Rack Space Mail">{{ feature.RackSpace }}</div>
      <div class="Table-row-item" data-header="Zoho Free Plan">{{ feature.Zoho }}</div>
  </div>
    {% endfor %}
	{% for feature in page.cfeatures %}
  <div class="Table-row">  
      <div class="Table-row-item u-Flex-grow2" data-header="Feature"><strong>{{ feature.title }}</strong></div>
      <div class="Table-row-item" data-header="G Suite Basic"><i style="color: green;" class='icon-{{ feature.GSuite }}'></i></div>
      <div class="Table-row-item" data-header="Rack Space"><i style="color: green;"  class='icon-{{ feature.RackSpace }}'></i></div>
      <div class="Table-row-item" data-header="Zoho"><i style="color: green;" class='icon-{{ feature.Zoho }}'></i></div>
  </div>
    {% endfor %}
  <div class="Table-row">  
      <div class="Table-row-item u-Flex-grow2" data-header="">&nbsp;</div>
      <div class="Table-row-item" data-header="G Suite Basic"><a href="https://goo.gl/nCwWpT" class="button">Free Trial</a></div>
      <div class="Table-row-item" data-header="Rackspace"><a href="https://www.rackspace.com/email-hosting/webmail/features" class="button">Learn More</a></div>
      <div class="Table-row-item" data-header="Zoho"><a href="https://zm4.bz/gldNg2M2" class="button">Learn More</a></div>
  </div>
</div><!--Table-->
<div class="spacing"></div>

### My Recommendation

<!--Aff link -->
<div style="margin-left: 10px; float: right;">
<a href="https://goo.gl/nCwWpT" target="_blank"><img src="/images/aff/GSuite.png" alt="G Suite Free Trial"/></a>
</div>
<!-- End -->

I recommend going with a reliable service that is easy for you to support. Even if it costs a few extra dollars. You can find email services that are less expensive than Google's [G Suite][gsuite], but few are as reliable or easy to use. G Suite is a cloud-based productivity suite that includes Gmail for professional email, Drive for online storage, Hangouts for video meetings, Calendar for scheduling and Docs for editing files. You could eliminate the need to purchase desktop office software like Microsoft Word and Excel and just use G Suite on low cost computers like Chromebook. This has advantages for employees that may not be collocated. They can share documents seamlessly from anywhere in the word.

Watch Google's promotional video. Note: Google Apps for Work was renamed to G Suite, information is the same, just the named changed.

{% include youtubeplayer.html id="ZLPmgcpi0wI" %}<br />

If you have a larger business and need multiple email addresses, [Rackspace][rackspace] is an excellent choice. You will not have access to an online suite of collaboration tools, but you will come out ahead in the price.

Google and Rackspace are US based companies that offer excellent support. [Zoho][zoho] is an offshore company and looking though their forums, users have expressed some frustration over support. But, Zoho has a free plan if you are willing and able to set it up and work through any issues that may arise. My experience is that their Spam control is not as good as Gmail.

>I use the free plan from Zoho for {{ site.name }} because I can manage any problems and I do not rely on my email for my income. If my livelihood depended on getting and keeping customers, I would be happy to spend $5 a month on G Suite. If I had a larger business and needed many email accounts, but not the collaboration tools G Suite offers, I would be looking at setting up a Rackspace account.

### Setting Up Email Services

For any email service you choose you will need to point your domain name to the email service using DNS. If you have followed this series of articles, and used Amazon S3 for hosting your website, you know that your [DNS][dns] is setup using Route 53 at Amazon. This is required for S3 to work as your website host. So, regardless of where your Domain Name is registered (even if at Google Domains) you must add MX records at Route 53 to point to G Suite, or any other email service you choose.

If you have chosen G Suite, Google offers help for showing you how to do this. Please visit their [support site][gsuitemx] for instructions specific to your DNS provider. Click [here][route53mx] for Amazon Route 53 specific instructions.

Here is Rackspace's [support article][rsdns] for setting up MX records.

I would love to hear from you. Please leave your comments below. You can also share this post on Facebook and Twitter.  


[hostingarticle]: {{ site.url }}{% post_url 2016-11-12-Choose-the-Best-Hosting-Service %} "Choose the Best Hosting Service"
[gsuite]: https://goo.gl/nCwWpT "Google's GSuite"
[rackspace]: https://www.rackspace.com/en-us/email-hosting/webmail "Rack Space EMail Service"
[zoho]: https://zm4.bz/gldNg2M2 "Zoho Mail Free Email"
[tbird]: https://www.mozilla.org/en-US/thunderbird/ "Thunderbird Email Client"
[dns]: {{ site.url }}{% post_url 2016-12-31-Point-Domain-to-Amazon-S3 %} "Setting up DNS using Route 53 at AWS"
[gsuitemx]: https://support.google.com/a/topic/1611273?hl=en&ref_topic=2683820 "Set up G Suite MX records (host-specific steps)"
[route53mx]: https://support.google.com/a/answer/6149697?hl=en&ref_topic=4445318 "Set up G Suite MX records for AWS Route 53"
[rsdns]: https://support.rackspace.com/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business/ "Rackspace MX Records"
