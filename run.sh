#!/bin/sh

cd /app/backend
#!/bin/sh
java -jar ./backend/app.jar &

sleep 10

cd /app/frontend
npm run dev

wait
