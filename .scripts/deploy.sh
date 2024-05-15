#!/bin/bash
#set -e

echo "Deployment started ..."

# Enter maintenance mode or return true
# if already is in maintenance mode
#(php artisan down) || true

# Pull changes from GitHub
git pull origin main

# Install composer dependencies
#composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

# Clear the old cache and optimize Laravel
php artisan clear-compiled

# Adjust permissions if necessary
chmod -R 755 storage bootstrap/cache

# Recreate cache
php artisan optimize

# Run database migrations
php artisan migrate:refresh --seed --force

# Exit maintenance mode
#php artisan up

echo "Deployment finished!"
