#!/bin/sh

cd /app/backend
java -jar target/*.jar &

sleep 10

cd /app/frontend
npm run dev

wait
