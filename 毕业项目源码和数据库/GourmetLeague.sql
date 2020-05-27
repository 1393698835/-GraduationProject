create database GourmetLeague
--用户模块
create table User(
UserID int primary key identity (1,1),
UserPhone nvarchar(50),
UserName nvarchar(50),
UserPassword nvarchar(50),
UserAvatar	nvarchar(50),
)
--类型表
create table Type(
TypeID	int primary key identity (1,1),
TypeMode nvarchar(50),
TypeName nvarchar(50),
PID	int foreign key references Type(TypeID),
)

--食材表
create table Food(
FoodID int primary key identity (1,1),
TypeID	int foreign key references Type(TypeID),
FoodName nvarchar(50),
FoodPicture	nvarchar(50),
FoodRecommend nvarchar(50),
FoodPractce	nvarchar(50),
)
--食谱表
create table Recipe(
RecipeID int primary key identity (1,1),
RecipeName nvarchar(50),
TypeID	int foreign key references Type(TypeID),
RecipePicture nvarchar(50),
RecipeDifficulty nvarchar(10),
RecipeTime nvarchar(50),
RecipeStory nvarchar(70),
Ingredient nvarchar(50),
RecipeDosage nvarchar(50),
FlowChart nvarchar(50),
Particular nvarchar(50),
ThumbNumber int,
)
--评论表
create table Comment(
CommentID int primary key identity (1,1),
RecipeID int foreign key references Recipe(RecipeID),
CommentUser nvarchar(50),
CommentContent nvarchar(50),
CommentonTime datetime,
)