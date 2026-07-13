const pdfParse = require("pdf-parse");
const {
	generateinterviewReport,
	generateResumePdf,
} = require("../services/ai.service");
const interviewReportModel = require("../model/interviewReport.model");

/**
 * @description Controller to generate the report based on user self description, resume and job description
 */
async function generateInterviewReportController(req, res) {
	if (!req.file) {
		return res.status(404).json({
			Message: "Req File is Missing!",
		});
	}
	const resumeContent = await new pdfParse.PDFParse(
		Uint8Array.from(req.file.buffer),
	).getText();

	const { selfDescription, jobDescription } = req.body;

	const interviewReportByAi = await generateinterviewReport({
		resume: resumeContent.text,
		selfDescription,
		jobDescription,
	});

	const interviewReport = await interviewReportModel.create({
		user: req.user.id,
		resume: resumeContent.text,
		selfDescription,
		jobDescription,
		...interviewReportByAi,
	});

	res.status(201).json({
		Message: "Interview Report Generated Successfully",
		interviewReport,
	});
}

/**
 * @description controller to get the generated report by interview id
 */

async function getInterviewReportByIdController(req, res) {
	const { interviewId } = req.params;

	const interviewReport = await interviewReportModel.findOne({
		_id: interviewId,
		user: req.user.id,
	});

	if (!interviewReport) {
		return res.status(404).json({
			Message: "Interview Report Not Found",
		});
	}

	res.status(200).json({
		Message: "Interview Report Fetched Successfully",
		interviewReport,
	});
}

/**
 * @description Controller to get all the interview report by logged in user
 */
async function getAllInterviewReport(req, res) {
	const interviewReports = await interviewReportModel
		.find({
			user: req.user.id,
		})
		.sort({ createdAt: -1 })
		.select(
			"-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
		);

	return res.status(200).json({
		Message: "Interview Reports Fetched Successfully",
		interviewReports,
	});
}

async function generateResumePdfController(req, res) {
	const { interviewReportId } = req.params;

	const interviewReport =
		await interviewReportModel.findById(interviewReportId);

	if (!interviewReport) {
		return res.status(404).json({
			Message: "Interview Report Not Found",
		});
	}

	const { resume, jobDescription, selfDescription } = interviewReport;

	const pdfBuffer = await generateResumePdf({
		resume,
		jobDescription,
		selfDescription,
	});

	res.set({
		"Content-Type": "application/pdf",
		"Content-Disposition": `attachment; filename = resume_${interviewReportId}.pdf`,
	});

	res.send(pdfBuffer);
}

module.exports = {
	generateInterviewReportController,
	getInterviewReportByIdController,
	getAllInterviewReport,
	generateResumePdfController,
};
