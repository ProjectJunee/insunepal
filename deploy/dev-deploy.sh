#!/bin/bash

echo "Redirecting to the dictionary directory.."
cd /var/www/insunepal || exit

echo "Pulling latest code.."
git checkout main
git pull origin main

echo "Checking available memory..."
AVAILABLE_RAM=$(free -m | awk '/^Mem:/{print $2}')
if [ "$AVAILABLE_RAM" -lt 1200 ]; then
    echo "Low memory detected! Swap is already enabled, skipping creation."
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 22.13.1  

echo "Restarting docker container"
npm run start:docker:prod
docker network connect usnepal-network insunepal-1

echo "Deployment complete!"