class AppConfig{

    public port = 4000;
    public serverUrl = "http://localhost:" + this.port;
    public mongoDBConnectionString = "mongodb://127.0.0.1:27017/BankAccounts";

}
const appConfig = new AppConfig();
export default appConfig;