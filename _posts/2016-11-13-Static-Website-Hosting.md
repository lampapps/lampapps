---
layout: post
title:  "Static Website Hosting"
metadesc: "Static HTML web hosting is the best choice for a small business websites on a budget. Learn how to set one up at Amazon Web Services using S3"
date:   2016-11-12 12:00:00 -0500
author: LampApps
category: Quick-Start
tags: [Hosting]
image: images/static-web-hosting.jpg
---

![Amazon S3 Website Hosting for Small Business]({{ site.url }}/{{ page.image }} "Amazon S3 Website Hosting for Small Business")

### What is a Static Website?

This simply means the website does not depend on any special scripts or databases running on the server in order to render your website pages out to the Internet. Many websites require a database to manage the content. These databases also require a script running on the server to allow the web page to dynamically render a web page to load in the browser each time the page is requested by a user. This requires additional processing power and extra security to handle. Static web pages can still have great functionality using third party services instead. That is how the comments section of this website work. This website is static and is hosted at Amazon S3.

This article will step you through the process of setting up static website hosting at Amazon Web Serves (AWS) using Amazon Simple Storage Service (S3).


<!--more-->

{% include seriesmenu.html %}

### What is Amazon S3?

Amazon Simple Storage Service (S3) is a cloud based storage service with a simple web based management console to store and retrieve any amount of data from anywhere on the web. It is very reliable as it is designed to deliver 99.9% uptime. It is very secure. It allows you to store large amounts of data at a very low cost. Since your website has very little data, your cost should be negligible. If fact, the first year will be [free][awsfree].

And best of all, it can also host static web sites so your website will load fast, be very secure, and will handle a huge amount of traffic.

### Setting up Amazon S3 as a Static Website Host

[Savjee] has a very good video tutorial on how to setup Amazon S3 for a static website. Please watch his short tutorial then continue below to step through the entire process where I will fill in some of the additional steps you will need.

{% include youtubeplayer.html id="g9NbuTcos18" %}

<div class='two spacing'></div>

#### Follow these Steps

>I will be using the domain name `www.example.com` to demonstrate how to set this up. You should substitute your domain name. You may also refer to the [AWS instructions][awssetupstatic]. The AWS instructions have you placing your web pages in the  `example.com` bucket. The steps below have you placing them in the `www.example.com` bucket. Either will work.

<!-- Aff Link -->
<div style="margin-bottom: 25px; float: right; margin-left: 20px;">     
   <a href="https://www.amazon.com/Hosting-Static-Websites-AWS-Non-Geeks-ebook/dp/B00X8ERWM4/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=6J76RSQQ3SX7QDP5NVXY&linkCode=li3&tag=lampapps-20&linkId=3c58f65c700997cb98b985d9b595f831" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00X8ERWM4&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=lampapps-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=lampapps-20&l=li3&o=1&a=B00X8ERWM4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
</div>
<!-- Aff end link -->

1. If you do not have a Amazon Web Service account you will need to [create one][aws].

2. Once logged in, navigate to the S3 management console and create a bucket named exactly the same as your domain name with the `www` placed in front, for example: `www.example.com`. Select the region closest to your business. For those in the the USA, select **US Standard**. Make sure to click **Create**.

3. Open your new bucket and click on the **Properties** panel:
  * under **Static Website hosting** click **Enable static website hosting**
  * for the __Index Document__, enter: `index.html`
  * for the __Error Document__, enter: `error.html` (or what ever you named your error page)
  * click **Save**
<br /><br />
4. Add a bucket policy that makes the `www.example.com` bucket's content publicly available
  * in the bucket's **Properties** panel, click on **Permissions** to expand it's contents
  * click **Add Bucket Policy**
  * copy and paste the bucket policy below (include the first and last curly bracket), and then paste it in the Bucket Policy Editor
  * replace `www.example.com` in the Resource line with your bucket title
  * click **Save**
  <br /><br />
      ><pre>
        {
          "Version":"2012-10-17",
          "Statement":[{
          "Sid":"AddPerm",
                "Effect":"Allow",
            "Principal": "*",
              "Action":["s3:GetObject"],
              "Resource":["arn:aws:s3:::www.example.com/*"
              ]
            }
          ]
        }</pre>

5. Now go back and create a second bucket **without** the `www` in front. For example: `example.com`. This is called a naked domain. We do this because your customers may also use that to find your website. We want both the naked and www to work. Once your second bucket is created you will redirect all traffic to the www version.
* open your new bucket and click on the **Properties** panel
* under **Static Website hosting** click **Redirect all requests to another host name**
* redirect all request to your www bucket, for example `www.example.com`

You now have setup static website hosting at Amazon S3. You will now upload your website in to the bucket with the `wwww`. To test this you may download [example web pages][examplefile]. Download them to your computer, open the resulting zip file, and then upload only the `index.html` and `error.html` to your bucket.

You can test your website hosting by using the **Endpoint** listed under the **Static Website Hosting** properties for your bucket. It would look something like:
`http://www.example.com.s3-website-us-east-1.amazonaws.com/`

Use this for testing until we point your domain name to your bucket.

Next step is to [select a HTML template][html].

I would love to hear from you. Please leave your comments below. You can also share this post on Facebook and Twitter. 




[Savjee]: https://www.youtube.com/channel/UCnxrdFPXJMeHru_b4Q_vTPQ "Savjee YouTube Channel"
[aws]: https://portal.aws.amazon.com/gp/aws/developer/registration/index.html "Amazon Web Service Free Tier"
[examplefile]: https://github.com/lampapps/example "LampApps on Github"
[awssetupstatic]: https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html "Amazon Web Services instructions for setting up static website hosting"
[html]: {{ site.url }}{% post_url 2016-12-26-Select-a-HTML-Template %} "How to select a website template"
[awsfree]: https://aws.amazon.com/free/ "Amazon Web Service Free Tier"

