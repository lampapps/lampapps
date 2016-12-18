---
layout: post
title:  "Choose the Best Hosting Service"
date:   2016-11-12 12:00:00 -0500
author: LampApps
category: Development
tags: [Hosting]
---

![Website Hosting for a Small Business Website]({{site.url}}/images/website-hosting.jpg "Website Hosting for a Small Business Website")

Website hosting companies provide services that allow you to get your website published online. This includes the actual servers that host your website, services for sending and receiving email, domain name registration, and other networking requirements to get your website up and running. They do not provide the content for your website nor provide the labor to build and maintain your website. Hosting services come in many different sizes and varieties. Choosing the right hosting company and hosting plan is not easy unless you understand a little about how hosting works and what they are offering. You need a reputable service, but you may not need all the services they are offering. I will explain some of the geek speak, and break down the things you need to know in order to choose a quality hosting company and select the proper hosting plan for your website.

I think you will be surprised to learn that you can find quality hosting services at a low cost.

<!--more-->

### What do Hosting Companies provide?

Most run of the mill web hosting companies provide a wide range of services. You will find their basic hosting plans provide many services bundled together such as domain name, web server, scripting language, email, database, backups, etc... You may be tempted to do that but understand that the low prices you are seeing are for shared hosting. You could move up to a Virtual Private Server (VPS), but then you are responsible for the management of that server, or you can to pay an additional cost for someone to manage it for you. But why pay for services you don't need. I will explain two of the most popular hosting types then give you a third option that I think you will like. We won't go into dedicated hosting as that is beyond what you will need for a small business website.

#### Shared Server

Think of the hosting company as the landlord of a large warehouse. For a few dollars a month the "landlord" lets anyone use the warehouse. You get your own secure locker to put your stuff in and your own mailbox but the warehouse only has one water pipe and one electric meter. The more people using the warehouse the less access to resources each person has. If too many people need water at the same time the pressure drops to a trickle. If the demand for power is too high, the system will overload and shut down. The "landlord" hopes that everyone will use the resources in moderation. But, there are always a few greedy tenants that take far more than their share, resulting in degraded services for everyone. 

That is basically shared hosting. The server is the warehouse. The locker is your account on the server where you store your website content and email. The water is the bandwidth allowing data in and out to the Internet and the electricity is the processing power of the server. This one server shares the database, memory and processor (CPU) with all the websites assigned to it. There are physical limitations to the server. The hope is that most websites will under utilize the server resources and only a few websites will use more than the average, thus never exceeding the server's limitations. Just remember, the hosting company will maintain the server, but you have to maintain the website content that is in your account on that server.

#### Virtual Private Server (VPS)

Now think of an apartment building. Each small apartment in the building has it's own separate water and electric meter. You do not have to share these with your neighbors. The landlord supplies all the apartments with the resources up to the set limit agreed upon when you sign up. No one else can weasel in to your resources even if your not using them. VPS servers use a technology called virtualization to setup individual virtual servers on one large physical server. In addition to your website on the VPS, you are responsible to maintain the server or you have to pay more to have someone do it for you.

#### A Third Option for Basic Websites

Amazon Web Services (AWS) offers reliable, scalable, and inexpensive cloud computing services. They break down each service that the common hosting companies bundle together. One such service is Simple Storage Service (S3). As its name implies, you can store files in the cloud using this serves. But it can also host static websites. Static just means that the server does not need to process any data, no database, no email, and no code can be run on S3. S3 justs serves simple web pages out to the Internet. Add a few other basic services AWS offers and you are running a full fledge, yet simple website for dollars a month. Best part is that it is professional enterprise level hosting solution. As with the other options, you have to maintain your website content, but Amazon maintains the S3 service. This is the hosting I recommended for your small business website. Since S3 scales automatically with your requirements, there is plans to choose from.

### Hosting Plans

The average small business website would not use more than 100 megabytes (MB) of storage space, excluding email. Most companies offer unmetered bandwidth so that is not generally a concern for small websites. Most entry level shared hosting plan can only handle about 10,000 visitors per month before they get overloaded. If you are comparing hosting options, please remember that you should serve your website using a security certificate (SSL) and a Content Delivery Network (CDN). Once you add these in you will find the costs increase. The eye catching prices you see are not what you want. You will also find that email takes far more disk space than the website. Having your email managed by Google's [G Suite][gsuite] or other option like [ZoHo][zoho] may be far better than combining it with your website. Why pay for all the bundled services when you don't need them. Select ala cart from companies that do the best job at the lowest costs. Pay for only what you need. 

>Tip: If you choose to go with one of the common hosting plans, start as small as possible, you can move up if needed. I highly recommend that you choose a company that uses cPanel to manage your web hosting account. cPanel is very common in the industry so if you choose to move from one host to another it makes it very easy. GoDaddy does not use cPanel. But if you want to keep it simple, follow my articles to build a static website at Amazon S3.

Next step is to setup your [hosting service][hosting].

I would love to hear from you. Please leave your comments below. You can also share this post on Facebook and Twitter. 



[hosting]: {{ site.url }}{% post_url 2016-11-13-Static-Website-Hosting %}

[gsuite]: https://www.google.com/work/apps/business/landing/partners/referral/trial.html?utm_source=sign-up&utm_medium=referralbutton1&utm_campaign=apps-referral-program&utm_content=%3Chttps://goo.gl/nCwWpT%3E

[zoho]: https://www.zoho.com/mail/zohomail-pricing2.html


