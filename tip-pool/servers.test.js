describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should reset input box for server name', function(){
    submitServerInfo();
    expect(serverNameInput.value).toEqual('');
  });

  it('should update the server table with input text', function(){
    submitServerInfo();
    submitServerInfo();
    expect(serverTbody.childElementCount).toBe(1);
  })
  
  afterEach(function() {
    // teardown logic
    delete allServers['server' + serverId]
    updateServerTable();
  });
});
