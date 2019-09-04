---
layout: post
title:  "What is IMAP, POP, and SMTP?"
metadesc: "This post provides a very basic understanding of IMAP, POP and SMTP as they relate to email."
date:   2019-08-03 16:49:53
author: LampApps
category: Email
tags: [Hosting, Email]
image: images/whatisimappopsmtp.jpg
---
![What is IMAP POP and SMTP]({{site.url}}/{{ page.image }} "What is IMAP, POP, and SMTP?")

If you are going to configure an email client other than the web based one provided by the email service, like Gmail, you will need to understand how email services talk with email clients. You will need a very basic understanding of IMAP, POP and SMTP.

<!--more-->

### IMAP and POP Explained

IMAP and POP are protocols used by an email client to **receive** your email from the email service.

Many people these days use many devices such as their smart phone, tablet, and desktop computer to access their one email inbox. Setting up all of these using IMAP will keep the emails in sync between all the devices. For example, if I flag an email as important using my smart phone, that email will also be flagged on the desktop email client like Outlook. The advantage to this is that you can manage your email very effectively using many different devices. The disadvantaged is that all your email stays on the server until deleted. If you have a limited amount of email storage, you can quickly run out requiring you to purchase more, or you have to delete old emails.

Using POP (you may also see it referred to as POP3), does not maintain synchronization between the email service and all your email clients. When you access the email service using an email client using POP, that email client will download the entire email to your device (phone, laptop, etc...). You can then read it, delete it or save it for as long as you like. But, whatever you did to that email will only be reflected on that one device. You can not see the changes on other devices you may be using. So if you want to use your smart phone and desktop to view your email you will get confusing results, as the two will not remain in sync.

One advantage of using POP is that you can use less expensive email services that offer lower storage space. This is because you can download the email to your computer, removing it off the server. You can then preserve that email as long as you want instead of deleting it to make room for newer email on the server. 

Another option for saving storage space using IMAP is to use a filter on your desktop computer to find all emails that are older than 30 days. Select those emails and download them to a separate folder on your hard drive. They will then be removed from the server, freeing up space.

### What is SMTP?

SMTP is a protocol used to **send** email. When you click the send button it will use SMTP to connect to your email service and send the email to the recipients over the Internet. You can set up as many email clients as you like to send through your one email service.

### Can I use One Email Client to Manage Mail From Two or More Services?

Yes, you can setup Gmail and Thunderbird, for example, to reach out to other email addresses (inboxes) and bring it into the Gmail inbox so you manage it. Just know that if you reply to any of those emails, it will be from your Gmail account. This could confuse the recipient as the email address will be different from what they may expect, resulting in unread email. It may also expose your private email to your customers, which may look unprofessional. 

> You can setup Gmail, and other email clients, to have multiple profiles so that it appears you are sending from another email address. But make sure you understand and use that appropriately.

### What is an Alias Email Address?

Your main email address has one inbox associated with it where all the email goes for you to read. An alias email address does not have its own inbox. This allows you to set up another email address using your domain name, but when someone sends to that email address the email ends up in your primary email address inbox. With email alias, you can have multiple email addresses that send to one inbox. But remember, when you reply to that email, it will come from your main email address. Alias email address are often used for info@mybusiness.com, or support@mybusiness.com. This allows you to have an email address to publicize that won't change when your employees leave.

My recommendation for email service is Google's [G Suite][gsuite]. G Suite is the business class paid version of the free Gmail service. There are other options such as [Zoho Mail][zoho] or [Rack Space][rackspace] if you have different needs.


[gsuite]: https://goo.gl/nCwWpT "Google's GSuite"
[rackspace]: https://www.rackspace.com/en-us/email-hosting "Rack Space EMail Service"
[zoho]: https://www.zoho.com/mail/zohomail-pricing2.html "Zoho Mail Free Email"
[tbird]: https://www.mozilla.org/en-US/thunderbird/ "Thunderbird Email Client"

*[client]: An app or software that you interact with to manage your email, Outlook is a good example
*[service]: An email server is the service that interacts with your email client to receive and send you email from your email client