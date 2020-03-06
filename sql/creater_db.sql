create table users.department
(
	dept varchar(255),
    id varchar(255),
    primary key(dept)
);

create table users.users
(
	id varchar(255)  unique,
    name varchar(255),
    dept varchar(255),
    email varchar(255) unique,
    password varchar(255) NOT NULL,
    primary key(id),
    foreign key(dept) references users.department(dept)
);


create table users.leavelog
(
	leaveid int NOT NULL AUTO_INCREMENT,
    appliedby varchar(255),
	request_type varchar(255),
    startfrom date,
    ends_on date,
    reason varchar(255),
    status varchar(255),
    primary key(leaveid),
    foreign key(appliedby) references users.users(id)
);

create table users.announcement
(
    dept varchar(255),
    announcedate date,
    announce varchar(511)
);
