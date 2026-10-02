# Deployment Guide for cPanel

This guide explains how to deploy the Sunrise Vista Safaris website to cPanel hosting.

## Prerequisites

- Node.js 18+ installed locally
- Access to your cPanel hosting account
- File Manager or FTP access to your hosting

## Build Process

### 1. Build the Static Site

Run the following command to build the static version of the site:

\`\`\`bash
npm run build:cpanel
\`\`\`

This will create an `out` directory containing all the static files.

### 2. Upload to cPanel

1. **Access File Manager**: Log into your cPanel and open File Manager
2. **Navigate to public_html**: Go to the `public_html` directory (or your domain's document root)
3. **Clear existing files**: Remove any existing files in the directory
4. **Upload files**: Upload all contents from the `out` directory to `public_html`

### 3. File Structure After Upload

Your `public_html` directory should contain:
\`\`\`
public_html/
├── _next/
├── images/
├── index.html
├── about.html
├── contact.html
├── serengeti.html
├── zanzibar.html
├── accommodations.html
├── tours.html
├── safaris/
│   ├── northern-circuit.html
│   └── southern-circuit.html
└── ... (other static files)
\`\`\`

### 4. Configure .htaccess (Optional)

Create a `.htaccess` file in your `public_html` directory for better SEO and performance:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
</IfModule>

# Redirect trailing slashes
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ $1/ [L,R=301]
