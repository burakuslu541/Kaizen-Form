const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kaizenFormSchema = new Schema({

    assignedPerson: {
        type: String
    },
    approved: {
        type: Boolean
    },
    ready: {
        type: Boolean
    },
    workshop: {
        type: String
    },
    route: {
        type: String
    },
    equipment: {
        type: String
    },
    subject: {
        type: String
    },
    teamMembers: [Schema.Types.Mixed],
    lostKind: [String],
    causeOfChoosingSubject: {
        type: String
    },
    flowChart: {
        type: String
    },
    targetDescipton: [Schema.Types.Mixed],
    stepActionPlan: {
        type: String
    },
    analyse: {
        type: String
    },
    actionPlan: [Schema.Types.Mixed],
    solutionOfTheProblem: {
        type: String
    },
    watching: {
        type: String
    },
    targetComparison: [Schema.Types.Mixed],
    standardization: {
        type: String
    },
    deployment: {
        type: String
    },
    homework: {
        type: String
    }

}, {
    timeStamp: true
})

module.exports = mongoose.model("formQuestions", kaizenFormSchema);