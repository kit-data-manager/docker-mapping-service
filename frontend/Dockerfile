# Use a base image that has the necessary tools installed
FROM debian:buster AS base
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y ca-certificates curl git && \
    rm -rf /var/lib/apt/lists/*

# Clone the entire frontend-collection repository
FROM base AS frontend-build
#TODO: replace with stable branch after PR with fix
RUN git clone --single-branch --branch fix_mapping-service-ui_settingsHandling https://github.com/kit-data-manager/frontend-collection.git && \
    # Rename mapping-service-ui.html to index.html
    mv /frontend-collection/mapping-service-ui.html /frontend-collection/index.html

# Copy custom settings file into the cloned repo
COPY mapping-service.settings.js /frontend-collection/settings/mapping-service.settings.js

COPY general.settings.js /frontend-collection/settings/general.settings.js

# Use Nginx to serve the content
FROM nginx:stable-alpine AS frontend
# Copy the entire frontend-collection repository to the HTML directory of Nginx
COPY --from=frontend-build /frontend-collection /usr/share/nginx/html
