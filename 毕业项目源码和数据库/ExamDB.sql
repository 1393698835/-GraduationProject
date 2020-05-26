use master
go

if	DB_ID('ExamDB') is not null
	drop database ExamDB
go

create database ExamDB on
(
	name='ExamDB',
	filename='d:\demo\ExamDB.mdf'
)
go

use ExamDB
go

--老师表(Teacher)
create table Teacher
(
  	TeacherID int primary key identity(1,1), --编号ID
	TeacherName nvarchar(20) not null,  --姓名
	TeacherLoginName nvarchar(20) not null unique,  --登录名
	TeacherLoginPwd nvarchar(20) default('111')  not null,  --登录密码
	TeacherPhone nvarchar(20) ,  --电话
	TeacherEmail nvarchar(50) ,  --邮箱
)
go

--学生表(Student)
create table Student
(
  	StuID int primary key identity(1,1), --编号ID
	StuName nvarchar(20) not null,  --姓名
	StuLoginName nvarchar(20) not null unique,  --登录名
	StuLoginPwd nvarchar(20) default('111')  not null ,  --登录密码
	StuSex bit not null,  --性别
	StuPhone nvarchar(20) ,  --电话
	StuEmail nvarchar(50) ,  --邮箱
	StuGrade nvarchar(50) --班级
)
go

--试卷表(Paper)
create table Paper
(
  	PaperID int primary key identity(1,1), --编号ID
	PaperName nvarchar(20) not null,  --试卷名
	PaperExplain nvarchar(100) not null, --试卷说明
	PaperTime int not null --试卷时长
)
go

--考题表(Paper)
create table Topic
(
  	TopicID int primary key identity(1,1), --编号ID
	TopicExplain nvarchar(200) not null, --考题描述
	TopicScore int not null, --考题分值
	TopicType int not null, --试卷类型:1单选,2判断,3问答
	TopicA nvarchar(100), --单选A项
	TopicB nvarchar(100), --单选B项
	TopicC nvarchar(100), --单选C项
	TopicD nvarchar(100), --单选D项
	TopicSort int not null, --排序
	TopicAnswer nvarchar(200) not null , --正确答案
	PaperID int references Paper(PaperID) not null,  --试卷ID(外键)
)
go

--试卷答题表(Answer)
create table Answer
(
  	AnswerID int primary key identity(1,1), --编号ID
	PaperID int references Paper(PaperID) not null,  --试卷ID(外键)
	StuID int references Student(StuID) not null,  --学生ID(外键)
	TeacherID int references Teacher(TeacherID) ,  --阅卷老师ID(外键)
	AnswerScore int  , --试卷分数
	AnswerTime DateTime , --答题开始时间
	SubmitTime DateTime , --答题提交时间
	BatchTime DateTime , --批卷时间
	AnswerState int not null --状态:0-答题,1-未批卷, 2-已批卷
)
go

--试卷答题明细表(AnswerDetail)
create table Detail
(
  	DetailID int primary key identity(1,1), --编号ID
	AnswerID int references Answer(AnswerID) not null,  --答案ID(外键)
	TopicID int references Topic(TopicID) not null,  --题目ID(外键)
	DetailAnswer nvarchar(200)  --学生答案
)
go


-- 添加记录
insert Teacher values('teacher','teacher','111','138*****000','1@qq.com')
insert Teacher values('刘老师','liuxp','111','138*****001','2@qq.com')
insert Teacher values('张老师','zhang','111','138*****003','3@qq.com')

insert Student values('张三','zhangsan','111',0,'133*****000','asdf@qq.com','陕西能源1706')
insert Student values('李四','lisi','111',1,'133*****001','1232444@qq.com','重庆商务1801')
insert Student values('王武','wangwu','111',0,'133*****002','ssdfett@qq.com','重庆财经1804')

insert Paper values('HTML理论试题一','HTML理论试题一',45)
insert Paper values('C#Base 2019 期末试卷','C#Base 2019 期末试卷',15)

insert Topic values('下列css属性中,用于指定背景图片的是( )',25,1,'background-image','background-color','background-position','background-repeat',1,'A',1)
insert Topic values('下面哪个CSS属性是用来改变背景颜色( )',25,1,'background-color','bgcolor','color','text',1,'A',1)
insert Topic values('天空是红色的',25,2,'','','','',2,'0',1)
insert Topic values('无序列表的标签是？',25,3,'','','','',3,'<ul><li>',1)

insert Topic values('在C#.NET中，下列定义常量的语句中，正确的是( )',25,1,'const double PI 3.1415926;','const double e=2.7;','define double PI 3.1415926','define double e=2.7',1,'B',2)
insert Topic values('在C#.NET中，下列变量名是正确的选项是( )',25,1,'$3','45b','a_3','int',1,'C',2)
insert Topic values('C#源程序的扩展名是.cs',25,2,'','','','',2,'1',2)
insert Topic values('在C#.NET中，设int a=3,b=4,c=5;表达式(a+b)>c&&b==c的值是:',25,3,'','','','',3,'false',2)

select * from Teacher
select * from Student
select * from Paper
select * from Topic
