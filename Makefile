DOMAIN=dev-era-vr.ru
WEBROOT=./nginx/certbot/www
CERTS=./nginx/certbot/conf

cert:
	docker-compose run --rm certbot \
		--issue \
		--webroot /var/www/certbot \
		-d $(DOMAIN) \
		--key-file /acme.sh/privkey.pem \
		--fullchain-file /acme.sh/fullchain.pem

renew:
	docker-compose run --rm certbot \
		--renew \
		--webroot /var/www/certbot \
		-d $(DOMAIN) \
		--key-file /acme.sh/privkey.pem \
		--fullchain-file /acme.sh/fullchain.pem

reload-nginx:
	docker-compose exec nginx nginx -s reload

auto-renew: renew reload-nginx

deploy: build up

build:
	docker-compose build

up:
	docker-compose up -d nginx
