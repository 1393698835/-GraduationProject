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

--��ʦ��(Teacher)
create table Teacher
(
  	TeacherID int primary key identity(1,1), --���ID
	TeacherName nvarchar(20) not null,  --����
	TeacherLoginName nvarchar(20) not null unique,  --��¼��
	TeacherLoginPwd nvarchar(20) default('111')  not null,  --��¼����
	TeacherPhone nvarchar(20) ,  --�绰
	TeacherEmail nvarchar(50) ,  --����
)
go

--ѧ����(Student)
create table Student
(
  	StuID int primary key identity(1,1), --���ID
	StuName nvarchar(20) not null,  --����
	StuLoginName nvarchar(20) not null unique,  --��¼��
	StuLoginPwd nvarchar(20) default('111')  not null ,  --��¼����
	StuSex bit not null,  --�Ա�
	StuPhone nvarchar(20) ,  --�绰
	StuEmail nvarchar(50) ,  --����
	StuGrade nvarchar(50) --�༶
)
go

--�Ծ��(Paper)
create table Paper
(
  	PaperID int primary key identity(1,1), --���ID
	PaperName nvarchar(20) not null,  --�Ծ���
	PaperExplain nvarchar(100) not null, --�Ծ�˵��
	PaperTime int not null --�Ծ�ʱ��
)
go

--�����(Paper)
create table Topic
(
  	TopicID int primary key identity(1,1), --���ID
	TopicExplain nvarchar(200) not null, --��������
	TopicScore int not null, --�����ֵ
	TopicType int not null, --�Ծ�����:1��ѡ,2�ж�,3�ʴ�
	TopicA nvarchar(100), --��ѡA��
	TopicB nvarchar(100), --��ѡB��
	TopicC nvarchar(100), --��ѡC��
	TopicD nvarchar(100), --��ѡD��
	TopicSort int not null, --����
	TopicAnswer nvarchar(200) not null , --��ȷ��
	PaperID int references Paper(PaperID) not null,  --�Ծ�ID(���)
)
go

--�Ծ�����(Answer)
create table Answer
(
  	AnswerID int primary key identity(1,1), --���ID
	PaperID int references Paper(PaperID) not null,  --�Ծ�ID(���)
	StuID int references Student(StuID) not null,  --ѧ��ID(���)
	TeacherID int references Teacher(TeacherID) ,  --�ľ���ʦID(���)
	AnswerScore int  , --�Ծ����
	AnswerTime DateTime , --���⿪ʼʱ��
	SubmitTime DateTime , --�����ύʱ��
	BatchTime DateTime , --����ʱ��
	AnswerState int not null --״̬:0-����,1-δ����, 2-������
)
go

--�Ծ������ϸ��(AnswerDetail)
create table Detail
(
  	DetailID int primary key identity(1,1), --���ID
	AnswerID int references Answer(AnswerID) not null,  --��ID(���)
	TopicID int references Topic(TopicID) not null,  --��ĿID(���)
	DetailAnswer nvarchar(200)  --ѧ����
)
go


-- ��Ӽ�¼
insert Teacher values('teacher','teacher','111','138*****000','1@qq.com')
insert Teacher values('����ʦ','liuxp','111','138*****001','2@qq.com')
insert Teacher values('����ʦ','zhang','111','138*****003','3@qq.com')

insert Student values('����','zhangsan','111',0,'133*****000','asdf@qq.com','������Դ1706')
insert Student values('����','lisi','111',1,'133*****001','1232444@qq.com','��������1801')
insert Student values('����','wangwu','111',0,'133*****002','ssdfett@qq.com','����ƾ�1804')

insert Paper values('HTML��������һ','HTML��������һ',45)
insert Paper values('C#Base 2019 ��ĩ�Ծ�','C#Base 2019 ��ĩ�Ծ�',15)

insert Topic values('����css������,����ָ������ͼƬ����( )',25,1,'background-image','background-color','background-position','background-repeat',1,'A',1)
insert Topic values('�����ĸ�CSS�����������ı䱳����ɫ( )',25,1,'background-color','bgcolor','color','text',1,'A',1)
insert Topic values('����Ǻ�ɫ��',25,2,'','','','',2,'0',1)
insert Topic values('�����б�ı�ǩ�ǣ�',25,3,'','','','',3,'<ul><li>',1)

insert Topic values('��C#.NET�У����ж��峣��������У���ȷ����( )',25,1,'const double PI 3.1415926;','const double e=2.7;','define double PI 3.1415926','define double e=2.7',1,'B',2)
insert Topic values('��C#.NET�У����б���������ȷ��ѡ����( )',25,1,'$3','45b','a_3','int',1,'C',2)
insert Topic values('C#Դ�������չ����.cs',25,2,'','','','',2,'1',2)
insert Topic values('��C#.NET�У���int a=3,b=4,c=5;���ʽ(a+b)>c&&b==c��ֵ��:',25,3,'','','','',3,'false',2)

select * from Teacher
select * from Student
select * from Paper
select * from Topic
