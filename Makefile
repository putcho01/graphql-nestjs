du:
	docker-compose up -d

dd:
	docker-compose down

# 停止
ds:
	docker-compose stop

# mysqlにログイン
mysql:
	docker-compose exec mysql bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'