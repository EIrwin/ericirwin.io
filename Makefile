lint:
	yarn && yarn lint

flow:
	yarn && yarn flow

build:
	yarn && yarn build && yarn build:server

ci:
	yarn && yarn lint && yarn flow

docker-web:
	docker-compose up --build -d web

.PHONY: lint ci docker-web flow
