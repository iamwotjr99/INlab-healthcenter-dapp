const Buy = artifacts.require("Buy");
const HealthCare = artifacts.require("HealthCare");

module.exports = function (deployer) {
  deployer.deploy(Buy);
  deployer.deploy(HealthCare);
};
