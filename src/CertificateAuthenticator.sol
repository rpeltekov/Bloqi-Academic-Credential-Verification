pragma solidity >=0.4.25 <0.6.0;

contract CertificateAuthenticator {
    enum StateType { Active, Invalid }

    Statetype public State;
    address public Authenticator;
    address public Requester;

    uint256 public CertificateHash;
    uint256 public CertificateExpirationTimestamp;
    string public CertificateOwner;

    constructor(uint256 memory cert, uint256 memory timeStamp, string memory name) public {
        Authenticator = msg.sender;
        CertificateHash = cert;
        CertificateExpirationTimestamp = timeStamp;
        CertificateOwner = name;
        if (block.timestamp < ticketExpiryDateTimestamp) {
            State = StateType.Active;
        } else {
            State = StateType.Invalid;
        }
    }

    function changeStatus(bool memory stat) public {
        if (stat) {
            State = StateType.Active;
        } else {
            State = StateType.Invalid;
        }
    }

    function getHash() public view returns (uint256) {
        require(block.timestamp < ticketExpiryDateTimestamp);
        require(State == StateType.Active);
        return CertificateHash;
    }

    function getDate() public view returns (uint256) {
        require(block.timestamp < ticketExpiryDateTimestamp);
        require(State == StateType.Active);
        return CertificateDate;
    }

    function checkAuthenticator(address check) public view returns (bool) {
        require(block.timestamp < ticketExpiryDateTimestamp);
        require(State == StateType.Active);
        return check == Authenticator;
    }

    function checkValid() public view returns (bool) {
        require(block.timestamp < ticketExpiryDateTimestamp);
        require(State == StateType.Active);
        return State = StateType.Active;
    }
}