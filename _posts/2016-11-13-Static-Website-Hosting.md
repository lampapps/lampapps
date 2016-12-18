---
layout: post
title:  "Static Website Hosting"
date:   2016-11-12 12:00:00 -0500
author: LampApps
category: Development
tags: [Hosting]
---

![Amazon S3 Website Hosting for Small Business]({{site.url}}/images/aws.jpg "Amazon S3 Website Hosting for Small Business")

### What is Amazon S3?

Amazon Simple Storage Service (S3) is a cloud based storage service with a simple web based management console to store and retrieve any amount of data from anywhere on the web. It is very reliable as it is designed to deliver 99.999999999% uptime. It is very secure. It allows you to store large amounts of data at a very low cost. Since your website has very little data, your cost should be negligible. If fact, the first year will be free.

And best of all, it can also host static web sites.

<!--more-->

### What is a Static Website?

This simply means it does not depend on any special scripts or databases on the server to work. Many websites require a database to manage the content. These databases then require a script running on the server to allow the web page to dynamically render the web pages each time. This requires additional processing power and extra security to handle. Static web pages can still have animation and functionality. These are handled by the user's browser instead of the server. You can also use third party resources to plug into the static website. That is how the comments section of this website work. This website is hosted at Amazon S3.

### Setting up Amazon S3

[Savjee] has a very good video tutorial on how to setup Amazon S3 for a static website. Please watch his short tutorial then continue below to step through the entire process where I will fill in some of the additional steps you will need.

{% include youtubeplayer.html id="g9NbuTcos18" %}

<div class='two spacing'></div>

#### Steps

>I will be using the domain name `example.com` to demonstrate how to set this up. You should substitute your domain name, do not use `example.com`. You may prefer to follow the [AWS instructions][awssetupstatic].

1. If you do not have a Amazon Web Service account you will need to [create one][aws]. They offer a free tier that you will be able to use for the first year.

2. Navigate to the S3 management console and create two buckets:
* `example.com`
* `www.example.com`
> Why two? Because you want to be able to access your website using example.com and www.example.com.

3. Open the `www.example.com` bucket `Properties` panel:
* click `Redirect all requests to another host name`
* redirect all requets to `example.com`
* click `Save`
> Why redirect? You will host your website in the `example.com` bucket, but using `www.example.com` has become common place. So we want to catch anyone using that url and send them to `example.com`.

4. Open the `example.com` bucket `Properties` panel:
* click `Enable static website hosting`
* for the Index Document, enter: `index.html`
* for the Error Document, enter: `error.html`
* click 'Save'
<br /><br />

5. Add a bucket policy that makes the `example.com` bucket's content publicly available
* In the bucket's `Properties` panel, click the `Permissions`
* Click `Add Bucket Policy`
* Copy and paste the following bucket policy, and then paste it in the Bucket Policy Editor.
{% highlight json %}
{
  "Version":"2012-10-17",
  "Statement":[{
	"Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
	  "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::example-bucket/*"
      ]
    }
  ]
}
{% endhighlight %}


In the policy, replace example-bucket with the name of your bucket.

Click Save.






[Savjee]: https://www.youtube.com/channel/UCnxrdFPXJMeHru_b4Q_vTPQ
[aws]: https://aws.amazon.com/free/
[examplefile]: /documents/example.txt
[awssetupstatic]: http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html#root-domain-walkthrough-s3-tasks

