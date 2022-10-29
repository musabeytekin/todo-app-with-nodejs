// module.exports = [getDate, test];
let today = new Date();

module.exports.getDate = () => {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
};

module.exports.getDay = () => {
    let options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);
};


