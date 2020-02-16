pragma solidity >=0.4.25 <0.6.0;

contract CertificateAuthenticator {
    enum StateType { Valid, Invalid }

    Statetype public State;
    address public Authenticator;
    address public Requester;

    uint256 public CertificateHash;
    uint256 public CertificateExpirationTimestamp;


    constructor(uint256 memory cert, uint256 memory timeStamp) public {
        Authenticator = msg.sender;
        CertificateHash = cert;
        CertificateExpirationTimestamp = timeStamp;
        if (block.timestamp < ticketExpiryDateTimestamp) {
            State = StateType.Valid;
        } else {
            State = StateType.Invalid;
        }
    }

    function getHash() public view returns (uint256) {
        require(block.timestamp < ticketExpiryDateTimestamp);
        return CertificateHash;
    }

    function getDate() public view returns (uint256) {
        require(block.timestamp < ticketExpiryDateTimestamp);
        return CertificateDate;
    }

    function checkAuthenticator(address check) public view returns (bool) {
        require(block.timestamp < ticketExpiryDateTimestamp);
        return check == Authenticator;
    }

    function checkValid() public view returns (bool) {
        require(block.timestamp < ticketExpiryDateTimestamp);
        if (State == StateType.Valid) {
            return true;
        } else {
            return false;
        }
    }
}