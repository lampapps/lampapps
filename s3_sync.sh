AWS_PROFILE='default'
STAGING_BUCKET='dev-lampapps'
LIVE_BUCKET='lampapps.com'
SITE_DIR='_site/'
REGION='us-east-1'
CLOUDFRONTID='E1SGWG5JZB04C4'
INDEX_PAGE='index.html'
ERROR_PAGE='error.html'

# Uncomment this import function only if you cut and pasted this to another script as discussed above. Edit path to suit.
. ~/scripts/s3_site_sync/s3_site_sync.sh
