const { assert,expect } = require('chai');

describe('Win', function () {
    let win;
    let contract;
    before(async () => {
        const Win = await ethers.getContractFactory("Win");
        win = await Win.deploy();
        await win.deployed();
        //console.log('win : ' + win.address);
        const Contract = await ethers.getContractFactory("Contract");
        contract = await Contract.deploy();
        await contract.deployed();
        //console.log('contract : ' + contract.address);
    });

    describe('deployement', () => {
        it('should be deployed', async () => {
            const bytecodeWin = await ethers.provider.getCode(win.address);
            assert(bytecodeWin !== "0x", "Win does not exist!");
            const bytecodeContract = await ethers.provider.getCode(contract.address);
            assert(bytecodeContract !== "0x", "Contract does not exist!");
        });
    });

    describe('win call', () => {
        it('should call win and emit event', async () => {

            await expect(win.win(contract.address))
                .to.emit(contract, 'Winner')
                .withArgs(win.address);
            
        });
    });

});