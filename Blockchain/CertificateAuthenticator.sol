pragma solidity >=0.4.25 <0.6.0;

contract CertificateAuthenticator {
    enum StateType { Active, Invalid }

    StateType public  State;
    address public Authenticator;
    address public Requester;

    uint256 public CertificateHash;
    string public CertificateOwner;

    constructor(uint256 cert, string memory name) public {
        Authenticator = msg.sender;
        CertificateHash = cert;
        CertificateOwner = name;
        State = StateType.Active;
    }

    function changeStatus(bool stat) public {
        if (stat) {
            State = StateType.Active;
        } else {
            State = StateType.Invalid;
        }
    }

    function verifyHash(uint256 check) public {
        require(State == StateType.Active);
        require(check == CertificateHash);
    }

    function checkAuthenticator(address check) public {
        require(State == StateType.Active);
        require(check == Authenticator);
    }

    function checkValid() public {
        require(State == StateType.Active);
    }
}