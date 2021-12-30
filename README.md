# SoftwareTechnologies
SMARTHealth, an university project for Software Technologies class.

Database
  download PostgreSQL from https://www.postgresql.org/download/
  create database with the following command: create database SmartHealthCheckDB

Configure Database
  configure the database URL, username, and password so that Spring can establish a connection with the database on startup. Add the last two lines for jwtSecret and expiration of the token. Open src/main/resources/application.properties file     and add the following properties to it:
    -------------------------------------
    spring.jpa.hibernate.ddl-auto= update
    spring.datasource.url=jdbc:postgresql:CHANGE_ME   (example : //localhost:5432/SmartHealthCheckDB)
    spring.datasource.username=CHANGE_ME    (example : postgres)
    spring.datasource.password=CHANGE_ME    (example : 1234)
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    server.error.whitelabel.enabled=false
    spring.jpa.properties.hibernate.default_schema=public
    
    #App Properties
    healthcheck.BIYD.jwtSecret= secret_goes_here
    healthcheck.BIYD.jwtExpirationMs= 86400000
    -------------------------------------
