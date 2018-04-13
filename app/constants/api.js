export const API = {
    SERVER: 'https://pinaka.herokuapp.com/',
    // SERVER_DEV_URL: 'https://pinaka.herokuapp.com/api/',//http://54.88.40.46:3000/api/
    SERVER_DEV_URL: 'http://5.9.144.226:5005/api/',//http://54.88.40.46:3000/api/
    // SERVER_DEV_URL: 'http://192.168.1.11:5005/api/',//http://54.88.40.46:3000/api/
    // SERVER_DEV_URL: 'https://sheltered-atoll-47991.herokuapp.com/api/',//http://54.88.40.46:3000/api/
    // SERVER: 'https://sheltered-atoll-47991.herokuapp.com/',
    SERVER_PUB_URL: 'http://pinaka.us-3.evennode.com/api/',
    BOOKINGTIME: [
        "5:00 pm - 6:00 pm",
        "6:00 pm - 7:00 pm",
        "7:00 pm - 8:00 pm",
        "8:00 pm - 9:00 pm"
    ],
    RESPONSE: {
        SIGNUP: {
            EMPTYNAME: 0,
            EMPTYEMAIL: 1,
            EMPTYBIRTHDAY: 2,
            EMPTYZIPCODE: 3,
            EMPTYGENDER: 4,
            EMPTYMARITAL: 5,
            EMPTYKIDS: 6,
            EMPTYPASS: 7,
            EMPTYSOURCE: 8,
            EMPTYTYPE: 9,
            INVALIDEMAIL: 10,
            INVALIDBIRTHDAY: 11,
            INVALIDZIPCODE: 12,
            INVALIDGENDER: 13,
            INVALIDMARITAL: 14,
            INVALIDKIDS: 15,
            INVALIDSOURCE: 16,
            INVALIDTYPE: 17,
            INVALIDPHONE: 18,
            INVALIDINTERESTS: 19,
            DUPLICATEEMAIL: 20,
            DUPLICATEPHONE: 21
        },
        PASSWORD:{
            NOTMATCH: 2,
            EMPTYEMAIL: 0,
        },
        LOGIN: {
            EMPTYEMAIL: 0,
            EMPTYPASSWORD: 1,
            NOTMATCH: 2
        },

        SENDCODE: {
            EMPTYPHONE: 0,
            INVALIDPHONE: 1
        },

        COMMON: {
            EMPTYTOKEN: 100,
            INVALIDTOKEN: 101,
            EMPTYPAYLOAD: 102,
            INVALIDPAGE: 103,
            INVALIDPERPAGE: 104
        },

        VERIFYCODE: {
            EMPTYCODE: 0,
            INVALIDCODE: 1
        },

        FEED: {
            EMPTYHEADING: 0,
            EMPTYDESCRIPTION: 1,
            EMPTYTYPE: 2,
            EMPTYORIGINALCOST: 3,
            EMPTYDISCOUNTCOST: 4,
            EMPTYDISCOUNTPERCENTAGE: 5,
            EMPTYEXPIREDDATE: 6,
            EMPTYRANKINGLEVEL: 7,
            EMPTYINTERESTS: 8,
            EMPTYIMAGE: 9,
            INVALIDTYPE: 10,
            INVALIDORIGINALCOST: 11,
            INVALIDDISCOUNTCOST: 12,
            INVALIDDISCOUNTPERCENTAGE: 13,
            INVALIDEXPIREDDATE: 14,
            INVALIDRANKINGLEVEL: 15,
            INVALIDINTERESTS: 16,
            INVALIDIMAGE: 17,
            INVALIDID: 18
        },

        RESERVATION: {
            EMPTYCONTACTID: 0,
            EMPTYFEEDID: 1,
            EMPTYPEOPLECOUNT: 2,
            EMPTYLANECOUNT: 3,
            EMPTYBOOKINGTIME: 4,
            EMPTYPURCHASEAMOUNT: 5,
            INVALIDFEEDID: 6,
            INVALIDCONTACTID: 7,
            INVALIDPEOPLECOUNT: 8,
            INVALIDLANECOUNT: 9,
            INVALIDBOOKINGTIME: 10,
            INVALIDPURCHASEAMOUNT: 11,
            INVALIDRESERVATIONID: 12,
            INVALIDSTATUS: 13,
            EMPTYNUMBER: 14,
            EMPTYCVV: 15,
            EMPTYEXPIREDM: 16,
            EMPTYEXPIREDY: 17,
            INVALIDCARDINFO: 18,
            UNKNOWN: 19
        },

        CREDIT: {
            EMPTYNUMBER: 0,
            EMPTYEXPIREDMONTH: 1,
            EMPTYEXPIREDYEAR: 2,
            EMPTYCVV: 3,
            INVALIDNUMBER: 4,
            INVALIDEXPIREDMONTH: 5,
            INVALIDEXPIREDYEAR: 6,
            INVALIDCVV: 7,
            EXPIRED: 8,
            INVALIDID: 9
        },

        SAVED: {
            EMPTYFEEDID: 0,
            INVALIDFEEDID: 1,
            INVALIDSAVEDID: 2
        }
    }
}
