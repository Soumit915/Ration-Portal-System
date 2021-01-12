var data = []
var connections = []
var ration_objectMap = {};

class Date {
    constructor() {
        this.year = null;
        this.month = null;
        this.date = null;
    }
}

class Location {
    constructor() {
        this.house = "";
        this.street = "";
        this.wardNo = "";
        this.blockNo = "";
        this.city = "";
        this.district = "";
        this.state = "";
        this.latitudes = "";
        this.longitudes = "";
    }
}

class HeadOfFamily {
    constructor() {
        this.rationId = "";
        this.aadhaarId = "";
    }
}

class Feedback {
    constructor() {
        this.message = "";
        this.feedback_radio = "";
        this.rating = null;
        this.average_rating = null;
    }
}

class RationReceivingLog {
    constructor() {
        this.date_received = null;
        this.itemsRecieved = [];
        this.feedback = null;
    }
}

class BeneficiaryDetails {
    constructor() {
        this.rationReceivingLogs = [];
    }
}

function getDate(month) {
    if (month == 1 || month == 3 || month == 5 || month == 7 ||
        month == 8 || month == 10 || month == 12) {
        return parseInt(Math.random() * 31 + 1);
    }
    else if (month != 2) {
        return parseInt(Math.random() * 30 + 1);
    }
    else return parseInt(Math.random() * 28);
}

class RationPurchasingDetail {
    constructor() {
        this.date = null;
        this.itemsRecieved = [];
    }
}

class Dealers_Beneficiary {
    constructor() {
        this.rationId = "";
        this.aadhaarId = "";
        this.rationPurchasingDetails = [];
    }
}

class itemsPurchasingDetails {
    constructor() {
        this.date = null;
        this.itemsRecieved = [];
    }
}

class DealerData {
    constructor() {
        this.rating = null;
        this.location = null;
        this.beneficiaries = [];
        this.itemsReceivingDetails = [];
    }
}

class Dealer {
    constructor() {
        this.isDealer = false;
        this.dealerId = null;
        this.dealerData = new DealerData();
    }
}

var rationSet = new Set();
var aadhaarSet = new Set();
var phoneSet = new Set();
var dealerIdSet = new Set();

class SingleData {
    constructor() {
        this.rationId = "";
        this.aadhaarId = "";
        this.name = "";
        this.dob = null;
        this.gender = "";
        this.headOfFamily = null;
        this.location = null;
        this.cardTypeID = "";
        this.img = "";
        this.password = "";
        this.mobileNo = "";
        this.dealerId = "";
        this.beneficiaryDetails = null;
        this.dealer = new Dealer();
    }
    setParams = () => {
        //Generating ration-Id
        do {
            this.rationId = "";
            var rationIdlength = parseInt((Math.random() * 2 + 2));
            for (var i = 0; i < rationIdlength; i++) {
                var h = parseInt(Math.random() * 26 + 65);
                this.rationId += String.fromCharCode(h);
            }
            this.rationId += "-";

            for (var i = 0; i < 6; i++) {
                var h = parseInt(Math.random() * 10);
                this.rationId += h;
            }
        } while (rationSet.has(this.rationId));
        rationSet.add(this.rationId);

        //Generating aadhaar id
        do {
            this.aadhaarId = "";
            for (var i = 0; i < 12; i++) {
                var h = parseInt(Math.random() * 10);
                this.aadhaarId += h;
            }

        } while (aadhaarSet.has(this.aadhaarId));
        aadhaarSet.add(this.aadhaarId);

        //Generating Name
        var nameWords = parseInt((Math.random() * 2 + 2));
        for (var i = 0; i < nameWords; i++) {
            var n = parseInt(Math.random() * 5 + 3);
            for (var j = 0; j < n; j++) {
                var h = parseInt(Math.random() * 26 + 65);
                this.name += String.fromCharCode(h);
            }
            this.name += " ";
        }
        this.name = this.name.trim();

        //Generating DateOfBirth
        this.dob = new Date();
        this.dob.year = 2018 - parseInt(Math.random() * 97);
        this.dob.month = parseInt(Math.random() * 12 + 1);
        this.dob.date = getDate(this.dob.month);

        //Generating gender
        this.gender = parseInt(Math.random() * 2) == 0 ? "M" : "F";

        //Generating password
        this.password = this.rationId;

        //BeneficiaryDetails
        this.beneficiaryDetails = new BeneficiaryDetails();
    }
    setParentParams() {
        this.location = new Location();
        this.location.latitudes = parseFloat(Math.random() * 6.5 + 22);
        this.location.longitudes = parseFloat(Math.random() * 4.5 + 85.5);

        var h = parseInt(Math.random() * 4 + 65);
        this.cardTypeID = "cti-" + String.fromCharCode(h);

        //Generating mobile no
        do {
            this.mobileNo = "";
            this.mobileNo += parseInt(Math.random() * 9 + 1);
            for (var i = 0; i < 9; i++) {
                var h = parseInt(Math.random() * 10);
                this.mobileNo += h;
            }

        } while (phoneSet.has(this.mobileNo));
        phoneSet.add(this.mobileNo);
    }
    setRestParams() {
        this.location = new Location();

        var parent = ration_objectMap[this.headOfFamily.rationId];
        this.location = parent.location;
        this.cardTypeID = parent.cardTypeID;

        //Generating mobile no
        if (this.dob.year > 2004) {
            this.mobileNo = parent.mobileNo;
        }
        else {
            var probs = parseInt(Math.random() * 2);
            if (probs == 0) {
                this.mobileNo = parent.mobileNo;
            }
            else {
                do {
                    this.mobileNo = "";
                    this.mobileNo += parseInt(Math.random() * 9 + 1);
                    for (var i = 0; i < 9; i++) {
                        var h = parseInt(Math.random() * 10);
                        this.mobileNo += h;
                    }

                } while (phoneSet.has(this.mobileNo));
                phoneSet.add(this.mobileNo);
            }
        }
    }
    setDealerParams() {
        //Generating dealer id
        this.dealer.isDealer = true;
        do {
            this.dealer.dealerId = "";
            for (var i = 0; i < 6; i++) {
                var h = parseInt(Math.random() * 10);
                this.dealer.dealerId += h;
            }

            this.dealer.dealerId = "IMD-" + this.dealer.dealerId;

        } while (dealerIdSet.has(this.dealer.dealerId));
        dealerIdSet.add(this.dealer.dealerId);

        this.dealerId = this.dealer.dealerId;

        this.dealer.dealerData.location = this.location;
    }
}

for (var i = 0; i < 40000; i++) {
    var beneficiary = new SingleData();
    beneficiary.setParams();
    data.push(beneficiary);
}

for (var i = 0; i < 10000; i++) {
    connections.push([i]);
}
for (var i = 10; i < 40000; i++) {
    var parent = parseInt(Math.random() * 10);
    connections[parent].push(i);
}

for (var i = 0; i < 10000; i++) {
    if (connections[i].length == 1) {
        var onlyMember = data[i];
        if (onlyMember.dob.year > 1998)
            onlyMember.dob.year -= 22;
    }
}

for (var i = 0; i < 10000; i++) {
    var isPresent = false;
    for (var j = 0; j < connections[i].length; j++) {
        if (data[connections[i][j]].dob.year >= 1951 &&
            data[connections[i][j]].dob.year <= 1998)
            isPresent = true;
    }

    var parentIndex = -1;
    var min = 2025;

    if (isPresent) {
        for (var j = 0; j < connections[i].length; j++) {
            if (data[connections[i][j]].dob.year < min &&
                data[connections[i][j]].dob.year >= 1951 &&
                data[connections[i][j]].dob.year <= 1998) {
                min = data[connections[i][j]].dob.year;
                parentIndex = connections[i][j];
            }
        }
    }
    else {
        for (var j = 0; j < connections[i].length; j++) {
            if (data[connections[i][j]].dob.year < min) {
                min = data[connections[i][j]].dob.year;
                parentIndex = connections[i][j];
            }
        }
    }

    for (var j = 0; j < connections[i].length; j++) {
        data[connections[i][j]].headOfFamily = new HeadOfFamily();
        data[connections[i][j]].headOfFamily.rationId =
            data[parentIndex].rationId;
        data[connections[i][j]].headOfFamily.aadhaarId =
            data[parentIndex].aadhaarId;
    }
}

for (var i = 0; i < data.length; i++) {
    if (data[i].rationId === data[i].headOfFamily.rationId) {
        data[i].setParentParams();
        ration_objectMap[data[i].rationId] = data[i];
    }
}

for (var i = 0; i < data.length; i++) {
    if (data[i].rationId !== data[i].headOfFamily.rationId) {
        data[i].setRestParams();
    }
}

var dealers = new Set();
var familylist = Object.keys(ration_objectMap);
for (var i = 0; i < 500; i++) {
    do {
        var di = parseInt(Math.random() * familylist.length);
    } while (dealers.has(di));
    dealers.add(di);
}

for (var dealer of dealers) {
    data[dealer].setDealerParams();
}

function getDist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

for (var family of familylist) {
    var user = ration_objectMap[family];
    var min = 10000000;
    var dealerIndex = -1;
    for (var dealer of dealers) {
        var thisdist = getDist(user.location.longitudes, user.location.latitudes,
            data[dealer].location.longitudes, data[dealer].location.latitudes);

        if (thisdist < min) {
            dealerIndex = dealer;
        }
    }

    user.dealerId = data[dealerIndex].dealer.dealerId;
}

for (var i = 0; i < data.length; i++) {
    if (data[i].rationId !== data[i].headOfFamily.rationId) {
        var parent = ration_objectMap[data[i].headOfFamily.rationId];
        data[i].dealerId = parent.dealerId;
    }
}

for (var i = 0; i < data.length; i++) {
    for (dealer of dealers) {
        if (data[dealer].dealer.dealerId === data[i].dealerId) {
            var newBenificiary = new Dealers_Beneficiary();
            newBenificiary.rationId = data[i].rationId;
            newBenificiary.aadhaarId = data[i].aadhaarId;
            data[dealer].dealer.dealerData.beneficiaries.push(newBenificiary);
        }
    }
}

const fs = require('fs');
v_data = JSON.stringify(data);

fs.writeFile('User_dataSet.json', v_data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});