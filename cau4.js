// 4. Kể tên và cho ví dụ những cách tạo class trong Javascript
// cách 1: Sử dụng furtion 
function User()
{
    // Thuộc tính
    this.username = '';
    this.password = '';
     
    // Phương thức
    this.setInfo = function(username, password){
        this.username = username;
        this.password = password;
    };
     
    this.checkLogin = function(){
        return (this.username === 'admin' && this.password === '@123');
    };
     
    // Phải return this thì mới tạo mới được đối tượng
    return this;
}
// Cách sử dụng
var user = new User();
user.setInfo('admin', '@123');
if (user.checkLogin()){
    alert('Đăng nhập thành công');
}
else{
    alert('Đăng nhập thất bại');
}
// Cách 2 : Sử dụng Object 
var User = {
     
    // Thuộc tính
    username : "",
    password : "",
     
    // Phương thức
    setInfo : function(username, password){
        this.username = username;
        this.password = password;
    },
    checkLogin : function(){
        return (this.username === 'admin' && this.password === '@123');
    }
     
};
// Cách sử dụng
User.setInfo('admin', '@123');
if (User.checkLogin()){
    alert('Đăng nhập thành công');
}
else{
    alert('Đăng nhập thất bại');
}
// 3. Sử dụng Singleton Object
var User = new function(){
     
    // Thuộc tính
   this.username = '';
   this.password = '';
    
   // Phương thức
   this.setInfo = function(username, password){
       this.username = username;
       this.password = password;
   };
    
   this.checkLogin = function(){
       return (this.username === 'admin' && this.password === '@123');
   };
    
};
// Cách sử dụng
// Cách sử dụng
User.setInfo('admin', '@123');
if (User.checkLogin()){
    alert('Đăng nhập thành công');
}
else{
    alert('Đăng nhập thất bại');
}