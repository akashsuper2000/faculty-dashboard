

insert into users.department values('cse','cb.en.cse001');
insert into users.department values('ece','cb.en.cse002');

INSERT INTO `users`.`users`  VALUES ('cb.en.cse001', 'Dr. Lata P.', 'cse', 'jamji1729@gmail.com', 'latap123');
INSERT INTO `users`.`users`  VALUES ('cb.en.cse002', 'Dr. Hamish Mathew', 'ece', 'hamishm123@gmail.com', 'hamish123');
INSERT INTO `users`.`users`  VALUES ('cb.en.cse044', 'Dr. Ganesh Neelakanta Iyer', 'cse', 'ganeshniyer@gmail.com', 'ganesh123');
INSERT INTO `users`.`users`  VALUES ('cb.en.cse046', 'Dr. Lalithamani', 'cse', 'lathamani123@gmail.com', 'latha');
INSERT INTO `users`.`users`  VALUES ('cb.en.cse120', 'Dr. Thangavelu S.', 'ece', 'thangavelu12@gmail.com', 'thangavelu123');
INSERT INTO `users`.`users`  VALUES ('sample', 'akash', 'cse', 'akashsuper2000@gmail.com', 'password');


INSERT INTO `users`.`leavelog` VALUES ('1', 'cb.en.cse044', 'Casual Leave', '2020-04-12', '2020-05-15', 'Family Emergency', 'Pending');
INSERT INTO `users`.`leavelog` VALUES ('2', 'cb.en.cse046', 'Sick Leave', '2020-05-15', '2020-07-01', 'Hand Fracture', 'Approved');
INSERT INTO `users`.`leavelog` VALUES ('3', 'cb.en.cse120', 'Privilege Leave', '2020-04-24', '2020-06-18', 'Family Tour', 'Declined');
INSERT INTO `users`.`leavelog` VALUES ('4', 'cb.en.cse044', 'Sick Leave', '2020-05-12', '2020-07-15', 'Lung Operation', 'Approved');
INSERT INTO `users`.`leavelog` VALUES ('5', 'cb.en.cse046', 'Privilege Leave', '2020-06-15', '2020-08-15', 'Going out of town', 'Pending');


INSERT INTO `users`.`announcement` VALUES ('1','cse','2020-03-06','Cyber Security Seminar on coming 21st March');
INSERT INTO `users`.`announcement` VALUES ('2','cse','2020-02-28','Industry Interaction on coming 15th March');