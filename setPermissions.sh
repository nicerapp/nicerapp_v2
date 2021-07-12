#!/bin/sh
mkdir nicerapp/apps/nicerapp/news/newsItems
mkdir nicerapp/apps/nicerapp/webmail-1.0.0/temp
mkdir nicerapp/siteData/said.by
chown rene:www-data nicerapp/siteData/said.by
chmod 750 nicerapp/siteData/said.by

chown -R rene:www-data *
chmod -R 750 *
touch nicerapp/domainConfigs/localhost_v2/index.combined.css nicerapp/domainConfigs/localhost_v2/index.combined.cssTheme.dark.css nicerapp/domainConfigs/localhost_v2/index.combined.cssTheme.light.css nicerapp/domainConfigs/localhost_v2/index.combined.js 
chmod -R 770 nicerapp/domainConfigs/localhost_v2/index.combined.css nicerapp/domainConfigs/localhost_v2/index.combined.cssTheme.dark.css nicerapp/domainConfigs/localhost_v2/index.combined.cssTheme.light.css nicerapp/domainConfigs/localhost_v2/index.combined.js
touch nicerapp/domainConfigs/nicerapp_v2/index.combined.css nicerapp/domainConfigs/nicerapp_v2/index.combined.cssTheme.dark.css nicerapp/domainConfigs/nicerapp_v2/index.combined.cssTheme.light.css nicerapp/domainConfigs/nicerapp_v2/index.combined.js
chmod -R 770 nicerapp/domainConfigs/nicerapp_v2/index.combined.css nicerapp/domainConfigs/nicerapp_v2/index.combined.cssTheme.dark.css nicerapp/domainConfigs/nicerapp_v2/index.combined.cssTheme.light.css nicerapp/domainConfigs/nicerapp_v2/index.combined.js 
chmod -R 770 nicerapp/apps/nicerapp/news/newsItems nicerapp/siteMedia/backgrounds/iframe/youtube nicerapp/siteMedia/backgrounds.offline nicerapp/siteMedia.thumbs nicerapp/siteCache nicerapp/siteData

touch nicerapp/domainConfigs/said.by/index.combined.css nicerapp/domainConfigs/said.by/index.combined.cssTheme.dark.css nicerapp/domainConfigs/said.by/index.combined.cssTheme.light.css nicerapp/domainConfigs/said.by/index.combined.js
chmod -R 770 nicerapp/domainConfigs/said.by/index.combined.css nicerapp/domainConfigs/said.by/index.combined.cssTheme.dark.css nicerapp/domainConfigs/said.by/index.combined.cssTheme.light.css nicerapp/domainConfigs/said.by/index.combined.js 
chmod -R 770 nicerapp/apps/nicerapp/news/newsItems nicerapp/apps/nicerapp/webmail-1.0.0/temp
#chown -R root:root nicerapp/selfHealer
#chmod -R 640 nicerapp/selfHealer
