--добавили схему для удобства

CREATE SCHEMA Web2

--таблица студентов
CREATE TABLE Students (
    id SERIAL PRIMARY KEY,
    FIO VARCHAR(255) NOT NULL,
    Born DATE NOT NULL,
    id_Group INTEGER NOT NULL,
    start_year INTEGER NOT NULL
)

--таблица вузов
CREATE TABLE university (
    id SERIAL PRIMARY KEY,
    Uni_name VARCHAR(255) NOT NULL
)

--таблица групп
CREATE TABLE Groups (
    id SERIAL PRIMARY KEY,
    Group_name VARCHAR(255) NOT NULL,
    university_id INTEGER REFERENCES University(id)
)

--таблица занятий
CREATE TABLE Lessons (
    id SERIAL PRIMARY KEY,
    Lesson_name VARCHAR(255) NOT NULL
)

--таблица оценок студентов
CREATE TABLE Grades (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(id),
    lesson_id INTEGER REFERENCES Lessons(id),
    Grade INTEGER NOT NULL
)

--представление для красивого отображения данных
CREATE VIEW Main_view AS
SELECT Students.FIO, Students.start_year, Groups.Group_name, date_part('year',age(Students.Born::date)), Lessons.Lesson_name, Grades.Grade, University.Uni_name
FROM Students
JOIN Groups ON Students.id_Group = Groups.id
JOIN University ON Groups.university_id = University.id
JOIN Grades ON Students.id = Grades.student_id
JOIN Lessons ON Grades.lesson_id = Lessons.id;

-- вставляем значения

INSERT INTO web2.university ("id", "uni_name") VALUES (1, 'КГПИ');
INSERT INTO web2.university ("id", "uni_name") VALUES (3, 'НФИ');
INSERT INTO web2.university ("id", "uni_name") VALUES (6, 'ХТИ');
INSERT INTO web2.university ("id", "uni_name") VALUES (10, 'НЕАХТИ');
INSERT INTO web2.university ("id", "uni_name") VALUES (15, 'АЙТЫ');

INSERT INTO web2.groups ("id", "group_name", "university_id") VALUES (1, 'ММ1', 1);
INSERT INTO web2.groups ("id", "group_name", "university_id") VALUES (3, 'АСТП', 3);
INSERT INTO web2.groups ("id", "group_name", "university_id") VALUES (6, 'ЮВЫ', 1);

INSERT INTO web2.lessons ("id", "lesson_name") VALUES (1, 'Математика');
INSERT INTO web2.lessons ("id", "lesson_name") VALUES (3, 'История');
INSERT INTO web2.lessons ("id", "lesson_name") VALUES (6, 'ФунКан');
INSERT INTO web2.lessons ("id", "lesson_name") VALUES (10, 'Дискретка');
INSERT INTO web2.lessons ("id", "lesson_name") VALUES (15, 'Web');
INSERT INTO web2.lessons ("id", "lesson_name") VALUES (21, 'ООП');

INSERT INTO web2.students ("id", "fio", "born", "id_group", "start_year") VALUES (3, 'ИВанов И.И.', '2003-09-26', 1, 2021);
INSERT INTO web2.students ("id", "fio", "born", "id_group", "start_year") VALUES (7, 'Петров П.П.', '2004-04-26', 1, 2021);

INSERT INTO web2.grades ("id", "student_id", "lesson_id", "grade") VALUES (1, 3, 15, 5);
INSERT INTO web2.grades ("id", "student_id", "lesson_id", "grade") VALUES (3, 3, 10, 4);
INSERT INTO web2.grades ("id", "student_id", "lesson_id", "grade") VALUES (6, 7, 15, 4);
INSERT INTO web2.grades ("id", "student_id", "lesson_id", "grade") VALUES (10, 3, 3, 3);
INSERT INTO web2.grades ("id", "student_id", "lesson_id", "grade") VALUES (15, 7, 1, 5);