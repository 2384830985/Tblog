let api:string = "";
if (process.env.NODE_ENV === 'production') {
    api = "/api"
}
export default{
    // 虚拟数据地址
    // baseURL: 'http://39.107.42.37:8080',
    // baseURL: 'https://www.easy-mock.com/mock/5c175b6c899b39035c50fd94/example',
    // baseURL: 'http://39.107.42.37:1234/api',
    baseURL: api+'',
    imgUrl: api+'/manage/product/upload',
    // 项目地址
    project: 'https://github.com/2384830985/iViewCounter/tree/master/my-project',
    debug: true,
};

