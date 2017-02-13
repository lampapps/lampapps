---
layout: post
title:  "Point Your Domain Name to Amazon S3"
metadesc: "Learn how to Use Amazon Route 53 to connect you domain name to a S3 Bucket for static website hosting"
date:   2016-12-31 13:00:00 -0500
author: LampApps
category: Quick-Start
tags: [Hosting]
image: images/route-53.jpg
---

![Point your domain name to AWS S3]({{ site.url }}/{{ page.image }} "Point your domain name to AWS S3")

This article is the last in the series. If you have followed all the steps leading up to this you have registered your domain name and uploaded all the edited files into an Amazon S3 bucket. You are now ready to point your domain name to the bucket so that it will be seen by the world using your companies domain name. You will then be able to conduct final testing and editing to make sure everything works right.

In this post we will configure Amazon Route 53 DNS to connect your registered domain name to your Amazon S3 bucket. We will also update your domain name registrar to point to Route 53 DNS.

<!--more-->

{% include seriesmenu.html %}

### What is DNS?

If you recall from a [previous post][domainname] DNS stands for Domain Name System. It is like a global phone book. It is a directory of domain names with their assigned IP addresses. The server in which you host your website has a number called an IP address assigned. DNS provides the address of your site when a person types in a domain name in their browser.

### Configure Route 53 at Amazon Web Services

Log in to [AWS] and head over to Route 53.

1. You will create a hosted zone by clicking the blue **Create Hosted Zone** button. Then enter your domain name **without** the `www`. In this example, I entered `lampapps.com`. (lampapps.net is another hosted zone I have at Route 53). Leave the **Type** as Public Hosted zone.
![Create a Hosted Zone - Step 1]({{site.url}}/images/dns-1.jpg "Create a Hosted Zone - Step 1")

2. The result will have your default records set up. You will now need to add to these records to point to your buckets. Click **Create Record Set**.
![Create a Hosted Zone - Step 2]({{site.url}}/images/dns-2.jpg "Create a Hosted Zone- Step 2")

3. Enter `www` in the **Name** field. Select **Alias - Yes**. Click in the **Alias Target** field and look for your matching S3 bucket name. Select it. Leave the remaining options at their default settings. Click **Create**.
![Create a Hosted Zone - Step 3]({{site.url}}/images/dns-3.jpg "Create a Hosted Zone- Step 3")

4. Repeat Step 3 for your naked domain (no preceding `www`) by leaving the **Name** field empty. The resulting hosted zone should look like the screen shot below. This screen shot has two additional records for email (MX and a TXT). Those are not required for your website to work. They will be required if you want to use email with this domain name. 
![Create a Hosted Zone - Step 4]({{site.url}}/images/dns-4.jpg "Create a Hosted Zone- Step 4")

5. You now have to tell your domain name registrar where to send all requests for your website. Log into the service where your domain name is registered (my example is Google Domains) and select **Custom Name Servers**. Enter each Name Server **Exactly** as it appears at Route 53 in the NS record. You will notice a period `.` at the end of the NS records at Route 53. Route 53 presents that to you and it is required, but some services add it by default and do not show it to you. Google Domains strips it off if you add it.
![Create a Hosted Zone - Step 5]({{site.url}}/images/dns-5.jpg "Create a Hosted Zone- Step 5")

6. You now have `www.example.com` and `example.com` set up to serve your website. But you will have to wait to see it for yourself. DNS can take up to 24 hours or more to propagate around the world to all the DNS services. In addition, if your domain was previously setup to point at another hosting services, you may have that cached (saved) in your computer, router, or with your Internet Service Provider (ISP). This means that your computer won't show the most recent updates until he cache clears. This can take hours or days. However, You can track the progress of DNS propagation and also avoid the cache issue until everything sorts itself out.
* Use this website track [DNS propagation][dns]. Enter in your domain name, select NS and see if it comes back to the Name Servers you entered at your domain name registrar. It takes time, so be patient.
* You can use a proxy browser to circumnavigate the cached data from your old DNS. Search Google for "Proxy Browser". Many to choose from.

Don't rush this process. If you do not see results in the first 30 minutes it may take hours, if not a full day for your computer and everything else to refresh to the right DNS information. Resist the urge to go in and "fix" the settings. You will just start the entire process all over again each time.


I would love to hear from you. Please leave your comments below. You can also share this post on Facebook and Twitter.  

[aws]: https://aws.amazon.com/ "Amazon Web Services"
[dns]: https://www.whatsmydns.net/ "Check DNS"
[domainname]: {{ site.url }}{% post_url 2016-11-11-Register-a-Domain-Name %} "How to register a domain name"
