install:
	npm ci

lint:
	npm run lint

fix:
	npm run fix

dev:
	npm  run dev

build:
	rm -rf dist
	npm run build
	
clean:
	rm -rf dist

tree:
	tree -I 'node_modules|.vscode|dist'