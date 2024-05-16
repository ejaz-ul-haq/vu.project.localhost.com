#!/bin/bash
set -e

echo "Deployment started ..."

# Pull changes from GitHub
git pull origin main

# Install composer dependencies if composer.json or composer.lock changed
if [ -n "$(git diff --name-only HEAD@{1}..HEAD | grep 'composer.json\|composer.lock')" ]; then
    composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader
fi

# Clear the old cache and optimize Laravel
php artisan optimize:clear

# Adjust permissions if necessary
chmod -R 755 storage bootstrap/cache

# Recreate cache
php artisan optimize

echo "Deployment finished!"
