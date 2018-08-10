
module.exports = {
  userRegister: async function (req, res) {
    var url= req.body.url;
    var txtName= req.body.name;
    var txtUsername= req.body.username;
    var txtEmail= req.body.email;
    var txtPhone= req.body.phone;
    var txtPassword= req.body.password; 
    var txtBirthday= req.body.birthday; 
    var txtSex= req.body.sex;
    var txtAreacode= req.body.areacode; 
    var md5 = require('md5');
    txtPassword = md5(txtPassword);
    var checkLogin = await CoreUsers.findOne({username: txtUsername});
    var result= {
      error: 1,
      message: ''
    };
    if(checkLogin) {
      result.message= 'Tên đăng nhập đã được sử dụng';
      res.json(result);           
    }else{
      var now = new Date();
      var jsonDate = now.toJSON();
      var createUser= await CoreUsers.create({
        'username': txtUsername,
        'name': txtName,
        'password': txtPassword,
        'email': txtEmail,
        'birthday': txtBirthday,
        'phone': txtPhone,
        'status': 1,
        'sex': txtSex,
        'areacode': txtAreacode,
        'registered': jsonDate,
        'lastlogined': jsonDate
      }).fetch();
      var dataUser= {
        'userId':createUser['id'],
        'username': createUser['username'],
        'name': createUser['name'],
        'checkPayment': 0,
        'paymentDate': '',
        'expiredDate': ''
      };
      var encodedUser = new Buffer(JSON.stringify(dataUser)).toString('base64');
      res.redirect(url+'/login_callback.php?user='+encodedUser); 
      //res.json('true');
    }    
  },
  getAreaCode: async function(req, res){
    var dataArea= await CoreAreaCode.find({
        where: {
          type: 'province',
          status: 1
        },
        select:['id', 'name']
    });
    res.json(dataArea);
  },
  signup: async function (req, res) {  },

};