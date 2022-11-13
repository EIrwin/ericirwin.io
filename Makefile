lint:
	yarn && yarn lint

flow:
	yarn && yarn flow

build:
	yarn && yarn build

clean:
	rm -rf dist

ci:
	yarn && yarn lint && yarn flow

docker-web:
	docker-compose up --build -d web

package:
	docker build -t docker.io/eirwin/ericirwin.io .
	docker push docker.io/eirwin/ericirwin.io 

deploy:
	kubectl -n default apply -f k8s/

.PHONY: lint ci docker-web flow
