---
layout: post
title:  "Upload Website to Amazon S3"
metadesc: "Learn how to upload to Amazon Web Services S3 using Cyberduck"
date:   2016-12-29 13:00:00 -0500
author: LampApps
category: Quick-Start
tags: [Hosting, Tools]
image: images/transfer-files.jpg
---

![Upload to Amazon S3]({{ site.url }}/{{ page.image }} "Upload to Amazon S3")

### Upload Your Website to Amazon S3

Once you have your website ready to publish, you need to move it to the server so that everyone in the world can see it. In this case we are using Amazon S3 to host a static website. To do this we need a way to move all the files and folders from your computer to the Amazon S3 bucket that we already [setup][statichost] as a web host.

In this post we will setup the software and permissions needed to upload and manage your website files on Amazon S3.

<!--more-->

{% include seriesmenu.html %}

### Method 1 - Use the Amazon Web Services (AWS) Console

You could upload your website directly to your bucket through the AWS console after you log into your [account][aws]. Simply navigate to your bucket, click the blue Upload button and drag and drop the files from your folder on your computer to the browser window.

> Don't drag in the one folder that contains your entire website. Open that folder and highlight all the files and folders that make up your website. Drag and drop those directly into your S3 bucket that is enabled as the web host.

This method works OK for very small websites that have very few files and folders and you don't need to go back in and update them very often. However, this method will get very time consuming if you need to edit the files and upload them often. The preferred method is outlined below.

### Preferred Method - Use an Amazon S3 Browser

A S3 Browser is software you download to your computer and configure to interact with your S3 bucket. In manages all the hassle of logging in, deleting, and moving files for you. I prefer [Cyberduck][cyberduck], but there are many different options including extensions for Chrome and Firefox. No matter what you choose the process is very similar. The instructions here assume you have downloaded and installed Cyberduck.


#### Setup Permissions in AWS to Access Your Buckets

We need to first create users in the AWS Identity and Access Management (IAM) console.

Open the [IAM console][IAM] and make sure your on the **Users** page, Click **Add User**

1. Give the user a name. "Cyberduck" is a good user name. <br />
Check the Access type of **Programmatic access**. <br />
Click **Next: Permissions**.
![AIM New User Step 1]({{site.url}}/images/IAM-step1.jpg "AIM New User Step 1")

2. Select the third option to **Attach existing policies directly**. <br />
Type in **S3** in the search field. <br />
Check the **AmazonS3FullAccess** check box. <br />
Click **Next: Review**.
![AIM New User Step 2]({{site.url}}/images/IAM-step2.jpg "AIM New User Step 2")

3. Click **Create User**.
![AIM New User Step 3]({{site.url}}/images/IAM-step3.jpg "AIM New User Step 3")

4. Copy and save the **Access key ID** and **Secret access key**. <br />
These will be entered into Cyberduck to allow it to access your bucket.
![AIM New User Step 4]({{site.url}}/images/IAM-step4.jpg "AIM New User Step 4")
> You can leave this window open and cut and paste the Access and Secret keys into Cyberduck. Once you close this screen, you can never access the Secret key again. You can create a new one, but never will you be able to see this one again unless you save it somewhere else.

#### Connect Cyberduck to AWS S3

You will now enter the Access and Secret keys you created into Cyberduck so that it can connect with your AWS S3 buckets.

> These instructions are for a Mac computer, Windows may be slightly different.

1. Open Cyberduck
2. Click **Open Connection**
3. In the first drop down selection field, select **S3 (Amazon Simple Storage Service)**
4. Enter your Access Key ID and Secret Access Key, then click **Connect**
5. In the menu bar, select Bookmarks and save this for future use.
6. You will now be able to drag and drop files directly to your bucket from your desk top.
![Cyberduck Configuration]({{site.url}}/images/cyberduck-1.jpg "Cyberduck Configuration")

#### Upload and Test Your Website

Once you have moved all the files and folders over to your bucket, you should open your browser and use the temporary **Endpoint** for your bucket to view the website.
> This bucket must be configured as a website host, as covered in a [previous post][statichost].

If you need to modify the website you can simply drag and drop the updated files on top of the old files, overwriting them.

Once your website is completed the next step is to point your domain name to your Amazon S3 bucket.

I would love to hear from you. Please leave your comments below. You can also share this post on Facebook and Twitter.  

[aws]: https://aws.amazon.com/ "Amazon Web Service Website"
[awssetupstatic]: https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html "Amazon Web Services Instructions on how to host a static website"
[cyberduck]: https://cyberduck.io/ "Cyberduck File Transfer"
[IAM]: https://console.aws.amazon.com/iam/home#/users "IAM tool on Amazon Web Services"
[statichost]: {{ site.url }}{% post_url 2016-11-13-Static-Website-Hosting %} "How to host a static website at Amazon Web Services S3"
