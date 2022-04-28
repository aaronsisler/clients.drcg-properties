# clients.drcg-properties

## Setting up the S3 and CloudFront Static Site Hosting

1. Create S3 bucket with name beta.example.com
1. Go to Bucket -> Permissions tab and update the Bucket policy as below

   ```
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "arn:aws:s3:::beta.example.com/*"
           }
       ]
   }
   ```

1. Go to Bucket -> Properties tab and scroll to the bottom for the Static website hosting section
1. Enable static website hosting, set the Index and Error documents as index.html
1. Go to CloudFront and do some stuff TBD
