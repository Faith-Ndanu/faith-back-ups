create schema data_class_update;

create table data_class_updated.student_details(
student_id INT primary key not null,
student_name TEXT not null,
year_of_birth INT not null,
student_tribe TEXT not null
);

create table data_class_updated.student_connection(
student_id INT unique not null,
student_friends TEXT not null,
student_linkedin_connection INT not null
);

create table data_class_updated.mentors_details(
student_id INT UNIQUE not null,
mentors_name TEXT not null,
mentors_nationality TEXT not null
);

create table data_class_updated.student_course_score(
student_id INT UNIQUE not null,
python_score INT not null,
javascript_score INT not null,
kotlin_score INT not null
);

insert into student_details
values
(1,'Masaku Wechpuk',2003,'Maasai'),
(2,'Mitchelle Obama',2004,'Maasai'),
(3,'Nancy Nabacwa',2002,'Muganda'),
(4,'Kamwaka Cynthia',1997,'Kikuyu'),
(5,'Mary Njiru',2003,'Kamba'),
(6,'Agnes Ajema',2005,'Luhya'),
(7,'Edna Kesa',2002,'Luhya'),
(8,'Maureen Gatweri',2004,'Meru'),
(9,'Faith Yiamat',2002,'Maasai'),
(10,'Faith Hope',2003,'Kikuyu'),
(11,'Patty Nyamboke',1998,'kisii'),
(12,'Kurry Barry',1998,'Luhya'),
(13,'Funny Ingabire',2001,'Rwandese'),
(14,'Ngonga Mercy',2003,'Meru'),
(15,'Faith Munyao',2003,'Kamba'),
(16,'Kame Bashuna',2000,'Somali'),
(17,'Eshe Aziz',2001,'Swahili'),
(18,'Susan Masaku',2000,'Kamba'),
(19,'Mutesi Aline',2001,'Rwandese'),
(20,'Gladwell Wanjiku',2000,'Gikuyu');

select * from data_class_updated.student_details;


insert into mentor_details
values
(1,'Angela Munde','Kenyan'),
(2,'Judy Wanjiru','Kenyan'),
(3,'Rose Kivuva','Kenyan'),
(4,'Maryann Gathanga','Kenyan'),
(5,'Akini Teasure','Rwandese'),
(6,'Eunice Musenyia','Kenyan'),
(7,'Yvonne Katama','Kenyan'),
(8,'Rebecca Nakachwa','Ugandan'),
(9,'Joyce Ndichu','Kenyan'),
(10,'Magrate Wambui','Kenyan'),
(11,'Lucky Wangare','Kenyan'),
(12,'Nyamira Konua','Rwandese'),
(13,'Makunda Daisy','Kenyan'),
(14,'Masian Parkire','Kenyan'),
(15,'Esther Kanoro','Wendy Orengo'),
(16,'Wendy Orengo','Kenyan'),
(17,'Christine Oure','Kenyan'),
(18,'Alicia Moraa','Kenyan'),
(19,'Grace Njuguna','Kenyan'),
(20,'Glad Akwenda','Kenya');

select * from data_class_updated.mentor_details;

insert into student_connection
values
(1,20,230),
(2,20,100),
(3,13,67),
(4,40,250),
(5,15,120),
(6,7,300),
(7,11,470),
(8,6,261),
(9,19,450),
(10,9,178),
(11,230,502),
(12,33,456),
(14,6,678),
(15,8,876),
(16,10,146),
(17,7,260),
(18,10,368),
(19,7,790),
(20,11,390);

select * from data_class_updated.student_connection;


insert into student_course_score
values
(1,20,23,13),
(2,20,17,20),
(3,13,13,15),
(4,15,25,27),
(5,15,12,20),
(6,17,13,20),
(7,21,17,22),
(8,16,21,23),
(9,19,23,19),
(10,16,17,20),
(11,23,23,25),
(12,13,16,30),
(14,16,18,17),
(15,18,26,16),
(16,10,16,20),
(17,27,26,27),
(17,27,26,27),
(18,10,30,17),
(19,27,17,27),
(20,11,39,19);

select * from data_class_updated.student_course_score;


select * from student_details sd;
select * from mentor_details md;
select * from student_connection sc;
select * from student_course_score scs;
select * from student_connection sc inner join student_details sd on sc.student_id = sd.student_id ;
select * from student_details sd left join student_connection sb on sd.student_id = sc.student_id ;
select * from mentor_details md right join student_details sd on md.student_id = md.student_id ;
select * from  student_details sd full outer join student_course_score scs on sd.student_id = scs.student_id ;






























