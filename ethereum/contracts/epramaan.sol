pragma solidity >=0.4.22 <0.6.0;
contract epramaan {
    mapping (string => string) abc;
    function storemap(string memory reacth,string memory documents) public
    {
        abc[documents]=reacth ;
    }
    function search(string memory documents) public view returns(string memory)
    {
        return abc[documents];
    }
}
