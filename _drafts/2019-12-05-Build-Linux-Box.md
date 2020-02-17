---
layout: post
title: "My Development Environment"
metadesc: "I build static websites using Jekyll, Amazon Web Services, and Github. This post provides the steps to set these tools up on your computer."
date: 2019-12-05 12:00:00 -0500
author: LampApps
category: misc
tags: [Tools]
image: images/website-design.jpg
---

![Building a Small Business Website]({{site.url}}/{{ page.image }} "Building A Small Business Website")

I build static websites using Jekyll, Amazon Web Services, Atom text editor, and Github. This post provides the steps to set these tools up on your computer.
<!--more-->
Jekyll is a great static website generator that makes building fast websites easy. Amazon Web Services (AWS) provides very inexpensive hosting, DNS and SSL certificates. Static sites can be hosted on AWS S3 for very little money. SSL certificates are free. This website is hosted at AWS using S3 and costs just a few dollars each month. This compares to Wordpress or other content management systems that need a full server with PHP and a database installed. Even on an inexpensive shared server these setups will cost 10 times the amount as AWS S3 static web hosting. Sites hosted in conventional shared hosting environments will also be slower because a static website generator like Jekyll does all the work to create your website on your computer, you then upload the static html, css, and javascript files to S3 which then serves them out to the internet. No preprocessing of scripts, calls to databases or other processing required at the server on AWS S3 website hosting. This makes these static websites much faster that other sites.



### Requirements
* AWS account
* Github account
* A computer with a text editor and terminal, any OS flavor will do. I am using Linux Mint.

### Optional software to install
* Gnote, I installed this to keep my notes handy
* Guake Terminal, any terminal will do
* [Atom][atom], any text editor will do, but Atom will install [Git][Git] on your machine as well

### Steps

#### Install Jekyll

1. The Jekyll website has excellent [instructions][installjekyll] based on your OS. These commands are for Ubuntu based OS.
>
```
$ sudo apt-get install ruby-full build-essential zlib1g-dev
```
```
$ echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
```
$ gem install jekyll bundler
```

#### Setup Amazon Web Service (AWS) Command Line Interface (CLI)

1. Install AWS CLI. Amazon has [instructions][installCLI] based on you situation. As of this writing AWS CLI version 2 is preview evaluation software. This post is based on version 1.
>
```
$ sudo apt install awscli
```
2. Configure AWS CLI. See the [instructions][configureCLI]
  * If you do not have AWS account, you will need to [create][aws] one now.
  * Create an access key for an IAM user. Leave that window open so you can cut and paste in the next step.
  * In a terminal run this:
>
```
  $ aws configure
```
Cut and paste in the Access key and Secret access key. You may leave the region and output blank to set defaults.
```
  AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
  AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
  Default region name [None]: us-east-1
  Default output format [None]: json
```
3. Test AWS CLI, the following command should return a listing of all your buckets on S3.
>
```
  $ aws s3 ls
```
4. You can now sync files to AWS S3 using AWS CLI. This [script][sitesync] will sync you files and manage the AWS Cloudfront for your website.

5. For GitHub users with [Atom][atom] already installed on your computer
  * go to a Github repository and click the clone button to copy the url.
  * in Atom open the command pallet and search for Github Clone.
  * paste the url in; the files will be pulled down to your local computer.
  * click the GitHub on bottom right and get the Token so you can pull and push.


[atom]: https://atom.io/
[Git]: https://git-scm.com/
[installjekyll]: https://jekyllrb.com/docs/installation/
[aws]: https://aws.amazon.com
[installCLI]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
[configureCLI]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
[sitesync]: https://github.com/lampapps/S3_site_sync
